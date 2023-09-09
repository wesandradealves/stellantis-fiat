import { LOAD_AUDIO } from './LoaderTypes';
import LoaderBase from './LoaderBase';
import LoaderVideo from './LoaderVideo';

export class LoaderAudio extends LoaderVideo {
	static type = LOAD_AUDIO;

	constructor(options) {
		super(LOAD_AUDIO, options);
	}
}

export default LoaderAudio;
