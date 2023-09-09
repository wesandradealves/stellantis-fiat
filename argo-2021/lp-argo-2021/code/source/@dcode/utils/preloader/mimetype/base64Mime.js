import isString from '@dcode/utils/is/string/string';

export const reDataBase64 = /data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/;

export function base64Mime(encoded) {
	let result = null;
	if (isString(encoded) === false) {
		return result;
	}
	const mime = encoded.match(reDataBase64);
	if (mime && mime.length) {
		result = mime[1];
	}
	return result;
}

export default base64Mime;
