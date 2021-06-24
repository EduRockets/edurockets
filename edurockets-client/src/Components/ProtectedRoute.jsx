import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import useAuth from '../Providers/useAuth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user !== null) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  referrer: location,
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
