package encoder

import (
	"testing"
)

func TestMD5SaltPasswordEncoder(t *testing.T) {
	rawPassword := "123"
	p := MD5SaltPasswordEncoder{
		SaltLen:    10,
		Iterations: 10,
		KeyLen:     10,
	}
	encodedPassoword := p.EncodePassword(rawPassword)
	verify := p.Verify(rawPassword, encodedPassoword)
	if !verify {
		t.Fatal("verify error")
	}

	t.Log(verify)
	t.Log(encodedPassoword)
}