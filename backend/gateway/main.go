package main

import (
	postpb "backend/post/proto"
	userpb "backend/user/proto"
	"context"
	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"google.golang.org/grpc"
	"log"
	"net/http"
)

func main() {
	c := context.Background()
	c, cancel := context.WithCancel(c)
	defer cancel()
	mux := runtime.NewServeMux()

	err := postpb.RegisterPostServiceHandlerFromEndpoint(c, mux, "localhost:8081", []grpc.DialOption{
		grpc.WithInsecure(),
	})
	if err != nil {
		log.Fatal("can not connect post service", err)
	}

	err = userpb.RegisterUserServiceHandlerFromEndpoint(c, mux, "localhost:8082", []grpc.DialOption{
		grpc.WithInsecure(),
	})
	if err != nil {
		log.Fatal("can not connect user service", err)
	}
	log.Fatal("can not lis gateway", http.ListenAndServe(":8090", mux))
}
