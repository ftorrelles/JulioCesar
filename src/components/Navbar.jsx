import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      style={{ padding: "1rem 2rem" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="JC.svg"
            alt="Logo"
            style={{ height: "40px", width: "auto" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavDropdown title="Descubre" id="nav-dropdown" menuVariant="light">
              <NavDropdown.Item as={Link} to="/About">
                Sobre Nosotros
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services">
                Servicios
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/businessCard">
                Tarjeta de Presentación
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
