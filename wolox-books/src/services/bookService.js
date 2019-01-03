import booksApi from '../config/api'
import { setUserAuth } from './UserServices'

export function getListOfBooks() {
  setUserAuth()
  return booksApi.get('/books')
}
