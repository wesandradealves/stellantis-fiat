import createTweenProgress from './createTweenProgress';
import isString from '@dcode/is/string/string';
import isArray from '@dcode/is/array/array';
import loadImage from './loadImage';
import loadImages from './loadImages';

const imageTemplate = {
	hash: () => ({}),
	list: () => ([]),
	item: () => {},
};

export const createImageLoader = ({
	assets = [],
	endValue = 1,
	duration = 500,
	onEmpty = Function.prototype,
	onStart = Function.prototype,
	onError = Function.prototype,
	onProgress = Function.prototype,
	onComplete = Function.prototype,
}) => {
	const files = normalizeAssets(assets);
	let images = imageTemplate;
	let imageLoaded;
	let cancelProgress;
	let abortLoad;

	onStart(files, 0);

	const dispatch = (progress) => {
		onProgress(imageLoaded, progress);
		if (progress === endValue) {
			setTimeout(onComplete, 0, images);
		}
	};

	const tweenProgress = createTweenProgress(
		dispatch,
		endValue,
		duration
	);

	const dispose = () => {
		if (cancelProgress) cancelProgress();
		if (abortLoad) abortLoad();
	};

	const onLoadError = (file, xhr) => {
		dispose();
		onError(file, xhr);
	};

	const onLoadProgress = (image, progress) => {
		imageLoaded = image;
		if (progress >= 0) {
			cancelProgress = tweenProgress(progress);
		}
	};

	const onLoadComplete = (hash) => {
		images = hash;
		cancelProgress = tweenProgress(1);
	};

	if (files.length === 0) {
		onEmpty(images);
	} else if (files.length === 1) {
		abortLoad = loadImage(files[0], onLoadProgress, onLoadComplete, onLoadError);
	} else {
		abortLoad = loadImages(files, onLoadProgress, onLoadComplete, onLoadError);
	}

	return dispose;
};

export const normalizeAssets = (asset) => {
	if (isString(asset)) {
		return [{ src: asset }];
	} else if (asset && 'src' in asset) {
		return [asset];
	} else if (isArray(asset)) {
		return asset.map((asset) => normalizeAssets(asset)[0]);
	}
	throw new Error(`createImageLoader ERROR :: "${asset}" is not a valid asset`);
};

export default createImageLoader;
