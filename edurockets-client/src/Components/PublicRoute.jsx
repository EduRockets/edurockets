import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import useAuth from '../Providers/useAuth';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user === null) {
          return <Component {...props} />;
        } else {
          const { location } = props;
          if (location){
            const { state } = location;
            if (state) return(< Redirect to={ state.referrer ? (state.referrer.pathname) : ("/profile") }/>  ) 
          }
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

export default PublicRoute;

/*
localStorage.getItem("äuthToken") ? (
  <Component >
)
*/
