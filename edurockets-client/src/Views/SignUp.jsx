import React, { useState, useEffect } from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';
import { Col, Row, Container, Button, Input, Alert, Label } from 'reactstrap';

import { Icon } from '@iconify/react';

import lockedIcon from '@iconify-icons/carbon/locked';
import emailIcon from '@iconify-icons/carbon/email';
import googleIcon from '@iconify-icons/logos/google-icon';
import facebookIcon from '@iconify-icons/logos/facebook';

import { validateEmail, validatePassword } from '../Helpers/Tools';

import EmptyLayout from '../Layouts/EmptyLayout';
import { NavBarSignUp } from '../Components/NavBar';

import './Styles/SignUp.css';

const SignUp = (props) => {
  const history = useHistory();

  const userType = props.location.userType;

  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // States para validación\
  const [validEmail, setValidEmail] = useState(null);
  const [invalidEmail, setInvalidEmail] = useState(null);
  const [validPassword, setValidPassword] = useState(null);
  const [invalidPassword, setInvalidPassword] = useState(null);

  useEffect(() => {
    console.log(userType);
  }, []);

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
                  <Icon icon={googleIcon} />
                  Con Google
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="SignUpSocialButton">
                  <Icon icon={facebookIcon} /> Con Facebook
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
                    placeholder="juanperez@edurockets.com"
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
              <Row className="SignUpInputContainer">
                <Col>
                  <Label className="SignUpLabel">Confirmar Contraseña</Label>
                  <Input
                    className="SignUpInput"
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
              <Col>
                <Button
                  onClick={() => {
                    setStep(0);
                  }}
                  className="SignUpButton"
                >
                  Retroceder
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={() => {
                    if (userType.name === 'student') {
                      history.push('/signup/student');
                    } else {
                      history.push('/signup/professional');
                    }
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
      <NavBarSignUp />
      <Container className="SignUp" fluid>
        <Container className="SignUpContainer">
          <Row>
            <Col lg="7" className="SignUpLeftContainer" />
            <Col lg="5" className="SignUpRightContainer">
              <Row>
                <Col className="SignUpTitle">¡Hola!</Col>
              </Row>
              <Row>
                <Col className="SignUpSubTitle">
                  Crea tu cuenta y te ayudaremos a impulsar tus sueños
                </Col>
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
