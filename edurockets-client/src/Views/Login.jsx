import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Col, Row, Container, Button, Input, Alert, Label } from 'reactstrap';

import { Icon } from '@iconify/react';

import emailIcon from '@iconify-icons/carbon/email';

import googleIcon from '@iconify-icons/logos/google-icon';
import facebookIcon from '@iconify-icons/logos/facebook';

import { validateEmail, validatePassword } from '../Helpers/Tools';

import EmptyLayout from '../Layouts/EmptyLayout';
import { NavBarLogin } from '../Components/NavBar';

import '../Styles/Login.css';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // States para validación\
  const [validEmail, setValidEmail] = useState(null);
  const [invalidEmail, setInvalidEmail] = useState(null);
  const [validPassword, setValidPassword] = useState(null);
  const [invalidPassword, setInvalidPassword] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      history.push('/');
    }
  }, [history]);

  const formData = {
    email: email,
    password: password,
  };

  const login = () => {
    try {
    } catch (error) {}
  };

  const changeValue = (event) => {
    switch (event.name) {
      case 'email':
        setEmail(event.value);
        if (validateEmail(email)) {
          setValidEmail(true);
          setInvalidEmail(false);
        } else {
          setValidEmail(false);
          setInvalidEmail(true);
        }
        break;
      case 'password':
        setPassword(event.value);
        if (validatePassword(password)) {
          setValidPassword(true);
          setInvalidPassword(false);
        } else {
          setValidPassword(false);
          setInvalidPassword(true);
        }
        break;
      default:
    }
  };

  return (
    <EmptyLayout>
      <NavBarLogin />
      <Container className="Login" fluid>
        <Container className="LoginContainer">
          <Row>
            <Col lg="7" className="LoginLeftContainer" />
            <Col lg="5" className="LoginRightContainer">
              <Row>
                <Col className="LoginTitle">¡Hola de nuevo!</Col>
              </Row>
              <Row>
                <Col className="LoginSubTitle">Estamos listos para impulsar tus sueños</Col>
              </Row>
              <div className="LoginInputsContainer">
                <Row className="LoginInputContainer">
                  <Col>
                    <Label className="LoginLabel">Correo electrónico</Label>
                    <div className="input-group mb-3">
                      <Input
                        className="LoginInput"
                        placeholder="juanperez@edurockets.com"
                        name="email"
                        id="email"
                        value={email}
                        valid={validEmail}
                        invalid={invalidEmail}
                        onChange={(event) => changeValue(event.currentTarget)}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="LoginInputContainer">
                  <Col>
                    <Label className="LoginLabel">Contraseña</Label>
                    <Input
                      className="LoginInput"
                      placeholder="Contraseña"
                      name="password"
                      id="password"
                      type="password"
                      value={password}
                      valid={validPassword}
                      invalid={invalidPassword}
                      onChange={(event) => changeValue(event.currentTarget)}
                    />
                  </Col>
                </Row>
              </div>
              <Row>
                <Col>Recuerdame</Col>
                <Col>
                  <Link className="OlvidastePassword">¿Olvidaste tu contraseña?</Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button className="IniciarSesionButton">Iniciar sesión</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button className="IniciarSesionOtroButton">
                    <Icon icon={googleIcon} />
                    Con Google
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button className="IniciarSesionOtroButton">
                    <Icon icon={facebookIcon} /> Con Facebook
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="CrearCuentaContainer">
                  ¿No tienes una cuenta? Haz click{' '}
                  <Link className="CrearCuentaContainerLink">aquí</Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </EmptyLayout>
  );
};

export default Login;
