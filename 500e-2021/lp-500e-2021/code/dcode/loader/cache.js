export const cache = {
	enabled: false,
	files: {},
	add: function (key, file) {
		if (this.enabled === false) return;
		this.files[key] = file;
		return file;
	},
	get: function (key) {
		if (this.enabled === false) return;
		return this.files[key];
	},
	remove: function (key) {
		delete this.files[key];
	},
	clear: function () {
		this.files = {};
	},
};

export default cache;
