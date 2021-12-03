import React, {useState} from 'react'

const Blog = ({blog}) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const [ visible, setVisible ] = useState(false)
  const toggleVisibility = () => setVisible(!visible)
  const displayStyle = {display: visible ? "" : "none"}
  const buttonLabel = visible ? "hide" : "show"

  return (
  <div style={blogStyle}>
    {blog.title} {blog.author} <input type="button" value={buttonLabel} onClick={toggleVisibility}/>
    <div style={displayStyle} >
      {blog.url}<br />
      {blog.likes}<input type="button" value="like" /><br />
      {blog.user.username}<br/>
    </div>
  </div> 
  )

}
   


export default Blog