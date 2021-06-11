function genProto() {
  DOMAIN=$1
  BACKEND_NAME=backend
  FRONTEND_NAME=frontend
  PROTO_PATH=./${BACKEND_NAME}/${DOMAIN}/proto
  GO_OUT_PATH=./${BACKEND_NAME}/${DOMAIN}/proto
  PBTS_BIN_DIR=./${FRONTEND_NAME}/node_modules/.bin
  PBTS_OUT_DIR=./${FRONTEND_NAME}/proto

  $PBTS_BIN_DIR/pbjs -t static -w es6 $PROTO_PATH/${DOMAIN}.proto --no-create --no-encode --no-decode --no-verify --no-delimited --force-number -o $PBTS_OUT_DIR/${DOMAIN}_pb_tmp.js
  echo 'import * as $protobuf from "protobufjs";\n' > $PBTS_OUT_DIR/${DOMAIN}_pb.js
  cat $PBTS_OUT_DIR/${DOMAIN}_pb_tmp.js >> $PBTS_OUT_DIR/${DOMAIN}_pb.js
  rm $PBTS_OUT_DIR/${DOMAIN}_pb_tmp.js
  $PBTS_BIN_DIR/pbts -o $PBTS_OUT_DIR/${DOMAIN}_pb.d.ts $PBTS_OUT_DIR/${DOMAIN}_pb.js

  protoc -I=$PROTO_PATH --go_out $GO_OUT_PATH --go_opt paths=source_relative --go-grpc_out $GO_OUT_PATH --go-grpc_opt=paths=source_relative ${DOMAIN}.proto
  protoc -I=$PROTO_PATH --grpc-gateway_out $GO_OUT_PATH --grpc-gateway_opt paths=source_relative --grpc-gateway_opt grpc_api_configuration=$PROTO_PATH/${DOMAIN}.yaml ${DOMAIN}.proto
}

genProto post
genProto user
