// package: movie
// file: movie.proto

import * as jspb from "google-protobuf";

export class Movie extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getRating(): string;
  setRating(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Movie.AsObject;
  static toObject(includeInstance: boolean, msg: Movie): Movie.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Movie, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Movie;
  static deserializeBinaryFromReader(message: Movie, reader: jspb.BinaryReader): Movie;
}

export namespace Movie {
  export type AsObject = {
    id: number,
    name: string,
    rating: string,
  }
}

export class Search extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Search.AsObject;
  static toObject(includeInstance: boolean, msg: Search): Search.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Search, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Search;
  static deserializeBinaryFromReader(message: Search, reader: jspb.BinaryReader): Search;
}

export namespace Search {
  export type AsObject = {
    id: number,
  }
}

