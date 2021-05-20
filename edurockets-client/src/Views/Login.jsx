import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Alert, Container } from 'reactstrap';

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
    <Container>
      <Form>
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
          <Button onClick={login}>Iniciar sesión</Button>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default Login;
