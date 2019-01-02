import booksApi from '../config/api'

export function registerUser(user) {
  return booksApi.post('/users', { user })
}

export function saveUser(authToken) {
  booksApi.setHeaders({ 'Authorization': authToken })
}

export function loginUser(user) {
  return booksApi.post('/users/sessions', { 'session': user })
    .then(response => {
      console.log(response.data.access_token)
    })
}
