const Blog = require('../models/blog')
const User = require('../models/user')
const bcryptjs = require('bcryptjs')

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
  passwordHash: 'rangasai0'
}]

const deleteAllRecords = async object => {
  await object.deleteMany({})
}

const insertAllRecords = async (object, array) => {
  await object.insertMany(array)
}

const insertUser = async () => {
  let userObject = {
    username: 'anonymous3',
    name: 'Anonymous 3',
    password: 'ansdfgg'
  }
  //const saltRounds = 10
  userObject['passwordHash'] = await bcryptjs.hash(userObject.password, 10)
  delete userObject.password
  userObject = await new User(userObject).save()
  return userObject
}


const createBlogWithUser = async userId => {
  const blog = new Blog({
    title: `Blog from ${userId}`,
    author: 'Rangasai K R',
    url: 'abc.com',
    user: userId
  })
  await blog.save()
}

module.exports = {
  blogs,
  users,
  deleteAllRecords,
  insertAllRecords,
  createBlogWithUser,
  insertUser
}