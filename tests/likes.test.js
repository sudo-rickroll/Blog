const totalLikes = require('../utils/list_helper').totalLikes
const favouriteBlog = require('../utils/list_helper').favouriteBlog

describe('Likes', () => {
  const blogs = [{
    title: 'First Blog',
    author: 'Rangasai K R',
    url: 'abc.com',
    likes: 5
  }, {
    title: 'Second Blog',
    author: 'Rangasai K R',
    url: 'abc.com',
    likes: 10
  }]
  test('Total Likes', () => {
    expect(totalLikes(blogs)).toBe(15)
  })
  test('Favourite Blog', () => {
    expect(favouriteBlog(blogs)).toEqual({
      title: 'Second Blog',
      author: 'Rangasai K R',
      url: 'abc.com',
      likes: 10
    })
  })
})