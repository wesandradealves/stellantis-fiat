import isBase64 from '@dcode/utils/is/base64';
import getExtension from './getExtension';
import base64Mime from './base64Mime';

export const FILE_MIME_IMAGES = {
	gif: 'image/gif',
	jpg: 'image/jpeg',
	jpeg: 'image/jpeg',
	png: 'image/png',
	svg: 'image/svg+xml',
	webp: 'image/webp',
};

export const FILE_MIME_TEXT = {
	html: 'text/html',
	css: 'text/css',
	csv: 'text/csv',
	xml: 'text/xml',
};

export const FILE_MIME_VIDEO = {
	mp4: 'video/mp4',
	ogg: 'video/ogg',
	ogv: 'video/ogg',
	webm: 'video/webm',
};

export const FILE_MIME_AUDIO = {
	wav: 'audio/wav',
	mp3: 'audio/mpeg',
};

export const FILE_MIME_BINARY_DATA = 'application/octet-stream';

export const FILE_MIME = {
	...FILE_MIME_IMAGES,
	...FILE_MIME_TEXT,
	...FILE_MIME_VIDEO,
	...FILE_MIME_AUDIO,
};

export function getMimeFromURL(url) {
	let mime;
	if (isBase64(url)) {
		mime = base64Mime(url);
	} else {
		const ext = getExtension(url);
		mime = FILE_MIME[ext.toLowerCase()];
	}
	return mime || FILE_MIME_BINARY_DATA;
}

export default getMimeFromURL;
