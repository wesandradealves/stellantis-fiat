import isReactClassComponent from './react.classComponent';
import isReactFnComponent from './react.fnComponent';

export function isReactComponent(component) {
	return isReactClassComponent(component) || isReactFnComponent(component) ? true : false;
}

export default isReactComponent;
