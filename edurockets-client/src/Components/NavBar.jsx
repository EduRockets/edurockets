import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Col, Row, Navbar, NavbarBrand, Button } from 'reactstrap';

import '../Styles/NavBar.css';

const NavBar = () => {
  const history = useHistory();

  const [solid, setSolid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight * 0.75) setSolid(true);
      else setSolid(false);
    });
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={`NavBar${solid ? ' NavBarSolid' : ''}`}>
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
                history.push('/underConstruction');
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
