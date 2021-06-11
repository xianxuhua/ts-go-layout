package main

import (
	"backend/user/encoder"
	userpb "backend/user/proto"
	"backend/user/service"
	"backend/user/token"
	"github.com/dgrijalva/jwt-go"
	"google.golang.org/grpc"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"net"
	"os"
	"time"
)

func main() {
	server := grpc.NewServer()

	db, err := gorm.Open(mysql.Open("root:123456@tcp(localhost:3306)/demo?charset=utf8&parseTime=true"))
	if err != nil {
		log.Fatal("can not connect mysql")
	}

	data, err := os.ReadFile("user/private.key")
	if err != nil {
		log.Fatal("can not read private key file", err)
	}
	privateKey, err := jwt.ParseRSAPrivateKeyFromPEM(data)
	if err != nil {
		log.Fatal("can not parse private key", err)
	}
	userpb.RegisterUserServiceServer(server, &service.Service{
		DB: db,
		PasswordEncoder: &encoder.MD5SaltPasswordEncoder{
			SaltLen:    10,
			Iterations: 10,
			KeyLen:     10,
		},
		TokenGenerator: token.NewJWTToken("xxh", privateKey),
		TokenExpire: 2 * time.Hour,
	})
	lis, err := net.Listen("tcp", ":8082")
	if err != nil {
		log.Fatal("can not lis user service")
	}
	err = server.Serve(lis)
	if err != nil {
		log.Fatal("can not start user service")
	}
}