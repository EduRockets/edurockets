import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Row,
  Col,
} from 'reactstrap';
import '../Styles/NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavBar">
      <Container className="NavBarContainer">
        <Row>
          <Col className="logoContainer">Aquí va el logo</Col>
          <Col lg="4">Aquí van las otras propiedades</Col>
          <Col lg="4">
            <a href="/signup">Crear cuenta</a>
            <a href="/login">inicio de sesión</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
