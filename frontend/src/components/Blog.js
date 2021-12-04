import React, {useState, useEffect} from 'react'

const Blog = ({blog, update}) => {
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
    update(blog.id, blogObject).then()
  }, [likes])

  const toggleVisibility = () => setVisible(!visible)
  const displayStyle = {display: visible ? "" : "none"}
  const buttonLabel = visible ? "hide" : "show"
  
  const increaseLikes = async () => {
    setLikes(likes+1)
  }

  return (
  <div style={blogStyle}>
    {blog.title} {blog.author} <input type="button" value={buttonLabel} onClick={toggleVisibility}/>
    <div style={displayStyle} >
      {blog.url}<br />
      {likes}<input type="button" value="like" onClick={increaseLikes}/><br />
      {blog.user.username}<br/>
    </div>
  </div> 
  )

}
   


export default Blog