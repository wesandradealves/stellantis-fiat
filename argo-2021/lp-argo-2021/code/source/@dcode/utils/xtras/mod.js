export function mod(value, min = 0, max = 100) {
	let rem;
	if (min < 0 || max < 0) {
		const places = max - min;
		rem = (value - min) % (places + 1);
		rem = rem < 0 ? rem + (places + 1) : rem === 0 ? 0 : rem;
		return rem - (places - max);
	}
	if (value === max) return value;
	if (value === max + 1) return min;
	if (value === min - 1) return max;
	rem = value % (max || 1);
	rem = rem < min ? rem + max : rem === 0 ? 0 : rem;
	return rem;
}

export default mod;
