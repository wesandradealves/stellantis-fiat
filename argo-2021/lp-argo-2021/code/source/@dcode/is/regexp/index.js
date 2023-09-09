const isRegexp = require('./regexp');
const isRegexpFlags = require('./regexp.flags');
const isRegexpString = require('./regexp.string');

isRegexp.regexp = isRegexp;
isRegexp.flags = isRegexpFlags;
isRegexp.string = isRegexpString;
module.exports = isRegexp;
