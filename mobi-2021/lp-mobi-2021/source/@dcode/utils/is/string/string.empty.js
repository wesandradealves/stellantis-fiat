import isString from './string';

export function isStringEmpty(value) {
	return isString(value) && value.length === 0;
}

export default isStringEmpty;
