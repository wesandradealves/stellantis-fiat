/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const { withSentryConfig } = require('@sentry/nextjs');

const BASE_PATH = '';
const BASE_URL = '/';
const BASE_PREFIX = `${BASE_PATH}/`;

const moduleExports = {
	poweredByHeader: false,
	swcMinify: true,
	trailingSlash: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	env: {
		BASE_PREFIX,
		BASE_URL
	},
	async headers() {
		return [
		  {
			source: BASE_URL,
			headers: [
			  {
				key: 'version',
				value: 'A',
			  },
			],
		  },
		]
	  },
}

const SentryWebpackPluginOptions = {
	org: 'd-code',
	project: 'fiat-lp-fastback',
	hideSourceMaps: true,
	sourceMapReference: false,
	cleanArtifacts: false,
	include: '.',
	release: process.env.NODE_ENV,
	ignore: ['node_modules', 'next.config.js'],
	dryRun: true,
	debug: false,
	silent: true
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
