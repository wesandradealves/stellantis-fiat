/* eslint-disable @typescript-eslint/no-var-requires */
// const withImages = require('next-images');

const { withSentryConfig } = require('@sentry/nextjs');

const BASE_PATH = '';
const BASE_PREFIX = `${BASE_PATH}/`;

const BASE_URL = '/';


// module.exports = withImages({
//   experimental: { esmExternals: true },
//   trailingSlash: true,
//   esModule: true,
//   env: {
//     BASE_PREFIX,
//     BASE_URL,
//   },
// });

const moduleExports = {
  poweredByHeader: false,
  swcMinify: true,
  esModule: true,
  basePath: BASE_PATH,
  trailingSlash: true,
  env: {
    BASE_PREFIX,
    BASE_URL,
  },
}

const SentryWebpackPluginOptions = {
  org: 'd-code',
  project: 'fiat-lp-pulse',
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
