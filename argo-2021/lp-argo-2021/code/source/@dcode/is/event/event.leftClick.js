const isEvent = require('./event');

function isEventLeftClick(event) {
	if (!isEvent(event)) return false;
	return event.button === 0;
}

module.exports = isEventLeftClick;
