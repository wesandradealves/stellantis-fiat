import { env } from '@dcode/utils/env';
import toQueryString from '@dcode/utils/preloader/transform/toQueryString';
import * as is from '@dcode/utils/is';

export const defaults = (options) =>
	Object.assign(
		{
			url: undefined,
			params: {},
			method: 'GET',
			onprogress: Function.prototype,
			onreadystatechange: Function.prototype,
			onsucess: Function.prototype,
			onerror: Function.prototype,
		},
		options,
	);

export const canLoad = is.defined(env.XMLHttpRequest);

export const setAndCheckTypeAt = (xhr, type) => {
	xhr.responseType = type;
	return xhr.responseType === type;
};

export const canLoadType = (type) => {
	if (!canLoad) return false;
	const tempXHR = new env.XMLHttpRequest();
	tempXHR.open('GET', 'someFakeURL', true);
	return setAndCheckTypeAt(tempXHR, type);
};

export const hasResponseTypeSupportAt = (xhr) => {
	return is.defined(xhr.responseType);
};

export const progress = (xhr, options) => (evt) => {
	const totalSize = evt.total || evt.totalSize;
	if (totalSize) {
		const loaded = evt.loaded || evt.position;
		options.onprogress(xhr, loaded / totalSize);
	} else options.onprogress(xhr, 0);
};

export const readyStateChange = (xhr, options) => () => {
	options.onreadystatechange(xhr);
	if (xhr.readyState > 1) {
		let status;
		let waiting = false;
		try {
			status = xhr.status;
		} catch (err) {
			waiting = true;
		}
		if (status === 200) {
			options.onsucess(xhr);
		} else if (!waiting) {
			xhr.onreadystatechange = undefined;
			options.onerror(xhr);
		}
	}
};

export const create = (config) => {
	if (!canLoad) return null;
	const options = defaults(config);
	const query = toQueryString(options.params);
	const xhr = new env.XMLHttpRequest();
	if (is.defined(xhr.onprogress)) xhr.onprogress = progress(xhr, options);
	xhr.onreadystatechange = readyStateChange(xhr, options);
	xhr.open(options.method, `${options.url}?${toQueryString(options.params)}`, true);
	return xhr;
};

export default create;
