import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog, updateBlog, deleteBlog }) => {
  Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    updateBlog: PropTypes.func.isRequired,
    deleteBlog: PropTypes.func.isRequired
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const space = {
    marginRight: 5
  }

  const [ visible, setVisible ] = useState(false)
  const [ likes, setLikes ] = useState(blog.likes)

  const toggleVisibility = () => setVisible(!visible)
  const displayStyle = { display: visible ? '' : 'none' }
  const buttonLabel = visible ? 'hide' : 'show'

  const increaseLikes = async () => {
    setLikes(likes+1)
    const blogObject = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: likes+1
    }
    await updateBlog(blog.id, blogObject)
  }
  const removeBlog = async () => {
    if(window.confirm(`Remove blog '${blog.title}' by ${blog.user.username}`)){
      await deleteBlog(blog.id)
    }
  }

  return (
    <div data-testid='blog-container' style={blogStyle}>
      <div data-testid="static-elements">
        <span data-testid="blog-title" style={space}>{blog.title}</span> <span data-testid="blog-author" style={space}>{blog.author}</span> <input type="button" value={buttonLabel} onClick={toggleVisibility} data-testid="toggle-details"/>
      </div>
      <div data-testid="dynamic-elements" style={displayStyle} >
        <div data-testid="blog-url">
          {blog.url}<br />
        </div>
        <span data-testid="blog-likes" style={space}>{likes}</span><input type="button" value="like" onClick={increaseLikes} data-testid="increase-likes"/><br />
        <div data-testid="blog-username">
          {blog.user.username}<br/>
        </div>
        <input type="button" data-testid="remove-blogs" onClick={removeBlog} value="remove" />
      </div>
    </div>
  )

}

export default Blog