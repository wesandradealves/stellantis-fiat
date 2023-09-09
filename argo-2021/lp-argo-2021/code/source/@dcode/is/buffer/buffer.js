const env = require('../env');
const isFn = require('../fn/fn');

function isBuffer(value) {
	if (value === undefined || value === null) return false;
	if (isFn(env.Buffer) === false) return false;
	const isEnvBuffer = value instanceof env.Buffer && isFn(value.constructor.isBuffer);
	return isEnvBuffer && value.constructor.isBuffer(value);
}

module.exports = isBuffer;
