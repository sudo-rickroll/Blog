import PropTypes from 'prop-types'
import React, { useState } from 'react'

const CreateBlog = ({ addBlog, style }) => {
  const [newBlog, setNewBlog] = useState({})
  CreateBlog.propTypes = {
    addBlog: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired
  }

  const createBlogObject = (item, value) => {
    const newObject = {}
    newObject[item] = value
    setNewBlog({ ...newBlog, ...newObject })
  }

  const addNewBlog = async (event) => {
    event.preventDefault()
    await addBlog(newBlog)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={event => addNewBlog(event)} data-testid='createNew-submit'>
        <div style={style}>title <input type='text' data-testid='title' onChange={event => {createBlogObject('title', event.target.value)}}></input></div>
        <div style={style}>author <input type='text' data-testid='author' onChange={event => {createBlogObject('author', event.target.value)}}></input></div>
        <div style={style}>url <input type='text' data-testid='url' onChange={event => {createBlogObject('url', event.target.value)}}></input></div>
        <div style={style}><button type='submit'>create</button></div>
      </form>
    </div>
  )
}

export default CreateBlog