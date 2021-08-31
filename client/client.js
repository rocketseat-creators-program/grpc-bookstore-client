//client.js
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const path = require('path')
const { exit } = require('process')

const protoObject = protoLoader.loadSync(path.resolve(__dirname, '../proto/bookstore.proto'))
const protoDefinition = grpc.loadPackageDefinition(protoObject)

const port = 8080
const bookstoreClient = new protoDefinition.Bookstore(`localhost:${port}`, grpc.credentials.createInsecure())
const authorClient = new protoDefinition.Authors(`localhost:${port}`, grpc.credentials.createInsecure())

bookstoreClient.ListBook({}, (err, { books }) => {
  if (err) console.error(err)
  console.table(books)
})

bookstoreClient.GetBook({ bookId: '936c291012dde742dcf76671e22d324a400d7dac49e93d99b6122853138b291d' }, (err, { books: book }) => {
  if (err) console.error(err)
  if (!book) {
    console.log('Book not found')
    return
  }
  console.table(book)
})

authorClient.ListAuthor({}, (err, { authors }) => {
  if (err) console.error(err)
  console.table(authors)
})
