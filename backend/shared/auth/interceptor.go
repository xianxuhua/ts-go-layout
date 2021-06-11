package auth

import (
	"backend/shared/auth/tkn"
	"context"
	"github.com/dgrijalva/jwt-go"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
	"os"
	"strings"
)

type interceptor struct {
	tokenVerifier
	needInterceptorList []string
}

type tokenVerifier interface {
	Verify(token string) (int32, error)
}

func NewInterceptor(publicKeyFile string, needInterceptorList []string) (grpc.UnaryServerInterceptor, error) {
	data, err := os.ReadFile(publicKeyFile)
	if err != nil {
		return nil, err
	}
	k, err := jwt.ParseRSAPublicKeyFromPEM(data)
	if err != nil {
		return nil, err
	}

	i := interceptor{
		tokenVerifier: &tkn.JWTTokenVerifier{
			PublicKey: k,
		},
		needInterceptorList: needInterceptorList,
	}

	return i.HandleRequest, nil
}

type userIDKey struct{}
// 请求拦截
func (i *interceptor) HandleRequest(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (resp interface{}, err error) {
	for _, v := range i.needInterceptorList {
		if strings.Contains(info.FullMethod, v) {
			token, err := tokenFromContext(ctx)
			if err != nil {
				return nil, status.Error(codes.Unauthenticated, "")
			}
			userID, err := i.tokenVerifier.Verify(token)
			if err != nil {
				return nil, status.Error(codes.Unauthenticated, "")
			}
			return handler(context.WithValue(ctx, userIDKey{}, userID), req)
		}
	}

	return handler(ctx, req)
}

// 从context获取token
func tokenFromContext(c context.Context) (string, error) {
	m, ok := metadata.FromIncomingContext(c)
	if !ok {
		return "", status.Error(codes.Unauthenticated, "")
	}

	token := ""
	for _, v := range m["authorization"] {
		if strings.HasPrefix(v, "Bearer ") {
			token = v[len("Bearer "):]
		}
	}
	if token == "" {
		return "", status.Error(codes.Unauthenticated, "")
	}

	return token, nil
}

func UserIDFromContext(c context.Context) (int32, error) {
	userID, ok := c.Value(userIDKey{}).(int32)
	if !ok {
		return 0, status.Error(codes.Unauthenticated, "")
	}
	return userID, nil
}

