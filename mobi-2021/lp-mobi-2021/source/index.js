import '@dcode/styles/sass/_@.scss';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string';
import { setGlobal } from 'reactn';
import { HashRouter as Router } from 'react-router-dom';
import { Container, connect } from '@cerebral/react';
import { state } from 'cerebral/tags';
import { version, name } from '#/package.json';
import configData from './configurations/data';
import Controller from './Controller';
import Base from './Base';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

try {
	const addTrackingTag = (event) => {
	let tags = {};
	if(event){
		if(event.fingerprint){
		event.fingerprint = ["tracking-error"]
		};
		tags = event.tags ? event.tags : "";
	}
	return { ...tags, 'thirdParty': 'tracking' };
	}
	Sentry.init({
	  dsn: 'https://2ecb09b6af4145eb8fc3ea12bfde1165@o211911.ingest.sentry.io/5997686',
	  integrations: [new Integrations.BrowserTracing()],
	  denyUrls: [
		/(^|^[^:]+:\/\/|[^\.]+\.)dcode\.works/i,
		/^file:\/\//i,
		/^extensions\//i,
		/^chrome:\/\//i,
		/^chrome-extension:\/\//i,
		/^moz-extension:\/\//i,
		/^graph\.facebook\.com/i,
		/^connect\.facebook\.net\/en_US\/all\.js/i,
		],
		beforeSend(event, hint) {
		  const error = (hint && hint.originalException) ? hint.originalException : {};
		  const matchRegex = /clarity|doubleclick|dbclick|google-analytics|googletagmanager|google|analytics|gtm/gi;
  
		  if(event){
			if (error && error.message && error.message.match(matchRegex)) {
			  if(event.tags){
				event.tags = addTrackingTag(event);
			  }
			}
			if (event.breadcrumbs && event.breadcrumbs.find(
				function (b) {
				  if(b && b.message){
					matchRegex.test(b.message)
				  }
				  return false;
				}
			  )) {
			  if(event.tags){
				event.tags = addTrackingTag(event);
			  }
			}
			if (event.stacktrace && event.stacktrace.frames && event.stacktrace.frames.find(
			  function (f) {
				if(f && f.module){
				  matchRegex.test(f.module)
				}
				return false;
			  }
			)) {
			if(event.tags){
			  event.tags = addTrackingTag(event);
			}
		  }
		  }
		  return event;
		},	
	  // Set tracesSampleRate to 1.0 to capture 100%
	  // of transactions for performance monitoring.
	  // We recommend adjusting this value in production
	  tracesSampleRate: 0.1,
	});
// tete();
} catch (error) {
	Sentry.captureException(error);
}

const putDeviceTypeOnBody = (mobile) => {
	document.body.classList.remove(mobile ? 'is-desktop' : 'is-mobile');
	document.body.classList.add(mobile ? 'is-mobile' : 'is-desktop');
};

const putGlobalVariables = () => {
	const locationSearch = queryString.parse(location.search);
	const cluster = configData.clusters.findCluster(locationSearch.seu);
	setGlobal({ cluster });
};

const Device = connect(
	{ media: state`useragent.media` },
	({ media, ...props }) => {
		putDeviceTypeOnBody(media.mobile);
		putGlobalVariables();
		return (
			<Router>
				<Base {...props} name={name} version={version} mobile={media.mobile} desktop={!media.mobile} />
			</Router>
		);
	},
);

// Check if browser support Avif image type
window.hasAvif = new Promise(function(resolve, reject) {
	const img = new Image();
	img.onload = function() {
		resolve();
	};
	img.onerror = function() {
		reject();
	};
	// TODO this base64 have 2.04kb. Better this size.
	img.src =
		'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGhbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAAByQAABGIAAgAAAAEAAAYrAAAB0gAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAA12lwcnAAAACxaXBjbwAAABRpc3BlAAAAAAAAAZ4AAAGeAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAUaXNwZQAAAAAAAAGeAAABngAAAA5waXhpAAAAAAEIAAAADGF2MUOBDRwAAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAeaXBtYQAAAAAAAAACAAEEAQKDBAACBAUGhwgAAAY8bWRhdBIACgoYYjO51ogQEAwgMtEIE/wZ///+LPw4zaR+3/JSUNJDBhJhHE2VR6Goi86XQ0YWsLM4FNUsUKxztNA6wsYXATm2lX4Fiw0GQ05/zTLU1M6rWuyEceMesxMfJ90zh7h2xNBauE3PMovrF36AZPYgUYurdNqip8WMC4NOXxrRk3iRWqODnb8XumtE/NHAI6wVnNbQSBQ7OkkpiyZJk+Y3BrGoS+r4pi3NK9yiOjZgWE76z1y9EYZyGZxf885FGqY8bxeSKacCYt+7WFvHBx4zy1hlhDhHpq4hgENpiHFqSw+Fxdf3U90beETc83uojcIjnC8K7AmyGhFiLgA0hOrna0gZ1KrSoOX0nlwWRThaRb4RFSH4KMeLRtQCHy+seks2D25Kj1euScaaRjD4sp1ll/ZNFqaxKKF2HIm5+bvPNpuLGzrmgyzi7bx9haADrz4H6kRQuXBG1MWD5GRgvciv3s3QkPerzHcmrvOZvwFywDUcJYAC8wWaPoBtumL+SUeQo5cIZ/+Vh3A7mBG3g/J9rULinpsf6U2SnnsEGIDUCOb8q2ZERje3LfSv7SCYZ4XgC7Owy0SA5CvC++XMrkaWqOcr9a2EYtUmhF+TZ/ix1my4P6qId/cfoyBEhLUq7y1kQiyhPmIrNyeMTWmgyvNW2DCZaPCBPTsFnbwL/5m2QvKSfSo+oauWh0tZ7Y0kOxA30GKZ1iP9xHKY46OR0cAzf5i+mOy5EMELFmjSWCLoCV47wPAahGxhR+1+YxzyP6xxED1uv6i2HDfTM1ZROtUlKayV0rR8iuEte5q9qAHPdDvv8hHni+rNR2VdJnjr08/CjeLl5ui0mzspG/MXZPk79SxGCCLKwsBacPO4soJxNsUfhcF/abIILFR/EctAXgW95zdDxOcGHnz91FUmf1MZOTMwBZ0f6rkjGGojFbi0//0AbmBK52IifoKP5yGTmkZARY9C+iYl7QOnEoc30izr9QysLMcA+GsxIgBXxP6f3MNZEgn+53lPbTGHvPzlI8GXrJqvKxmsxELa7CbCftzIsV17Xq5E0rRLCNkqlHzxoaRzyaPdzAEdpRKvr6VFZDi2eg43LjKDqdeRXPNguQAR0XGgduhRSD3eshYPdUkmDjdkczOuQK+qFBI8rbWKcSkuCkTtgk4LbmWcMiG61Ba0qcw25/QjHr6G0GLX2qFgqWibbGyEoAynIWUrPTClccJOTnpbl+I01dOe2w/OwVNCYz4JgUDpA/HeYk6467FfB9PG/iRKqCZkBVZ9CqikyQ+pqWQaMMnmILiWs9QWht8ZXb6sbngGemUhnIOuzZ19l8uUQd8dzg2A7prSPzTtjWPYf6ENxAQ15eK2sY7K3gT2hpdI402uBwcr9XyxrVcwWwdDKAQ/1hHLgMnNsbZ+OoxRdBvG3ZKIpEBJj/AwZG2huFU1eVcR/VXDw7NLIzkm4ozvPlVAioU4xR68/ZBCiMCwMH1FVH7kQvG0RpyHHOVeZBIACgcYYjO51oQgMsQDE/wZ///+LPw4zaR+3/JSUNJDBhJhGMR1d6RksUCiTjlzIuvW80hfUHHQIJVsKt78ERLdUj2nJEMIA9HU+TbL4Fh0P+jw32th6QofUMFFXDtllvg6CxDcysEgONMAeFnIehzGFlZXgVI7jApo9JEEU58ttfVf5z9E8R9LkL+68Vde+TQVGyKoXBgidBFreeiEA7fQ0FEH3Ci+k2jXzNBUHXJI1Djx48gINFPxDqC3TdyZMv0HqMHyZ+sgZQilSsf5JcazmYzdVqvSc4RGs7ApgLyH4MuBHo+eSWSdWXwa6HLRIUmQUZTYrvUQ0STRW+dv8tQpQCq50BOaOj0W0T1o9LOs0vBw5sfeuT3NIsp/eJo5EDIey+/aArDtzWqpRaqrBToNf/F9p/AP1iqD4qHqklGpLziT5fIHcKco4qzxzf2liHA/H2qkbDBASZj76G82iIxmL+Eqw/dIMDPruUo/X1/nZhS+n8mFwg6vpNpMysJg1/FUqgee12yE5X7jqzgTUQkQfBfl+bAW/Zyr5CCv2xS5gQMRVRhy7NcJR6TsLv8ejPX1FnadhQBkfVcYXWP+n+sVinoFPm2KfLUx0mPewQ4ZXKA=';
});

// Check if browser support Webp image type
window.hasWebp = new Promise(function(resolve, reject) {
	const img = new Image();
	img.onload = function() {
		resolve();
	};
	img.onerror = function() {
		reject();
	};
	img.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=';
});

const render = () => {
	ReactDOM.render(
		<Container controller={Controller}>
			<Device />
		</Container>,
		document.querySelector(`[data-ui-stage="${name}"]`),
	);
};

//serviceWorker.register();

render();

if (module.hot) {
	module.hot.accept(() => {
		console.log('*** Accepting the updated render module! ***');
		render();
	});
}
