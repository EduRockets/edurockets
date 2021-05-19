import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUp from './Views/SignUp';
import Login from './Views/Login';
import Landing from './Views/Landing';
import Construction from './Views/Construction';
import Profile from './Views/Profile';

import ProtectedRoute from './Components/ProtectedRoute';

const App = () => {
  const [user, setUser] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setUser(true);
  };

  return (
    <Router>
      <Route exact path="/underConstruction" component={Construction} />
      <ProtectedRoute exact path="/profile" user={user} component={Profile} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Landing} />
      <ProtectedRoute isAuth={user} component={Profile} />
    </Router>
  );
};

export default App;
