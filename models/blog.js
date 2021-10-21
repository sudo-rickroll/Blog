const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

blogSchema.set('toJSON', { transform : (sent, received) => {
  received.id = received._id.toString()
  delete received._id
  delete received.__v
}
})

module.exports = mongoose.model('Blog', blogSchema)