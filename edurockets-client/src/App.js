import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUp from './Views/SignUp';
import Login from './Views/Login';
import Landing from './Views/Landing';
import Profile from './Views/Profile';
import EditProfile from './Views/EditProfile';
import Construction from './Views/Construction';
import HomePage from './Views/HomePage';
import ProtectedRoute from './Components/ProtectedRoute';

import UserContext from './Providers/UserContext';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (event) => {
    event.preventDefault();
    setUser(true);
  };

  return (
    <Router>
      <Route exact path="/underConstruction" component={Construction} />
      <UserContext.Provider value={user}>
        <ProtectedRoute exact path="/homepage" user={user} component={HomePage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/editprofile" component={EditProfile} />
        <Route exact path="/" component={Landing} />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
