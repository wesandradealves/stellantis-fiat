import isString from '@dcode/utils/is/string/string';
import isReactElement from './react.element';

export function isReactDOMTypeElement(element) {
	return isReactElement(element) && isString(element.type);
}

export default isReactDOMTypeElement;
