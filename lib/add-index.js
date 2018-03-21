const axios = require('axios')
const generateToken = require('./generate-token')
const logger = require('./logger')
const pkg = require('../package.json')

module.exports = async payload => {
  const url = `${process.env.SEARCH_SERVICE}/documents`
  const token = generateToken({key: process.env.JWT_KEY, payload: {system: pkg.name}})
  axios.defaults.headers.common['Authorization'] = token
  if (!payload) {
    throw new Error('Missing required input: payload')
  }
  try {
    const { data } = await axios.put(url, payload)
    logger('info', ['add-document', 'success', payload.id])
    return data
  } catch (error) {
    logger('error', ['add-document', error])
    throw error
  }
}
