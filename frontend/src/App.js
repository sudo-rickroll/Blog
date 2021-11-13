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
  const [token, setToken] = useState('')
  const [notification, setNotification] = useState({})
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    try{
      const user = await loginService.validateLogin({username, password})
      setToken(user.token)
      const blogsArray = await blogService.getAll()
      setBlogs(blogsArray)
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
  return (
    <div>
      <Notifications message = {notification} />
      {token ? <Blogs blogs={blogs}/> : <LoginForm setUsername = {setUsername} setPassword={setPassword} handleSubmit={handleSubmit}/>}
    </div>
  )
}

export default App