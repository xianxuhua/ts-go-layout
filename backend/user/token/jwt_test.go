package token

import (
	"github.com/dgrijalva/jwt-go"
	"testing"
	"time"
)


const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQCC6bhg+67PTLfpwz8bxZ+GsLVKShGtFsIPTA9F3BnMhlaPtlXW
ZBBdABxdrlvXQf85peol7z+bQw36II2cUiDkSDWnyeaT6iXjC9xaWARPSkSn+Jg3
USLmXB3whzRO7zGEyy3fk1aMBPfpnoxSMuS4W+l/3eZ+oj0iQPfugaEd5wIDAQAB
AoGAL+m+k7BJ0JExlprhFBcGRdOS5nepdIIp0FN0G4ts3dAlCkAftnG1E3Sg7SCN
eIEtGjpBMlUYIIkwKmWTrqzYYGxR1W1bgF9vJ6DInAMDlpkPNA6aDYRuTDVX1BUz
bVaOsGbbrh0L4XgbwSXJq+86I8kY1dw2qf7IxyvFVUbfLGECQQDb6MxX7EVfJkTo
sN1hHmh41TpnDTeUqcxJ/FAqVOuXoAzvjH+lep7FC3W8e6CUTxkbTrExVt948Usx
Ddg2QGVpAkEAmGXbF0p8BVYUAmxDnMJShaN1BTF5Nb2NCwXXIAVgt3l8lIbU3/wB
BBmFhQKby2Ny3HyB50cWJgsewb2iTJxuzwJAVNVvzxNEh7o5pxJjtI2Ie+S2DP8a
S+1c88W0H0B3ShziIJ8wtuOg0B7lonqGre/9nX0z+faravqaqSfQGs2o0QJAD2rO
fU61uTx6DbyyIluuSYK9xea5YmxopmLS3pRssmMB7WyugHJYD/gc/9XBuRO4fQHD
iogwf2zEkckDcEirFQJACMWA4giMMq3+zQAwxgKF8BwBrjKW4JAmoZFkSQv/qbGf
st27Ek1N5uKu9JL66VetL6ktDxtfvYDaNeKuFQ4d3w==
-----END RSA PRIVATE KEY-----`

func TestGenToken(t *testing.T) {
	k, err := jwt.ParseRSAPrivateKeyFromPEM([]byte(privateKey))
	if err != nil {
		t.Fatal(err)
	}
	j := NewJWTToken("coolcar", k)
	j.nowFunc = func() time.Time {
		return time.Unix(1516239022, 0)
	}
	token, err := j.GenToken(1, 2*time.Hour)
	if err != nil {
		t.Fatal(err)
	}
	want := "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTYyNDYyMjIsImlhdCI6MTUxNjIzOTAyMiwiaXNzIjoiY29vbGNhciIsInN1YiI6IjEifQ.H1SL-Pfhl0JY1B5PRKcGAxjHWX6zPRbj9ZwuOtj_j0JXBFTQQgZz8onFv4tE8in_ra6lnodpygrC_8bCHZXcshkfOSl0KyMrRquH6w8LunzhUk2sUSSjdFFFUBBh8LMX1EjwpJ0aeU2du5XQKfUyaANA-PncfCLgiKVqdLK1zhY"
	if token != want {
		t.Fatalf("want: %q, get: %q\n", want, token)
	}
}
