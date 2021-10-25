const { dummy } = require('../utils/list_helper')

describe('Dummy', () => {
  const blogs = []
  test('dummy', () => {
    expect(dummy(blogs)).toBe(1)
  })
})