import { latinMap } from './latinMap';

export function latinise(value) {
	return value.replace(/[^A-Za-z0-9\[\] ]/g, (char) => {
		return latinMap[char] || char;
	});
}

export default latinise;
