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

const updateExisting = async (id, blogObject, token) => {
  const configuration = {
    headers: { Authorization : `bearer ${token}` }
  }
  await axios.put(`${baseUrl}/${id}`, blogObject, configuration)

}

const deleteExisting = async (id, token) => {
  const configuration = {
    headers: { Authorization : `bearer ${token}` }
  }
  await axios.delete(`${baseUrl}/${id}`, configuration)
}

const services = {
  getAll,
  createNew,
  updateExisting,
  deleteExisting
}

export default services