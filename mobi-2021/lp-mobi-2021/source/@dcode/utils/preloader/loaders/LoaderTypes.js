export const LOAD_TEXT = 'text';
export const LOAD_ARRAY_BUFFER = 'arraybuffer';
export const LOAD_BLOB = 'blob';
export const LOAD_JSON = 'json';
export const LOAD_DOCUMENT = 'document';
export const LOAD_VIDEO = 'video';
export const LOAD_AUDIO = 'audio';

export const validate = (
	type,
	expected = [LOAD_TEXT, LOAD_ARRAY_BUFFER, LOAD_BLOB, LOAD_JSON, LOAD_DOCUMENT, LOAD_VIDEO, LOAD_AUDIO],
) => new RegExp(`(${expected.join('|')})`).test(type);
