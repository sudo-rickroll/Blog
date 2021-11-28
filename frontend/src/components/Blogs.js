import Blog from "./Blog"
import React, { useState, useEffect } from 'react'
import Togglable from "./Togglable"
import CreateBlog from "./CreateBlog"

const Blogs = ({clear, notify, style, getBlogs, addBlog}) => {
    const [blogs, setBlogs] = useState([])
    const [newBlog, setNewBlog] = useState({})

    useEffect(() => {
        if (!blogs.length || !newBlog) {
          getBlogs()
          .then(data => setBlogs(data))
        }   
    })
    
    const createNewBlog = async (event) => {
        event.preventDefault()
        await addBlog(newBlog)
        setNewBlog(null)
    }
    const createBlog = (item, value) => {
        const newObject = {}
        newObject[item] = value
        setNewBlog({...newBlog, ...newObject})
    }

    return (
        <div>
            <h2>blogs</h2>
            <p>{window.localStorage.getItem('user')} has logged in <button onClick={clear}>logout</button></p>
            <Togglable buttonLabel="Add Blog">
              <CreateBlog createBlogObject={createBlog} addBlog={createNewBlog} style={style} />
            </Togglable>
            {blogs ? blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
            ) : null}
        </div>
    )   
}

export default Blogs
