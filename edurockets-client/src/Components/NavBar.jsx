import React, { useRef, useEffect, useState } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { Col, Row, Button } from 'reactstrap';

import DivButton from '../Components/DivButton';

import misAplicacionesIcon from '../Assets/Icons/misAplicaciones.svg';
import heartIcon from '../Assets/Icons/corazonWhite.svg';

import userIcon from '../Assets/Icons/user.svg';
import signOutIcon from '../Assets/Icons/signOut.svg';

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

export const NavBarSignUp = () => {
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
                history.push('/signupswitch');
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

/* === Navbar para el usuario ya logeado === */

const NavBarAvatar = () => {
  const history = useHistory();

  const [show, setShow] = useState(false);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(false);
        }
      };

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div>
      <div ref={wrapperRef}>
        <DivButton
          action={() => {
            setShow(!show);
          }}
          className="NavBarAvatar"
        />
        {show ? (
          <div className="NavBarAvatarDialog">
            <DivButton
              action={() => {
                history.push('/profile');
              }}
              className="NavBarAvatarText"
            >
              Mi Perfil <img className="NavBarAvatarIcon" alt="signOut" src={userIcon} />
            </DivButton>
            <div className="NavBarAvatarDialogDivider" />
            <DivButton
              action={() => {
                history.push('/');
              }}
              className="NavBarAvatarText"
            >
              Cerrar Sesión <img className="NavBarAvatarIcon" alt="signOut" src={signOutIcon} />
            </DivButton>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export const NavBarSignIn = () => {
  return (
    <>
      <div className="NavBar NavBarSolid">
        <Row className="NavBarContainer">
          <Col lg="3" className="NavBarlogoContainer">
            <img style={{ height: '50px' }} src="/Images/Logo.png" alt="logo" />
          </Col>
          <Col />
          <Col>
            <Link className="NavBarItem">Programas y becas</Link>
          </Col>
          <Col>
            <Link className="NavBarItem">Ayuda en mi decisión</Link>
          </Col>
          <Col>
            <Row>
              <Col>
                <DivButton>
                  <img src={misAplicacionesIcon} alt="mis aplicaciones" className="NavBarIcon" />
                </DivButton>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link className="NavBarIconText NavBarItem">Mis aplicaciones</Link>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <DivButton>
                  <img src={heartIcon} alt="guardadas" className="NavBarIcon" />
                </DivButton>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link className="NavBarIconText NavBarItem">Guardadas</Link>
              </Col>
            </Row>
          </Col>
          <Col lg="3">
            <NavBarAvatar />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NavBar;
