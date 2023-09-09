const isArray = require('../array/array');
const isString = require('../string/string');

function isArraylike(value) {
	return (
		isArray(value)
		|| isString(value)
		|| (
			!!value
			&& typeof value === 'object'
			&& typeof value.length === 'number'
			&& (
				value.length === 0
				|| (
					value.length > 0
					&& value.length - 1 in value
				)
			)
		)
	);
}

module.exports = isArraylike;
