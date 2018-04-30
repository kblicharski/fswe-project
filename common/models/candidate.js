'use strict';

module.exports = function(Candidate) {
  Candidate.increment = function(id, cb) {
    const request = require('request');
    request('http://localhost:3000/api/candidates/'+ id, {json: true}, (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      var newVoteCount = body.voteCount + 1;
      try {
        Candidate.findById(id, function(err, candidate) {
          if (err) return err;
          candidate.updateAttribute('voteCount', newVoteCount, function (err, candidate) {
            if (err) {
              console.log(err);
              return cb(null, 404);
            }

            const content = {"action": body.name + " has received a vote ", "time": new Date()};
            Candidate.app.models.audit.create(content);
            return cb(null,200);
          });
        });
      } catch(err) {
        console.log(err);
        return cb(err);
      }


    });
  };

  Candidate.remoteMethod(
    'increment',
    {
      accepts: [
        {arg: 'id', type: 'number', required: true}
      ],
      http: {path: '/:id/increment', verb: 'post'},
      returns: {arg: 'incremented', type: 'boolean'}
    }
  );

};
