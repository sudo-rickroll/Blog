import PropTypes from 'prop-types'
import React from 'react'

const Success = ({ message, style }) => {
  Success.propTypes = {
    message: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired
  }

  const messageStyle = {
    ...style,
    color: 'green'
  }
  return (
    <div style={messageStyle}>
      {message.success}
    </div>
  )
}

const Failure = ({ message, style }) => {
  Success.propTypes = {
    message: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired
  }

  const messageStyle = {
    ...style,
    color: 'red'
  }
  return (
    <div style={messageStyle}>
      {message.error}
    </div>
  )
}

export {
  Success,
  Failure
}