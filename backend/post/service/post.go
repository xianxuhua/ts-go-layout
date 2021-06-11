package service

import (
	"backend/post/model"
	postpb "backend/post/proto"
	"backend/shared/auth"
	userpb "backend/user/proto"
	"context"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"gorm.io/gorm"
	"log"
)

type Service struct{
	DB *gorm.DB
	postpb.UnimplementedPostServiceServer
	UserClient userpb.UserServiceClient
}

func (s *Service) GetPostList(ctx context.Context, request *postpb.GetPostListRequest) (*postpb.GetPostListResponse, error) {
	var posts []model.Post
	res := s.DB.Find(&posts)
	if res.Error != nil {
		log.Println("can not get post list", res.Error)
		return nil, status.Error(codes.Internal, "")
	}

	listResponse := postpb.GetPostListResponse{Total: int32(res.RowsAffected)}
	for _, post := range posts {
		listResponse.Data = append(listResponse.Data, &postpb.GetPostListItem{
			Id:      int32(post.ID),
			Title:   post.Title,
			Content: post.Content,
		})
	}
	return &listResponse, nil
}

func (s *Service) GetPostDetail(ctx context.Context, request *postpb.GetPostDetailRequest) (*postpb.GetPostDetailResponse, error) {
	var post model.Post
	res := s.DB.Find(&post, request.Id)
	if res.RowsAffected == 0 {
		return nil, status.Error(codes.NotFound, "")
	}
	if res.Error != nil {
		log.Println("can not get post", res.Error)
		return nil, status.Error(codes.Internal, "")
	}

	getUserResponse, err := s.UserClient.GetUser(ctx, &userpb.GetUserRequest{
		Id: post.UserID,
	})
	if err != nil {
		log.Println("can not get post user", err)
		return nil, status.Error(codes.Internal, "")
	}

	return &postpb.GetPostDetailResponse{
		Id: int32(post.ID),
		Title: post.Title,
		Content: post.Content,
		User: &postpb.GetUserResponse{
			Id:   post.UserID,
			Name: getUserResponse.Name,
		},
	}, nil
}

func (s *Service) CreatePost(ctx context.Context, request *postpb.CreatePostRequest) (*postpb.CreatePostResponse, error) {
	userID, err := auth.UserIDFromContext(ctx)
	if err != nil {
		return nil, err
	}

	post := model.Post{
		UserID: userID,
		Title:   request.Title,
		Content: request.Content,
	}
	res := s.DB.Create(&post)
	if res.Error != nil {
		log.Println("can not create post", res.Error)
		return nil, status.Error(codes.Internal, "")
	}

	return &postpb.CreatePostResponse{
		Id: int32(post.ID),
		Title: request.Title,
		Content: request.Content,
	}, nil
}

