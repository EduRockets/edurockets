import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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

const SignUp = (props) => {
  const history = useHistory();
  const { userType } = useParams();
  const { setUser } = useAuth();

  const [cookies, setCookie] = useCookies(['token']);

  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // States para validación\
  const [validEmail, setValidEmail] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

  useEffect(() => {}, []);

  const credentials = {
    email: email,
    password: password,
  };

  const changeValue = (event) => {
    const emptyVal = event.value === '';
    switch (event.name) {
      case 'email':
        setEmail(event.value);
        const checkEmail = validateEmail(email);
        setValidEmail(checkEmail);
        setInvalidEmail(!checkEmail);
        break;
      case 'password':
        setPassword(event.value);
        const checkPassword = validatePassword(password);
        setValidPassword(checkPassword);
        setInvalidPassword(!checkPassword);
        break;
      case 'confirmPassword':
        setConfirmPassword(event.value);
        break;
      default:
    }
  };

  const handleCreate = () => {
    if (validEmail && password === confirmPassword) {
      const config = { headers: { 'Content-Type': 'application/json' } };
      signUp(credentials, config)
        .then((res) => {
          setCookie('token', res.data.token, { path: '/' });
          setUser(res.data.user);
          if (userType === 'student') {
            history.push('/studentform');
          } else {
            history.push('/professionalform');
          }
        })
        .catch((err) => {
          console.log('Error creación de usuario', err);
        });
    }
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
                    valid={validEmail}
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
                    valid={validPassword}
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
                    id="password"
                    type="password"
                    value={confirmPassword}
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
              <Row>
                <Col className="SignUpTitle">Crea tu cuenta ahora</Col>
              </Row>
              <Row>
                <Col className="SignUpSubTitle">Estamos listos para impulsar tus sueños</Col>
              </Row>
              {renderByStep()}
            </Col>
          </Row>
        </Container>
      </Container>
    </EmptyLayout>
  );
};

export default SignUp;
