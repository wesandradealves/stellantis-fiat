import isNumber from '@dcode/utils/is/number/number';

export function isInteger(value) {
	return isNumber(value) && value === value && value % 1 === 0;
}

export default isInteger;
