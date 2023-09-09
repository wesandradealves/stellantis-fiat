function isRegexp(value) {
	if (value === undefined || value === null) return false;
	return value instanceof RegExp;
}

module.exports = isRegexp;
