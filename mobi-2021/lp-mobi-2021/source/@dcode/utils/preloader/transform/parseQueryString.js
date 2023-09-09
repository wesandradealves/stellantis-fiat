export function parseQueryString(queryString) {
	const qs = decodeURIComponent(queryString);
	const params = qs.split('&');
	return params.reduce((acc, object) => {
		const splitter = param.split('=');
		object[splitter[0]] = splitter[1];
		return object;
	}, {});
}

export default parseQueryString;
