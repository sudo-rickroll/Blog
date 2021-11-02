const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  name: {
    type: String
  },
  passwordHash: {
    type: String
  }
})

userSchema.set('toJSON', {
  transform: (sent, received) => {
    received.id = received._id.toString()
    delete received.password
    delete received._id
    delete received .__v
  }
})

userSchema.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema)

module.exports = User