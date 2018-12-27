const axios = require('axios')

const url = 'https://wbooks-api-stage.herokuapp.com/api/v1'

const commonHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

export default axios.create({
  baseURL: url,
  headers: commonHeaders
})
