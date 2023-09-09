function isNumber(value) {
	return typeof value === 'number' || value instanceof Number;
}

module.exports = isNumber;
