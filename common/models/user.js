'use strict';

var loopback = require('loopback');
var app = module.exports = loopback();
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
  User.getEmail = function(id, cb ) {
    User.findById(id, function (err, instance){
      const request = require('request');
      const id = instance.id;
      request('http://localhost:3000/api/users/'+id+'?filter=%7B%22fields%22%3A%7B%22email%22%3Atrue%7D%7D', { json: true }, (err, res, body) => {
        if (err) {
          return console.log(err);
        }
        cb(null, body.email);
      });
    })
  };
  User.updatePassword = function(id, oldPassword, newPassword, cb) {
    var newErrMsg, newErr;
    try {
      user.hasPassword(oldPassword, function (err, isMatch) {
        if (isMatch) {
          user.updateAttribute('password',User.hashPassword(newPassword), function (err, instance) {
            if (err) {
              cb(err);
            } else {
              cb(null, true);
            }
          });
        }else {
          newErrMsg = 'User specified wrong current password !';
          newErr = new Error(newErrMsg);
          newErr.statusCode = 401;
          newErr.code = 'LOGIN_FAILED_PWD';
          return cb(newErr);
        }

      });
    }catch (err) {
        console.log(err);
        cb(err);
      }
  };
  User.remoteMethod(
    'getEmail',
      {
        http: {path: '/getEmail', verb: 'get'},
        accepts: {arg: 'id', type: 'string', http: { source: 'query' } },
        returns: {arg: 'email', type: 'string'}
      }
  );
  User.remoteMethod(
    'changePassword',
    {
      accepts: [
        {arg: 'id', type: 'number', required: true},
        {arg: 'oldPassword', type: 'string', required: true},
        {arg: 'newPassword', type: 'string', required: true}
      ],
      http: {path: '/:id/changePassword', verb: 'post'},
      returns: {arg: 'passwordChange', type: 'boolean'}
    }
  )
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
