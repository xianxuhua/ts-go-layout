配置服务器。export KUBECONFIG=~/projects/go/ts-go-layout/cls-3r0kjfdf-config
创建pod。kubectl apply -f deployment/gateway/gateway.yaml
获取pod信息。kubectl get pods
查看端口：kubectl get svc
端口映射：kubectl port-forward pods/gateway-7ff57569b-fp87k 8090:8090 -n default
