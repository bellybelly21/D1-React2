import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';

const formatNumber = (number) => {
  return number.toLocaleString();
};

const NavbarComponent = () => {
  const total = 25000;
  const token = false;

  return (
    <BootstrapNavbar bg="dark" variant="dark" className="px-5 justify-content-between">
      <Container className="p-0">
        <BootstrapNavbar.Brand href="#home">Pizzería Mamma Mía!</BootstrapNavbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#Home">Home</Nav.Link>
          {token ? (
            <>
              <Nav.Link href="#profile">🔓 Profile</Nav.Link>
              <Nav.Link href="#logout">🔒 Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="#login">🔐 Login</Nav.Link>
              <Nav.Link href="#register">🔐 Register</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
      <Button variant="outline-primary" style={{ whiteSpace: 'nowrap' }}>🛒 Total: ${formatNumber(total)}</Button>
    </BootstrapNavbar>
  );
}

export default NavbarComponent;
