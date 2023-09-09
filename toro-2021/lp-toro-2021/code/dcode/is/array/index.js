const isArray = require('./array');
const isArrayEmpty = require('./array.empty');
const isArrayOf = require('./array.of');

isArray.array = isArray;
isArray.empty = isArrayEmpty;
isArray.of = isArrayOf;
module.exports = isArray;
