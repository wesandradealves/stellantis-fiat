const isNumber = require('../number');

function isNan(value) {
	const isnum = isNumber(value);
	return isnum === false || (isnum && value !== value);
}

module.exports = isNan;
