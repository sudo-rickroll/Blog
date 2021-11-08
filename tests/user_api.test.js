const supertest = require('supertest')
const User = require('../models/user')
const app = require('../app')
const mongoose = require('mongoose')
const helper = require('../utils/helper')
const api = supertest(app)

beforeEach(async () => {
  await helper.deleteAllRecords(User)
  await helper.insertAllRecords(User, helper.users)
}, 10000)

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
