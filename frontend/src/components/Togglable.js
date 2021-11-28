import React, { useState } from 'react'

const Togglable = ({buttonLabel, children}) => {
    const [ visible, setVisible ] = useState(false)
    const showWhenVisible = {display: visible ? '' : 'none'}
    const hideWhenVisible = {display: visible ? 'none' : ''}

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    return (
        <div>
          <div style={hideWhenVisible}>
              <input type='button' value={buttonLabel} onClick={toggleVisibility}/>
          </div>
          <div style={showWhenVisible}>
              {children}
              <input type='button' value='cancel' onClick={toggleVisibility}/>
          </div>
        </div>
    )
}

export default Togglable