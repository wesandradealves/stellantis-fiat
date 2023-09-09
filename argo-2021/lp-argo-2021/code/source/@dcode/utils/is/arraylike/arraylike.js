import isArray from '@dcode/utils/is/array/array';
import isString from '@dcode/utils/is/string/string';

export function isArraylike(value) {
	return (
		isArray(value) ||
		isString(value) ||
		(!!value &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			(value.length === 0 || (value.length > 0 && value.length - 1 in value)))
	);
}

export default isArraylike;
