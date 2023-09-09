import EventEmitter from '@dcode/utils/events/EventEmitter';
import extract from '@dcode/utils/xtras/extract';
import * as is from '@dcode/utils/is';
import * as PreloaderProps from './PreloaderProps';
import ContentFile from './loaders/ContentFile';
import LoaderMap from './loaders/LoaderMap';

export class Preloader extends EventEmitter {
	static getInstance = getInstance;
	static parseEntry = PreloaderProps.parseEntry;
	static parseEntries = PreloaderProps.parseEntries;
	static parseOptions = PreloaderProps.parseOptions;
	static mergeOptions = PreloaderProps.mergeOptions;

	constructor(options) {
		super();
		this.options = PreloaderProps.parseOptions(options);
		this.on('complete', this.options.onComplete);
		this.on('progress', this.options.onProgress);
		this.setOptions(options).reset();
		this.loaders = {};
	}

	setOptions(options) {
		this.options = PreloaderProps.parseOptions(options);
		return this;
	}

	add(url, options) {
		const files = PreloaderProps.parseEntries(url, options);
		for (let idx = 0; idx < files.length; idx += 1) {
			const loader = new LoaderMap(files[idx].url);
			this.addFromLoaderType(files[idx].url, options, loader);
		}
		return this;
	}

	addImage(url, options) {
		return this.addFromLoaderType(url, options, LoaderImage);
	}

	addJSON(url, options) {
		return this.addFromLoaderType(url, options, LoaderJSON);
	}

	addText(url, options) {
		return this.addFromLoaderType(url, options, LoaderText);
	}

	addVideo(url, options) {
		return this.addFromLoaderType(url, options, LoaderVideo);
	}

	addAudio(url, options) {
		return this.addFromLoaderType(url, options, LoaderAudio);
	}

	addFromLoaderType(url, options, LoaderType = LoaderMap.default) {
		const files = PreloaderProps.parseEntries(url, options);
		for (let idx = 0; idx < files.length; idx += 1) {
			const file = files[idx];
			if (!this.loaders[file.url]) {
				const fileOptions = PreloaderProps.mergeOptions(this.options, file.options);
				this.loaders[file.url] = new LoaderType(fileOptions);
				this.files[this.files.length] = file;
			}
		}
		return this;
	}

	findFilesByOptionsProp(prop, value) {
		const files = [];
		const key = is.string(prop) ? prop : 'name';
		for (let idx = 0; idx < this.files.length; idx += 1) {
			const file = this.files[idx];
			if (file && file.options && file.options[key] === value) {
				files[files.length] = new ContentFile(this.loaders[file.url]);
			}
		}
		return files;
	}

	getFilesByName(name) {
		return this.findFilesByOptionsProp('name', name);
	}

	getFileByUrl(url) {
		if (this.loaders[url]) return [new ContentFile(this.loaders[url])];
		return null;
	}

	get(id) {
		const file = this.getFileByUrl(id);
		return file ? file : this.getFilesByName(id);
	}

	start() {
		if (!this.loading) {
			this.setupPercentages();
			const size = this.options.throttle || this.files.length;
			for (let idx = 0; idx < size; idx += 1) {
				this.continueLoadQueue();
			}
		}
	}

	stop() {
		if (!this.loading) return false;
		for (let idx = 0, size = this.files.length; idx < size; idx += 1) {
			this.loaders[this.files[idx].url].stop();
		}
	}

	reset() {
		this.percentTotal = 0;
		this.loadIndex = 0;
		this.files = [];
		this.progress = 0;
		this.percentOfLoad = {};
		this.loading = false;
		this.status = {};
	}

	setPercentage(url, percentOfLoad) {
		this.percentOfLoad[url] = percentOfLoad;
	}

	setupPercentages() {
		let percentTotal = 0;
		let percentScale = 1;
		let numWOPercent = 0;
		for (let idx = 0, size = this.files.length; idx < size; idx += 1) {
			const file = this.files[idx];
			if (this.percentOfLoad[file.url]) {
				percentTotal += this.percentOfLoad[file.url];
			} else {
				numWOPercent += 1;
			}
		}
		if (numWOPercent) {
			if (percentTotal > 1) {
				percentScale = 1 / percentTotal;
				percentTotal *= percentScale;
			}
			const oneFilePercent = (1 - percentTotal) / numWOPercent;
			for (let idy = 0, size = this.files.length; idy < size; idy += 1) {
				const file = this.files[idy];
				if (this.percentOfLoad[file.url]) {
					this.percentOfLoad[file.url] *= percentScale;
				} else {
					this.percentOfLoad[file.url] = oneFilePercent;
				}
			}
		}
	}

	continueLoadQueue() {
		if (this.loadIndex < this.files.length) {
			const file = this.files[this.loadIndex];
			const loader = this.loaders[file.url];
			this.status[file.url] = false;
			this.loadIndex += 1;
			loader.on('progress', this.onLoadProgress.bind(this, file.url));
			loader.once('error', this.onLoadError.bind(this, file.url));
			loader.once('complete', this.onLoadComplete.bind(this, file.url));
			loader.start(file.url);
		} else if (this.checkComplete()) {
			this.emit('complete', this.get());
		}
	}

	onLoadError(url, error) {
		if (console && console.warn) {
			console.warn(`Couldn't load ${url} received the error: ${error}`);
		}
		const currentPercent = this.percentOfLoad[url];
		this.emit('progress', this.percentTotal + currentPercent, url);
		this.status[url] = true;
		this.continueLoadQueue();
	}

	onLoadProgress(url, progress) {
		const currentPercent = this.percentOfLoad[url] * progress;
		this.emit('progress', this.percentTotal + currentPercent, url);
	}

	onLoadComplete(url, content) {
		this.percentTotal += this.percentOfLoad[url];
		this.status[url] = true;
		this.continueLoadQueue();
	}

	checkComplete() {
		let loaded = true;
		for (let id = 0, size = this.files.length; id < size; id += 1) {
			if (!this.status[this.files[id].url]) {
				loaded = false;
			}
		}
		return loaded;
	}
}

let globalPreloader;
export function getInstance(options) {
	if (globalPreloader === undefined) globalPreloader = new Preloader(options);
	return globalPreloader;
}

export default Preloader;
