import React, { useState, useImperativeHandle } from 'react'

const Togglable = React.forwardRef((props, ref) => {
  Togglable.displayName = 'Togglable'
  const [ visible, setVisible ] = useState(false)
  const showWhenVisible = { display: visible ? '' : 'none' }
  const hideWhenVisible = { display: visible ? 'none' : '' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <input type='button' value={props.buttonLabel} onClick={toggleVisibility}/>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <input type='button' value='cancel' onClick={toggleVisibility}/>
      </div>
    </div>
  )
})

export default Togglable