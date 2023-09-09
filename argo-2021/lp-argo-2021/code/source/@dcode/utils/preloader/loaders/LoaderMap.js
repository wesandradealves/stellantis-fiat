import getExtension from '@dcode/utils/preloader/mimetype/getExtension';
import LoaderAudio from './LoaderAudio';
import LoaderImage from './LoaderImage';
import LoaderJSON from './LoaderJSON';
import LoaderText from './LoaderText';
import LoaderVideo from './LoaderVideo';

export const map = {
	default: LoaderText,
	png: LoaderImage,
	jpg: LoaderImage,
	jpeg: LoaderImage,
	webp: LoaderImage,
	gif: LoaderImage,
	json: LoaderJSON,
	mp4: LoaderVideo,
	ogg: LoaderVideo,
	ogv: LoaderVideo,
	webm: LoaderVideo,
	mp3: LoaderAudio,
	wav: LoaderAudio,
};

export const LoaderMap = (url) => {
	const extension = getExtension(url);
	if (extension && map[extension.toLowerCase()]) {
		return map[extension.toLowerCase()];
	}
	return map.default;
};

LoaderMap.default = map.default;
export default LoaderMap;
