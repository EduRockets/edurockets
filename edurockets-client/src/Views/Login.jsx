import React, { useState, useEffect } from 'react';
import { useLocation, Link} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Col, Row, Container, Button, Input, Alert, Label } from 'reactstrap';

import { Icon } from '@iconify/react';

import googleIcon from '@iconify-icons/logos/google-icon';
import facebookIcon from '@iconify-icons/logos/facebook';

import { validateEmail } from '../Helpers/Tools';

import EmptyLayout from '../Layouts/EmptyLayout';
import { NavBarLogin } from '../Components/NavBar';
import { login } from '../Api/index';
import useAuth from '../Providers/useAuth';

import './Styles/Login.css';

const Login = () => {
  const location = useLocation();
  const { setUser } = useAuth();

  const [cookies, setCookie] = useCookies(['token']);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [visible, setVisible] = useState(false);

  // States para validación\
  const [invalidEmail, setInvalidEmail] = useState(null);
  const [invalidPassword, setInvalidPassowrd] = useState(null);

  useEffect(() => {
    
  }, []);

  const credentials = {
    email: email,
    password: password,
  };

  const changeValue = (event) => {
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

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setInvalidEmail(true);
      if (password === '') {
        setInvalidPassowrd(true);
      } else {
        setInvalidPassowrd(false);
      }
    } else {
      setInvalidEmail(false);
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
                      name="email"
                      id="email"
                      value={email}
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
                      name="password"
                      id="password"
                      type="password"
                      value={password}
                      invalid={invalidPassword}
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
                  <Link to={{}} className="OlvidastePassword">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    className="LoginButton"
                    onClick={() => {
                      login(credentials)
                        .then((result) => {
                          /* setCookie('token', result.data.token, { path: '/' }); */
                          localStorage.setItem('token', result.data.token);
                          setUser({ ...result.data.user, redirectTo : location.state } );
                        })
                        .catch((err) => {
                          console.error(err);
                        });
                    }}
                  >
                    Iniciar sesión
                  </Button>
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
                  <Link to={{}} className="CrearCuentaContainerLink">
                    aquí
                  </Link>
                </Col>
              </Row>
              <Row>
                <Alert color="danger" isOpen={visible}>
                  I am an alert and I can be dismissed!
                </Alert>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </EmptyLayout>
  );
};

export default Login;
