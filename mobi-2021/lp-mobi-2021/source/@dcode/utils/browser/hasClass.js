export function hasClass(element, value) {
	const classes = element.className.split(' ');
	for (let i = 0; i < classes.length; i += 1) {
		if (classes[i].toLowerCase() === value.toLowerCase()) {
			return true;
		}
	}
	return false;
}

export default hasClass;
