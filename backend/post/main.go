package main

import (
	postpb "backend/post/proto"
	"backend/post/service"
	"backend/shared/auth"
	userpb "backend/user/proto"
	"google.golang.org/grpc"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"net"
)

func main() {
	interceptor, err := auth.NewInterceptor("shared/auth/public.key", []string{
		"/post.PostService/CreatePost",
	})
	if err != nil {
		log.Println("can not read public key file", err)
	}
	server := grpc.NewServer(grpc.UnaryInterceptor(interceptor))

	db, err := gorm.Open(mysql.Open("root:123456@tcp(localhost:3306)/demo?charset=utf8&parseTime=true"))
	if err != nil {
		log.Fatal("can not connect mysql")
	}

	userConn, err := grpc.Dial("localhost:8082", grpc.WithInsecure())
	postpb.RegisterPostServiceServer(server, &service.Service{
		DB: db,
		UserClient: userpb.NewUserServiceClient(userConn),
	})

	lis, err := net.Listen("tcp", ":8081")
	if err != nil {
		log.Fatal("can not lis post service")
	}
	err = server.Serve(lis)
	if err != nil {
		log.Fatal("can not start post service")
	}
}