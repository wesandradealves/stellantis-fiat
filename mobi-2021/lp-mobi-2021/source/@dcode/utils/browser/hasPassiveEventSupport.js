export function hasPassiveEventSupport() {
	let supportsPassiveOption = false;
	try {
		addEventListener(
			'test',
			null,
			Object.defineProperty({}, 'passive', {
				get() {
					supportsPassiveOption = true;
				},
			}),
		);
	} catch (err) {}
	return supportsPassiveOption;
}

export default hasPassiveEventSupport;
