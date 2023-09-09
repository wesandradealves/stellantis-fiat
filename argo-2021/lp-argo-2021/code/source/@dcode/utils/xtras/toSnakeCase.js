const reCamel = /(.)([A-Z]+)/g;

function toSnakeCase(value) {
	reCamel.lastIndex = 0;
	return value.replace(reCamel, function(_, previous, uppers) {
		return `${previous}-${uppers
			.toLowerCase()
			.split('')
			.join(' ')}`;
	});
}

module.exports = toSnakeCase;
