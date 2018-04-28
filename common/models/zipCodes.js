'use strict';

module.exports = function(zipCode) {

  zipCode.getPrecinct = function(zipCode, cb) {
    const request = require('request');
    request('http://localhost:3000/api/zipCodes?filter=%7B%22where%22%3A%7B%22zipcode%22%3A'+zipCode+'%7D%7D', {json: true}, (err, res, body) => {
      if (err) {
        return console.log(err);
      }else {
        console.log(body);
        console.log(body[0]);
        var precincts = body[0].precincts;
        var strippedPrecincts = precincts.replace('[','');
        strippedPrecincts = strippedPrecincts.replace(']','');
        strippedPrecincts = strippedPrecincts.replace(/ /g,'')
        const splitPrecincts = strippedPrecincts.split(",");
        const lenSplitPrecints = splitPrecincts.length;
        const randPre = Math.floor(Math.random() * lenSplitPrecints);
        cb(null,splitPrecincts[randPre]);

      }

    });
  };

  zipCode.remoteMethod(
    'getPrecinct',
    {
      accepts: [
        {arg: 'zipCode', type: 'string', required: true},
      ],
      http: {path: '/:zipCode/getPrecinct', verb: 'get'},
      returns: {arg: 'precinctId', type: 'number'}
    }
  );
};
