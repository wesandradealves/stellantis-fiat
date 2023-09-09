import isFn from '@dcode/utils/is/fn/fn';
import { LOAD_VIDEO } from './LoaderTypes';
import LoaderBase from './LoaderBase';

export class LoaderVideo extends LoaderBase {
	static type = LOAD_VIDEO;

	constructor(options) {
		super(LOAD_VIDEO, options);
	}

	parseContent() {
		super.parseContent();
		if (window.URL && isFn(window.URL.createObjectURL)) {
			const blobURL = window.URL.createObjectURL(this.content);
			this.content = document.createElement(this.loadType);
			this.content.src = blobURL;
			return this.content;
		}
		throw new Error('This browser does not support URL.createObjectURL()');
	}
}

export default LoaderVideo;
