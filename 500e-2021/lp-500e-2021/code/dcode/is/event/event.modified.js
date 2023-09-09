const isEvent = require('./event');

function isEventModified(event) {
	if (!isEvent(event)) return false;
	return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

module.exports = isEventModified;
