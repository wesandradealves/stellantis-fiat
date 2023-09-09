import updateTag from './updateTag';

export function updateMeta(name, content) {
	updateTag('meta', 'name', name, 'content', content);
}

export default updateMeta;
