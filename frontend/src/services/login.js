import axios from 'axios'
const baseUrl = '/api/login'

const validateLogin = async credentials => {
  const user = await axios.post(baseUrl, credentials)
  return user.data
}

export default {
  validateLogin
}