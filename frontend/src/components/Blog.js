import React, {useState, useEffect} from 'react'

const Blog = ({blog, renderBlogs, updateBlog, deleteBlog}) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const [ visible, setVisible ] = useState(false)
  const [ likes, setLikes ] = useState(blog.likes)
  useEffect(() => {
    const blogObject = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes
    }
    updateBlog(blog.id, blogObject).then()
  }, [likes])

  const toggleVisibility = () => setVisible(!visible)
  const displayStyle = {display: visible ? "" : "none"}
  const buttonLabel = visible ? "hide" : "show"
  
  const increaseLikes = async () => {
    setLikes(likes+1)
  }
  const removeBlog = async () => {
    if(window.confirm(`Remove blog '${blog.title}' by ${blog.user.username}`)){
      await deleteBlog(blog.id)
      renderBlogs(null)
    }
  }

  return (
  <div style={blogStyle}>
    {blog.title} {blog.author} <input type="button" value={buttonLabel} onClick={toggleVisibility}/>
    <div style={displayStyle} >
      {blog.url}<br />
      {likes}<input type="button" value="like" onClick={increaseLikes}/><br />
      {blog.user.username}<br/>
      <input type="button" onClick={removeBlog} value="remove" />
    </div>
  </div> 
  )

}
   


export default Blog