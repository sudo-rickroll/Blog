import Blog from './Blog'
import React, { useState, useEffect, useRef } from 'react'
import Togglable from './Togglable'
import CreateBlog from './CreateBlog'
import PropTypes from 'prop-types'

const Blogs = ({ clear, style, getBlogs, addBlog, updateBlog, deleteBlog }) => {
  Blogs.propTypes = {
    getBlogs: PropTypes.func.isRequired,
    addBlog: PropTypes.func.isRequired,
    updateBlog: PropTypes.func.isRequired,
    deleteBlog: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired
  }

  const [blogs, setBlogs] = useState([])
  const [newBlog, setNewBlog] = useState({})
  const toggleCreate = useRef()

  useEffect(() => {
    if (!blogs.length || !newBlog) {
      getBlogs()
        .then(data => setBlogs(data))
    }
  })

  const createNewBlog = async (event) => {
    event.preventDefault()
    await addBlog(newBlog)
    toggleCreate.current.toggleVisibility()
    setNewBlog(null)
  }
  const createBlog = (item, value) => {
    const newObject = {}
    newObject[item] = value
    setNewBlog({ ...newBlog, ...newObject })
  }

  return (
    <div>
      <h2>blogs</h2>
      <p>{window.localStorage.getItem('user')} has logged in <button onClick={clear}>logout</button></p>
      <Togglable buttonLabel="Add Blog" ref={toggleCreate}>
        <CreateBlog createBlogObject={createBlog} addBlog={createNewBlog} style={style} />
      </Togglable>
      {blogs ? blogs.sort((a,b) => b.likes - a.likes).map(blog =>
        <Blog key={blog.id} blog={blog} renderBlogs={setNewBlog} updateBlog={updateBlog} deleteBlog={deleteBlog}/>
      ) : null}
    </div>
  )
}

export default Blogs
