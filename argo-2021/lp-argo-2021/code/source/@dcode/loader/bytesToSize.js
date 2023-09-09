export const bytesToSize = (bytes) => {
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	if (bytes === 0) return 'n/a';
	const id = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
	if (id === 0) return `${bytes} ${sizes[id]}`;
	return `${(bytes / 1024 ** id).toFixed(1)} ${sizes[id]}`;
}

export default bytesToSize;
