import React from 'react'

const Header = () => {
  return (
    <div style={{
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        backgroundColor:"white",
    
    }}>
      <div className='header'>  
      <h1 style={{
        color: 'red',
      }}>Dublin TECH</h1>
      <h2>Products</h2>
      </div>
    </div>
  )
}

export default Header