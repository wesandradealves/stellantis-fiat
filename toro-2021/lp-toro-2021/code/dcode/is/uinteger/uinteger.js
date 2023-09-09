const isInteger = require('../integer/integer');

function isUinteger(value) {
	return isInteger(value) && value >= 0;
}

module.exports = isUinteger;
