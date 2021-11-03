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
  passwordHash: 'anon1234'
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

module.exports = {
  blogs,
  users,
  deleteAllRecords,
  insertAllRecords
}