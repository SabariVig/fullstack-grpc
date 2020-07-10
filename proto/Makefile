gengo:
	protoc -I . movie.proto --go_out=plugins=grpc:.
genpy:
	python -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. *.proto
genjs:
	protoc  --plugin="protoc-gen-ts=$PROTOC_GEN_TS_PATH"  --js_out="import_style=commonjs,binary:$OUT_DIR" --ts_out="service=grpc-web:$OUT_DIR"  movie.proto
#https://www.npmjs.com/package/ts-protoc-gen
genrest:
	protoc -I . movie.proto --go_out=plugins=grpc:. --grpc-gateway_out=:.
genswagger:
	protoc -I. movie.proto --swagger_out=logtostderr=true:.
