import React from 'react'
import Blog from '../components/Blog'
import CreateBlog from '../components/CreateBlog'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
//import { prettyDOM } from '@testing-library/dom'

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
      <Blog blog={blogObject} updateBlog={mockHandler} deleteBlog={mockHandler} />
    )
    //component.debug()
    const staticDiv = component.getByTestId('static-elements')
    const dynamicDiv = component.getByTestId('dynamic-elements')
    //console.log(prettyDOM(staticDiv))
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
      <Blog blog={blogObject} updateBlog={mockHandler} deleteBlog={mockHandler} />
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

    const component = render(
      <Blog blog={blogObject} updateBlog={mockHandler1} deleteBlog={mockHandler2} />
    )

    const button = component.getByTestId('increase-likes')

    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler1.mock.calls).toHaveLength(2)
  })

  test('add blog render', () => {

    const mockHandler = jest.fn()
    const component = render(
      <CreateBlog addBlog={mockHandler} />
    )

    const titleElement = component.getByTestId('title')
    const title = 'Title 1'
    const authorElement = component.getByTestId('author')
    const author = 'Author 1'
    const urlElement = component.getByTestId('url')
    const url = 'URL 1'

    const form = component.getByTestId('createNew-submit')

    fireEvent.change(titleElement, {
      target: {
        value: title
      }
    })
    fireEvent.change(authorElement, {
      target: {
        value: author
      }
    })
    fireEvent.change(urlElement, {
      target:
      {
        value: url
      }
    })

    fireEvent.submit(form)

    expect(mockHandler.mock.calls).toHaveLength(1)
    expect(mockHandler.mock.calls[0][0]).toEqual({ title, author, url })
  })

})