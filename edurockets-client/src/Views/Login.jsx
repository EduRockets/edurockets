import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Col, Row, Container, Button, Input, Alert } from 'reactstrap';

import EmptyLayout from '../Layouts/EmptyLayout';

import { Icon, InlineIcon } from '@iconify/react';
import emailIcon from '@iconify-icons/carbon/email';
import googleIcon from '@iconify-icons/logos/google-icon';
import facebookIcon from '@iconify-icons/logos/facebook';

import { validateEmail, validatePassword } from '../Helpers/Tools';

import '../Styles/Login.css';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    const emptyVal = event.value === '';
    switch (event.name) {
      case 'email':
        setEmail(event.value);

        break;
      case 'password':
        setPassword(event.value);

        break;
      default:
    }
  };

  return (
    <EmptyLayout>
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
                    <Input
                      name="email"
                      id="email"
                      className="LoginInput"
                      placeholder="Correo electrónico"
                    />
                  </Col>
                </Row>
                <Row className="LoginInputContainer">
                  <Col>
                    <Input
                      name="password"
                      id="password"
                      className="LoginInput"
                      placeholder="Contraseña"
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
