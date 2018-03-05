import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import './Registration.css';
import axios from 'axios/index';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      dob: '',
      driversLicense: '',
      ssn: '',
      email: '',
      userName: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    const state = this.state;
    return state.firstName !== '' &&
      state.lastName !== '' &&
      state.dob !== '' && state.dob.match(
        '^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\\d\\d$') &&
      state.driversLicense !== '' &&
      state.ssn.length < 6 && state.ssn.length > 1 &&
      state.ssn.match('^[0-9][0-9][0-9][0-9][0-9]$') &&
      state.email.match(
        '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])') &&
      state.userName !== '' &&
      state.password !== '' && state.password.length > 6;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.validateForm()) {
      return;
    }
    const instance = axios.create({baseURL: 'http://localhost:3000'});

    let valid = true;
    instance.get('/api/voters')
      .then(
        (response) => {
          for (const elem in response.data) {
            const user = response.data[elem];
            if (user.userName === this.state.userName) {
              console.log('Already existing username, please choose another.');
              valid = false;
            }
            if (user.email === this.state.email) {
              console.log('Already existing email, please choose another.');
              valid = false;
            }
          }
          if (!valid) {
            return;
          }
          instance.post(
            '/api/voters',
            {
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              dob: this.state.dob,
              driversLicense: this.state.driversLicense,
              ssn: this.state.ssn,
              email: this.state.email,
              userName: this.state.userName,
              password: this.state.password,
              status: 'unregistered'
            }
          )
            .then(
              (response) => {
                console.log(response);
              }
            )
            .catch(
              (error) => {
                if (error.response) {
                  // The request was made and the server responded with a
                  // status code that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the
                  // browser and an instance of http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that
                  // triggered an Error
                  console.log('Error', error.message);
                }
                console.log(error.config);
              }
            );
          this.props.history.push('/login');
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
      <div className="Registration">
        <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="firstName" bsSize="large">
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="lastName" bsSize="large">
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="dob" bsSize="large">
            <ControlLabel>Date of Birth (MM/DD/YYYY)</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.dob}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="driversLicense" bsSize="large">
            <ControlLabel>Drivers License ID</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.driversLicense}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup
            controlId="ssn" bsSize="large"
          >
            <ControlLabel>Last 5 Digits of SSN</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.ssn}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>

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
          >Register
          </Button>

        </form>
      </div>
    );
  }
}
