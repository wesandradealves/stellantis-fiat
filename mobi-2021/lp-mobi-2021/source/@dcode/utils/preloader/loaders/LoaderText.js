import { LOAD_TEXT } from './LoaderTypes';
import LoaderBase from './LoaderBase';

export class LoaderText extends LoaderBase {
	static type = LOAD_TEXT;

	constructor(options) {
		super(LOAD_TEXT, options);
	}
}

export default LoaderText;
