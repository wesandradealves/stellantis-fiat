const isFn = require('./fn');

const reIsClass = /^class\s+/;
function isFnCallable(value) {
	return isFn(value) && reIsClass.test(String(value)) === false;
}

module.exports = isFnCallable;
