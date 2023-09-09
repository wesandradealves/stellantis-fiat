/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { withSentryConfig } = require('@sentry/nextjs');

const BASE_PATH = '';
const BASE_URL = '/';
const BASE_PREFIX = `${BASE_PATH}/`;

const moduleExports = {
  poweredByHeader: false,
  swcMinify: true,
  // basePath: BASE_PATH,
  trailingSlash: true,
  sassOptions: {
	  includePaths: [path.join(__dirname, 'styles')],
  },
  compiler: {
	  removeConsole: process.env.NODE_ENV === "production",
  },
  env: {
    BASE_PREFIX,
    BASE_URL,
  },
  sentry: {
    disableServerWebpackPlugin: false,
    hideSourceMaps: true
  }
};


const SentryWebpackPluginOptions = {
	org: 'd-code',
	project: 'fiat-lp-scudo',
	hideSourceMaps: true,
	sourceMapReference: false,
	cleanArtifacts: false,
	include: '.',
	release: process.env.NODE_ENV,
	ignore: ['node_modules', 'next.config.js'],
	dryRun: true,
	debug: process.env.NODE_ENV !== "production",
	silent: true
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
