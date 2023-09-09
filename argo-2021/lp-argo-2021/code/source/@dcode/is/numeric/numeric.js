const isArraylike = require('../arraylike/arraylike');
const isBool = require('../bool');
const isNan = require('../nan');
const isInfinity = require('../infinity');

const isNumeric = (value) => {
	if (value === undefined || value === null) return false;
	if (isBool(value)) return true;
	try {
		const test = parseFloat(value);
		return (isNan(test) || isInfinity(test) || isArraylike(test)) === false;
	} catch (err) {
		return false;
	}
};

module.exports = isNumeric;
