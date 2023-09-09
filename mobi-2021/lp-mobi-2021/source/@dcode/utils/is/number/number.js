export function isNumber(value) {
	return typeof value === 'number' || value instanceof Number;
}

export default isNumber;
