const dummy = require('../utils/list_helper').totalLikes

describe('Likes', () => {
  const blogs = [{
    title: 'First Blog',
    author: 'Rangasai K R',
    url: 'abc.com',
    likes: 5
  }, {
    title: 'First Blog',
    author: 'Rangasai K R',
    url: 'abc.com',
    likes: 5
  }]
  test('Total Likes', () => {
    expect(dummy(blogs)).toBe(10)
  })
})