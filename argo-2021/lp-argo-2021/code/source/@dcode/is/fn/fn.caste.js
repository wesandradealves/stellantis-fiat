const isFn = require('./fn');

const reIsClass = /^class\s+/;
function isFnCaste(value) {
	return isFn(value) && reIsClass.test(String(value));
}

module.exports = isFnCaste;
