import isInteger from '@dcode/utils/is/integer/integer';

export function isUinteger(value) {
	return isInteger(value) && value >= 0;
}

export default isUinteger;
