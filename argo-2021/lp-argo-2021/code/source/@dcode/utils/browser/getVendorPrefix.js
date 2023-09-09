export function getVendorPrefix() {
	const pattern = /^((M|m)oz|(W|w)ebkit|(K|k)html|(O|o)|(ms|MS)|Icab)(?=[A-Z])/;
	const element = document.createElement('div');
	let dom,
		raw = '';
	for (const css in element.style) {
		if (pattern.test(css)) {
			raw = css.match(pattern)[0];
			dom = /^MS$/i.test(raw) ? raw.toLowerCase() : raw[0].toUpperCase() + raw.substr(1);
			break;
		}
	}
	return {
		raw: raw,
		dom: dom,
		css: raw.length ? '-' + raw.toLowerCase() + '-' : '',
	};
}

export const vendorPrefix = getVendorPrefix();
export default getVendorPrefix;
