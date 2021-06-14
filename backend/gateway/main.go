package main

import (
	postpb "backend/post/proto"
	userpb "backend/user/proto"
	"context"
	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"github.com/namsral/flag"
	"google.golang.org/grpc"
	"log"
	"net/http"
)

var addr = flag.String("addr", ":8090", "gateway address")
var postAddr = flag.String("post_addr", "localhost:8081", "post service address")
var userAddr = flag.String("user_addr", "localhost:8082", "user service address")

func main() {
	flag.Parse()
	c := context.Background()
	c, cancel := context.WithCancel(c)
	defer cancel()
	mux := runtime.NewServeMux()

	err := postpb.RegisterPostServiceHandlerFromEndpoint(c, mux, *postAddr, []grpc.DialOption{
		grpc.WithInsecure(),
	})
	if err != nil {
		log.Fatal("can not connect post service", err)
	}

	err = userpb.RegisterUserServiceHandlerFromEndpoint(c, mux, *userAddr, []grpc.DialOption{
		grpc.WithInsecure(),
	})
	if err != nil {
		log.Fatal("can not connect user service", err)
	}
	log.Println("server started at", *addr)
	log.Fatal("can not lis gateway", http.ListenAndServe(*addr, mux))
}
