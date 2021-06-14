import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import useAuth from '../Providers/useAuth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user === null) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/profile',
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
