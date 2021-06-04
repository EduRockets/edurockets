import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Col, Row, Container, Button, Input, Alert, Label } from 'reactstrap';

import { Icon } from '@iconify/react';

import googleIcon from '@iconify-icons/logos/google-icon';
import facebookIcon from '@iconify-icons/logos/facebook';

import { validateEmail, validatePassword } from '../Helpers/Tools';

import EmptyLayout from '../Layouts/EmptyLayout';
import { NavBarLogin } from '../Components/NavBar';

import './Styles/Login.css';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // States para validación\
  const [validEmail, setValidEmail] = useState(null);
  const [invalidEmail, setInvalidEmail] = useState(null);

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
                    <Input
                      className="LoginInput"
                      placeholder="correo@edurockets.com"
                      name="email"
                      id="email"
                      value={email}
                      valid={validEmail}
                      invalid={invalidEmail}
                      onChange={(event) => changeValue(event.currentTarget)}
                    />
                  </Col>
                </Row>
                <Row className="LoginInputContainer">
                  <Col>
                    <Label className="LoginLabel">Contraseña</Label>
                    <Input
                      className="LoginInput"
                      placeholder="Debe contener al menos 8 carácteres"
                      name="password"
                      id="password"
                      type="password"
                      value={password}
                      onChange={(event) => changeValue(event.currentTarget)}
                    />
                  </Col>
                </Row>
              </div>
              <Row>
                <Col>
                  <Input className="LoginCheckboxContainer" type="checkbox" />
                  Recuérdame
                </Col>
                <Col>
                  <Link className="OlvidastePassword">¿Olvidaste tu contraseña?</Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button className="LoginButton">Iniciar sesión</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button className="LoginSocialButton">
                    <Icon className="LoginSocialButtonIcon" icon={googleIcon} />
                    Con Google
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button className="LoginSocialButton">
                    <Icon className="LoginSocialButtonIcon" icon={facebookIcon} />
                    Con Facebook
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
