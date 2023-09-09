const isNumber = require('../number');

function isInfinity(value) {
	return isNumber(value) && (value - 1) === value;
}

module.exports = isInfinity;
