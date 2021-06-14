package main

import (
	"backend/user/encoder"
	userpb "backend/user/proto"
	"backend/user/service"
	"backend/user/token"
	"github.com/dgrijalva/jwt-go"
	"github.com/namsral/flag"
	"google.golang.org/grpc"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"net"
	"os"
	"time"
)

var mysqlDSN = flag.String("mysql_dsn", "root:123456@tcp(localhost:3306)/demo?charset=utf8&parseTime=true", "go mysql address")
var tokenIssuer = flag.String("token_issuer", "xxh", "jwt token issuer")
var addr = flag.String("addr", ":8082", "address")
var tokenExpire = flag.Duration("token_expire", 2*time.Hour, "jwt token expire time")
var privateKey = flag.String("private_key", "user/private.key", "private key path")
var passwordSaltLen = flag.Int("password_salt_len", 256, "password salt length")
var passwordIterations = flag.Int("password_iterations", 100, "password iteration times")
var passwordKeyLen = flag.Int("password_key_len", 512, "password key length")

func main() {
	flag.Parse()
	server := grpc.NewServer()

	db, err := gorm.Open(mysql.Open(*mysqlDSN))
	if err != nil {
		log.Fatal("can not connect mysql")
	}

	data, err := os.ReadFile(*privateKey)
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
			SaltLen:    *passwordSaltLen,
			Iterations: *passwordIterations,
			KeyLen:     *passwordKeyLen,
		},
		TokenGenerator: token.NewJWTToken(*tokenIssuer, privateKey),
		TokenExpire: *tokenExpire,
	})
	lis, err := net.Listen("tcp", *addr)
	if err != nil {
		log.Fatal("can not lis user service")
	}
	err = server.Serve(lis)
	if err != nil {
		log.Fatal("can not start user service")
	}
}