import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import css from './BlueArrowButton.scss';

export const classes = {
	root: css.blueArrowButton,
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

export function BlueArrowButton({ className, classes, disabled, ...props }) {
	return (
		<svg
			className={cls(classes.root, className, {
				[classes.isDisabled]: disabled,
			})}
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24.5 20.731'>
			<path
				style={{ fill: '#ffb80f', fillRule: 'evenodd' }}
				d='M21.283,10.946l-8.776,8.5,1.333,1.29L24.5,10.411l-.047-.046.047-.046L13.839,0,12.506,1.29,20.6,9.121H0v1.824Z'
			/>
		</svg>
	);
}

BlueArrowButton.propTypes = propTypes;
BlueArrowButton.defaultProps = defaultProps;
export default BlueArrowButton;
