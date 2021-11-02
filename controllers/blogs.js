const router = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

router.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('author')
  response.send(blogs)
})

router.get('/:id', async (request, response) => {
  const blog = await (await Blog.findById(request.params.id)).populated('author')
  response.send(blog)
})

router.post('/', async (request, response) => {
  const { title, author, url, likes } = request.body
  const user = await User.findOne({ name: author })
  const blog = new Blog({
    title,
    author: user._id,
    url,
    likes
  })
  const result = await blog.save()
  user.blogs = user.blogs.concat(result._id)
  await user.save()
  response.status(201).send(result)
})

router.delete('/:id', async (request, response) => {
  const blog = await Blog.findByIdAndDelete(request.params.id)
  if (blog){
    return response.status(200).send(blog)
  }
  response.status(404).send({
    error: `Item with ID ${request.params.id} not found`
  })
})

router.put('/:id', async (request, response) => {
  const { title, author, url, likes } = request.body
  let blog = new Blog({
    title,
    author,
    url,
    likes
  })
  blog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
  response.status(200).send(blog)
})

module.exports = router