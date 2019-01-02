import booksApi from '../config/api'

export function registerUser(user) {
  booksApi.post('/users', { user })
    .then(response => {
      loginUser(response.access_token)
    })
}

export function loginUser(authToken) {
  booksApi.setHeaders({ 'Authorization': authToken })
}
