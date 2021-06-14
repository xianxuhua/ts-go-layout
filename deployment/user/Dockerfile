FROM golang:1.16-alpine AS builder

RUN go env -w GO111MODULE=on
RUN go env -w GOPROXY=https://goproxy.cn,direct

COPY . /go/src/ts-go-layout/backend
WORKDIR /go/src/ts-go-layout/backend

RUN go install ./user/...

# 编译完把可执行文件放入alpine
FROM alpine:3.13
COPY --from=builder /go/bin/user /bin/user
# 设置环境变量
ENV ADDR=:8081
# 不真正暴露端口
EXPOSE 8081
# start server
ENTRYPOINT [ "/bin/user" ]
# CMD [ "executable" ] # 跟在ENTRYPOINT后额外参数
