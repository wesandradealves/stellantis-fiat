import is from '@dcode/utils/is/is';
import isArraylike from '@dcode/utils/is/arraylike/arraylike';

export function isArrayOf(expected, value) {
	if (isArraylike(value) === false) return false;
	for (let idx = value.length - 1; idx > -1; idx -= 1) {
		if (is(expected, value[idx]) === false) return false;
	}
	return true;
}

export default isArrayOf;
