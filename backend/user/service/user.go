package service

import (
	"backend/user/model"
	userpb "backend/user/proto"
	"context"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"gorm.io/gorm"
	"log"
	"time"
)

type Service struct{
	DB *gorm.DB
	userpb.UnimplementedUserServiceServer
	PasswordEncoder
	TokenGenerator
	TokenExpire time.Duration
}

type PasswordEncoder interface {
	EncodePassword(rawPassword string) string
	Verify(rawPassword string, encodedPassword string) bool
}

type TokenGenerator interface {
	GenToken(userID int, expire time.Duration) (string, error)
}

func (s *Service) CreateUser(ctx context.Context, request *userpb.CreateUserRequest) (*userpb.CreateUserResponse, error) {
	res := s.DB.Where(&model.User{
		Name: request.Name,
	}).Find(&model.User{})
	if res.RowsAffected != 0 {
		return nil, status.Error(codes.InvalidArgument, "name has been registered")
	}

	user := model.User{
		Name: request.Name,
		Password: s.PasswordEncoder.EncodePassword(request.Password),
	}

	res = s.DB.Create(&user)
	if res.Error != nil {
		log.Println("can not create user", res.Error)
		return nil, status.Error(codes.Internal, "")
	}

	return &userpb.CreateUserResponse{
		Id:   int32(user.ID),
		Name: user.Name,
	}, nil
}

func (s *Service) Login(ctx context.Context, request *userpb.LoginRequest) (*userpb.LoginResponse, error) {
	var user model.User
	res := s.DB.Where(&model.User{
		Name:     request.Name,
	}).Find(&user)

	if res.RowsAffected == 0 {
		return nil, status.Error(codes.NotFound, "")
	}
	if !s.PasswordEncoder.Verify(request.Password, user.Password) {
		return nil, status.Error(codes.InvalidArgument, "")
	}
	if res.Error != nil {
		log.Println("can not get user", res.Error)
		return nil, status.Error(codes.Internal, "")
	}

	token, err := s.TokenGenerator.GenToken(int(user.ID), s.TokenExpire)
	if err != nil {
		log.Println("can not gen token", err)
		return nil, status.Error(codes.Internal, "")
	}
	return &userpb.LoginResponse{
		Token: token,
	}, nil
}

func (s *Service) GetUser(ctx context.Context, request *userpb.GetUserRequest) (*userpb.GetUserResponse, error) {
	var user model.User
	res := s.DB.Find(&user, request.Id)
	if res.Error != nil {
		log.Println("can not get user", res.Error)
		return nil, status.Error(codes.Internal, "")
	}

	if res.RowsAffected == 0 {
		return nil, status.Error(codes.NotFound, "")
	}

	return &userpb.GetUserResponse{
		Id:   int32(user.ID),
		Name: user.Name,
	}, nil
}