import React from 'react';
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Registration from './Registration';
import Home from './Home';
import PasswordReset from './PasswordReset';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/forgot-password" component={PasswordReset} />
    </div>
  </Router>
);
export default App;