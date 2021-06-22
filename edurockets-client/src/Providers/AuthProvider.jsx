import React, { createContext, useState, useEffect } from 'react';
import { Cookies, useCookies } from 'react-cookie';

import * as api from '../Api/index';

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const { signUp, getUser } = api;
  const [cookies, setCookie] = useCookies(['token']);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUser({
        headers: {
          'x-auth-token': token,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => {
          setUser(null)
          console.error(err);
        });
    }
  }, []);

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

  const contextValue = {
    user,
    setUser,

    authSignUp,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default AuthProvider;
