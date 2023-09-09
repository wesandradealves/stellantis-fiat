import EventEmitter from '@dcode/utils/events/EventEmitter';
import extract from '@dcode/utils/xtras/extract';
import { env } from '@dcode/utils/env';
import * as is from '@dcode/utils/is';
import stringToArrayBuffer from '@dcode/utils/preloader/transform/stringToArrayBuffer';
import getMimeFromURL from '@dcode/utils/preloader/mimetype/getMimeFromURL';
import FileMeta from './FileMeta';
import * as XHR from './XHR';
import {
	LOAD_TEXT,
	LOAD_ARRAY_BUFFER,
	LOAD_BLOB,
	LOAD_JSON,
	LOAD_DOCUMENT,
	LOAD_VIDEO,
	LOAD_AUDIO,
	validate,
} from './LoaderTypes';

const attempt = (type) => {
	if (console && console.warn) {
		console.warn(`Attempting to use incompatible load type ${type}. Switching it to ${LOAD_TEXT}`);
	}
	return LOAD_TEXT;
};

export class LoaderBase extends EventEmitter {
	constructor(type, options) {
		super();
		this.options = options;
		this.xhr = null;
		this.content = null;
		this.url = null;
		this.meta = null;
		this.typeSet = false;
		this.type = type || LOAD_TEXT;
		this.name = is.type('String|Number', this.options.name) ? extract(this.options, 'name') : null;
		this.onProgress = this.onProgress.bind(this);
		this.onReadyStateChange = this.onReadyStateChange.bind(this);
		this.onError = this.onError.bind(this);
		this.onSuccess = this.onSuccess.bind(this);
		this.dispatchProgress = this.dispatchProgress.bind(this);
		this.dispatchComplete = this.dispatchComplete.bind(this);
		this.options.onComplete && this.on('complete', this.options.onComplete);
		this.options.onProgress && this.on('progress', this.options.onProgress);
	}

	canLoadUsingXHR() {
		return XHR.canLoad;
	}

	checkType(type) {
		return type === LOAD_VIDEO || type === LOAD_AUDIO ? LOAD_BLOB : type;
	}

	canLoadType(type) {
		return XHR.canLoadType(this.checkType(type));
	}

	start(url) {
		this.url = url;
		if (is.avail(this.name)) this.name = this.url;
		this.xhr = XHR.create({
			url,
			onprogress: this.onProgress,
			onreadystatechange: this.onReadyStateChange,
			onerror: this.onError,
			onsucess: this.onSuccess,
		});
		this.trySend(this.xhr);
	}

	trySend(xhr) {
		if (!xhr) return false;
		if (this.type !== LOAD_TEXT) {
			if (!validate(this.type)) this.type = attempt(LOAD_TEXT);
			try {
				this.typeSet = XHR.hasResponseTypeSupportAt(xhr) && XHR.setAndCheckTypeAt(xhr, this.type);
			} catch (err) {
				this.typeSet = false;
			}
			if (!this.typeSet && (this.type === LOAD_BLOB || this.type === LOAD_ARRAY_BUFFER)) {
				xhr.overrideMimeType('text/plain; charset=x-user-defined');
			}
		}
		xhr.send();
	}

	stop() {
		this.xhr && this.xhr.abort();
	}

	dispatchStart() {
		this.emit('start');
	}

	dispatchProgress(value) {
		this.emit('progress', value);
	}

	dispatchComplete() {
		this.emit('complete', this.content);
	}

	dispatchReadyStateChange(xhr) {
		this.emit('readystatechange', this.content);
	}

	dispatchError(message) {
		this.emit('error', message);
	}

	onProgress(xhr, percent) {
		this.dispatchProgress(percent);
	}

	onReadyStateChange(xhr) {
		this.dispatchReadyStateChange(xhr);
	}

	onError(xhr) {
		this.dispatchError(xhr.status);
	}

	onSuccess(xhr) {
		if (xhr.readyState === 2) {
			this.meta = new FileMeta(xhr.getAllResponseHeaders());
			this.dispatchStart();
		} else if (xhr.readyState === 4) {
			this.parseContent();
			this.dispatchComplete();
		}
	}

	parseContent() {
		if (this.typeSet || this.type === LOAD_TEXT) {
			this.content = this.xhr.response || this.xhr.responseText;
		} else if (this.type === LOAD_DOCUMENT) {
			this.content = this.xhr.response;
		} else if (this.type === LOAD_JSON) {
			this.content = JSON.parse(this.xhr.response);
		} else if (this.type === LOAD_ARRAY_BUFFER) {
			if (env.ArrayBuffer) this.content = stringToArrayBuffer(this.xhr.response);
			else throw new Error('This browser does not support ArrayBuffer');
		} else if (validate([LOAD_BLOB, LOAD_VIDEO, LOAD_AUDIO], this.type)) {
			if (env.Blob) {
				if (!this.meta) this.meta = new FileMeta();
				if (this.meta.mime === null) this.meta.mime = getMimeFromURL(this.url);
				const blobOptions = { type: this.meta.mime };
				this.content = new env.Blob([stringToArrayBuffer(this.xhr.response)], blobOptions);
			} else throw new Error('This browser does not support Blob');
		}
	}
}

export default LoaderBase;
