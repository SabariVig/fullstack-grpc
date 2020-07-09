package movie

import (
	"log"

	"golang.org/x/net/context"
	"google.golang.org/grpc/metadata"
)

type Server struct {
}

func (s *Server) GetMovie(ctx context.Context, search *Search) (*Movie, error) {
	md, _ := metadata.FromIncomingContext(ctx)
	log.Print("recived message", md["pass"], search.Id)
	return &Movie{Name: "American", Id: search.Id, Rating: "5.0"}, nil
}
