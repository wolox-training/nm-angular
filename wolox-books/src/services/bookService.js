import booksApi from '@/config/api'

export function getListOfBooks() {
  return booksApi.get('/books')
}

export function getBookDetails(bookId) {
  return booksApi.get(`/books/${bookId}`)
}
