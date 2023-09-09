export class FileMeta {
	static parseHTTPHeader = parseHTTPHeader;

	constructor(header) {
		this.mime = null;
		this.size = null;
		this.lastModified = null;
		this.httpHeader = null;
		this.setFromHTTPHeader(header);
	}

	setFromHTTPHeader(header) {
		this.httpHeader = parseHTTPHeader(header);
		if (this.httpHeader['content-length']) {
			this.size = this.httpHeader['content-length'];
		}
		if (this.httpHeader['content-type']) {
			this.mime = this.httpHeader['content-type'];
		}
		if (this.httpHeader['last-modified']) {
			this.lastModified = new Date(this.httpHeader['last-modified']);
		}
	}
}

export function parseHTTPHeader(header) {
	const response = {};
	const headerLines = header ? header.split('\n') : [];
	const reParamPairs = /([a-zA-Z0-9\-_]+): *(.+)/;
	for (let id = 0, size = headerLines.length; id < size; id += 1) {
		if (headerLines[id] !== '') {
			let keyValue = reParamPairs.exec(headerLines[id]);
			if (keyValue) {
				response[keyValue[1]] = keyValue[2];
			}
		}
	}
	return response;
}

export default FileMeta;
