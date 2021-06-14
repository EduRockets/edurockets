import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUpSwitch from './Views/SignUpSwitch';
import SignUp from './Views/SignUp';
import Login from './Views/Login';
import Landing from './Views/Landing';
import Profile from './Views/Profile';
import EditProfile from './Views/EditProfile';
import Construction from './Views/Construction';
import Schoolarship from './Views/Schoolarship';
import SearchPage from './Views/SearchPage';
import Requirements from './Views/Requirements';
import FormHolder from './Views/FormHolder';
import HelpResource from './Views/HelpResource';

import ProtectedRoute from './Components/ProtectedRoute';
import PublicRoute from './Components/PublicRoute';

import AuthProvider from './Providers/AuthProvider';

// Forms
import StudentSignUpForm from './Components/Forms/StudentSignUpForm';
import ProfessionalSignUpForm from './Components/Forms/ProfessionalSignUpForm';

const App = () => {
  const [user, setUser] = useState(true);

  useEffect(() => {}, []);

  const handleLogin = (event) => {
    event.preventDefault();
    setUser(true);
  };

  return (
    <Router>
      <AuthProvider>
        {/*Fomrs*/}
        <PublicRoute path="/studentform">
          <FormHolder Form={StudentSignUpForm} />
        </PublicRoute>

        <PublicRoute path="/professionalform">
          <FormHolder Form={ProfessionalSignUpForm} />
        </PublicRoute>

        <PublicRoute exact path="/signup/:userType" component={SignUp} />
        <PublicRoute exact path="/signupswitch" component={SignUpSwitch} />

        <PublicRoute exact path="/login" component={Login} />

        <ProtectedRoute exact path="/schoolarship/help" component={HelpResource} />
        <ProtectedRoute exact path="/requirements/id" component={Requirements} />

        <ProtectedRoute exact path="/schoolarship/:id" component={Schoolarship} />
        <ProtectedRoute exact path="/search" component={SearchPage} />

        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/editprofile/:id" component={EditProfile} />

        <PublicRoute exact path="/" component={Landing} />

        <Route exact path="/underConstruction" component={Construction} />
      </AuthProvider>
    </Router>
  );
};

export default App;
