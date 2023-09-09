const isNumber = require('../number/number');

function isInteger(value) {
	return isNumber(value) && value === value && value % 1 === 0;
}

module.exports = isInteger;
