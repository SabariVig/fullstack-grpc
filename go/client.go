package main

import (
	"log"
	"net"

	movie "github.com/sabarivig/grpx/movies"
	"google.golang.org/grpc"
)

func cgrpc() {
	lis, err := net.Listen("tcp", ":9090")
	if err != nil {
		log.Fatal("Failed to listen", err)
	}
	grpcServer := grpc.NewServer()
	s := movie.Server{}

	movie.RegisterMovieServiceServer(grpcServer, &s)

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatal("Failed To Serve")
	}

}

func main() {
	cgrpc()
}
