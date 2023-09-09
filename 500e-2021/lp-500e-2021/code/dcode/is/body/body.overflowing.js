function isBodyOverflowing() {
	return document.body.clientWidth < window.innerWidth;
}

module.exports = isBodyOverflowing;
