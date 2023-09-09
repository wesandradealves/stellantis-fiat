import isString from '@dcode/utils/is/string/string';
import isAvail from '@dcode/utils/is/avail/avail';
import isFn from '@dcode/utils/is/fn/fn';

export function isReact(value) {
	return (
		isAvail(value) &&
		isAvail(value.props) &&
		(isString(value.type) || (isFn(value.type) && isString(value.displayName)))
	);
}

export default isReact;
