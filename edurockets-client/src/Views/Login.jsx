import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formData = {
    email: email,
    password: password,
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
    <>
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
          <Button
            onClick={() => {
              console.log(formData);
            }}
          >
            Iniciar sesión
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default Login;
