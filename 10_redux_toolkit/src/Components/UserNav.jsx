import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const UserNav = () => {
    return (
        <>
            <Navbar expand="lg" bg="dark" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/home">RTK</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{fontSize:20, fontWeight:700}} className="me-auto">
                            <Nav.Link as={Link} to="/product">Products</Nav.Link>
                            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <span style={{marginRight:200, fontWeight:700}}  className='cartCourt'> Cart Items : 0 </span>
            </Navbar>
        </>
    )
}

export default UserNav