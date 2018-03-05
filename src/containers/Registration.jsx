import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import './Registration.css';

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
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    const state = this.state;
    return state.firstName !== '' &&
      state.lastName !== '' &&
      state.dob !== '' &&
      state.driversLicense !== '' &&
      state.ssn.length < 6 && state.ssn.length > 1 &&
      state.email.match(
        '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])') &&
      state.username !== '' &&
      state.password !== '';
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.history.push('/login')
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
            <ControlLabel>Date of Birth (MM/DD/YY)</ControlLabel>
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
            // validationState={this.validateSSN()}
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

          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="text"
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
          >Register
          </Button>

        </form>
      </div>
    );
  }
}