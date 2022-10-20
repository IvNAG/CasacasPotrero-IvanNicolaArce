import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';
import { Text } from '@chakra-ui/react'

const NavBar = ({location}) => {

  
  
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>Camisetas Astro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="/">
              <Text color={location === '/' ? 'red' : 'black'}>Home</Text>
            </Nav.Link>
            <Nav.Link as={Link} to="/category/Nike">
              <Text color={location === '/category/Nike' ? 'red' : 'black'}>Nike</Text>
            </Nav.Link>
            <Nav.Link as={Link} to="/category/Adidas">
              <Text color={location === '/category/Adidas' ? 'red' : 'black'}>Adidas</Text>
            </Nav.Link>
            <Nav.Link as={Link} to="/category/Puma">
              <Text color={location === '/category/Puma' ? 'red' : 'black'}>Puma</Text>
            </Nav.Link>
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