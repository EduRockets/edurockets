import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUp from './Views/SignUp';
import Login from './Views/Login';
import Landing from './Views/Landing';
import Profile from './Views/Profile';
import EditProfile from './Views/EditProfile';
import Construction from './Views/Construction';
import HomePage from './Views/HomePage';
import SearchPage from './Views/SearchPage';
import FormHolder from './Views/FormHolder';
import ProtectedRoute from './Components/ProtectedRoute';

import UserContext from './Providers/UserContext';

// Forms
import StudentSignUpForm from './Components/Forms/StudentSignUpForm';
import ProfessionalSignUpForm from './Components/Forms/ProfessionalSignUpForm';

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

        <Route path="/signup/professional">
          <FormHolder Form={ProfessionalSignUpForm} />
        </Route>

        <ProtectedRoute exact path="/search" user={true} component={SearchPage} />
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
