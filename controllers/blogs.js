const router = require('express').Router()
const Blog = require('../models/blog')

router.get('/', (request, response, next) => {
  Blog
    .find({})
    .then(blogs => {
      response.send(blogs)
    })
    .catch(error => {
      next(error)
    })
})

router.post('/', (request, response, next) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).send(result)
    })
    .catch(error => {
      next(error)
    })
})

module.exports = router