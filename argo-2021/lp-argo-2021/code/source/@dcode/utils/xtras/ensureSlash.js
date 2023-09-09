const ensureSlashStart = require('./ensureSlashStart');
const ensureSlashEnd = require('./ensureSlashEnd');

function ensureSlash(inputPath = '', needsSlash = true) {
	return ensureSlashStart(ensureSlashEnd(inputPath, needsSlash), needsSlash);
}

module.exports = ensureSlash;
