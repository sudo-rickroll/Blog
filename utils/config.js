require('dotenv').config()

const PORT = process.env.PORT
let URL = ''
if (process.env.NODE_ENV === 'test'){
  URL = process.env.MONGODB_URI_TEST
}
else{
  URL = process.env.MONGODB_URI
}

module.exports = {
  PORT,
  URL
}