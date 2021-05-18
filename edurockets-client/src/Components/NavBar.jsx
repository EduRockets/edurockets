import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Col, Row, Navbar, NavbarBrand, Button } from 'reactstrap';

import '../Styles/NavBar.css';

const NavBar = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="NavBar">
        <Row className="NavBarContainer">
          <Col lg="3" className="NavBarlogoContainer">
            <img style={{ height: '50px' }} src="/Images/Logo.png" alt="logo" />
          </Col>
          <Col className="NavBarItems">
            <Link className="NavBarItem">Inversión</Link>
            <Link className="NavBarItem">Información de paises</Link>
            <Link className="NavBarItem">Preguntas frecuentes</Link>
          </Col>
          <Col lg="3">
            <Button
              className="NavBarButton"
              onClick={() => {
                history.push('/login');
              }}
            >
              Iniciar Sesión
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NavBar;

/*
          <a href="/signup">Crear cuenta</a>
*/
