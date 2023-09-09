import { LOAD_ARRAY_BUFFER } from './LoaderTypes';
import LoaderBase from './LoaderBase';

export class LoaderArrayBuffer extends LoaderBase {
	static type = LOAD_ARRAY_BUFFER;

	constructor(options) {
		super(LOAD_ARRAY_BUFFER, options);
	}
}

export default LoaderArrayBuffer;
