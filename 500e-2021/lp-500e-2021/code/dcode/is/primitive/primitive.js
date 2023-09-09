const isFn = require('../fn/fn');

const OBJECT = 'object';

function isPrimitive(value) {
	if (value === undefined || value === null) return true;
	if (value instanceof Date) return false;
	if (isFn(value.valueOf)) value = value.valueOf();
	if (isFn(value) || typeof value === OBJECT) {
		return false;
	}
	return true;
}

module.exports = isPrimitive;
