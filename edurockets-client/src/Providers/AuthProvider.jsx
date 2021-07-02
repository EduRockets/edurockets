import React, { createContext, useState, useEffect } from 'react';
import { Cookies, useCookies } from 'react-cookie';

import * as api from '../Api/index';

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const { getUser, getProfile } = api;
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
        .then((result) => {
          if (result.data.profileId) {
            const userType = result.data.userType;
            const id = result.data.profileId;
            getProfile(userType, id)
              .then((res) => {
                setUser({ ...result.data, ...res.data });
              })
              .catch((err) => {
                console.error(err);
              });
          } else {
            setUser(res.data);
          }
        })
        .catch((err) => {
          setUser(null);
          console.error(err);
        });
    }
  }, []);

  const contextValue = {
    user,
    setUser,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default AuthProvider;
