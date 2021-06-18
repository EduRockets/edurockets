import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import * as api from '../Api/index';

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const { getUser, signUp, login, logout, check, test } = api;
  const [cookies, setCookie] = useCookies(['token']);

  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then((res) => {
      setUser(res.data.user);
    });
  }, []);

  const testfunction = (credentials) => {
    test(credentials).then((response) => {
      console.log(response);
    });
  };

  const authSignUp = (credentials) => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
      signUp(credentials, config).then((res) => {
        setCookie('token', res.data.token, { path: '/' });
        {
          /*setCookie('user', res.data.user, { path: '/' });*/
        }
        setUser(res.data.user);
      });
    } catch (err) {
      console.error('ERROR en función del frontend SIGNUP: ', err);
    }
  };

  const authLogin = (credentials, location) => {
    try {
      login(credentials).then((res) => {
        setCookie('token', res.data.token, { httpOnly: true, path: '/' });
        {
          /*setCookie('user', res.data.user, { path: '/' });*/
        }
        setUser(res.data.user);
      });
    } catch (err) {
      console.error(err);
    }
    if (location) {
      history.push(location);
    }
  };

  const authLogout = () => {
    try {
      logout().then((res) => {
        console.log('Logout ', res);
        setUser(null);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const isLogged = () => !!user;

  const contextValue = {
    testfunction,

    user,
    setUser,

    authSignUp,
    authLogin,
    authLogout,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default AuthProvider;
