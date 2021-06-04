import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Container, Row, Col } from 'reactstrap';

import StandardLayout from '../Layouts/StandardLayout';
import { CardSignUpStudent, CardSignUpProfessional } from '../Components/CardSignUp';

import './Styles/SignUpSwitch.css';

const SignUpSwitch = () => {
  const history = useHistory();

  const signup = async () => {
    try {
      const config = {
        headers: {
          'content-type': 'application/json',
        },
      };
      if (password !== confirmPassword) {
        setPassword('');
        setConfirmPassword('');
      } else {
        const newUser = {
          name,
          email,
          password,
        };
        const res = await axios.post('/auth/signup', JSON.stringify(newUser), config);
        localStorage.setItem('authToken', res.data.token);

        history.push('/');
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <StandardLayout>
      <Container className="SignUpSwtich" fluid>
        <Container className="SignUpSwtichContainer">
          <Row>
            <Col>
              <div className="SignUpSwtichTitle">¿En qué podemos ayudarte?</div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" lg="6">
              <CardSignUpStudent />
            </Col>

            <Col sm="12" lg="6">
              <CardSignUpProfessional />
            </Col>
          </Row>
        </Container>
      </Container>
    </StandardLayout>
  );
};

export default SignUpSwitch;
