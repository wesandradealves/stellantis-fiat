/* eslint-disable */
import React, { forwardRef, useRef, useEffect, useState, useImperativeHandle } from 'react';
import cls from 'classnames';
import Overlay from './Overlay';
import Dialog from './Dialog';

export const Modal = forwardRef(({
	className,
	classes,
	onClose,
	...props
}, ref) => {
	const rootRef = useRef();
	const overlayRef = useRef();
	const dialogRef = useRef();
	const [isVisible, setIsVisible] = useState(false);
	const [animationType, setAnimationType] = useState('enter');
	const [screenWarn, setScreenWarn] = useState(null);

	const disableWarn = () => {
		const $screenWarn = document.querySelector('#only-portrait-warn');
		if ($screenWarn) {
			setScreenWarn($screenWarn.cloneNode(true));
			$screenWarn.remove();
		}
	}

	const enableWarn = () => {
		if (screenWarn) {
			document.body.prepend(screenWarn);
		}
	}

	const enter = () => {
		disableWarn();
		if (props.lockScrollBody) {
			document.body.style.overflow = 'hidden';
		}
		setIsVisible(true);
		setAnimationType('enter');
	};

	const leave = () => {
		enableWarn();
		if (props.lockScrollBody) {
			document.body.style.overflow = '';
		}
		setAnimationType('leave');
	};

	const onKeyUp = (event) => {
		if (props.closeOnEsc && event.keyCode === 27) {
			leave();
			onClose();
		}
	};

	const animationEnd = (event) => {
		if (animationType === 'leave') {
			setIsVisible(false);
		} else if (props.closeOnEsc) {
			rootRef.current.focus();
		}
		if (event.target === rootRef.current) {
			props.onAnimationEnd && props.onAnimationEnd(animationType);
		}
	};

	useEffect(() => {
		if (props.visible || props.open) enter();
		else leave();
	}, [props.visible]);

	useImperativeHandle(ref, () => ({
		root: rootRef.current,
		overlay: overlayRef.current,
		dialog: dialogRef.current,
	}));

	return (
		<div
			className={cls(classes.root)}
			tabIndex='-1'
			onKeyUp={onKeyUp}
			ref={rootRef}>
			<Overlay
				{...props}
				classes={classes}
				ref={overlayRef}
				animationType={animationType}
				animationEnd={animationEnd}
				isVisible={isVisible}
				onClick={() => {
					if (props.closeMaskOnClick) {
						leave();
						onClose();
					}
				}}
			/>
			<Dialog
				{...props}
				classes={classes}
				ref={dialogRef}
				animationType={animationType}
				mobile={props.mobile}
				onClose={() => {
					leave();
					onClose();
				}}>
				{props.children}
			</Dialog>
		</div>
	);
});

export default Modal;
