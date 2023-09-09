const is = require('./is');
const sassUtils = require('./sassUtils');

function convertStringToSassDimension(result) {
	if (!is.string(result)) return result;
	const cssUnits = ['rem', 'em', 'vh', 'vw', 'vmin', 'vmax', 'ex', '%', 'px', 'cm', 'mm', 'in', 'pt', 'pc', 'ch'];
	const parts = result.match(/[a-zA-Z]+|[0-9]+/g);
	const value = parts[0];
	const unit = parts[parts.length - 1];
	if (~cssUnits.indexOf(unit)) {
		result = new sassUtils.SassDimension(parseInt(value, 10), unit);
	}
	return result;
}

module.exports = convertStringToSassDimension;
module.exports.convertStringToSassDimension = module.exports;
