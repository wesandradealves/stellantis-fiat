import { latinise } from './latinise';

export function isLatin(value) {
	return value === latinise(value);
}

export default isLatin;
