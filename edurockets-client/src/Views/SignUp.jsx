import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Container, Row, Col, Button } from 'reactstrap';

import StandardLayout from '../Layouts/StandardLayout';
import CardSignUp from '../Components/CardSignUp';

import '../Styles/SignUp.css';

const SignUp = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const formData = {
    name: name,
    email: email,
    password: password,
  };

  const changeValue = (event) => {
    const emptyVal = event.value === '';
    switch (event.name) {
      case 'name':
        setName(event.value);
        break;
      case 'email':
        setEmail(event.value);

        break;
      case 'password':
        setPassword(event.value);

        break;
      case 'confirmPassword':
        setConfirmPassword(event.value);

        break;
      default:
    }
  };

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
      <Container className="SignUp" fluid>
        <Container className="SignUpContainer">
          <Row>
            <Col>
              <div className="SignUpTitle">¿En qué podemos ayudarte?</div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" lg="6" className="position-relative">
              <CardSignUp
                src="/Images/Estudiante.png"
                title="Un despegue rápido que te lleve a las estrellas"
                text="Estás por graduarte del colegio y listo para convertirte en quien deseas ser."
              />
            </Col>

            <Col sm="12" lg="6">
              <CardSignUp
                src="/Images/Profesional.png"
                title="Volar más alto y más rápido"
                text="Eres un profesional en busca de las mejores oportunidades laborales y académicas."
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </StandardLayout>
  );
};

export default SignUp;
