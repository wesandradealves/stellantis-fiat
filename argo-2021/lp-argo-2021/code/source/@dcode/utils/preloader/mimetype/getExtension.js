import isBase64 from '@dcode/utils/is/base64';
import base64Mime from './base64Mime';

export function getExtension(url) {
	let ext;
	if (isBase64(url)) {
		const mime = base64Mime(url);
		ext = mime.split('/')[1];
	} else {
		ext = url.split('.').pop();
	}
	return ext || null;
}

export default getExtension;
