const isString = require('../string/string');

const reRegExpFlags = /^(?:([gimuy])(?!.*\1)){0,5}$/;
const isRegexpFlags = (value) => {
	if (isString(value)) {
		return reRegExpFlags.test(value);
	}
	return false;
};

isRegexpFlags.rule = reRegExpFlags;
module.exports = isRegexpFlags;
