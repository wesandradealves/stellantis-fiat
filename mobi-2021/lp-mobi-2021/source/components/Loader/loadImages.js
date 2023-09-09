export function loadImages(files, progress, resolve, reject) {
	const images = {};
	let index = 0;
	const onerror = (file) => {
		progress(file, ++index / files.length);
		reject(file);
	};
	const onload = (file) => {
		progress(file, ++index / files.length);
		if (index === files.length) resolve(images);
	};
	for (let id = 0; id < files.length; id += 1) {
		const img = (images[files[id].name || files[id].src] = new Image());
		img.onerror = () => onerror(files[id]);
		img.onload = () => onload(files[id]);
		img.src = files[id].src;
	}
	return images;
}

export default loadImages;
