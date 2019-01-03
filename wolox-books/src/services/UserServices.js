import booksApi from '@/config/api'
import { setValue, removeValue } from './LocalStorageService'
import router from '@/router'
import { routes } from '@/constants'

export function registerUser(user) {
  return booksApi.post('/users', { user })
}

export function saveUser(authToken) {
  setValue('token', authToken)
  setUserAuth()
}

export function loginUser(user) {
  return booksApi.post('/users/sessions', { 'session': user })
    .then(response => {
      saveUser(response.data.access_token)
      router.push(routes.dashboard)
    })
}

export function logoutUser() {
  removeValue('token')
}

export function setUserAuth () {
  const authToken = getValue('token')
  booksApi.defaults.headers.common['Authorization'] = authToken
}
