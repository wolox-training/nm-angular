import booksApi from '@/config/api'
import * as localStorageService from './LocalStorageService'
import router from '@/router'
import { routes } from '@/constants'

export function registerUser(user) {
  return booksApi.post('/users', { user })
}

export function saveUser(authToken) {
  localStorageService.setValue('token', authToken)
  booksApi.defaults.headers.common['Authorization'] = authToken
}

export function loginUser(user) {
  return booksApi.post('/users/sessions', { 'session': user })
    .then(response => {
      saveUser(response.data.access_token)
      router.push(routes.dashboard)
    })
}

export function logoutUser() {
  localStorageService.removeValue('token')
}
