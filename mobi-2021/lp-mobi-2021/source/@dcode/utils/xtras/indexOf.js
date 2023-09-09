import isAvail from '@dcode/utils/is/avail/avail';
import isDefined from '@dcode/utils/is/defined/defined';

export function indexOf(list, value, fromIndex, hashProperty) {
	const size = list.length;
	let idx = fromIndex ? parseInt(1 * fromIndex + (fromIndex < 0 ? size : 0), 10) : 0;
	idx = idx < 0 ? 0 : idx;
	for (; idx < size; idx += 1) {
		const item = idx in list && (isDefined(hashProperty) && isAvail(list[idx]) ? list[idx][hashProperty] : list[idx]);
		if (item === value) {
			return idx;
		}
	}
	return -1;
}

export default indexOf;
