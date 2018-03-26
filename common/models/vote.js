'use strict';

module.exports = function(Vote) {
  Vote.validatesFormatOf('candidate', {with: /[a-zA-Z]+/ , message : {with: 'Candidates may only contain letters'}});
  Vote.validatesFormatOf('voter', {with: /[0-9]+/ , message : {with: 'Voter id may only contain numbers'}});
};
