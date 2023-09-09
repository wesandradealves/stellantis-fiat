export const play =
	window.requestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.msRequestAnimationFrame;

export const pause = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

export function tweenNumber(onAnimationFrame, startValue = 0, endValue = 1, duration = 500) {
	let start;
	let requestId;
	function iterate(timestamp) {
		start = start || timestamp;
		const elapsed = Math.ceil(timestamp - start);
		const progress = elapsed / Math.max(elapsed, duration);
		const stepValue = startValue + (endValue - startValue) * progress;
		onAnimationFrame(stepValue, progress);
		if (progress < 1) {
			requestId = play(iterate);
		}
	}
	duration = Math.max(duration, 1);
	requestId = play(iterate);
	return () => pause(requestId);
}

export default tweenNumber;
