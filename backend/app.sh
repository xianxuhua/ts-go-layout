NAME=$1
mkdir $NAME
cd $NAME
mkdir proto
cd proto
echo "syntax = 'proto3';\n\npackage $NAME;\noption go_package = './;${NAME}pb';" >> $NAME.proto
echo "type: google.api.Service\nconfig_version: 3" >> $NAME.yaml
cd ..
mkdir model
cd model
echo package model >> $NAME.go
cd ..
mkdir service
cd service
echo package service >> $NAME.go
cd ..
echo "package main\n\nfunc main() {

}" >> main.go