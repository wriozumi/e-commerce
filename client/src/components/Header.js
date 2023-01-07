import React from 'react'
import {Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to='/'>E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to='/cart'><i className="py-2 fas fa-shopping-cart"></i>Cart</Nav.Link>
            <Nav.Link as={Link} to='/login'><i className="py-2 fas fa-user"></i>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
