import React, { useState } from 'react'

function ThemeMode() {
  const [color, setcolor] = useState({
    color: 'black',
    backgroundColor: 'white'  
  })


  const toggleTheme = () => {
    if (color.color === 'black') {
      setcolor({
        color: 'white',
        backgroundColor: 'black'
      })
    } else {
      setcolor({
        color: 'black',
        backgroundColor: 'white'
      })
    }
  }
  
  return (
    <>
      <div style={color}>
        <h1>Theme Mode</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  )
}

export default ThemeMode

