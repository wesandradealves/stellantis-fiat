import isFn from './fn';

export const reIsClass = /^class\s+/;
export function isFnCaste(value) {
	return isFn(value) && reIsClass.test(String(value));
}

export default isFnCaste;
