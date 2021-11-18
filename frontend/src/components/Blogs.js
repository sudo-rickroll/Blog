import Blog from "./Blog"
import React, { useState, useEffect } from 'react'
import blogService from '../services/blogs'

const Blogs = ({clear, notify, user, style}) => {
    const [blogs, setBlogs] = useState([])
    const [newBlog, setNewBlog] = useState({})

    useEffect(() => {
        if (!blogs.length || !newBlog) {
          blogService.getAll()
          .then(data => setBlogs(data))
          .catch(error => {
            console.log(error.response.data.error || error.response.data)
            notify({
              error : error.response.data.error || error.response.data
            })
            setTimeout(() => notify({}), 5000)
          })
        }   
    })
    
    const createNewBlog = async (event) => {
        event.preventDefault()
        try{
          await blogService.createNew(newBlog, window.localStorage.getItem('token'))
          notify({
            success : `Blog added successfully`
          })
          setTimeout(() => notify({}), 5000)
          setNewBlog(null)
        }
        catch(error){
          console.log(error.response.data.error || error.response.data || error.message)
          notify({
            error : error.response.data.error || error.response.data || error.message
          })
          setTimeout(() => notify({}), 5000)
        }
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
            <h2>create new</h2>
            <form onSubmit={event => createNewBlog(event)}>
                <div style={style}>title <input type='text' onChange={event => {createBlog('title', event.target.value)}}></input></div>
                <div style={style}>author <input type='text' onChange={event => {createBlog('author', event.target.value)}}></input></div>
                <div style={style}>url <input type='text' onChange={event => {createBlog('url', event.target.value)}}></input></div>
                <div style={style}><button type='submit'>create</button></div>
            </form>
            {blogs ? blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
            ) : null}
        </div>
    )   
}

export default Blogs
