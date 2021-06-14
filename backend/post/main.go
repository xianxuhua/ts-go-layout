package main

import (
	postpb "backend/post/proto"
	"backend/post/service"
	"backend/shared/auth"
	userpb "backend/user/proto"
	"github.com/namsral/flag"
	"google.golang.org/grpc"
	"google.golang.org/grpc/benchmark/flags"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"net"
)

var publicKey = flag.String("public_key", "shared/auth/public.key", "public key file path")
var interceptorEnableList = flags.StringSlice("interceptor_enable_list", []string{
	"/post.PostService/CreatePost",
}, "/packageName.serviceName/method")
var mysqlDSN = flag.String("mysql_dsn", "root:123456@tcp(localhost:3306)/demo?charset=utf8&parseTime=true", "go mysql address")
var addr = flag.String("addr", ":8081", "address")

func main() {
	flag.Parse()
	interceptor, err := auth.NewInterceptor(*publicKey, *interceptorEnableList)
	if err != nil {
		log.Println("can not read public key file", err)
	}
	server := grpc.NewServer(grpc.UnaryInterceptor(interceptor))

	db, err := gorm.Open(mysql.Open(*mysqlDSN))
	if err != nil {
		log.Fatal("can not connect mysql")
	}

	userConn, err := grpc.Dial("localhost:8082", grpc.WithInsecure())
	postpb.RegisterPostServiceServer(server, &service.Service{
		DB: db,
		UserClient: userpb.NewUserServiceClient(userConn),
	})

	lis, err := net.Listen("tcp", *addr)
	if err != nil {
		log.Fatal("can not lis post service")
	}
	err = server.Serve(lis)
	if err != nil {
		log.Fatal("can not start post service")
	}
}