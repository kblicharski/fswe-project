'use strict';


//contains one lower-case, one upper-case, one special character, and minimum of 6 characters

var strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");

module.exports = function(User) {
  User.validatesLengthOf('password', {min: 6, message: {min: 'Password is too short'}});
  User.validatesFormatOf('password', {with: strongPassword , message : {with: 'Password is in wrong format'}});
  User.validatesFormatOf('email', {with: /\S+@\S+\.\S+/, message : {with: 'Email is in wrong format'}});
  User.validatesFormatOf('username', {with: /^[a-zA-Z0-9]+$/, message : {with: 'User name is in wrong format'}});
  User.validatesLengthOf('ssn', {is: 5, message: {is: 'SSN must be the last 5 numbers of your SSN'}});
  User.validate('status', statusValidator, {message: 'Invalid status'});
  User.validate('role', roleValidator, {message: 'Invalid role'})
};

function statusValidator(err) {
  if (this.status === "registered") true;
  else if (this.status === "unregistered") true;
  else err();
};

function roleValidator(err) {
  if (this.role == "voter") true;
  else if (this.role == "administrator") true;
  else if (this.role == "manager") true
  else err();
}
