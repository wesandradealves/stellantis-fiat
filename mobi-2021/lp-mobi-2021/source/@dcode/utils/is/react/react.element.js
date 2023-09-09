import React from 'react';

export function isReactElement(element) {
	return React.isValidElement(element);
}

export default isReactElement;
