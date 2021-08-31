const { AuthorsClient, BookstoreClient } = require('../proto/bookstore_grpc_web_pb')
const { GetBookRequest } = require('../proto/bookstore_pb')
const { Empty } = require('google-protobuf/google/protobuf/empty_pb')

const port = 8080
const bookstoreClient = new BookstoreClient(`http://localhost:${port}`)
const authorsClient = new AuthorsClient(`http://localhost:${port}`)

bookstoreClient.listBook(new Empty(), {}, (err, response) => {
  if (err) {
    console.log(err)
  } else {
    const books = response.getBooksList().map(book => book.toObject())
    const list = document.createElement('ul')
    document.getElementById('books').appendChild(list)
    books.forEach(book => {
      const item = document.createElement('li')
      item.innerHTML = `<a href="#" onclick="loadBook('${book.id}')" type="button">${book.title}</a>`
      list.appendChild(item)
    })
  }
})

document.loadBook = (bookId) => {
  bookstoreClient.getBook(new GetBookRequest().setBookid(bookId), {}, (err, response) => {
    if (err) {
      console.log(err)
    } else {
      const book = response.getBooks().toObject()
      const results = document.querySelector('div#result>div')
      results.innerHTML = `<pre>${JSON.stringify(book, null, 2)}</pre>`
    }
  })
}

authorsClient.listAuthor(new Empty(), {}, (err, response) => {
  if (err) {
    console.log(err)
  } else {
    const authors = response.getAuthorsList().map(author => author.toObject())
    const list = document.createElement('ul')
    document.getElementById('authors').appendChild(list)
    authors.forEach(author => {
      const item = document.createElement('li')
      item.innerHTML = `${author.name}`
      list.appendChild(item)
    })
  }
})
