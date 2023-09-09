import isEvent from './event';

export function isEventLeftClick(event) {
	if (!isEvent(event)) return false;
	return event.button === 0;
}

export default isEventLeftClick;
