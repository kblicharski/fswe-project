'use strict';

module.exports = function(Vote) {
  Vote.validatesFormatOf('voter', {with: /[0-9]+/ , message : {with: 'Voter id may only contain numbers'}});
};
