export const clock = (autostart) => {
	let autoStart = (autostart !== undefined) ? autostart : true;
	let startTime = 0;
	let oldTime = 0;
	let elapsedTime = 0;
	let running = false;

	const now = () => (
		(typeof performance === 'undefined' ? Date : performance).now()
	);

	const start = () => {
		startTime = now();
		oldTime = startTime;
		elapsedTime = 0;
		running = true;
	};

	const getDelta = () => {
		let diff = 0;
		if (autoStart && !running) {
			start();
			return 0;
		}
		if (running) {
			const newTime = now();
			diff = (newTime - oldTime) / 1000;
			oldTime = newTime;
			elapsedTime += diff;
		}
		return diff;
	};

	const getElapsedTime = () => {
		getDelta();
		return elapsedTime;
	};

	const stop = () => {
		getElapsedTime();
		running = false;
		autoStart = false;
	};

	return {
		now,
		start,
		getDelta,
		getElapsedTime,
		stop,
	};
};

export const requestAnimationFrame = (
	window.requestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| window.oRequestAnimationFrame
);

export const cancelAnimationFrame = (
	window.cancelAnimationFrame
	|| window.mozCancelAnimationFrame
	|| window.webkitCancelAnimationFrame
	|| window.msCancelAnimationFrame
	|| window.oCancelAnimationFrame
);
