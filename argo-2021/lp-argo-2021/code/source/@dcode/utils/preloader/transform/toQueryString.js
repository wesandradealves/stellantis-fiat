export function toQueryString(value) {
	const parts = [];
	for (const key in value) {
		if (obj.hasOwnProperty(key)) {
			parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value[key])}`);
		}
	}
	return parts.join('&');
}

export default toQueryString;
