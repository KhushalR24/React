import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav'>
    <div className="nav-img">
      <img src="../../../public/Images/brand_logo.png" alt="logo" />
    </div>
    <div className="nav-list">
      <ul>
        <li href="#" >Menu</li>
        <li href="#" >Location</li>
        <li href="#" >About</li>
        <li href="#" >Contact</li>
      </ul>
    </div>
    <div className="nav-btn">
      <button>Login</button>
    </div>
    </div>
  )
}

export default Nav