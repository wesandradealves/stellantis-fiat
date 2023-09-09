export function loadImage(file, progress, resolve, reject) {
	const xhr = new XMLHttpRequest();
	let notifiedNotComputable = false;
	xhr.open('GET', file.src, true);
	xhr.responseType = 'arraybuffer';
	xhr.onprogress = function(evt) {
		if (evt.lengthComputable) {
			progress(file, evt.loaded / evt.total);
		} else if (!notifiedNotComputable) {
			notifiedNotComputable = true;
			progress(file, -1);
		}
	};
	xhr.onloadend = function() {
		if (!xhr.status.toString().match(/^2/)) {
			return reject(xhr);
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
		const blob = new Blob([this.response], options);
		resolve(window.URL.createObjectURL(blob));
	};
	xhr.send();
}

export default loadImage;
