import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import css from './AsideButton.scss';

export const classes = {
	root: css.asideButton,
	icon: css.asideButtonIcon,
	iconPath: css.asideButtonIconPath,
	isActive: css.isActive,
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
	active: PropTypes.bool,
}

export const defaultProps = {
	className: '',
	classes,
	active: false,
};

export function AsideButton({ className, classes, active, ...props }) {
	return (
		<button className={cls(classes.root, className, {
			[classes.isActive]: !!active,
		})} {...props}>
			<svg
				className={cls(classes.icon)}
				xmlns='http://www.w3.org/2000/svg'
				width='8.938'
				height='15.449'
				viewBox='0 0 8.938 15.449'>
				<path
					className={cls(classes.iconPath)}
					d='M6.541 8.157L0 14.488l.993.961 7.945-7.69-.038-.034.035-.034L.993 0 0 .961l7.027 6.73z'
					transform='rotate(180 4.469 7.725)'
				/>
			</svg>
		</button>
	);
}

AsideButton.displayName = 'AsideButton';
AsideButton.propTypes = propTypes;
AsideButton.defaultProps = defaultProps;
export default AsideButton;
