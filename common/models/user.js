'use strict';


//contains one lower-case, one upper-case, one special character, and minimum of 6 characters

var strongPassword = new RegExp("^(?=.*[\\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\\w!@#$%^&*]{6,}$");

module.exports = function(User) {
  User.validatesLengthOf('password', {min: 6, message: {min: 'Password is too short'}});
  //User.validatesFormatOf('password', {with: strongPassword , message : {with: 'Password is in wrong format'}});
  User.validatesFormatOf('email', {with: /\S+@\S+\.\S+/, message : {with: 'Email is in wrong format'}});
  User.validatesFormatOf('username', {with: /^[a-zA-Z0-9]+$/, message : {with: 'User name is in wrong format'}});
  User.validatesLengthOf('ssn', {is: 5, message: {is: 'SSN must be the last 5 numbers of your SSN'}});
  //User.validate('registrationStatus', registrationStatusValidator, {message: 'Invalid registrationStatus'});
  User.validate('role', roleValidator, {message: 'Invalid role'})
  User.validate('votingStatusValidator', votingStatusValidator, {message: 'Invalid voting registrationStatus'})
};

function registrationStatusValidator(err) {
  if (this.registrationStatus === "registered") true;
  else if (this.registrationStatus === "unregistered") true;
  else if (this.registrationStatus === "denied") true;
  else err();
};
function votingStatusValidator(err) {
  if (this.votingStatus === "idle") true;
  else if (this.votingStatus === "requesting") true;
  else if (this.votingStatus === "approved") true;
  else if (this.votingStatus === "denied") true;
  else err();
};


function roleValidator(err) {
  if (this.role === "voter") true;
  else if (this.role === "administrator") true;
  else if (this.role === "manager") true
  else err();
}
