import isString from '@dcode/utils/is/string/string';
import isFn from '@dcode/utils/is/fn/fn';
import isReact from './react';

export function isReactTypeEqual(component1, component2) {
	if (!isReact(component1) || !isReact(component2)) return false;
	const type1 = component1.type;
	const type2 = component2.type;
	if (isString(type1) || isString(type2)) {
		return type1 === type2;
	}
	if (isFn(type1) && isFn(type2)) {
		return type1.displayName === type2.displayName;
	}
	return false;
}

export default isReactTypeEqual;
