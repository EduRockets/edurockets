import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { Col, Row, Button } from 'reactstrap';

import './Styles/NavBar.css';

const NavBar = () => {
  const history = useHistory();
  const location = useLocation();

  const [solid, setSolid] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= window.innerHeight * 0.75) setSolid(true);
        else setSolid(false);
      });
    } else {
      setSolid(true);
    }
  }, []);

  return (
    <>
      <div className={`NavBar${solid ? ' NavBarSolid' : ''}`}>
        <Row className="NavBarContainer">
          <Col lg="3">
            <Link to="/">
              <img className="NavBarImage" src="/Images/Logo.png" alt="logo" />
            </Link>
          </Col>
          <Col lg="1" />
          <Col lg="5">
            <Row>
              <Col>
                <Link className="NavBarItem">Inversión</Link>
              </Col>
              <Col>
                <Link className="NavBarItem">Información de paises</Link>
              </Col>
              <Col>
                <Link className="NavBarItem">Preguntas frecuentes</Link>
              </Col>
            </Row>
          </Col>
          <Col>
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

export const NavBarLogin = () => {
  const history = useHistory();

  return (
    <>
      <div className="NavBar">
        <Row className="NavBarContainer">
          <Col lg="3" className="NavBarlogoContainer">
            <Link to="/">
              <img style={{ height: '50px' }} src="/Images/Logo.png" alt="logo" />
            </Link>
          </Col>
          <Col className="NavBarItems"></Col>
          <Col lg="3">
            <Button
              className="NavBarButton"
              onClick={() => {
                history.push('/signup');
              }}
            >
              Crear Cuenta
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NavBar;
