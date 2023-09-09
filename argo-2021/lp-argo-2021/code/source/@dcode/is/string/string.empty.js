const isString = require('./string');

function isStringEmpty(value) {
	return isString(value) && value.length === 0;
}

module.exports = isStringEmpty;
