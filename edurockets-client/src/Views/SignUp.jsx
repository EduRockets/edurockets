import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input, Container, Alert } from 'reactstrap';

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
    <>
      <Container>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input name="name" id="name" onChange={(event) => changeValue(event.currentTarget)} />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={(event) => changeValue(event.currentTarget)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={(event) => changeValue(event.currentTarget)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={(event) => changeValue(event.currentTarget)}
            />
          </FormGroup>
          <FormGroup>
            <Button onClick={signup}>Crear usuario</Button>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
