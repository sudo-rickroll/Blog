import React, { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import Notifications from './components/Notifications'
import blogService from './services/blogs'
import LoginForm from './components/Login'
import loginService from './services/login'

const App = () => {
  const [notification, setNotification] = useState({})
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')  
  const [newBlog, setNewBlog] = useState({})
  const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem('token') ? true : false)
  const formInputStyle = {
    marginBottom: 5
}
  useEffect(() => {
    if (!blogs.length && loggedIn) {
      blogService.getAll()
      .then(data => setBlogs(data))
      .catch(error => {
        console.log(error.response.data.error || error.response.data)
        setNotification({
          error : error.response.data.error || error.response.data
        })
        setTimeout(() => setNotification({}), 5000)
      })
    }   
  }, [blogs, loggedIn])
  
  const handleLogin = async (event) => {
    event.preventDefault()
    try{
      const user = await loginService.validateLogin({username, password})
      window.localStorage.setItem('token', user.token)
      setNotification({
        success : `Successfully logged in, user ${user.name}` 
      })
      setTimeout(() => setNotification({}), 5000)
      setLoggedIn(true)
    }
    catch(error){
      console.log(error.response.data.error || error.response.data)
      setNotification({
        error : error.response.data.error
      })
      setTimeout(() => setNotification({}), 5000)
    }
    
  }

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    setNotification({
      success : `Successfully logged out`
    })
    setTimeout(() => setNotification({}), 5000)
    setLoggedIn(false)
  }

  const createNewBlog = async (event) => {
    event.preventDefault()
    try{
      await blogService.createNew(newBlog, window.localStorage.getItem('token'))
      setNotification({
        success : `Blog added successfully`
      })
      setTimeout(() => setNotification({}), 5000)
      setBlogs([])
    }
    catch(error){
      console.log(error.response.data.error || error.response.data || error.message)
      setNotification({
        error : error.response.data.error || error.response.data || error.message
      })
      setTimeout(() => setNotification({}), 5000)
    }
  }
  return (
    <div>
      <Notifications message = {notification} />
      {loggedIn ? <Blogs blogs={blogs} clear={handleLogout} user={username} newBlog={{newBlog, setNewBlog}} handleSubmit={createNewBlog} style={formInputStyle}/> : <LoginForm setUsername = {setUsername} setPassword={setPassword} handleSubmit={handleLogin} style={formInputStyle}/>}
    </div>
  )
}

export default App