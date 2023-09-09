import { max } from '@dcode/utils/xtras/clamp';

export function setDimensions(element, width, height) {
	const $el = document.querySelectorAll(element);
	const w = max(document.documentElement.clientWidth, window.innerWidth || 0);
	const h = max(document.documentElement.clientHeight, window.innerHeight || 0);
	if (width) {
		for (let idx = 0; idx < $el.length; idx += 1) {
			$el[i].style.width = `${w * (width / 100)}px`;
		}
	}
	if (height) {
		for (let idy = 0; idy < $el.length; idy += 1) {
			$el[idy].style.height = `${h * (height / 100)}px`;
		}
	}
}

export default setDimensions;
