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
    <div style={blogStyle}>
      <div data-testid="static-elements">
        {blog.title} {blog.author} <input type="button" value={buttonLabel} onClick={toggleVisibility} data-testid="toggle-details"/>
      </div>
      <div data-testid="dynamic-elements" style={displayStyle} >
        {blog.url}<br />
        {likes}<input type="button" value="like" onClick={increaseLikes} data-testid="increase-likes"/><br />
        {blog.user.username}<br/>
        <input type="button" onClick={removeBlog} value="remove" />
      </div>
    </div>
  )

}

export default Blog