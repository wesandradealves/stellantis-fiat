import * as is from '@dcode/utils/is';

export const whichAnimationEvent = () => {
	const animations = {
		animation: 'animationend',
		OAnimation: 'oAnimationEnd',
		MozAnimation: 'animationend',
		WebkitAnimation: 'webkitAnimationEnd',
	};
	const el = document.createElement('FakeElement');
	for (const vendor in animations) {
		if (is.defined(el.style[vendor])) {
			return transitions[vendor];
		}
	}
};

export default whichAnimationEvent;
