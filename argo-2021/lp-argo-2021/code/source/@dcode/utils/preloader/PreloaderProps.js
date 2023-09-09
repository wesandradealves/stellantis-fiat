import * as is from '@dcode/utils/is';
import extract from '@dcode/utils/xtras/extract';

export const parseOptions = (target) => {
	const options = is.avail(target) ? target : {};
	const config = {
		name: is.type('String|Number', name) ? name : '',
		xhrImages: options.xhrImages || false,
		onComplete: is.fn(options.onComplete) ? options.onComplete : Function.prototype,
		onProgress: is.fn(options.onProgress) ? options.onProgress : Function.prototype,
		throttle: is.integer(options.throttle) ? options.throttle : 0,
	};
	return config;
};

export const mergeOptions = (target, ...sources) => {
	const options = Object.assign({}, target, ...sources);
	if (is.fn(options.onProgress) === false) {
		options.onProgress = target.onProgress;
	}
	if (is.fn(options.onComplete) === false) {
		options.onComplete = target.onComplete;
	}
	return options;
};

export const parseEntry = (file, options) => {
	if (is.string(file)) {
		return { url: file, options: options };
	} else if (is.avail(file)) {
		if (is.string(file.url)) {
			file = Object.assign({}, file);
			const url = extract(file, 'url');
			return { url: url, options: Object.assign({}, options, file) };
		} else if (console && console.error) {
			console.error('The url property from %o should be an string', file);
		}
	} else if (console && console.error) {
		console.error('Invalid format: Failed to add file %o at preloader', file);
	}
	return undefined;
};

export const parseEntries = (file, options) => {
	const entries = [];
	if (is.array(file)) {
		for (let idx = 0; idx < file.length; idx += 1) {
			const entry = parseEntry(file[idx], options);
			if (entry) {
				entries[entries.length] = entry;
			}
		}
		return entries;
	}
	return [parseEntry(file, options)];
};
