import React from 'react';
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>
);
export default App;