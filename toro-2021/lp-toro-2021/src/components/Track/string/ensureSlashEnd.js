/* eslint-disable */
import isString from './string';

export const ensureSlashEnd = (
	inputPath = '',
	needsSlash = true,
) => {
	const outputPath = isString(inputPath) ? inputPath : '';
	const hasSlash = /\/$/.test(outputPath);
	if (hasSlash && !needsSlash) {
		return outputPath.substr(0, outputPath.length - 1);
	} else if (!hasSlash && needsSlash) {
		return `${outputPath}/`;
	}
	return outputPath;
};

export default ensureSlashEnd;
