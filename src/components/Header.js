import React from 'react'
import {Navbar, Nav, Container, Row } from 'react-bootstrap';
function Header() {
  return (
    <div>
        <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/cart"><i className="py-2 fas fa-shopping-cart"></i>Cart</Nav.Link>
            <Nav.Link href="/login"><i className="py-2 fas fa-user"></i>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
