const isObject = require('./object');
const isObjectEmpty = require('./object.empty');
const isObjectOf = require('./object.of');

isObject.object = isObject;
isObject.empty = isObjectEmpty;
isObject.of = isObjectOf;
module.exports = isObject;
