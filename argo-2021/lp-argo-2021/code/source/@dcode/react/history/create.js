import { createMemoryHistory, createHashHistory, createBrowserHistory } from 'history';
import { basename } from './base';

// Does the user's browser support the HTML5 history API?
// If the user's browser doesn't support the HTML5 history API then we
// will force full page refreshes on each page change.
export const supportsHistory = 'pushState' in window.history;

const {
	REACT_APP_HISTORY_BASENAME = '',
	REACT_APP_HISTORY_TYPE = 'hash',
	REACT_APP_HISTORY_HASH_TYPE = 'hashbang',
	REACT_APP_HISTORY_GET_USER_CONFIRMATION = false,
	REACT_APP_HISTORY_FORCE_REFRESH = !supportsHistory,
	REACT_APP_HISTORY_INITIAL_ENTRIES = '/',
	REACT_APP_HISTORY_INITIAL_INDEX = 0,
	REACT_APP_HISTORY_KEY_LENGTH = 6,
} = process.env;

export const defaults = {
	type: REACT_APP_HISTORY_TYPE,
	hashType: REACT_APP_HISTORY_HASH_TYPE,
	basename: `${basename}${REACT_APP_HISTORY_BASENAME}`,
	forceRefresh: !!REACT_APP_HISTORY_FORCE_REFRESH,
	initialEntries: REACT_APP_HISTORY_INITIAL_ENTRIES.split(','),
	initialIndex: parseInt(REACT_APP_HISTORY_INITIAL_INDEX, 10),
	keyLength: parseInt(REACT_APP_HISTORY_KEY_LENGTH, 10),
	getUserConfirmation(message, callback) {
		if (!REACT_APP_HISTORY_GET_USER_CONFIRMATION) return;
		callback(window.confirm(message));
	},
};

export default (options = defaults) => {
	const {
		type,
		hashType,
		basename,
		forceRefresh,
		initialEntries,
		initialIndex,
		keyLength,
		getUserConfirmation,
	} = options;
	switch (type) {
		case 'browser':
			return createBrowserHistory({
				basename,
				forceRefresh,
				keyLength,
				getUserConfirmation,
			});
		case 'hash':
			return createHashHistory({
				basename,
				hashType,
				getUserConfirmation,
			});
		default:
			return createMemoryHistory({
				initialEntries,
				initialIndex,
				keyLength,
				getUserConfirmation,
			});
	}
};
