import { getValue } from '@/services/LocalStorageService'

const axios = require('axios')

const url = 'https://wbooks-api-stage.herokuapp.com/api/v1'

const auth = getValue('token')
let headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

if (auth) headers = { 'Authorization': `Bearer ${auth}` }

export default axios.create({
  baseURL: url,
  headers: headers
})
