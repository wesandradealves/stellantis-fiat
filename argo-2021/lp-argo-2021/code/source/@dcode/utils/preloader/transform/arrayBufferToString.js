import { env } from '@dcode/utils/env';

export const fromCharCode = String.fromCharCode;

export function arrayBufferToString(buffer) {
	return fromCharCode.apply(null, new env.Uint16Array(buffer));
}

export default arrayBufferToString;
