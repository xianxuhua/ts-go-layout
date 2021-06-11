package tkn

import (
	"crypto/rsa"
	"fmt"
	"strconv"

	"github.com/dgrijalva/jwt-go"
)

type JWTTokenVerifier struct {
	PublicKey *rsa.PublicKey
}

func (v *JWTTokenVerifier) Verify(token string) (int32, error) {
	t, err := jwt.ParseWithClaims(token, &jwt.StandardClaims{}, func(t *jwt.Token) (interface{}, error) {
		return v.PublicKey, nil
	})
	if err != nil {
		return 0, fmt.Errorf("can not parse token: %v", err)
	}
	if !t.Valid {
		return 0, fmt.Errorf("invalid token")
	}

	c, ok := t.Claims.(*jwt.StandardClaims)
	if !ok {
		return 0, fmt.Errorf("is not jwt")
	}

	if err := c.Valid(); err != nil {
		return 0, fmt.Errorf("claim is not vaild: %v", err)
	}

	userID, err := strconv.Atoi(c.Subject)
	if err != nil {
		return 0, fmt.Errorf("can not tranfer subject to user id")
	}
	return int32(userID), nil
}
