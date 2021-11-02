const router = require('express').Router()
const bcryptjs = require('bcryptjs')
const user = require('../models/user')

router.post('/', async (request, response) => {
  const { username, name, password } = request.body
  const saltRounds = 10
  const passwordHash = await bcryptjs.hash(password, saltRounds)
  const userObject = new user({
    username,
    name,
    passwordHash
  })
  const savedUser = await userObject.save()
  response.status(200).send(savedUser)
})

module.exports = router