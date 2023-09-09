const isEvent = require('./event');
const isEventLeftClick = require('./event.leftClick');
const isEventModified = require('./event.modified');

isEvent.event = isEvent;
isEvent.leftClick = isEventLeftClick;
isEvent.modified = isEventModified;
module.exports = isEvent;
