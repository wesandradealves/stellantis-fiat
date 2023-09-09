const env = require('../env');
const isString = require('../string/string');
const isFn = require('../fn/fn');

function isElement(value) {
	if (value === undefined || value === null) return false;
	if (env.window === undefined || env.window === null) return false;
	return isFn(env.window.HTMLElement)
		&& value instanceof env.window.HTMLElement
		&& value.nodeType === 1
		&& isString(value.nodeName)
	;
}

module.exports = isElement;
