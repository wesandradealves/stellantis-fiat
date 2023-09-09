export const toString = Object.prototype.toString;

export function is(expected, value) {
	return new RegExp(`(${expected})`).test(toString.call(value));
}

export default is;
