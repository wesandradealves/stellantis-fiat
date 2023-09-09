const isString = require('../string/string');

const reRegExp = /^\/([\s\S]*)\/((?:([gimuy])(?!.*\3)){0,5})$/;
const isRegexpString = (value) => {
	if (isString(value)) {
		return reRegExp.test(value);
	}
	return false;
};

isRegexpString.rule = reRegExp;
module.exports = isRegexpString;
