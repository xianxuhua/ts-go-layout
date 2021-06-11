package token

import (
	"crypto/rsa"
	"github.com/dgrijalva/jwt-go"
	"strconv"
	"time"
)

type JWTTokenGenerator struct {
	Issuer     string
	nowFunc    func() time.Time
	PrivateKey *rsa.PrivateKey
}

func NewJWTToken(issuer string, privateKey *rsa.PrivateKey) *JWTTokenGenerator {
	return &JWTTokenGenerator{
		Issuer:     issuer,
		nowFunc:    time.Now,
		PrivateKey: privateKey,
	}
}

func (j *JWTTokenGenerator) GenToken(userID int, expire time.Duration) (string, error) {
	now := j.nowFunc().Unix()
	token := jwt.NewWithClaims(jwt.SigningMethodRS512, jwt.StandardClaims{
		Issuer:    j.Issuer,
		IssuedAt:  now,
		ExpiresAt: now + int64(expire.Seconds()),
		Subject:   strconv.Itoa(userID),
	})
	return token.SignedString(j.PrivateKey)
}
