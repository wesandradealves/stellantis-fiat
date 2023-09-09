import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root/Root';

const cache = {};

export const readFileSync = require.context('~', true, /\.(?:js(?:x|on)?)$/);

export const datasetName = document.body.getAttribute('data-set') || 'ui-app';

export const defaultName = '';

export const app = (name = defaultName) => (name in cache ? cache[name] : null);

export const ensureList = (value) => (Array.isArray(value) ? value : value ? [value] : []);

export const ensureApps = (value) => ensureList(value);

export const createElement = (tagName, name, options) => {
	const $element = document.createElement(tagName, options);
	$element.setAttribute(`data-${datasetName}`, name);
	document.body.insertBefore($element, document.body.firstChild);
	return $element;
};

export const ensureElement = (name, tagName, options) =>
	document.querySelector(`[data-${datasetName}="${name}"]`) || createElement(tagName, name, options);

export default (apps) =>
	ensureApps(apps).reduce((list, app) => {
		const App = app.component;
		const reducers = app.reducers;
		const store = app.store(reducers);
		cache[app.name] = ReactDOM.render(
			<Root key={app.name} type={app.type} reducers={reducers} initialState={app.state}>
				<App path={app.path} routes={app.routes} />
			</Root>,
			ensureElement(app.name, 'div'),
		);
		list.push(cache[app.name]);
		return list;
	}, []);
