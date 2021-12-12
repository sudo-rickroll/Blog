import React from 'react'
import Blog from '../components/Blog'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'

describe('Blog component tests', () => {
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
    component.debug()
    const staticDiv = component.getByTestId('static-elements')
    const dynamicDiv = component.getByTestId('dynamic-elements')
    console.log(prettyDOM(staticDiv))
    expect(staticDiv).not.toHaveStyle('display:none')
    expect(dynamicDiv).toHaveStyle('display:none')
  })
  test('render details', () => {
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

    const button = component.getByTestId('toggle-details')
    const dynamicDiv = component.getByTestId('dynamic-elements')

    fireEvent.click(button)

    expect(dynamicDiv).not.toHaveStyle('display:none')
  })
  test('like button click', () => {
    const blogObject = {
      title: 'Blog 1',
      url: 'https://www.google.com/',
      author: 'Unknown',
      user: {
        username: 'Test User'
      },
      likes: 5
    }
    const mockHandler1 = jest.fn()
    const mockHandler2 = jest.fn()
    const mockHandler3 = jest.fn()

    const component = render(
      <Blog blog={blogObject} renderBlogs={mockHandler1} updateBlog={mockHandler2} deleteBlog={mockHandler3} />
    )

    const button1 = component.getByTestId('toggle-details')
    const button2 = component.getByTestId('increase-likes')

    fireEvent.click(button1)

    fireEvent.click(button2)
    fireEvent.click(button2)

    expect(mockHandler2.mock.calls).toHaveLength(2)
  })
})