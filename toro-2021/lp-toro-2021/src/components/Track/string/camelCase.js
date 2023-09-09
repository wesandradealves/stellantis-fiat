export const camelCase = (value) => (
	value.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, (chunk) => (
		chunk[1].toUpperCase()
	))
);

export default camelCase;
