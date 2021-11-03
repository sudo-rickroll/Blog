const supertest = require('supertest')
const User = require('../models/user')
const app = require('../app')
const mongoose = require('mongoose')
const api = supertest(app)

const userObject = {
  username: 'anonymous',
  name: 'Anonymous',
  password: 'ansdfgg'
}

beforeEach(async () => {
  await User.deleteMany({})
})

describe('User Login POST call', () => {
  test('Correct Login', async () => {
    const savedUser = await api.post('/api/users').send(userObject)
    const userLoginObject = {
      username: 'anonymous',
      password: 'ansdfgg'
    }
    const loggedInUser = await api.post('/api/login').send(userLoginObject).expect(200)
    expect(loggedInUser.body).toHaveProperty('token')
    expect(loggedInUser.body.username).toBe(savedUser.body.username)
    await User.findByIdAndDelete(savedUser.body.id)
  })
  test('Incorrect Login', async () => {
    const savedUser = await api.post('/api/users').send(userObject)
    const userLoginObject1 = {
      username: 'anonymous',
      password: 'ansdfg'
    }
    const userLoginObject2 = {
      password: 'ansdfgg'
    }
    const userLoginObject3 = {
      username: 'anonymous'
    }

    await api.post('/api/login').send(userLoginObject1).expect(401)
    await api.post('/api/login').send(userLoginObject2).expect(401)
    await api.post('/api/login').send(userLoginObject3).expect(401)

    await User.findByIdAndDelete(savedUser.body.id)
  })
})

afterAll(() => {
  mongoose.connection.close()
})