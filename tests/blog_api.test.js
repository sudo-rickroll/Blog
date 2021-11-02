const supertest = require('supertest')
const Blog = require('../models/blog')
const User = require('../models/user')
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

const users = [{
  username: 'anonymous',
  name: 'Anonymous',
  password: 'anon1234'
},
{
  username: 'rangasai',
  name: 'Rangasai K R',
  password: 'rangasai0'
}]

beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(blogs)
  await User.deleteMany({})
  await User.insertMany(users)
})

describe('Blog GET API Calls', () => {
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

describe('Blog POST API Calls', () => {
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

describe('Blog DELETE API Calls', () => {
  test('delete an item by ID', async () => {
    const blogs = await Blog.find({})
    const id = blogs[0].id
    const deletedItem = await api.delete(`/api/blogs/${id}`).expect(200)
    expect(deletedItem.body).toEqual(JSON.parse(JSON.stringify(blogs[0])))
    await api.delete(`/api/blogs/${id}`).expect(404)
  })
})

describe('Blog PUT API Calls', () => {
  test('check blog update', async () => {
    const existingBlog = await Blog.findOne()
    const newBlog = {
      ...existingBlog.toJSON(),
      likes: 155
    }
    const updatedBlog = await api.put(`/api/blogs/${existingBlog.id}`).send(newBlog).expect(200)
    expect(updatedBlog.body).toEqual(newBlog)

  })
})

describe('User POST API Calls', () => {
  test('add a user', async () => {
    const userObject = {
      username: 'anonymous2',
      name: 'Anonymous 2',
      password: 'anon02'
    }
    const savedUser = await api.post('/api/users').send(userObject).expect(200)
    expect(savedUser.body).toHaveProperty('id')
  })
  test('username and password is mandatory and > 3 characters', async () => {
    const userObject1 = {
      name: 'Anonymous 2',
      password: 'anon02'
    }
    const userObject2 = {
      username: 'anonymous2',
      name: 'Anonymous 2'
    }
    const userObject3 = {
      username: 'an',
      name: 'Anonymous 2',
      password: 'anon02'
    }
    const userObject4 = {
      username: 'anonymous2',
      name: 'Anonymous 2',
      password: 'an'
    }
    await api.post('/api/users').send(userObject1).expect(401)
    await api.post('/api/users').send(userObject2).expect(401)
    await api.post('/api/users').send(userObject3).expect(401)
    await api.post('/api/users').send(userObject4).expect(401)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
