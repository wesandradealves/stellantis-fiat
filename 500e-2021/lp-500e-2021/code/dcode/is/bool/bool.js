function isBool(value) {
	return value === true || value === false || value instanceof Boolean;
}

module.exports = isBool;
