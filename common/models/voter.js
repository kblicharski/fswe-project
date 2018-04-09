'use strict';


//contains one lower-case, one upper-case, one special character, and minimum of 6 characters

var strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");

module.exports = function(Voter) {
  Voter.validatesLengthOf('password', {min: 6, message: {min: 'Password is too short'}});
  Voter.validatesFormatOf('password', {with: strongPassword , message : {with: 'Password is in wrong format'}});
  Voter.validatesFormatOf('email', {with: /\S+@\S+\.\S+/, message : {with: 'Email is in wrong format'}});
  Voter.validatesFormatOf('username', {with: /^[a-zA-Z0-9]+$/, message : {with: 'User name is in wrong format'}});
  Voter.validatesLengthOf('ssn', {is: 5, message: {is: 'SSN must be the last 5 numbers of your SSN'}});
 // Voter.validatesLengthOf('zipCode',  {is: 5, message: {is: 'ZipCode must be 5 numbers in length'}});
  Voter.validate('status', statusValidator, {message: 'Invalid status'});
};

function statusValidator(err) {
  if (this.status !== ('unregistered' || 'registered')) err();
};

