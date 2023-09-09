import isEvent from './event';
import isEventLeftClick from './event.leftClick';
import isEventModified from './event.modified';

isEvent.event = isEvent;
isEvent.leftClick = isEventLeftClick;
isEvent.modified = isEventModified;
export default isEvent;
