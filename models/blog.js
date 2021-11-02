const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  url: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  }
})

blogSchema.set('toJSON', { transform : (sent, received) => {
  received.id = received._id.toString()
  delete received._id
  delete received.__v
}
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog