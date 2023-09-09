const isObject = require('./object');
const is = require('../is');

function isObjectOf(expected, value) {
	if (isObject(value) === false) return false;
	const props = Object.keys(value);
	for (let i = props.length - 1; i > -1; i -= 1) {
		if (is(expected, value[props[i]]) === false) return false;
	}
	return true;
}

module.exports = isObjectOf;
