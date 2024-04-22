import React from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';


const Toggle = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
          <Navbar.Brand href="#home">Redux ToolKit Practice</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nl' to="/" >Home</Link>
            <Link to="/cart">Cart</Link>    
          </Nav>
      </Navbar>
  )
}

export default Toggle