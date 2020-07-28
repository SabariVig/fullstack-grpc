import { useEffect, useState } from "react";

import { grpc } from "@improbable-eng/grpc-web";
import { MovieService } from "../generated/movie_pb_service";
import { Search } from "../generated/movie_pb";

export const useFetch = (updater) => {
  const call = new Search();
  call.setId(updater);
  const [grpcRes, setGrpcRes] = useState({});
  useEffect(() => {
    grpc.unary(MovieService.GetMovie, {
      request: call,
      host: "http://localhost:8080",
      //    debug: true,
      onEnd: (res) => {
        const { message, status, statusMessage, headers, trailers } = res;
        console.log(
          message,
          "\ntrailers=",
          trailers,
          "\nstatus=",
          status.toString(),
          statusMessage,
          "\nheaders=",
          headers
        );
        if (message) setGrpcRes(message.toObject());
      },
    });
    return () => {};
  }, [updater]);
  return grpcRes;
};
