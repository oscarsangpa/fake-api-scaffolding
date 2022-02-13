const axios = require('axios');

const httpClient = axios.create({
  baseURL: 'http://127.0.0.1:8000'
})

module.exports = httpClient
