'use strict';


//contains one lower-case, one upper-case, one special character, and minimum of 6 characters
var strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");

module.exports = function(Voter) {
  Voter.validatesLengthOf('password', {min: 6, message: {min: 'Password is too short'}});
  Voter.validatesFormatOf('password', {with: strongPassword , message : {with: 'Password is in wrong format'}});
  Voter.validatesFormatOf('email', {with: /\S+@\S+\.\S+/, message : {with: 'Email is in wrong format'}});
  Voter.validatesFormatOf('userName', {with: /^[a-zA-Z0-9]+$/, message : {with: 'User name is in wrong format'}});
  Voter.validatesLengthOf('ssn', {min: 5, max: 5, message: {min: 'SSN is too short', max: 'SSN is too long'}});
  Voter.validate('status', statusValidator, {message: 'Invalid status'});
};

function statusValidator(err) {
  if (this.status !== ('unregistered' || 'registered')) err();
};
