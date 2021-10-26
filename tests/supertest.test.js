const app = require('../app')
const mongoose = require('mongoose')
const supertest = require('supertest')
const Blog = require('../models/blog')
const config = require('../utils/config')

const api = supertest(app)

const blogs = [{
  title: 'First Blog',
  author: 'Rangasai K R',
  url: 'abc.com',
  likes: 5
}, {
  title: 'Second Blog',
  author: 'Rangasai K R',
  url: 'abc.com',
  likes: 10
}]

beforeEach(async () => {
  await Blog.deleteMany({})
  let blog = new Blog(blogs[0])
  await blog.save()
  blog = new Blog(blogs[1])
  await blog.save()
})

test('likes', async () => {
    const blogs = await api.get('/api/blogs')
    const id = blogs.body[0].id
    expect(blogs.body[0]).toEqual({
      title: 'First Blog',
      author: 'Rangasai K R',
      url: 'abc.com',
      likes: 5,
      id:id
    })
})

afterAll(() => {
  mongoose.connection.close()
})