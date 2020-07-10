import  movie_pb2
import  movie_pb2_grpc
import grpc
from concurrent import futures
from interceptors import InceptorValidator
import logging

def lol():
    print("dsdsddsds")

class Listner(movie_pb2_grpc.MovieServiceServicer):
    def GetMovie(self, request, context):
        print(request,context)
        return movie_pb2.Movie(id=request.id,name="haha",rating="4")
def serve():
    header_validator = InceptorValidator(grpc.StatusCode.UNAUTHENTICATED,"Access Denied")
    server=grpc.server(futures.ThreadPoolExecutor(max_workers=10),interceptors=(header_validator,))
    movie_pb2_grpc.add_MovieServiceServicer_to_server(Listner(),server)
    server.add_insecure_port("[::]:9090")
    server.start()
    server.wait_for_termination()
    serve.wait_for_termination
if __name__ == "__main__":
    logging.basicConfig()
    serve()

