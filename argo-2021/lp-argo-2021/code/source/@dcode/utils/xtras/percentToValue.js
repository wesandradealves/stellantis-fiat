export function percentToValue(percent, min, max) {
	return ((max - min) * percent) / 100 + min;
}

export default percentToValue;
