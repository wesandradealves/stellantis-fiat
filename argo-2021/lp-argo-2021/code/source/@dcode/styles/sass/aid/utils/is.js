const is = (expected, value) => new RegExp(`(${expected})`).test(Object.prototype.toString.call(value));

is.string = (value) => typeof value === 'string' || value instanceof String;

module.exports = is;
module.exports.is = module.exports;
