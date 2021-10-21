const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

if (process.argv.length < 2){
    console.log("Command should contain mongo URL")
    process.exit(1)
}

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

blogSchema.set('toJSON', { transform: (sent, received) => {
    received.id = received._id.toString()
    delete received._id
    delete received.__v
}
})

const Blog = mongoose.model('Blog', blogSchema)

mongoose.connect(process.argv[3] || process.argv[2])

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})