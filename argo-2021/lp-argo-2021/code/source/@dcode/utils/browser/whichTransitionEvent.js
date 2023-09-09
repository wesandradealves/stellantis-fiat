import * as is from '@dcode/utils/is';

export const whichTransitionEvent = () => {
	const transitions = {
		transition: 'transitionend',
		OTransition: 'oTransitionEnd',
		MozTransition: 'transitionend',
		WebkitTransition: 'webkitTransitionEnd',
	};
	const el = document.createElement('FakeElement');
	for (const vendor in transitions) {
		if (is.defined(el.style[vendor])) {
			return transitions[vendor];
		}
	}
};

export default whichTransitionEvent;
