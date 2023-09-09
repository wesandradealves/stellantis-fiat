import isArray from './array';

export function isArrayEmpty(value) {
	return isArray(value) && value.length === 0;
}

export default isArrayEmpty;
