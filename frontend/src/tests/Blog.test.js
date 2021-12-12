import React from 'react'
import Blog from '../components/Blog'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

test('render blog', () => {
  const blogObject = {
    title: 'Blog 1',
    url: 'https://www.google.com/',
    author: 'Unknown',
    user: {
      username: 'Test User'
    },
    likes: 5
  }
  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blogObject} renderBlogs={mockHandler} updateBlog={mockHandler} deleteBlog={mockHandler} />
  )

  const staticDiv = component.getByTestId('static-elements')
  const dynamicDiv = component.getByTestId('dynamic-elements')

  expect(staticDiv).not.toHaveStyle('display:none')
  expect(dynamicDiv).toHaveStyle('display:none')
})