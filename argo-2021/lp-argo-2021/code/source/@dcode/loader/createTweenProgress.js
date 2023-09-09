import {
	requestAnimationFrame,
	cancelAnimationFrame,
} from './animationFrame';

export function createTweenProgress(callback, endValue = 1, duration = 500) {
	let requestId;
	let start = performance.now();
	duration = Math.max(duration, 1);
	return (value = 0) => {
		if (requestId) cancelAnimationFrame(requestId);
		requestId = requestAnimationFrame(function animate(timestamp) {
			start = start || timestamp;
			const elapsed = Math.ceil(timestamp - start);
			const progress = elapsed / Math.max(elapsed, duration);
			const stepValue = (value / endValue) * progress;
			callback(stepValue, progress);
			if (progress < 1) {
				requestId = requestAnimationFrame(animate);
			}
		});
		return () => cancelAnimationFrame(requestId);
	};
}

export default createTweenProgress;
