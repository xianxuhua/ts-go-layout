package model

import "gorm.io/gorm"

type Post struct {
	gorm.Model
	UserID int32
	Title string
	Content string
}
