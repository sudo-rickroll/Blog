import React, { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import Notifications from './components/Notifications'
import blogService from './services/blogs'
import LoginForm from './components/Login'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [notification, setNotification] = useState({})
  const loggedIn = window.localStorage.getItem('token') ? true : false

  useEffect(() => {
    blogService.getAll()
    .then(data => setBlogs(data))
    .catch(error => {
      console.log(error.response.data.error || error.response.data)
      setNotification({
        error : error.response.data.error || error.response.data
      })
      setTimeout(() => setNotification({}), 5000)
    })
  }, [])
  
  const handleLogin = async (event) => {
    event.preventDefault()
    try{
      const user = await loginService.validateLogin({username, password})
      window.localStorage.setItem('token', user.token)
      setNotification({
        success : `Successfully logged in, user ${user.name}` 
      })
      setTimeout(() => setNotification({}), 5000)
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
  }
  return (
    <div>
      <Notifications message = {notification} />
      {loggedIn ? <Blogs blogs={blogs} clear={handleLogout} user={username}/> : <LoginForm setUsername = {setUsername} setPassword={setPassword} handleSubmit={handleLogin}/>}
    </div>
  )
}

export default App