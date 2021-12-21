const supertest = require('supertest')
const Blog = require('../models/blog')
const User = require('../models/user')
const app = require('../app')
const mongoose = require('mongoose')
const helper = require('../utils/helper')
const api = supertest(app)
const jwt = require('jsonwebtoken')
const config = require('../utils/config')

let token = ''
let user = {}

beforeEach(async () => {
  await helper.deleteAllRecords(Blog)
  await helper.insertAllRecords(Blog, helper.blogs)
}, 10000)

describe('Blog GET API Calls', () => {
  test('get all items array length', async () => {
    const blogsArray = await api.get('/api/blogs')
    expect(blogsArray.body).toHaveLength(helper.blogs.length)
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
  test('create a blog and test likes', async () => {
    await helper.deleteAllRecords(User)
    user = await helper.insertUser()
    let blogObject = {
      title: 'Third Blog',
      author: 'William Shakespeare',
      url: 'theethythou.com',
      likes: 10000
    }
    token = jwt.sign({
      id: user._id.toString(),
      username: user.username
    }, config.SECRET_KEY)
    await api.post('/api/blogs').set({ 'authorization': `bearer ${token}` }).send(blogObject).expect(201).expect('Content-Type', /application\/json/)
    const blogArray = await api.get('/api/blogs')
    expect(blogArray.body).toHaveLength(helper.blogs.length + 1)
    expect(blogArray.body.map(blog => blog.title)).toContain('Third Blog')
    await api.post('/api/blogs').send(blogObject).expect(401)
  })
  test('check default likes count', async () => {
    const blogObject = {
      title: 'Third Blog',
      author: 'William Shakespeare',
      url: 'theethythou.com'
    }
    await api.post('/api/blogs').set({ 'authorization': `bearer ${token}` }).send(blogObject)
    const blogArray = await api.get('/api/blogs')
    expect(blogArray.body[2].likes).toBe(0)
  })
  test('check missing properties', async () => {
    const blogObject = {
      author: 'Anonymous',
      likes: 1000000
    }
    await api.post('/api/blogs').set({ 'authorization': `bearer ${token}` }).send(blogObject).expect(400)
  })

})

describe('Blog DELETE API Calls', () => {
  test('delete an item by ID', async () => {
    let blogObject = {
      title: 'Third Blog',
      author: 'William Shakespeare',
      url: 'theethythou.com',
      user: user._id,
      likes: 10000
    }
    blogObject = await new Blog(blogObject).save()
    await api.delete(`/api/blogs/${blogObject._id.toString()}`).expect(401)
    await api.delete(`/api/blogs/${blogObject._id.toString()}`).set({ 'authorization': `bearer ${token}` }).expect(200).expect('Content-Type', /application\/json/)
  })
})



describe('Blog PUT API Calls', () => {
  test('check blog update', async () => {
    const existingBlog = await Blog.findOne()
    const newBlog = {
      ...existingBlog.toJSON(),
      likes: 155
    }
    const updatedBlog = await api.put(`/api/blogs/${existingBlog.id}`).set({ 'authorization': `bearer ${token}` }).send(newBlog).expect(200)
    expect(updatedBlog.body).toEqual(newBlog)

  })
})

afterAll(() => {
  mongoose.connection.close()
})
