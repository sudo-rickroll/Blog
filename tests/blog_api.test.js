const supertest = require('supertest')
const Blog = require('../models/blog')
const app = require('../app')
const mongoose = require('mongoose')

const api = supertest(app)

const blogs = [{
  title: 'First Blog',
  author: 'Rangasai K R',
  url: 'abc.com',
  likes: 5
},
{
  title: 'Second Blog',
  author: 'Rangasai K R',
  url: 'abc.com',
  likes: 10
}]

beforeEach(async () => {
  await Blog.deleteMany({})
  for (let blog of blogs){
    let blogObject = new Blog(blog)
    await blogObject.save()
  }
})

describe('GET API Calls', () => {
  test('get all items array length', async () => {
    const blogsArray = await api.get('/api/blogs')
    expect(blogsArray.body).toHaveLength(blogs.length)
  })
  test('check if id exists', async () => {
    const blogsArray = await api.get('/api/blogs')
    blogsArray.body.forEach(blog => {
      expect(blog.id).toBeDefined()
    })
  })
})

afterAll(() => {
  mongoose.connection.close()
})
