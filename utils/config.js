require('dotenv').config()

const PORT = process.env.PORT
let URL = ''
if (process.env.NODE_ENV === 'test'){
  URL = process.env.MONGODB_URI_TEST
}
else{
  URL = process.env.MONGODB_URI
}
const SECRET_KEY = process.env.SECRET_KEY

module.exports = {
  PORT,
  URL,
  SECRET_KEY
}