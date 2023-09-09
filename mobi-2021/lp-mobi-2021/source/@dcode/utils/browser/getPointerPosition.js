import clamp from '@dcode/utils/xtras/clamp';
import findElPosition from './findElPosition';

export function getPointerPosition(el, event) {
	const position = {};
	const box = findElPosition(el);
	const boxW = el.offsetWidth;
	const boxH = el.offsetHeight;
	const boxY = box.top;
	const boxX = box.left;
	let evtPageY = event.pageY;
	let evtPageX = event.pageX;
	if (event.changedTouches) {
		evtPageX = event.changedTouches[0].pageX;
		evtPageY = event.changedTouches[0].pageY;
	}
	position.y = clamp((boxY - evtPageY + boxH) / boxH, 0, 1);
	position.x = clamp((evtPageX - boxX) / boxW, 0, 1);
	return position;
}

export default getPointerPosition;
