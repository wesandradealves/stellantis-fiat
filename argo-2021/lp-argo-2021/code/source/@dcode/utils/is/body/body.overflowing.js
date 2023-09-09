export function isBodyOverflowing() {
	return document.body.clientWidth < window.innerWidth;
}

export default isBodyOverflowing;
