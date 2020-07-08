package main

import (
	"context"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	movie "github.com/sabarivig/grpx/movies"

	"flag"
	"google.golang.org/grpc"
	"log"
	"net"
	"net/http"
)

func cgrpc() {
	lis, err := net.Listen("tcp", ":7899")
	grpcServer := grpc.NewServer()
	if err != nil {
		log.Fatal("Failed to listen", err)
	}

	s := movie.Server{}

	movie.RegisterMovieServiceServer(grpcServer, &s)
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatal("Failed To Serve")
	}

}

var (
	grpcServerEndpoint = flag.String("grpc-server-endpoint", "localhost:7899", "gRPC server endpoint")
)

func rest() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	mux := runtime.NewServeMux()
	opts := []grpc.DialOption{grpc.WithInsecure()}
	err := movie.RegisterMovieServiceHandlerFromEndpoint(ctx, mux, *grpcServerEndpoint, opts)

	if err != nil {
		log.Fatal(err)
	}
	http.ListenAndServe(":8888", mux)

	//s := movie.Server{}
	////ercc := movie.RegisterMovieServiceHandlerFromEndpoint(
	//ctx,
	//mux,
	//newMovie(),
	//[]grpc.DialOption{grpc.WithInsecure()},
	//)

	//if err != nil {
	//log.Fatal(err)
	//}

	//s, err := net.Listen("tcp", "0.0.0.0:8532")
	//if err != nil {
	//log.Fatal("Failed To Listen on port")
	//}

	//if err := http.Serve(s, mux); err != nil {
	//log.Fatal("Failed to start HTTP", err)
	//}
}

func main() {
	cgrpc()
	go rest()
}
