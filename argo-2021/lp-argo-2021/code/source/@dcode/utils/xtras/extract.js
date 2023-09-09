export function extract(object, prop) {
	if (object == null) return;
	const val = object[prop];
	delete object[prop];
	return val;
}

export default extract;
