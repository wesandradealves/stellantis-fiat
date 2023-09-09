import isFn from './fn';

const reIsNativeFn = /\[native\scode\]/;
export function isFnNative(value) {
	return isFn(value) && reIsNativeFn.test(value.toString());
}

export default isFnNative;
