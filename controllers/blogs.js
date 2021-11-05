require('express-async-errors')
const router = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

router.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { passwordHash: 0, blogs: 0 })
  response.send(blogs)
})

router.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id).populate('user', { passwordHash: 0, blogs: 0 })
  response.send(blog)
})

router.post('/', async (request, response) => {
  const blog = new Blog({
    url: request.body.url,
    title: request.body.title,
    author: request.body.author,
    user: request.user,
    likes: request.body.likes
  })
  const result = await blog.save()
  const user = await User.findById(request.user)
  user.blogs = user.blogs.concat(result._id)
  await user.save()
  response.status(201).send(result)
})

router.delete('/:id', async (request, response) => {
  let blog = await Blog.findById(request.params.id)
  if (blog.user.toString() !== request.user) {
    return response.status(401).send({
      error: 'Current user cannot delete this blog as it has been created by another user.'
    })
  }
  blog = await Blog.findByIdAndRemove(blog._id)
  if (blog){
    return response.status(200).send(blog)
  }
  response.status(404).send({
    error: `Item with ID ${request.params.id} not found`
  })
})

router.put('/:id', async (request, response) => {
  let blog = {
    title: request.body.title,
    author: request.body.author,
    url: request.body.url,
    likes: request.body.likes
  }
  blog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
  response.status(200).send(blog)
})

module.exports = router