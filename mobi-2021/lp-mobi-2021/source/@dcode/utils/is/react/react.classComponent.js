import isFn from '@dcode/utils/is/fn/fn';

export function isReactClassComponent(component) {
	return isFn(component) && !!component.prototype.isReactComponent ? true : false;
}

export default isReactClassComponent;
