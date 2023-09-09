const toSnakeCase = require('./toSnakeCase');

function slugify(value) {
	return toSnakeCase(value).toLowerCase();
}

module.exports = slugify;
