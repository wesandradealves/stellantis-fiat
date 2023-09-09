import updateTag from './updateTag';

export function updateLink(rel, href) {
	updateTag('link', 'rel', rel, 'href', href);
}

export default updateLink;
