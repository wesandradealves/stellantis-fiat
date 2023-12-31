export function throttle(callback, limit) {
	let wait = false;
	return () => {
		if (!wait) {
			callback(...arguments);
			wait = true;
			setTimeout(() => {
				wait = false;
			}, limit);
		}
	};
}

export default throttle;
