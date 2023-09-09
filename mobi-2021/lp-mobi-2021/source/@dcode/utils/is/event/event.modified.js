import isEvent from './event';

export function isEventModified(event) {
	if (!isEvent(event)) return false;
	return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

export default isEventModified;
