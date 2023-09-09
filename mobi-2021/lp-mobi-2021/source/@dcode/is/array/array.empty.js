const isArray = require('./array');

function isArrayEmpty(value) {
	return isArray(value) && value.length === 0;
}

module.exports = isArrayEmpty;
