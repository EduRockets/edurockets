import React, { Component } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import useAuth from '../Providers/useAuth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;

/*
localStorage.getItem("äuthToken") ? (
  <Component >
)
*/
