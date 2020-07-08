gengo:
		protoc -I . movie.proto --go_out=plugins=grpc:.
genpy:
	  python -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. *.proto

genrest:
	protoc -I . movie.proto --go_out=plugins=grpc:. --grpc-gateway_out=:.

genswagger:
	protoc -I. movie.proto --swagger_out=logtostderr=true:.
