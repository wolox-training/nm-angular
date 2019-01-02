import booksApi from '../config/api'
import { setValue, removeValue } from '../services/localServiceStorage'
import router from '@/router'

export function registerUser(user) {
  return booksApi.post('/users', { user })
}

export function saveUser(authToken) {
  setValue('token', authToken)
}

export function loginUser(user) {
  booksApi.post('/users/sessions', { 'session': user })
    .then(response => {
      saveUser(response.data.access_token)
      router.push('/dashboard')
    })
}

export function logoutUser() {
  removeValue('token')
}
