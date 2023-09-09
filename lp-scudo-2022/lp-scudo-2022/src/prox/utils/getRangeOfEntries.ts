interface RangeReturn {
	after: number;
	before: number;
	range: number[];
}

const getRangeOfEntries = (tIndex = 0, array: unknown[], max = 3): RangeReturn => {
	const arrayIndexes = Array.from(array.keys());
	const arrayLength = arrayIndexes.length;
	const halfMax = Math.ceil((max - 1) / 2);
	// IF THERE IS OVERFLOW
	if (arrayLength > max) {
		if (tIndex + halfMax > arrayLength - 1) {
			const before = arrayLength - max;
			const after = 0;
			return ({
				after,
				before,
				range: arrayIndexes.slice(max * -1)
			});
		}
		if (tIndex - halfMax < 0) {
			const before = 0;
			const after = (arrayLength - 1) - (tIndex + halfMax);
			return ({
				after,
				before,
				range: arrayIndexes.slice(0, max),
			});
		}
		const after = (arrayLength - 1) - (tIndex + halfMax);
		const range = arrayIndexes.slice(tIndex - halfMax, tIndex + halfMax + 1);
		const before = arrayLength - after - range.length;
		return ({
			after,
			before,
			range,
		});
	} else {
		// THERE IS NO OVERFLOW
		return ({
			after: 0,
			before: 0,
			range: arrayIndexes,
		});
	}
};

export default getRangeOfEntries;
