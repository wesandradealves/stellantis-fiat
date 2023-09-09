import isFn from '@dcode/utils/is/fn/fn';
import isReactElement from './react.element';

export function isReactCompositeTypeElement(element) {
	return isReactElement(element) && isFn(element.type);
}

export default isReactCompositeTypeElement;
