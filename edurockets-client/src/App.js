import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUp from './Views/SignUp';
import Login from './Views/Login';
import Landing from './Views/Landing';
import Construction from './Views/Construction';
import HomePage from './Views/HomePage';
import FormHolder from './Views/FormHolder';
import ProtectedRoute from './Components/ProtectedRoute';

import UserContext from './Providers/UserContext';

// Forms

import StudentSignUpForm from './Components/Forms/StudentSignUpForm';

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
        {/*Fomrs*/}

        <Route path="/signup/student">
          <FormHolder Form={StudentSignUpForm} />
        </Route>

        <Route path="/professional/student"></Route>

        <ProtectedRoute exact path="/homepage" user={user} component={HomePage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Landing} />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
