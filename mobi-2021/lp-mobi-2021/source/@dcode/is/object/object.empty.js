const isObject = require('./object');

function isObjectEmpty(value) {
	if (isObject(value) === false) return false;
	for (const key in value) {
		if (Object.prototype.hasOwnProperty.call(value, key)) {
			return false;
		}
	}
	return true;
}

module.exports = isObjectEmpty;
