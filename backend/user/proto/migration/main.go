package main

import (
	"demo/user/model"
	_ "github.com/go-sql-driver/mysql"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func main() {
	db, err := gorm.Open(mysql.Open("root:1160576878@tcp(127.0.0.1:3306)/demo?charset=utf8&parseTime=True&loc=Local"))
	if err != nil {
		panic(err)
	}
	_ = db.AutoMigrate(&model.User{})
}
