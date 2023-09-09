import isFn from '@dcode/utils/is/fn/fn';

export function isReactFnComponent(component) {
	return isFn(component) && String(component).includes('return React.createElement') ? true : false;
}

export default isReactFnComponent;
