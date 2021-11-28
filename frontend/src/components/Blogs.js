import Blog from "./Blog"
import React, { useState, useEffect } from 'react'
import Togglable from "./Togglable"

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
              <h2>create new</h2>
              <form onSubmit={event => createNewBlog(event)}>
                <div style={style}>title <input type='text' onChange={event => {createBlog('title', event.target.value)}}></input></div>
                <div style={style}>author <input type='text' onChange={event => {createBlog('author', event.target.value)}}></input></div>
                <div style={style}>url <input type='text' onChange={event => {createBlog('url', event.target.value)}}></input></div>
                <div style={style}><button type='submit'>create</button></div>
              </form>
            </Togglable>
            {blogs ? blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
            ) : null}
        </div>
    )   
}

export default Blogs
