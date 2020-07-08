# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import movie_pb2 as movie__pb2


class MovieServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetMovie = channel.unary_unary(
                '/movie.MovieService/GetMovie',
                request_serializer=movie__pb2.Search.SerializeToString,
                response_deserializer=movie__pb2.Movie.FromString,
                )


class MovieServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def GetMovie(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_MovieServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetMovie': grpc.unary_unary_rpc_method_handler(
                    servicer.GetMovie,
                    request_deserializer=movie__pb2.Search.FromString,
                    response_serializer=movie__pb2.Movie.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'movie.MovieService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class MovieService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def GetMovie(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/movie.MovieService/GetMovie',
            movie__pb2.Search.SerializeToString,
            movie__pb2.Movie.FromString,
            options, channel_credentials,
            call_credentials, compression, wait_for_ready, timeout, metadata)
