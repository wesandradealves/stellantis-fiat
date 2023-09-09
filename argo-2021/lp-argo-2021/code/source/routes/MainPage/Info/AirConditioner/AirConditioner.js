import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { safeId, getArgByPath } from '~/configurations/data-main';
import css from './AirConditioner.scss';

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

export const AirConditioner = ({ className, classes, location, match, ...props }) => {
	const id = safeId(match.params.id);
	const state = location.state.argumento || getArgByPath(location.pathname);
	console.log('AirConditioner:', state);
	return (
		<div className={cls(css.airConditioner, className)}>
			<h1 className={cls(css.airConditionerTitle)}>Galeria de imagens {}</h1>
		</div>
	);
};

AirConditioner.displayName = 'AirConditioner';
AirConditioner.propTypes = propTypes;
AirConditioner.defaultProps = defaultProps;
export default AirConditioner;
