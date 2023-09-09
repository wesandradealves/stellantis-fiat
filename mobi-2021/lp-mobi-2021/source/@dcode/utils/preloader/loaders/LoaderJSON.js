import { LOAD_JSON } from './LoaderTypes';
import LoaderBase from './LoaderBase';

export class LoaderJSON extends LoaderBase {
	static type = LOAD_JSON;

	constructor(options) {
		super(LOAD_JSON, options);
	}
}

export default LoaderJSON;
