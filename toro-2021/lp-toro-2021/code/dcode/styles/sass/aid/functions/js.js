const is = require('../utils/is');
const sassUtils = require('../utils/sassUtils');
const convertStringToSassDimension = require('../utils/convertStringToSassDimension');

const js = (jsObjectVars) => (keys) => {
	keys = keys.getValue().split('.');
	let result = jsObjectVars;
	for (let id = 0; id < keys.length; id += 1) {
		result = result[keys[id]];
		if (is.string(result)) {
			result = convertStringToSassDimension(result);
		} else if (is('Object', result)) {
			Object.keys(result).forEach((key) => {
				const value = result[key];
				result[key] = convertStringToSassDimension(value);
			});
		}
	}
	result = sassUtils.castToSass(result);
	return result;
};

module.exports = js;
module.exports.js = module.exports;
