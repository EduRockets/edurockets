import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Col, Row, Container, Button, Input, Label } from 'reactstrap';
import { useCookies } from 'react-cookie';

import { Icon } from '@iconify/react';
import googleIcon from '@iconify-icons/logos/google-icon';
import facebookIcon from '@iconify-icons/logos/facebook';

import { validateEmail, validatePassword } from '../Helpers/Tools';
import EmptyLayout from '../Layouts/EmptyLayout';
import { NavBarSignUp } from '../Components/NavBar';

import useAuth from '../Providers/useAuth';
import { signUp } from '../Api/index.js';

import './Styles/SignUp.css';

const SignUp = () => {
  const history = useHistory();
  const location = useLocation();
  const { setUser } = useAuth();

  const [cookies, setCookie] = useCookies(['token']);

  const [isAllowed, setIsAllowed] = useState(false);
  const [step, setStep] = useState(0);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // States para validación\
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidConfirmPassword, setInvalidConfirmPassword] = useState(false);

  const credentials = {
    email: email,
    password: password,
    userType: location.state,
  };

  useEffect(() => {
    if (location.state === 'student' || location.state === 'professional') {
      setIsAllowed(true);
    }
  }, []);

  const changeValue = (event) => {
    switch (event.name) {
      case 'email':
        setEmail(event.value);
        setInvalidEmail(false);
        break;
      case 'password':
        setPassword(event.value);
        setInvalidPassword(false);
        break;
      case 'confirmPassword':
        setConfirmPassword(event.value);
        setInvalidConfirmPassword(false);
        break;
      default:
    }
  };

  const handleCreate = () => {
    setInvalidEmail(!validateEmail(email));
    setInvalidPassword(!validatePassword(password));

    if (validateEmail(email) && validatePassword(password)) {
      if (confirmPassword === password) {
        const config = { headers: { 'Content-Type': 'application/json' } };
        signUp(credentials, config)
          .then((res) => {
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        setInvalidConfirmPassword(true);
      }
    } else {
      console.log('Invalido');
    }
    /* setCookie('token', res.data.token, { path: '/' }); */
  };

  const renderByStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="SignUpStep0Container">
            <Row>
              <Col>
                <Button
                  onClick={() => {
                    setStep(1);
                  }}
                  className="SignUpButton"
                >
                  Correo Electrónico
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="SignUpSocialButton">
                  <Icon className="SignUpSocialButtonIcon" icon={googleIcon} />
                  Con Google
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="SignUpSocialButton">
                  <Icon className="SignUpSocialButtonIcon" icon={facebookIcon} /> Con Facebook
                </Button>
              </Col>
            </Row>
          </div>
        );
      case 1:
        return (
          <>
            <div className="SignUpInputsContainer">
              <Row className="SignUpInputContainer">
                <Col>
                  <Label className="SignUpLabel">Correo electrónico</Label>
                  <Input
                    className="SignUpInput"
                    name="email"
                    id="email"
                    value={email}
                    invalid={invalidEmail}
                    onChange={(event) => changeValue(event.currentTarget)}
                  />
                </Col>
              </Row>
              <Row className="SignUpInputContainer">
                <Col>
                  <Label className="SignUpLabel">Contraseña</Label>
                  <Input
                    className="SignUpInput"
                    placeholder="Debe contener al menos 8 carácteres"
                    name="password"
                    id="password"
                    type="password"
                    value={password}
                    invalid={invalidPassword}
                    onChange={(event) => changeValue(event.currentTarget)}
                  />
                </Col>
              </Row>
              <Row className="SignUpInputContainer">
                <Col>
                  <Label className="SignUpLabel">Confirmar Contraseña</Label>
                  <Input
                    className="SignUpInput"
                    name="confirmPassword"
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    invalid={invalidConfirmPassword}
                    onChange={(event) => changeValue(event.currentTarget)}
                  />
                </Col>
              </Row>
            </div>

            <Row>
              <Col>
                <Button
                  onClick={() => {
                    setStep(0);
                  }}
                  className="SignUpBackButton"
                >
                  Retroceder
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={() => {
                    handleCreate();
                  }}
                  className="SignUpButton"
                >
                  Crear Cuenta
                </Button>
              </Col>
            </Row>
          </>
        );

      default:
        break;
    }
  };

  return (
    <EmptyLayout>
      <NavBarSignUp />
      <Container className="SignUp" fluid>
        <Container className="SignUpContainer">
          <Row>
            <Col lg="7" className="SignUpLeftContainer" />
            <Col lg="5" className="SignUpRightContainer">
              {isAllowed ? (
                <>
                  <Row>
                    <Col className="SignUpTitle">Crea tu cuenta ahora</Col>
                  </Row>
                  <Row>
                    <Col className="SignUpSubTitle">Estamos listos para impulsar tus sueños</Col>
                  </Row>
                  {renderByStep()}
                </>
              ) : (
                <div style={{ height: '400px' }}>
                  <Row>
                    <Col className="SignUpTitle">Hubo un error</Col>
                  </Row>
                  <Row>
                    <Col className="SignUpSubTitle">Vuelve a seleccionar el tipo de usuario</Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button
                        className="SignUpButton"
                        onClick={() => {
                          history.push('/signupswitch');
                        }}
                      >
                        Volver a la selección de usuario
                      </Button>
                    </Col>
                  </Row>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </Container>
    </EmptyLayout>
  );
};

export default SignUp;
