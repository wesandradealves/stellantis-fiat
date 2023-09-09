export const { min, max } = Math;

export function clamp(value, start = 0, stop = 1) {
	return min(max(value, start), stop);
}

export default clamp;
