'use strict';

module.exports = function(Election) {
  Election.validate('type', typeValidator, {message: 'Invalid role'})
};
function typeValidator(err) {
  if (this.type === "state") true;
  else if (this.type === "local") true;
  else if (this.type === "national") true;
  else err();
};
