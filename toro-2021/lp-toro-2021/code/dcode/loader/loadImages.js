import isAvail from '@dcode/is/avail/avail';
import isNumber from '@dcode/is/number/number';
import isString from '@dcode/is/string/string';

export function loadImages(files, progress, resolve, reject) {
	const imageHash = {};
	const imageList = [];
	let filesLoaded = 0;
	const getter = {
		list: (id) => (isAvail(id) ? imageList[id] : imageList),
		hash: (id) => (isAvail(id) ? imageHash[id] : imageHash),
		item: (id) => {
			if (isNumber(id)) return imageList[id];
			if (isString(id)) return imageHash[id];
			return undefined;
		},
	};
	const onerror = (file, name, id) => {
		imageList[id].loading = false;
		progress(file, ++filesLoaded / files.length);
		reject(file, null);
	};
	const onload = (file, name, id) => {
		imageList[id].loading = false;
		progress(file, ++filesLoaded / files.length);
		if (filesLoaded === files.length) resolve(getter);
	};
	for (let id = 0; id < files.length; id += 1) {
		const file = files[id];
		const img = new Image();
		const name = file.name || file.src;
		imageList[id] = { loading: true, name, src: file.src, element: img };
		imageHash[name] = imageList[id];
		img.onerror = () => onerror(file, name, id);
		img.onload = () => onload(file, name, id);
		img.crossOrigin = 'Anonymous';
		img.src = file.src;
	}
	return () => {
		for (let id = 0; id < imageList.length; id += 1) {
			const item = imageList[id];
			if (item && item.loading && item.element) {
				item.element.src = '';
			}
		}
	};
}

export default loadImages;
