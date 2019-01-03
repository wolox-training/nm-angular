import booksApi from '../config/api'

export function getListOfBooks() {
  return booksApi.get('/books')
}
