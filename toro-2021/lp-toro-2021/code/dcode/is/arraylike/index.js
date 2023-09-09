const isArraylike = require('./arraylike');
const isArraylikeEmpty = require('./arraylike.empty');

isArraylike.arraylike = isArraylike;
isArraylike.empty = isArraylikeEmpty;
module.exports = isArraylike;
