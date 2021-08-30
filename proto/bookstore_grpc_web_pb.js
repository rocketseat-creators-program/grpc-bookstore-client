/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = require('./bookstore_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.BookstoreClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.BookstorePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetBookRequest,
 *   !proto.GetBookResponse>}
 */
const methodDescriptor_Bookstore_GetBook = new grpc.web.MethodDescriptor(
  '/Bookstore/GetBook',
  grpc.web.MethodType.UNARY,
  proto.GetBookRequest,
  proto.GetBookResponse,
  /**
   * @param {!proto.GetBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetBookResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetBookRequest,
 *   !proto.GetBookResponse>}
 */
const methodInfo_Bookstore_GetBook = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetBookResponse,
  /**
   * @param {!proto.GetBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetBookResponse.deserializeBinary
);


/**
 * @param {!proto.GetBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetBookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetBookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BookstoreClient.prototype.getBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Bookstore/GetBook',
      request,
      metadata || {},
      methodDescriptor_Bookstore_GetBook,
      callback);
};


/**
 * @param {!proto.GetBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetBookResponse>}
 *     Promise that resolves to the response
 */
proto.BookstorePromiseClient.prototype.getBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Bookstore/GetBook',
      request,
      metadata || {},
      methodDescriptor_Bookstore_GetBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateBookRequest,
 *   !proto.UpdateBookResponse>}
 */
const methodDescriptor_Bookstore_UpdateBook = new grpc.web.MethodDescriptor(
  '/Bookstore/UpdateBook',
  grpc.web.MethodType.UNARY,
  proto.UpdateBookRequest,
  proto.UpdateBookResponse,
  /**
   * @param {!proto.UpdateBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateBookResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UpdateBookRequest,
 *   !proto.UpdateBookResponse>}
 */
const methodInfo_Bookstore_UpdateBook = new grpc.web.AbstractClientBase.MethodInfo(
  proto.UpdateBookResponse,
  /**
   * @param {!proto.UpdateBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateBookResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UpdateBookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdateBookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BookstoreClient.prototype.updateBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Bookstore/UpdateBook',
      request,
      metadata || {},
      methodDescriptor_Bookstore_UpdateBook,
      callback);
};


/**
 * @param {!proto.UpdateBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdateBookResponse>}
 *     Promise that resolves to the response
 */
proto.BookstorePromiseClient.prototype.updateBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Bookstore/UpdateBook',
      request,
      metadata || {},
      methodDescriptor_Bookstore_UpdateBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeleteBookRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Bookstore_DeleteBook = new grpc.web.MethodDescriptor(
  '/Bookstore/DeleteBook',
  grpc.web.MethodType.UNARY,
  proto.DeleteBookRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.DeleteBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeleteBookRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Bookstore_DeleteBook = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.DeleteBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.DeleteBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BookstoreClient.prototype.deleteBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Bookstore/DeleteBook',
      request,
      metadata || {},
      methodDescriptor_Bookstore_DeleteBook,
      callback);
};


/**
 * @param {!proto.DeleteBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.BookstorePromiseClient.prototype.deleteBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Bookstore/DeleteBook',
      request,
      metadata || {},
      methodDescriptor_Bookstore_DeleteBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.ListBookResponse>}
 */
const methodDescriptor_Bookstore_ListBook = new grpc.web.MethodDescriptor(
  '/Bookstore/ListBook',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.ListBookResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListBookResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.ListBookResponse>}
 */
const methodInfo_Bookstore_ListBook = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ListBookResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListBookResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ListBookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ListBookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BookstoreClient.prototype.listBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Bookstore/ListBook',
      request,
      metadata || {},
      methodDescriptor_Bookstore_ListBook,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ListBookResponse>}
 *     Promise that resolves to the response
 */
proto.BookstorePromiseClient.prototype.listBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Bookstore/ListBook',
      request,
      metadata || {},
      methodDescriptor_Bookstore_ListBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CreateBookRequest,
 *   !proto.CreateBookResponse>}
 */
const methodDescriptor_Bookstore_CreateBook = new grpc.web.MethodDescriptor(
  '/Bookstore/CreateBook',
  grpc.web.MethodType.UNARY,
  proto.CreateBookRequest,
  proto.CreateBookResponse,
  /**
   * @param {!proto.CreateBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateBookResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CreateBookRequest,
 *   !proto.CreateBookResponse>}
 */
const methodInfo_Bookstore_CreateBook = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CreateBookResponse,
  /**
   * @param {!proto.CreateBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateBookResponse.deserializeBinary
);


/**
 * @param {!proto.CreateBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CreateBookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreateBookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BookstoreClient.prototype.createBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Bookstore/CreateBook',
      request,
      metadata || {},
      methodDescriptor_Bookstore_CreateBook,
      callback);
};


/**
 * @param {!proto.CreateBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreateBookResponse>}
 *     Promise that resolves to the response
 */
proto.BookstorePromiseClient.prototype.createBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Bookstore/CreateBook',
      request,
      metadata || {},
      methodDescriptor_Bookstore_CreateBook);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.AuthorsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.AuthorsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetAuthorRequest,
 *   !proto.GetAuthorResponse>}
 */
const methodDescriptor_Authors_GetAuthor = new grpc.web.MethodDescriptor(
  '/Authors/GetAuthor',
  grpc.web.MethodType.UNARY,
  proto.GetAuthorRequest,
  proto.GetAuthorResponse,
  /**
   * @param {!proto.GetAuthorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAuthorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetAuthorRequest,
 *   !proto.GetAuthorResponse>}
 */
const methodInfo_Authors_GetAuthor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetAuthorResponse,
  /**
   * @param {!proto.GetAuthorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAuthorResponse.deserializeBinary
);


/**
 * @param {!proto.GetAuthorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetAuthorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetAuthorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AuthorsClient.prototype.getAuthor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Authors/GetAuthor',
      request,
      metadata || {},
      methodDescriptor_Authors_GetAuthor,
      callback);
};


/**
 * @param {!proto.GetAuthorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetAuthorResponse>}
 *     Promise that resolves to the response
 */
proto.AuthorsPromiseClient.prototype.getAuthor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Authors/GetAuthor',
      request,
      metadata || {},
      methodDescriptor_Authors_GetAuthor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateAuthorRequest,
 *   !proto.UpdateAuthorResponse>}
 */
const methodDescriptor_Authors_UpdateAuthor = new grpc.web.MethodDescriptor(
  '/Authors/UpdateAuthor',
  grpc.web.MethodType.UNARY,
  proto.UpdateAuthorRequest,
  proto.UpdateAuthorResponse,
  /**
   * @param {!proto.UpdateAuthorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateAuthorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UpdateAuthorRequest,
 *   !proto.UpdateAuthorResponse>}
 */
const methodInfo_Authors_UpdateAuthor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.UpdateAuthorResponse,
  /**
   * @param {!proto.UpdateAuthorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateAuthorResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateAuthorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UpdateAuthorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdateAuthorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AuthorsClient.prototype.updateAuthor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Authors/UpdateAuthor',
      request,
      metadata || {},
      methodDescriptor_Authors_UpdateAuthor,
      callback);
};


/**
 * @param {!proto.UpdateAuthorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdateAuthorResponse>}
 *     Promise that resolves to the response
 */
proto.AuthorsPromiseClient.prototype.updateAuthor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Authors/UpdateAuthor',
      request,
      metadata || {},
      methodDescriptor_Authors_UpdateAuthor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeleteAuthorRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Authors_DeleteAuthor = new grpc.web.MethodDescriptor(
  '/Authors/DeleteAuthor',
  grpc.web.MethodType.UNARY,
  proto.DeleteAuthorRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.DeleteAuthorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeleteAuthorRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Authors_DeleteAuthor = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.DeleteAuthorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.DeleteAuthorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AuthorsClient.prototype.deleteAuthor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Authors/DeleteAuthor',
      request,
      metadata || {},
      methodDescriptor_Authors_DeleteAuthor,
      callback);
};


/**
 * @param {!proto.DeleteAuthorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.AuthorsPromiseClient.prototype.deleteAuthor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Authors/DeleteAuthor',
      request,
      metadata || {},
      methodDescriptor_Authors_DeleteAuthor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.ListAuthorResponse>}
 */
const methodDescriptor_Authors_ListAuthor = new grpc.web.MethodDescriptor(
  '/Authors/ListAuthor',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.ListAuthorResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListAuthorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.ListAuthorResponse>}
 */
const methodInfo_Authors_ListAuthor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ListAuthorResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListAuthorResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ListAuthorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ListAuthorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AuthorsClient.prototype.listAuthor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Authors/ListAuthor',
      request,
      metadata || {},
      methodDescriptor_Authors_ListAuthor,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ListAuthorResponse>}
 *     Promise that resolves to the response
 */
proto.AuthorsPromiseClient.prototype.listAuthor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Authors/ListAuthor',
      request,
      metadata || {},
      methodDescriptor_Authors_ListAuthor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CreateAuthorRequest,
 *   !proto.CreateAuthorResponse>}
 */
const methodDescriptor_Authors_CreateAuthor = new grpc.web.MethodDescriptor(
  '/Authors/CreateAuthor',
  grpc.web.MethodType.UNARY,
  proto.CreateAuthorRequest,
  proto.CreateAuthorResponse,
  /**
   * @param {!proto.CreateAuthorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateAuthorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CreateAuthorRequest,
 *   !proto.CreateAuthorResponse>}
 */
const methodInfo_Authors_CreateAuthor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CreateAuthorResponse,
  /**
   * @param {!proto.CreateAuthorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateAuthorResponse.deserializeBinary
);


/**
 * @param {!proto.CreateAuthorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CreateAuthorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreateAuthorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AuthorsClient.prototype.createAuthor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Authors/CreateAuthor',
      request,
      metadata || {},
      methodDescriptor_Authors_CreateAuthor,
      callback);
};


/**
 * @param {!proto.CreateAuthorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreateAuthorResponse>}
 *     Promise that resolves to the response
 */
proto.AuthorsPromiseClient.prototype.createAuthor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Authors/CreateAuthor',
      request,
      metadata || {},
      methodDescriptor_Authors_CreateAuthor);
};


module.exports = proto;

