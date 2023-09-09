import updateTag from './updateTag';

export function updateCustomMeta(property, content) {
	updateTag('meta', 'property', property, 'content', content);
}

export default updateCustomMeta;
