const router = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

router.get('/', async (request, response) => {
  const usersList = await User.find({}).populate('blogs')
  response.status(200).send(usersList)
})

router.post('/', async (request, response) => {
  const body = request.body
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)
  const user = new User({
    name: body.name,
    username: body.username,
    passwordHash
  })
  const savedUser = await user.save()
  response.send(savedUser)
})

module.exports = router