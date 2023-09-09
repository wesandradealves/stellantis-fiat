import isString from '@dcode/utils/is/string/string';
import isFn from '@dcode/utils/is/fn/fn';

// check if two components are the same type
export default (component1, component2) => {
	const type1 = component1.type;
	const type2 = component2.type;
	if (isString(type1) || isString(type2)) {
		return type1 === type2;
	}
	if (isFn(type1) && isFn(type2)) {
		return type1.displayName === type2.displayName;
	}
	return false;
};
