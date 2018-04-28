'use strict';

//contains one lower-case, one upper-case, one special character, and minimum of 6 characters
var strongPassword = new RegExp("^(?=.*[\\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\\w!@#$%^&*]{6,}$");

module.exports = function(User) {

  User.validatesLengthOf('password', {min: 6, message: {min: 'Password is too short'}});
  //User.validatesFormatOf('password', {with: strongPassword , message : {with: 'Password is in wrong format'}});
  User.validatesFormatOf('email', {with: /\S+@\S+\.\S+/, message : {with: 'Email is in wrong format'}});
  User.validatesFormatOf('username', {with: /^[a-zA-Z0-9]+$/, message : {with: 'User name is in wrong format'}});
  User.validatesLengthOf('ssn', {is: 5, message: {is: 'SSN must be the last 5 numbers of your SSN'}});
  User.validate('registrationStatus', registrationStatusValidator, {message: 'Invalid registrationStatus'});
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
  User.getElections = function(pid,eid, cb ) {

      const request = require('request');
      var precinctId = pid;
      var filterOut = [];
      var electionIds = [];
      request('http://localhost:3000/api/elections?filter=%7B%22fields%22%3A%7B%22id%22%3A%20true%2C%20%22precincts%22%3Atrue%7D%7D', { json: true }, (err, res, body) => {
        if (err) {
          return console.log(err);
        }


        for (var i in body) {
            if((body[i].precincts).includes(precinctId)) {
              electionIds.push(body[i].id);
            }
        }
        request('http://localhost:3000/api/votes?filter=%7B%22where%22%3A%7B%22voter%22%3A%201%7D%7D', { json: true }, (err, res, body) => {
          if (err) {
            return console.log(err);
          }

          for (var i in body) {
            if((body[i].voter) === eid) {
              filterOut.push(body[i].electionId);
            }
          }
        });
        const filteredEIDs = []
        for (var i in electionIds) {
          if(filterOut.includes(electionIds[i]) === false) {
            filteredEIDs.push(electionIds[i]);
          }
        }
        cb(null, filteredEIDs);
      });
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
  User.loginUser = function(username, password, cb) {
    var newErrMsg, newErr;
    const request = require('request');
    request('http://localhost:3000/api/users?filter=%7B%22where%22%3A%7B%22username%22%3A%20%22'+username+'%22%7D%7D', {json: true}, (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      if(body[0].registrationStatus === "unregistered") {
        newErrMsg = 'User is unregistered';
        newErr = new Error(newErrMsg);
        newErr.statusCode = 401;
        newErr.code = 'LOGIN_FAILED_PWD';
        return cb(newErr);
      }
      try {
        user.login({username: username, password: password},function(err,isMatch) {
          if(isMatch) {
            newErrMsg = 'Login Success';
            newErr = new Error(newErrMsg);
            newErr.statusCode = 200;
            return cb(null, 200);
          }else {
            newErrMsg = 'User specified wrong current password';
            newErr = new Error(newErrMsg);
            newErr.statusCode = 402;
            newErr.code = 'LOGIN_FAILED_PWD';
            return cb(newErr);
          }
        });
      }catch (err) {
        console.log(err);
        cb(err);
      }


    });

  };
  User.resetPassword = function(id, cb) {
    const request = require('request');
    request('http://localhost:3000/api/users/getEmail?id='+id, {json: true}, (err, res, body) => {
      if (err) {
        return console.log(err);
      }

      var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      const newPassword = retVal;
      const emailAddress = body.email;
      user.up
      user.updateAttribute('newPassword',User.hashPassword(newPassword), function (err, instance) {
        if (err) {
          cb(err);
        } else {
          cb(null, true);
        }
      });
      const html = '<p>Your password has been reset to:</p>\n' +
        '<p>'+ newPassword + '</p>';
      try {
        User.sendMail(emailAddress, html, 'Your new password');
        return cb(null,200);
      }catch (err) {
        console.log(err);
        cb(err);
      }


    });
  };
  User.sendMail = function(toEmail, html, subject) {

    // send email using Email model of Loopback
    User.app.models.Email.send({
      to: toEmail,
      from: 'no-reply@email.com',
      subject: subject,
      html: html
    }, function(err, mail) {
      console.log('email sent!');
      if(err) return err;
    });
  };
  User.remoteMethod(
    'resetPassword',
    {
      accepts: [
        {arg: 'id', type: 'string', required: true},
      ],
      http: {path: '/:id/resetPassword', verb: 'get'},
      returns: {arg: 'status', type: 'string'}
    }
  );
  User.remoteMethod(
    'sendMail',
    {
      http: {path: '/sendEmail', verb: 'get'},
      accepts: [
        {arg: 'toEmail', type: 'string', http: { source: 'query' } },
        {arg: 'html', type: 'string', http: { source: 'query' } },
        {arg: 'subject', type: 'string', http: { source: 'query' } }
        ],
      returns: {arg: 'status', type: 'string'}
    }

  );
  User.remoteMethod(
    'getEmail',
      {
        http: {path: '/getEmail', verb: 'get'},
        accepts: {arg: 'id', type: 'string', http: { source: 'query' } },
        returns: {arg: 'email', type: 'string'}
      }
  );
  User.remoteMethod(
    'getElections',
    {
      accepts: [
        {arg: 'precinctId', type: 'number', required: true},
        {arg: 'userId', type: 'number', required: true}
      ],
      http: {path: '/:precinctId/:userId/getElections', verb: 'get'},
      returns: {arg: 'ids', type: 'array'}
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
  );
  User.remoteMethod(
    'loginUser',
    {
      accepts: [
        {arg: 'username', type: 'string', http: {source: 'query'} },
        {arg: 'password', type: 'string', http: {source: 'query'} }
      ],
      http: {path: '/loginUser', verb: 'post'},
      returns: {arg: 'status', type: 'string'}
    }
  );
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
