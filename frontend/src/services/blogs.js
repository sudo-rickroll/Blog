import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (blogObject, token) => {
  const configuration = {
    headers: { Authorization : `bearer ${token}` }
  }
  const response = await axios.post(baseUrl, blogObject, configuration)
  return response.data
}

const update = async (id, blogObject, token) => {
  const configuration = {
    headers: { Authorization : `bearer ${token}` }
  }
  const response = await axios.put(`${baseUrl}/${id}`, blogObject, configuration)
  return response.data
}

const services = {
  getAll,
  createNew,
  update
}

export default services