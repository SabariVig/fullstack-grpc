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

func unartInceptor(
	ctx context.Context,
	req interface{},
	info *grpc.UnaryServerInfo,
	handler grpc.UnaryHandler,
) (resp interface{}, err error) {
	log.Print("inceptor hit", info.FullMethod)
	return handler(ctx, req)

}

func cgrpc() {
	lis, err := net.Listen("tcp", ":9090")
	grpcServer := grpc.NewServer(grpc.UnaryInterceptor(unartInceptor))
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

}

func main() {
	cgrpc()
	//	go rest()
}
