export function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
	const node = document.head.querySelector(`${tagName}[${keyName}="${keyValue}"]`);
	if (node && node.getAttribute(attrName) === attrValue) return;
	if (node) node.parentNode.removeChild(node);
	if (typeof attrValue === 'string') {
		const nuNode = document.createElement(tagName);
		nuNode.setAttribute(keyName, keyValue);
		nuNode.setAttribute(attrName, attrValue);
		document.head.appendChild(nuNode);
	}
}

export default updateTag;
