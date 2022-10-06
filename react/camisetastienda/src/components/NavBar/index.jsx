import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>Camisetas Astro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/category/men's clothing">Nike</Nav.Link>
            <Nav.Link as={Link} to="/category/woman's clothing">Adidas</Nav.Link>
            <Nav.Link as={Link} to="/category/electronics">Puma</Nav.Link>
          </Nav>
          <Nav>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;