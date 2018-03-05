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
      userName: '',
      password: ''
    };
  }

  validateForm() {
    return this.state.userName.length > 0 && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let valid = false;
    const instance = axios.create({baseURL: 'http://localhost:3000'});
    instance.get('/api/voters')
      .then(
        (response) => {
          for (const elem in response.data) {
            const user = response.data[elem];
            if (user.password === this.state.password &&
              user.userName === this.state.userName) {
              valid = true;
            }
          }
          if (valid) {
            this.props.history.push('/home');
          } else {
            console.log('Invalid username or password.');
          }
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="userName" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.userName}
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
