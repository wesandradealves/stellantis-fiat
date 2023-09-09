const isString = require('./string');
const isStringEmpty = require('./string.empty');

isString.string = isString;
isString.empty = isStringEmpty;
module.exports = isString;
