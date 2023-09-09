function ensureSlashEnd(inputPath = '', needsSlash = true) {
	const outputPath = typeof inputPath === 'string' || inputPath instanceof String ? inputPath : '';
	const hasSlash = /\/$/.test(outputPath);
	if (hasSlash && !needsSlash) {
		return outputPath.substr(0, outputPath.length - 1);
	} else if (!hasSlash && needsSlash) {
		return `${outputPath}/`;
	}
	return outputPath;
}

module.exports = ensureSlashEnd;
module.exports.ensureSlashEnd = ensureSlashEnd;
