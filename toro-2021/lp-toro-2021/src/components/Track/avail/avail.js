const isUnavail = require('../unavail');

function isAvail(value) {
  return isUnavail(value) === false;
}

module.exports = isAvail;
