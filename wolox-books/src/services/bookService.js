import booksApi from '../config/api'
import { setUserAuth } from './userServices'

export function getListOfBooks() {
  setUserAuth()
  return booksApi.get('/books')
}
