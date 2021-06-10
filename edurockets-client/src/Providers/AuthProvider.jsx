import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as api from '../api/index.js';

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const { signUp, login, logout, test } = api;

  const history = useHistory();
  const [user, setUser] = useState(null);

  const testfunction = (credentials) => {
    test(credentials).then((response) => {
      console.log(response);
    });
  };

  const authSignUp = (credentials) => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
      signUp(credentials, config).then((res) => {
        console.log('Función del frontend SIGNUP: ', res);
      });
    } catch (err) {
      console.error('ERROR en función del frontend SIGNUP: ', err);
    }
  };

  const authLogin = (credentials, location) => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
      login(credentials, config).then((res) => {
        console.log('Función del frontend LOGIN: ', res);
      });
    } catch (err) {
      console.error(err);
    }
    /* setUser(true);
    if (location) {
      history.push(location);
    } */
  };

  const authLogout = () => {
    try {
      logout().then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const isLogged = () => !!user;

  const contextValue = {
    user,
    testfunction,

    authSignUp,
    authLogin,
    authLogout,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default AuthProvider;
