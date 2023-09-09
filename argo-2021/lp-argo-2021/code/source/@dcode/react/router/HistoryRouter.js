import React from 'react';
import { Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import create from '../history/create';

export const propTypes = {
	type: PropTypes.oneOf(['browser', 'hash', 'memory']),
	hashType: PropTypes.oneOf(['hashbang', 'noslash', 'slash']),
	basename: PropTypes.string,
	forceRefresh: PropTypes.bool,
	initialEntries: PropTypes.arrayOf(PropTypes.string),
	initialIndex: PropTypes.number,
	keyLength: PropTypes.number,
	getUserConfirmation: PropTypes.func,
	children: PropTypes.node,
};

export const defaultProps = {
	type: 'hash',
	hashType: 'hashbang',
	basename: process.env.PUBLIC_URL,
	forceRefresh: false,
	initialEntries: ['/'],
	initialIndex: 0,
	keyLength: 6,
	getUserConfirmation: null,
};

export class HistoryRouter extends React.Component {
	static propTypes = propTypes;
	static defaultProps = defaultProps;

	constructor(props) {
		super(props);
		this.history = create(props);
	}

	componentDidMount() {
		if (process.env.NODE_ENV !== 'production' && this.props.history) {
			console.warn(
				[
					'Warning:',
					'<HistoryRouter> ignores the history prop.',
					'To use a custom history,',
					'use `import { Router } from "react-router(-dom)?"`',
					'instead of `import { HistoryRouter } from "@dcode/react/router"`.',
				].join(' '),
			);
		}
	}

	render() {
		return <Router history={this.history} children={this.props.children} />;
	}
}

export default HistoryRouter;
