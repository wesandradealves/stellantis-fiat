import { LOAD_BLOB } from './LoaderTypes';
import LoaderBase from './LoaderBase';

export class LoaderBlob extends LoaderBase {
	static type = LOAD_BLOB;

	constructor(options) {
		super(LOAD_BLOB, options);
	}
}

export default LoaderBlob;
