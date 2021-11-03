const router = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const { SECRET_KEY } = require('../utils/config')

router.post('/', async (request, response) => {
  const user = await User.findOne({ username: request.body.username })
  const passwordCorrect = (user !== null) && (request.body.password) ? await bcryptjs.compare(request.body.password, user.passwordHash) : null
  if (!passwordCorrect){
    return response.status(401).send({
      error: 'Invalid username or password'
    })
  }
  const userForToken = {
    id: user._id,
    username: user.username
  }

  const token = jwt.sign(userForToken, SECRET_KEY)
  response.status(200).send({
    token,
    username: user.username,
    name: user.name
  })

})

module.exports = router