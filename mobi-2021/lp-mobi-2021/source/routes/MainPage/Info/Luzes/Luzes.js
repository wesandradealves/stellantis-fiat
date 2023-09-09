import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { safeId, getArgByPath } from '~/configurations/data-main';
import css from './Luzes.scss';

export const classes = {
	root: css.airConditioner,
	title: css.airConditionerTitle,
	text: css.airConditionerText,
};

export const defaultProps = {
	className: '',
	classes,
};

export const propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string,
		}),
	}),
};

export const Luzes = ({ className, classes, location, match, ...props }) => {
	const id = safeId(match.params.id);
	const state = location.state.argumento || getArgByPath(location.hash.replace(/^#/, ''));
	console.log('Luzes:', state);
	return (
		<div className={cls(css.airConditioner, className)}>
			<h1 className={cls(css.airConditionerTitle)}>Galeria de imagens {}</h1>
		</div>
	);
};

Luzes.displayName = 'Luzes';
Luzes.propTypes = propTypes;
Luzes.defaultProps = defaultProps;
export default Luzes;
