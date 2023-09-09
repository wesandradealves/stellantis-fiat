/* eslint-disable */
import React, { forwardRef } from 'react';
import cls from 'classnames';
import CloseButton from '../CloseButton';

export const Dialog = forwardRef(({
	classes,
	style,
	children,
	width,
	height,

	mobile,
	measure,

	animationType,
	enterAnimation,
	leaveAnimation,
	animation,

	enterDuration,
	leaveDuration,
	enterDelay,
	leaveDelay,
	onExited,
	...props
}, ref) => {
	const animationName = (animationType === 'enter' ? enterAnimation : leaveAnimation) || animation;
	const className = `Modal-${animationName}-${animationType}`;
	const isLeaving = animationType === 'leave';
	const duration = isLeaving ? leaveDuration : enterDuration;
	const delay = isLeaving ? leaveDelay : enterDelay;
	const animationStyle = {
		width: width + measure,
		height: height + measure,
		animationDuration: `${duration}ms`,
		WebkitAnimationDuration: `${duration}ms`,
		animationDelay: `${delay}ms`,
		WebkitAnimationDelay: `${delay}ms`,
	};
	const onAnimationEnd = (event) => {
		if (isLeaving) onExited();
	};
	return (
		<div
			ref={ref}
			style={{ ...animationStyle, ...style }}
			className={cls(classes.dialog, className)}
			onAnimationEnd={onAnimationEnd}>
			<CloseButton
				className={classes.closeButton}
				display={props.showCloseButton}
				onClick={props.onClose}
			/>
			<div className={cls(classes.dialogContent)}>
				{children}
			</div>
		</div>
	);
});

export default Dialog;
