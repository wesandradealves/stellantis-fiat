export function findElPosition(el) {
	let box;
	if (el.getBoundingClientRect && el.parentNode) {
		box = el.getBoundingClientRect();
	}
	if (!box) return { left: 0, top: 0 };
	const { body, documentElement: docEl } = document;
	const clientLeft = docEl.clientLeft || body.clientLeft || 0;
	const scrollLeft = window.pageXOffset || body.scrollLeft;
	const left = box.left + scrollLeft - clientLeft;
	const clientTop = docEl.clientTop || body.clientTop || 0;
	const scrollTop = window.pageYOffset || body.scrollTop;
	const top = box.top + scrollTop - clientTop;
	return { left: Math.round(left), top: Math.round(top) };
}

export default findElPosition;
