import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import css from './ArrowButton.scss';

export const classes = {
	root: css.arrowButton,
	isDisabled: css.isDisabled,
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
	disabled: PropTypes.bool,
};

export const defaultProps = {
	className: '',
	classes,
	disabled: false,
};

export function ArrowButton({ className, classes, disabled, ...props }) {
	return (
		<svg
			className={cls(classes.root, className, {
				[classes.isDisabled]: disabled,
			})}
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 12.007 14.354'>
			<g transform='translate(-1151.146 -1278.5)'>
				<path d='M0 0v13' style={{ fill: 'none', stroke: '#5e6168' }} transform='translate(1157 1278.5)' />
				<path d='M0 0l5.25 5.25L6 6' style={{ fill: 'none', stroke: '#5e6168' }} transform='translate(1151.5 1286.5)' />
				<path d='M6 0L0 6' style={{ fill: 'none', stroke: '#5e6168' }} transform='translate(1156.8 1286.5)' />
			</g>
		</svg>
	);
}

ArrowButton.propTypes = propTypes;
ArrowButton.defaultProps = defaultProps;
export default ArrowButton;
