import PropTypes from 'prop-types'
import React from 'react'

const LoginForm = ({ setUsername, setPassword, handleSubmit, style }) => {
  LoginForm.propTypes = {
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired
  }

  return (
    <div>
      <h2>login to the application</h2>
      <form onSubmit={event => handleSubmit(event)}>
        <div style={style}>username <input type='text' onChange={event => setUsername(event.target.value)}/></div>
        <div style={style}>password <input type='password' onChange={event => setPassword(event.target.value)}/></div>
        <div style={style}><input type="submit" value="login" /></div>
      </form>
    </div>
  )
}

export default LoginForm