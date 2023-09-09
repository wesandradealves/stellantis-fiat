import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { BackButton } from '~/components/BackButton';

export const classes = {
	dialog: 'Modal-dialog',
	dialogContent: 'Modal-dialogContent',
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
	width: PropTypes.number,
	height: PropTypes.number,
	measure: PropTypes.string,
	showCloseButton: PropTypes.bool,
	animation: PropTypes.string,
	enterAnimation: PropTypes.string,
	leaveAnimation: PropTypes.string,
	duration: PropTypes.number,
	delay: PropTypes.number,
	className: PropTypes.string,
	customStyles: PropTypes.object,
	onClose: PropTypes.func.isRequired,
	onExited: PropTypes.func,
};

export const defaultProps = {
	classes,
	width: 95,
	height: 90,
	measure: '%',
	showCloseButton: true,
	animation: 'slideLeft',
	enterAnimation: '',
	leaveAnimation: '',
	duration: 510,
	delay: 50,
	className: '',
	customStyles: {},
	onClose: null,
	onExited: Function.prototype,
};

export const Dialog = (props) => {
	const animation = (props.animationType === 'enter' ? props.enterAnimation : props.leaveAnimation) || props.animation;
	const className = `Modal-${animation}-${props.animationType}`;
	const closeButton = props.showCloseButton ? (
		<BackButton className={cls(props.classes.closeButton)} onClick={props.onClose} />
	) : null;
	const { width, height, measure, duration, delay, customStyles, onExited } = props;
	const style = {
		width: width + measure,
		height: height + measure,
		animationDuration: `${duration}ms`,
		WebkitAnimationDuration: `${duration}ms`,
		animationDelay: `${delay}ms`,
		WebkitAnimationDelay: `${delay}ms`,
	};
	const mergedStyles = { ...style, ...customStyles };
	const onAnimationEnd = (event) => {
		if (props.animationType === 'leave') {
			onExited();
		}
	};
	return (
		<div style={mergedStyles} className={cls(props.classes.dialog, className)} onAnimationEnd={onAnimationEnd}>
			<div className={cls(props.classes.dialogContent)}>{props.children}</div>
			{closeButton}
		</div>
	);
};

Dialog.displayName = 'Dialog';
Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
export default Dialog;
