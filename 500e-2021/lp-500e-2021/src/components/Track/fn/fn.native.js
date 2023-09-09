const isFn = require('./fn');

const reIsNativeFn = /\[native\scode\]/;
function isFnNative(value) {
	return isFn(value) && reIsNativeFn.test(value.toString());
}

module.exports = isFnNative;
