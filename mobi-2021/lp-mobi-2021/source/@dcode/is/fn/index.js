const isFn = require('./fn');
const isFnNative = require('./fn.native');
const isFnCallable = require('./fn.callable');
const isFnCaste = require('./fn.caste');

isFn.fn = isFn;
isFn.native = isFnNative;
isFn.callable = isFnCallable;
isFn.caste = isFnCaste;

module.exports = isFn;
