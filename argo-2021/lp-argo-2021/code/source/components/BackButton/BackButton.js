import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import css from './BackButton.scss';

export const classes = {
	root: css.backButton,
	icon: css.backButtonIcon,
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
};

export const defaultProps = {
	className: '',
	classes,
};

export function BackButton({ className, classes, ...props }) {
	return (
		<button className={cls(classes.root, className)} {...props}>
			<svg xmlns='http://www.w3.org/2000/svg' width='24.5' height='20.731' viewBox='0 0 24.5 20.731'>
				<path
					className={cls(classes.icon)}
					style={{ fill: '#2ab4c7', fillRule: 'evenodd' }}
					d='M21.283-.054l-8.776,8.5,1.333,1.29L24.5-.589l-.047-.046L24.5-.68,13.839-11,12.506-9.71,20.6-1.879H0V-.054Z'
					transform='translate(24.5 9.731) rotate(180)'
				/>
			</svg>
		</button>
	);
}

BackButton.displayName = 'BackButton';
BackButton.propTypes = propTypes;
BackButton.defaultProps = defaultProps;
export default BackButton;
