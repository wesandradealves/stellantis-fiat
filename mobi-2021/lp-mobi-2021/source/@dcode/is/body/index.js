const isBody = require('./body');
const isBodyOverflowing = require('./body.overflowing');

isBody.body = isBody;
isBody.overflowing = isBodyOverflowing;
module.exports = isBody;
