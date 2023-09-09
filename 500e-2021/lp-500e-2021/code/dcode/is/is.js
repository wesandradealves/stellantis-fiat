const { toString } = Object.prototype;

function is(expected, value) {
	return new RegExp(`(${expected})`).test(toString.call(value));
}

module.exports = is;
