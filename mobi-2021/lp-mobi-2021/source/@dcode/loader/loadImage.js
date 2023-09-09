import isAvail from '@dcode/is/avail/avail';
import isNumber from '@dcode/is/number/number';
import isString from '@dcode/is/string/string';

export function loadImage(file, progress, resolve, reject) {
	const xhr = new XMLHttpRequest();
	let notifiedNotComputable = false;
	xhr.open('GET', file.src, true);
	xhr.responseType = 'arraybuffer';
	xhr.onerror = function () {
		reject(file, xhr);
	};
	xhr.onprogress = function (evt) {
		if (evt.lengthComputable || file.bytesTotal) {
			const bytesLoaded = evt.loaded;
			const bytesTotal = (evt.total || file.bytesTotal);
			progress(file, bytesLoaded / bytesTotal);
		} else if (!notifiedNotComputable) {
			notifiedNotComputable = true;
			progress(file, -1);
		}
	};
	xhr.onloadend = function () {
		if (!xhr.status.toString().match(/^2/)) {
			return reject(file, xhr);
		}
		if (!notifiedNotComputable) {
			progress(file, 1);
		}
		const options = {};
		const headers = xhr.getAllResponseHeaders();
		const mime = headers.match(/^Content-Type\:\s*(.*?)$/im);
		if (mime && mime[1]) {
			options.type = mime[1];
		}
		const img = new Image();
		const name = file.name || file.src;
		const blob = new Blob([this.response], options);
		const objectUrl = window.URL.createObjectURL(blob);
		const imageList = [{ loading: false, name, src: objectUrl, element: img }];
		const imageHash = { [name]: imageList[0] };
		img.crossOrigin = 'Anonymous';
		img.src = objectUrl;
		resolve({
			list: (id) => (isAvail(id) ? imageList[id] : imageList),
			hash: (id) => (isAvail(id) ? imageHash[id] : imageHash),
			item: (id) => {
				if (isNumber(id)) return imageList[id];
				if (isString(id)) return imageHash[id];
				return undefined;
			},
		});
	};
	xhr.send();
	return () => xhr.abort();
}

export default loadImage;
