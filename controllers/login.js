const jwt = require('jsonwebtoken')
const router = require('express').Router()
const user = require('../models/user')
const bcrypt = require('bcrypt')
const config = require('../utils/config')

router.post('/', async (request, response) => {
  const { body } = request
  const userObject = await user.findOne({ username: body.username })
  const passwordCorrect = userObject ? await bcrypt.compare(body.password, userObject.passwordHash) : null

  if (!passwordCorrect){
    return response.status(401).send({
      error: 'Invalid username or password'
    })
  }

  const userForToken = {
    username: userObject.username,
    id: userObject._id
  }

  const token = jwt.sign(userForToken, config.SECRET)

  response.status(200).send({
    token,
    user: userObject.username,
    name: userObject.name
  })

})

module.exports = router
