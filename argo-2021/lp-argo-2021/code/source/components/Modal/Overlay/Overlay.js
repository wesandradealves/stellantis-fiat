/* eslint-disable */
import React, { forwardRef } from 'react';
import cls from 'classnames';

export const Overlay = forwardRef(({
	className,
	classes,
	animationType,
	animationEnd,
	isVisible,
	...props
}, ref) => {
	const isEntering = animationType === 'enter';

	const overlayDuration = isEntering ? props.overlayEnterDuration : props.overlayLeaveDuration;
	const overlayDelay = isEntering ? props.overlayEnterDelay : props.overlayLeaveDelay;
	const style = {
		...props.overlayStyles,
		display: isVisible ? '' : 'none',
		animationDuration: `${overlayDuration}ms`,
		WebkitAnimationDuration: `${overlayDuration}ms`,
		animationDelay: `${overlayDelay}ms`,
		WebkitAnimationDelay: `${overlayDelay}ms`,
	};

	const overlayAnimation = (
		isEntering ? props.overlayEnterAnimation : props.overlayLeaveAnimation
	) || props.overlayAnimation;
	const modalClassName = `Modal-${overlayAnimation}-${animationType}`;

	return props.showOverlay && (
		<div
			ref={ref}
			style={style}
			className={cls(classes.overlay, modalClassName, className)}
			onAnimationEnd={animationEnd}
			onClick={props.onClick}
		/>
	);
});

export default Overlay;
