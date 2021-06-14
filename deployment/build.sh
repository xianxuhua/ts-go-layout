DOMAIN=$1
# 确保在backend目录下运行
docker build -t $DOMAIN -f ../deployment/$DOMAIN/Dockerfile .