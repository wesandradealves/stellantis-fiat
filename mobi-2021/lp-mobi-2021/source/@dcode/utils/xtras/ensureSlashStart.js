function ensureSlashStart(inputPath = '', needsSlash = true) {
	const outputPath = typeof inputPath === 'string' || inputPath instanceof String ? inputPath : '';
	const hasSlash = /^\//.test(outputPath);
	if (hasSlash && !needsSlash) {
		return outputPath.substr(1, outputPath.length - 1);
	} else if (!hasSlash && needsSlash) {
		return `/${outputPath}`;
	}
	return outputPath;
}

module.exports = ensureSlashStart;
module.exports.ensureSlashStart = ensureSlashStart;
