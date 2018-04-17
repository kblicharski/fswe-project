'use strict';

//contains one lower-case, one upper-case, one special character, and minimum of 6 characters
var strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");

module.exports = function(Manager) {
  Manager.validatesLengthOf('password', {min: 6, message: {min: 'Password is too short'}});
  Manager.validatesFormatOf('password', {with: strongPassword, message : {with: 'password is in wrong format'}});
  Manager.validatesFormatOf('username', {with: /^[a-zA-Z0-9]+$/, message : {with: 'User name is in wrong format'}});
};
