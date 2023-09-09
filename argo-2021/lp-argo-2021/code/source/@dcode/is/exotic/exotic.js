const isPrimitive = require('../primitive');

function isExotic(value) {
	return isPrimitive(value) === false;
}

module.exports = isExotic;
