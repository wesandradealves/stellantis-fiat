const path = require("path");
const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  poweredByHeader: false,
  swcMinify: true,
  publicRuntimeConfig: {
    isProd: process.env.CUSTOM_ENV ? process.env.CUSTOM_ENV.includes('prod') : false,
    isDev: process.env.CUSTOM_ENV ? process.env.CUSTOM_ENV.includes('development') : false
  },
  reactStrictMode: true,
  sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
  },
  images: {
      loader: "imgix",
      path: "https://argo.fiat.com.br/",
  },
  trailingSlash: true,
  compiler: {
	  removeConsole: process.env.NODE_ENV === "production",
  },
  sentry: {
    disableServerWebpackPlugin: false,
    hideSourceMaps: true
  }
};


const SentryWebpackPluginOptions = {
	org: 'd-code',
	project: 'fiat-lp-argo',
	hideSourceMaps: true,
	sourceMapReference: false,
	cleanArtifacts: false,
	include: '.',
	release: process.env.NODE_ENV,
	ignore: ['node_modules', 'next.config.js'],
	dryRun: true,
	debug: true,
	silent: true
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
