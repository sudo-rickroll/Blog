const router = require('express').Router()
const bcryptjs = require('bcryptjs')
const user = require('../models/user')

router.post('/', async (request, response) => {
  if (!(request.body.username && request.body.password) || request.body.password.length < 3 || request.body.username.length < 3 ){
    return response.status(401).send({
      error: 'Username and Password must be provided and both must be atleast 3 characters long'
    })
  }
  const saltRounds = 10
  const passwordHash = await bcryptjs.hash(request.body.password, saltRounds)
  const userObject = new user({
    username: request.body.username,
    name: request.body.name,
    passwordHash
  })
  const savedUser = await userObject.save()
  response.status(200).send(savedUser)
})

module.exports = router