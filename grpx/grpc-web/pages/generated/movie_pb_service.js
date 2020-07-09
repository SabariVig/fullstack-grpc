// package: movie
// file: movie.proto

var movie_pb = require("./movie_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MovieService = (function () {
  function MovieService() {}
  MovieService.serviceName = "movie.MovieService";
  return MovieService;
}());

MovieService.GetMovie = {
  methodName: "GetMovie",
  service: MovieService,
  requestStream: false,
  responseStream: false,
  requestType: movie_pb.Search,
  responseType: movie_pb.Movie
};

exports.MovieService = MovieService;

function MovieServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MovieServiceClient.prototype.getMovie = function getMovie(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MovieService.GetMovie, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.MovieServiceClient = MovieServiceClient;

