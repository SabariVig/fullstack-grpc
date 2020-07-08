package movie

import (
	"golang.org/x/net/context"
	"log"
)

type Server struct {
}

func (s *Server) GetMovie(ctx context.Context, search *Search) (*Movie, error) {
	log.Print("recived message", search.Id)
	return &Movie{Name: "American", Id: search.Id, Rating: "5.0"}, nil
}
