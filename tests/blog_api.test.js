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
  test('check specific blog', async () => {
    const blogsArrayFromDB = await Blog.find({})
    const blogsArray = await api.get(`/api/blogs/${blogsArrayFromDB[0].id}`)
    expect(blogsArray.body).toEqual(JSON.parse(JSON.stringify(blogsArrayFromDB[0])))

  })
})

describe('POST API Calls', () => {
  test('create a blog', async () => {
    const blogObject = {
      title: 'Third Blog',
      author: 'William Shakespeare',
      url: 'theethythou.com',
      likes: 1000000
    }
    await api.post('/api/blogs').send(blogObject).expect(201).expect('Content-Type', /application\/json/)
    const blogArray = await api.get('/api/blogs')
    expect(blogArray.body).toHaveLength(blogs.length + 1)
    expect(blogArray.body.map(blog => blog.title)).toContain('Third Blog')
  })
  test('check default likes count', async () => {
    const blogObject = {
      title: 'Third Blog',
      author: 'William Shakespeare',
      url: 'theethythou.com'
    }
    await api.post('/api/blogs').send(blogObject)
    const blogArray = await api.get('/api/blogs')
    expect(blogArray.body[2].likes).toBe(0)
  })
  test('check missing properties', async () => {
    const blogObject = {
      author: 'Anonymous',
      likes: 1000000
    }
    await api.post('/api/blogs').send(blogObject).expect(400)
  })
})

describe('DELETE API Calls', () => {
  test('delete an item by ID', async () => {
    const blogs = await Blog.find({})
    const id = blogs[0].id
    const deletedItem = await api.delete(`/api/blogs/${id}`).expect(200)
    expect(deletedItem.body).toEqual(JSON.parse(JSON.stringify(blogs[0])))
    await api.delete(`/api/blogs/${id}`).expect(404)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
