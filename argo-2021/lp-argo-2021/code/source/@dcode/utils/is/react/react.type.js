import isReact from './react';

export function isReactType(expected, value) {
	if (!isReact(value)) return false;
	return new RegExp(`(${expected})`).test(value.type);
}

export default isReactType;
