const isNode = require('./node');

module.exports = isNode() ? global : window;
