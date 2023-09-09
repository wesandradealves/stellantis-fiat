/* eslint-disable */
import React, { useRef, forwardRef } from 'react';
import cls from 'classnames';

export const CloseButton = forwardRef(({
	className,
	classes,
	display,
	...props
}, ref) => {
	const iconRef = useRef();
	const iconXRef = useRef();
	const iconYRef = useRef();

	return display && (
		<button
			ref={ref}
			className={cls(classes.root, className)}
			{...props}>
			<i className={cls(classes.icon)} ref={iconRef} aria-hidden={true}>
				<span className={cls(classes.iconX)} ref={iconXRef} />
				<span className={cls(classes.iconY)} ref={iconYRef} />
			</i>
		</button>
	);
});

export default CloseButton;
