import isFn from './fn';

export const reIsClass = /^class\s+/;
export function isFnCallable(value) {
	return isFn(value) && reIsClass.test(String(value)) === false;
}

export default isFnCallable;
