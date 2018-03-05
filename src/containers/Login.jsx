import React, { Component } from 'react';
import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  Panel
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const instance = axios.create({baseURL: 'http://localhost:3000'});
    instance.get('/api/voters')
      .then((response) => {console.log(response);})
      .catch((error) => {console.log(error);});
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >Login
          </Button>
          <br />
          <Panel>
            <Panel.Body>
              <Link to="/registration">New account?</Link>
              <Link
                style={{float: 'right'}} to="/forgot-password"
              >Forgot password</Link>
            </Panel.Body>
          </Panel>
        </form>
      </div>
    );
  }
}
