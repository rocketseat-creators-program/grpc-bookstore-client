//client.js
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const path = require('path')

const protoObject = protoLoader.loadSync(path.resolve(__dirname, '../proto/bookstore.proto'))
const protoDefinition = grpc.loadPackageDefinition(protoObject)

const bookstoreClient = new protoDefinition.Bookstore('localhost:50051', grpc.credentials.createInsecure())
const authorClient = new protoDefinition.Authors('localhost:50051', grpc.credentials.createInsecure())

bookstoreClient.ListBook({}, (err, books) => {
  if (err) throw err
  console.log(books)
})

authorClient.ListAuthor({}, (err, authors) => {
  if (err) throw err
  console.log(authors)
})
