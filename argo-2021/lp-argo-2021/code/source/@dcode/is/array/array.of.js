const is = require('../is');
const isArraylike = require('../arraylike/arraylike');

function isArrayOf(expected, value) {
	if (isArraylike(value) === false) return false;
	for (let idx = value.length - 1; idx > -1; idx -= 1) {
		if (is(expected, value[idx]) === false) return false;
	}
	return true;
}

module.exports = isArrayOf;
