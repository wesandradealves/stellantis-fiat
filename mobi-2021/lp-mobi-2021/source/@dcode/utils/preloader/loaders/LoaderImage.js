import getMimeFromURL from '@dcode/utils/preloader/mimetype/getMimeFromURL';
import { env } from '@dcode/utils/env';
import { LOAD_ARRAY_BUFFER } from './LoaderTypes';
import LoaderBase from './LoaderBase';
import FileMeta from './FileMeta';

export const URL = env.URL || env.webkitURL;

export class LoaderImage extends LoaderBase {
	static type = LOAD_ARRAY_BUFFER;

	constructor(options) {
		super(LOAD_ARRAY_BUFFER, options);
		this.imageLoaded = false;
	}

	canLoadType(type) {
		return super.canLoadType(type) && env.ArrayBuffer && (URL || env.FileReader);
	}

	start(url) {
		if (this.options.xhrImages && this.canLoadType(this.type)) super.start(url);
		else this.createAndLoadImage(url);
	}

	dispatchProgress(progress) {
		super.dispatchProgress(this.imageLoaded ? progress : progress * 0.9999);
	}

	dispatchComplete() {
		if (this.imageLoaded) super.dispatchComplete();
	}

	onImageLoadComplete() {
		this.imageLoaded = true;
		this.dispatchProgress(1);
		this.dispatchComplete();
	}

	onImageLoadFail() {
		this.dispatchError('Image failed to load');
	}

	parseContent() {
		if (!this.meta) {
			this.meta = new FileMeta();
		}
		if (!this.typeSet || this.meta.mime === null) {
			this.meta.mime = getMimeFromURL(this.url);
		}

		let arrayBuffer = null;
		if (this.xhr.response instanceof env.ArrayBuffer) {
			arrayBuffer = this.xhr.response;
		} else if (this.xhr.mozResponseArrayBuffer) {
			arrayBuffer = this.xhr.mozResponseArrayBuffer;
		} else {
			throw new Error('Return type for image load unsupported');
		}

		const blobOptions = { type: this.meta.mime };
		const blobData = new Blob([arrayBuffer], blobOptions);
		if (URL) {
			this.createAndLoadImage(URL.createObjectURL(blobData));
		} else if (FileReader) {
			const reader = new FileReader();
			reader.onloadend = () => {
				if (URL) URL.revokeObjectURL(blobData);
				this.createAndLoadImage(reader.result);
			};
			reader.readAsDataURL(blobData);
		}
	}

	createAndLoadImage(src) {
		this.content = new Image();
		this.content.onload = this.onImageLoadComplete.bind(this);
		this.content.onerror = this.onImageLoadFail.bind(this);
		this.content.src = src;
	}
}

export default LoaderImage;
