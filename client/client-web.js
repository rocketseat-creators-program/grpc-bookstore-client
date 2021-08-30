const { AuthorsClient, BookstoreClient } = require('../proto/bookstore_grpc_web_pb')
const { Book, Author } = require('../proto/bookstore_pb')
const { Empty } = require('google-protobuf/google/protobuf/empty_pb')

const port = 8080
const bookstoreClient = new BookstoreClient(`http://localhost:${port}`)
const authorsClient = new AuthorsClient(`http://localhost:${port}`)

bookstoreClient.listBook(new Empty(), {}, (err, response) => {
  if (err) {
    console.log(err)
  } else {
    const books = response.getBooksList().map(book => book.toObject())
    const booksDiv = document.getElementById('books')
    books.forEach(book => {
      const item = document.createElement('li')
      item.innerHTML = `${book.title}`
      booksDiv.appendChild(item)
    })
  }
})

authorsClient.listAuthor(new Empty(), {}, (err, response) => {
  if (err) {
    console.log(err)
  } else {
    const authors = response.getAuthorsList().map(author => author.toObject())
    const authorDiv = document.getElementById('authors')
    authors.forEach(author => {
      const item = document.createElement('li')
      item.innerHTML = `${author.name}`
      authorDiv.appendChild(item)
    })
  }
})
