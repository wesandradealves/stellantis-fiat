import { findDOMNode } from 'react-dom';

export function blurNode(reactNode) {
	const domNode = findDOMNode(reactNode);
	if (domNode && domNode.blur) {
		domNode.blur();
	}
}

export default blurNode;
