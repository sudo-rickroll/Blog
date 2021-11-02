require('dotenv').config()

const PORT = process.env.PORT
const SECRET = process.env.SECRET_KEY
let URL = ''
if (process.env.NODE_ENV === 'test'){
  URL = process.env.MONGODB_URI_TEST
}
else{
  URL = process.env.MONGODB_URI
}

module.exports = {
  PORT,
  SECRET,
  URL
}