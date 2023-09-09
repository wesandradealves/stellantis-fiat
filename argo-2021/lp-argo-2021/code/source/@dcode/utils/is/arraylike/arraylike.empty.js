import isArraylike from './arraylike';

export function isArraylikeEmpty(value) {
	return isArraylike(value) && value.length === 0;
}

export default isArraylikeEmpty;
