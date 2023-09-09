/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

// const withPWA = require('next-pwa');
// const runtimeCaching = require('./cache.js');

const { withSentryConfig } = require('@sentry/nextjs');

const BASE_PATH = '';
const BASE_PREFIX = `${BASE_PATH}/`;

const BASE_URL = '/';


// module.exports = withPWA({
// module.exports = {
const moduleExports = {
  poweredByHeader: false,
  swcMinify: true,
  esModule: true,
  basePath: BASE_PATH,
  trailingSlash: true,
  publicRuntimeConfig: {
    isProd: process.env.CUSTOM_ENV ? process.env.CUSTOM_ENV.includes('prod') : false,
    isDev: process.env.CUSTOM_ENV ? process.env.CUSTOM_ENV.includes('development') : false
  },
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
  // pwa: {
  //   dest: 'public',
  //   disable: true,
  //   register: false,
  //   scope: BASE_PREFIX,
  //   reloadOnOnline: false,
  //   runtimeCaching,
  // },
};

const SentryWebpackPluginOptions = {
	org: 'd-code',
	project: 'fiat-lp-strada',
	hideSourceMaps: true,
	sourceMapReference: false,
	// cleanArtifacts: process.env.NODE_ENV === 'production',
	cleanArtifacts: false,
	include: '.',
	release: process.env.NODE_ENV,
	ignore: ['node_modules', 'next.config.js'],
	dryRun: true,
	debug: false,
	silent: true
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
