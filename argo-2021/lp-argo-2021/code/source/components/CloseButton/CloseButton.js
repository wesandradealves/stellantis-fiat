import React from 'react';
import cls from 'classnames';
import css from './CloseButton.scss';

export const classes = {
	root: css.closeButton,
	icon: css.closeButtonIcon,
	iconRotate: css.closeButtonIconRotate,
	iconLine: css.closeButtonIconLine,
	iconLineTop: css.closeButtonIconLineTop,
	iconLineMiddle: css.closeButtonIconLineMiddle,
	iconLineBottom: css.closeButtonIconLineBottom,
	isActive: css.isActive,
};

export const defaultProps = {
	className: '',
	classes,
	actived: true,
};

export function CloseButton({ className, classes, actived, ...props }) {
	return (
		<button className={cls(classes.root, className, { [classes.isActive]: actived })} {...props}>
			<svg width='80' viewBox='0 0 100 100' className={cls(classes.icon, classes.iconRotate)}>
				<path
					className={cls(classes.iconLine, classes.iconLineTop)}
					d='m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20'
				/>
				<path className={cls(classes.iconLine, classes.iconLineMiddle)} d='m 30,50 h 40' />
				<path
					className={cls(classes.iconLine, classes.iconLineBottom)}
					d='m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20'
				/>
			</svg>
		</button>
	);
}

CloseButton.displayName = 'CloseButton';
CloseButton.defaultProps = defaultProps;
export default CloseButton;
