import { createStore as createReduxStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

export const logger = createLogger({ level: 'log' });

export const composition = applyMiddleware(thunk, logger);

export const createStore = (reducers, initialState) =>
	createReduxStore(
		reducers,
		initialState,
		process.env.NODE_ENV === 'development' ? composeWithDevTools(composition) : compose(composition),
	);

export default createStore;
