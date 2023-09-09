import isUnavail from '@dcode/utils/is/unavail';

export function isAvail(value) {
	return isUnavail(value) === false;
}

export default isAvail;
