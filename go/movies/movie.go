package movie

import (
	"log"

	"golang.org/x/net/context"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

type Server struct {
}

func (s *Server) GetMovie(ctx context.Context, search *Search) (*Movie, error) {
	md, _ := metadata.FromIncomingContext(ctx)
	if search.Id%2 != 0 {
		return &Movie{Id: 0, Name: "", Rating: ""}, status.Errorf(codes.AlreadyExists, "Even Number Found Already")
	}
	log.Print("recived message", md["pass"], search.Id)
	return &Movie{Name: "American", Id: search.Id, Rating: "5.0"}, nil
}
