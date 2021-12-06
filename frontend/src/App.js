import React, { useState } from 'react'
import Blogs from './components/Blogs'
import Notifications from './components/Notifications'
import LoginForm from './components/Login'
import loginService from './services/login'
import blogService from './services/blogs'

const App = () => {
  const [notification, setNotification] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const formInputStyle = {
    marginBottom: 5
  }
  const fetchBlogs = async () => {
    try {
      const data = await blogService.getAll()
      return data
    }
    catch(error){
      console.log(error.response.data.error || error.response.data)
      setNotification({
        error : error.response.data.error || error.response.data
      })
      setTimeout(() => setNotification({}), 5000)
      return null
    }

  }

  const createBlog = async (blogObject) => {
    try{
      await blogService.createNew(blogObject, window.localStorage.getItem('token'))
      setNotification({
        success : 'Blog added successfully'
      })
      setTimeout(() => setNotification({}), 5000)
    }
    catch(error){
      console.log(error.response.data.error || error.response.data || error.message)
      setNotification({
        error : error.response.data.error || error.response.data || error.message
      })
      setTimeout(() => setNotification({}), 5000)
    }
  }

  const updateBlog = async (id, blogObject) => {
    try{
      await blogService.updateExisting(id, blogObject, window.localStorage.getItem('token'))
    }
    catch(error){
      console.log(error.response.data.error || error.response.data || error.message)
      setNotification({
        error : error.response.data.error || error.response.data || error.message
      })
      setTimeout(() => setNotification({}), 5000)
    }
  }

  const deleteBlog = async (id) => {
    try{
      await blogService.deleteExisting(id, window.localStorage.getItem('token'))
    }
    catch(error){
      console.log(error.response.data.error || error.response.data || error.message)
      setNotification({
        error : error.response.data.error || error.response.data || error.message
      })
      setTimeout(() => setNotification({}), 5000)
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try{
      const user = await loginService.validateLogin({ username, password })
      window.localStorage.setItem('token', user.token)
      window.localStorage.setItem('user', user.name)
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
    window.localStorage.removeItem('user')
    setNotification({
      success : 'Successfully logged out'
    })
    setTimeout(() => setNotification({}), 5000)
  }

  return (
    <div>
      <Notifications message = {notification} />
      {window.localStorage.getItem('token') ? <Blogs clear={handleLogout} style={formInputStyle} getBlogs={fetchBlogs} addBlog={createBlog} updateBlog={updateBlog} deleteBlog={deleteBlog}/> : <LoginForm setUsername = {setUsername} setPassword={setPassword} handleSubmit={handleLogin} style={formInputStyle}/>}
    </div>
  )
}

export default App