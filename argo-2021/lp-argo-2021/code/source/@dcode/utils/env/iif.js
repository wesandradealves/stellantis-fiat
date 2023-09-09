const iif = (condition, ...rest) => {
	if (!rest.length) return Boolean(condition);
	if (Boolean(condition)) return rest[0];
	return rest[1];
};

module.exports = (condition) => (...rest) => iif(condition, ...rest);

module.exports.iif = iif;
