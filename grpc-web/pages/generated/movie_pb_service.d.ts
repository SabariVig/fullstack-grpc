// package: movie
// file: movie.proto

import * as movie_pb from "./movie_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MovieServiceGetMovie = {
  readonly methodName: string;
  readonly service: typeof MovieService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof movie_pb.Search;
  readonly responseType: typeof movie_pb.Movie;
};

export class MovieService {
  static readonly serviceName: string;
  static readonly GetMovie: MovieServiceGetMovie;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class MovieServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getMovie(
    requestMessage: movie_pb.Search,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: movie_pb.Movie|null) => void
  ): UnaryResponse;
  getMovie(
    requestMessage: movie_pb.Search,
    callback: (error: ServiceError|null, responseMessage: movie_pb.Movie|null) => void
  ): UnaryResponse;
}

