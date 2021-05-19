import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUp from './Views/SignUp';
import Login from './Views/Login';
import Landing from './Views/Landing';
import Construction from './Views/Construction';

const App = () => {
  return (
    <Router>
      <Route exact path="/underConstruction" component={Construction} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Landing} />
    </Router>
  );
};

export default App;
