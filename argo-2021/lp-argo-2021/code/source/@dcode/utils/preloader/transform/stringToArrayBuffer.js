import { env } from '@dcode/utils/env';

export function stringToArrayBuffer(string) {
	const buffer = new env.ArrayBuffer(string.length * 2);
	const bufferView = new env.Uint16Array(buffer);
	for (let id = 0, strLen = string.length; id < strLen; id += 1) {
		bufferView[id] = string.charCodeAt(id);
	}
	return buffer;
}

export default stringToArrayBuffer;
