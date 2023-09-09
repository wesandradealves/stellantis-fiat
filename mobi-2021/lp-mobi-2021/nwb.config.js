const ip = require('ip');
const url = require('url');
const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const sassAidFunctionJS = require('@dcode/styles/sass/aid/functions/js');
const ensureSlashEnd = require('@dcode/utils/xtras/ensureSlashEnd');
const iif = require('@dcode/utils/env/iif');
const pack = require('./package.json');

const { NODE_ENV, PUBLIC, PUBLIC_URL } = process.env;
const ifPublic = iif(/^(?:true)$/i.test(PUBLIC));
const ifDevelopment = iif(/^(?:development)$/i.test(NODE_ENV));
const ifProduction = iif(/^(?:production)$/i.test(NODE_ENV));
const ifNotProduction = iif(!ifProduction());
const outputEntryName = 'app';
const publicDir = 'public';
const clientDir = 'source';

const envPublicUrl = PUBLIC_URL;
const servedUrl = envPublicUrl || pack.homepage;
const servedPath = envPublicUrl || ensureSlashEnd(servedUrl ? url.parse(servedUrl).pathname : '/', false);
const publicPath = ifProduction(servedPath, ifDevelopment('/', undefined));
const shouldUseRelativeAssetPaths = publicPath === './';
const publicUrl = ifProduction(publicPath.slice(0, -1), '');

const envPrefix = 'REACT_APP_';
const envPrefixRE = new RegExp(`^${envPrefix}`, 'i');

const processEnvDefaults = Object.assign({
	[`HTTPS`]: false,
	[`VERBOSE`]: false,
	[`PUBLIC_URL`]: publicUrl,
	[`${envPrefix}NAME`]: pack.name,
	[`${envPrefix}AUTHOR`]: pack.author,
	[`${envPrefix}KEYWORDS`]: pack.keywords,
	[`${envPrefix}TITLE`]: pack.title,
	[`${envPrefix}DESCRIPTION`]: pack.description,
	[`${envPrefix}VERSION`]: `v${pack.version}`,
	[`${envPrefix}HOMEPAGE`]: pack.homepage,
	[`${envPrefix}HOMEPAGE_DEV`]: pack['homepage:dev'],
	[`${envPrefix}HOMEPAGE_HOM`]: pack['homepage:hom'],
	[`${envPrefix}HISTORY_BASENAME`]: '',
	[`${envPrefix}HISTORY_TYPE`]: 'browser',
	[`${envPrefix}HISTORY_HASH_TYPE`]: 'hashbang',
	[`${envPrefix}HISTORY_GET_USER_CONFIRMATION`]: false,
	[`${envPrefix}HISTORY_FORCE_REFRESH`]: false,
	[`${envPrefix}HISTORY_INITIAL_ENTRIES`]: '/',
	[`${envPrefix}HISTORY_INITIAL_INDEX`]: 0,
	[`${envPrefix}HISTORY_KEY_LENGTH`]: 6,
}, process.env);

const processEnv = Object.keys(processEnvDefaults).reduce((nuEnv, key) => {
	if (/^(?:NODE_ENV|PUBLIC_URL|HTTPS|VERBOSE)$/.test(key) || envPrefixRE.test(key)) {
		nuEnv[key] = process.env[key] || processEnvDefaults[key];
	}
	return nuEnv;
}, {});

const generateManifestConfig = () => new ManifestPlugin({
	publicPath,
	fileName: 'asset-manifest.json',
	generate: (seed, files, entrypoints) => {
		const manifestFiles = files.reduce((manifest, file) => {
			manifest[file.name] = file.path;
			return manifest;
		}, seed);
		const entrypointFiles = entrypoints[outputEntryName].filter((fileName) =>
			!fileName.endsWith('.map')
		);
		return {
			entrypoints: entrypointFiles,
			files: manifestFiles,
		};
	},
});

const generateServiceWorkerConfig = () => new GenerateSW({
	clientsClaim: true,
	exclude: [/\.map$/, /\.DS*/, /asset-manifest\.json$/],
	importWorkboxFrom: 'cdn',
	navigateFallback: `${publicUrl}/index.html`,
	navigateFallbackBlacklist: [
		new RegExp('^/_'),
		new RegExp('/[^/?]+\\.[^/]+$'),
	],
});

const retrieveConfig = ({ command }) => ({
	type: 'react-app',
	devServer: {
		https: processEnv.HTTPS,
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		// A propriedade host deve estar disponível
		// na versão posterior à 0.23.0 do nwb
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		// @see https://www.npmjs.com/package/nwb
		// @see https://github.com/insin/nwb/issues/524
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		host: ifPublic(ip.address()),
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		port: 9000,
	},
	webpack: {
		publicPath,
		aliases: {
			[`#`]: path.resolve('.'),
			[`@dcode`]: path.resolve(path.join(clientDir, '@dcode')),
			[`~`]: path.resolve(clientDir),
			[`~typography`]: path.resolve(path.join(clientDir, 'components/typography')),
		},
		define: {
			'process.env': JSON.stringify(processEnv),
		},
		html: {
			url: processEnv.PUBLIC_URL,
			mountId: processEnv[`${envPrefix}NAME`],
			version: processEnv[`${envPrefix}VERSION`],
			title: processEnv[`${envPrefix}TITLE`],
			description: processEnv[`${envPrefix}DESCRIPTION`],
			keywords: processEnv[`${envPrefix}KEYWORDS`],
			homepage: processEnv[`${envPrefix}HOMEPAGE`],
			author: processEnv[`${envPrefix}AUTHOR`],
			sitemap: path.join(publicDir, 'sitemap.xml'),
			manifest: path.join(publicDir, 'manifest.json'),
			// favicon: path.join(publicDir, 'favicon.ico'),
			template: path.join(publicDir, 'index.html'),
			site_name: 'Fiat Mobi 2021 – Ainda mais completo',
		},
		rules: {
			'sass-css': {
				import: true,
				modules: true,
				camelCase: true,
				exportOnlyLocals: false,
				localIdentName: ifProduction('[name][local]--[hash:base64:5]', '[name][local]'),
				getLocalIdent: (ctx, localIdentName, localName) => localName.replace(/_-/g, ''),
			},
			'sass': {
				loader: 'sass-loader',
				options: {
					data: [
						`$HTTPS: ${processEnv.HTTPS};`,
						`$VERBOSE: ${processEnv.VERBOSE};`,
						`$NODE_ENV: "${processEnv.NODE_ENV}";`,
						`$PUBLIC_URL: "${processEnv.PUBLIC_URL}";`,
						`@import "@dcode/styles/sass/data";`,
						`@import "configurations/theme.scss";`,
					].join('\n'),
					includePaths: [
						path.resolve('node_modules'),
						path.resolve(clientDir),
					],
					functions: {
						'js($keys)': sassAidFunctionJS(processEnv),
					},
				},
			},
		},
		config(config) {
			let index;
			if (ifProduction()) {
				index = path.resolve(path.join(clientDir, 'index.js'));
				config.entry[outputEntryName][config.entry[outputEntryName].length - 1] = index;
				config.plugins.push(generateManifestConfig());
				config.plugins.push(generateServiceWorkerConfig());
			} else {
				index = path.resolve(path.join(clientDir, 'index.js'));
				config.entry[config.entry.length - 1] = index;
			}
			config.node = {
				child_process: 'empty',
				module: 'empty',
				dgram: 'empty',
				http2: 'empty',
				net: 'empty',
				fs: 'empty',
				dns: 'mock',
				tls: 'empty',
			};
			return config;
		},
	},
});

module.exports = retrieveConfig;
