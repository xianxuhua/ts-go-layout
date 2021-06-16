DOMAIN=$1
# 确保在backend目录下运行
# 新建 builder: docker buildx create --use --name m1_builder
# 启动 builder: docker buildx inspect --bootstrap
docker buildx build --platform linux/amd64 -t $DOMAIN -o type=docker -f ../deployment/$DOMAIN/Dockerfile .