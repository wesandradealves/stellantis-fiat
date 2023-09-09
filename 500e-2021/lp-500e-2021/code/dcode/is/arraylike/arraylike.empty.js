const isArraylike = require('./arraylike');

function isArraylikeEmpty(value) {
	return isArraylike(value) && value.length === 0;
}

module.exports = isArraylikeEmpty;
