import minBy from 'lodash.minby';

export function getScrollTop() {
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}

export function getOffset(el) {
	let xPos = 0;
	let yPos = 0;
	while (el) {
		if (el.tagName === 'BODY') {
			const xScroll = el.scrollLeft || document.documentElement.scrollLeft;
			const yScroll = el.scrollTop || document.documentElement.scrollTop;
			xPos += el.offsetLeft - xScroll + el.clientLeft;
			yPos += el.offsetTop - yScroll + el.clientTop;
		} else {
			xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
			yPos += el.offsetTop - el.scrollTop + el.clientTop;
		}
		el = el.offsetParent;
	}
	return { x: xPos, y: yPos };
}

export function getAnchorIndex(list, offset = 0) {
	if (window.scrollY === 0) return 0;
	const min = minBy(list, (anchor) => {
		let y = Math.round(anchor.getBoundingClientRect().top + offset);
		if (y > 0) y = 9999999999;
		return Math.abs(y);
	});
	return list.findIndex((option) => {
		if (option.anchor) return option.anchor == min.id;
		return option.id === min.id;
	});
}
