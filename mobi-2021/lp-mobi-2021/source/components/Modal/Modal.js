import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import cls from 'classnames';
import PropTypes from 'prop-types';
import * as is from '@dcode/utils/is';
import { CloseButton } from '~/components/CloseButton';
import css from './Modal.scss';

export const classes = {
	root: css.modal,
	overlay: css.modalOverlay,
	dialog: css.modalDialog,
	dialogContent: css.modalDialogContent,
	closeButton: css.modalClose,
};

export const propTypes = {
	classes: PropTypes.object,
	width: PropTypes.number,
	height: PropTypes.number,
	measure: PropTypes.string,
	open: PropTypes.bool,
	visible: PropTypes.bool,
	showOverlay: PropTypes.bool,
	closeOnEsc: PropTypes.bool,
	closeMaskOnClick: PropTypes.bool,
	showCloseButton: PropTypes.bool,
	lockScrollBody: PropTypes.bool,
	animation: PropTypes.string,
	enterAnimation: PropTypes.string,
	leaveAnimation: PropTypes.string,
	enterDuration: PropTypes.number,
	leaveDuration: PropTypes.number,
	enterDelay: PropTypes.number,
	leaveDelay: PropTypes.number,
	overlayAnimation: PropTypes.string,
	overlayEnterAnimation: PropTypes.string,
	overlayLeaveAnimation: PropTypes.string,
	overlayEnterDuration: PropTypes.number,
	overlayLeaveDuration: PropTypes.number,
	overlayEnterDelay: PropTypes.number,
	overlayLeaveDelay: PropTypes.number,
	className: PropTypes.string,
	customStyles: PropTypes.object,
	customOverlayStyles: PropTypes.object,
	onClose: PropTypes.func,
	onExited: PropTypes.func,
	onAnimationEnd: PropTypes.func,
};

export const defaultProps = {
	classes,
	width: 95,
	height: 90,
	measure: '%',
	open: false,
	visible: false,
	showOverlay: true,
	closeOnEsc: true,
	closeMaskOnClick: true,
	showCloseButton: true,
	lockScrollBody: false,
	animation: 'slideLeft',
	enterAnimation: '',
	leaveAnimation: '',
	overlayAnimation: 'fade',
	overlayEnterAnimation: '',
	overlayLeaveAnimation: '',
	enterDuration: 410,
	leaveDuration: 290,
	enterDelay: 50,
	leaveDelay: 0,
	overlayEnterDuration: 200,
	overlayLeaveDuration: 180,
	overlayEnterDelay: 0,
	overlayLeaveDelay: 0,
	className: '',
	customStyles: {},
	customOverlayStyles: {},
	onClose: Function.prototype,
	onExited: Function.prototype,
};

export const inBrowser = is.defined(window);
export const UA = inBrowser && window.navigator.userAgent.toLowerCase();
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0;

export const Dialog = (props) => {
	const animation = (props.animationType === 'enter' ? props.enterAnimation : props.leaveAnimation) || props.animation;
	const className = `Modal-${animation}-${props.animationType}`;
	const closeButton = props.showCloseButton ? (
		<CloseButton className={cls(props.classes.closeButton)} onClick={props.onClose} />
	) : null;
	const {
		width,
		height,
		measure,
		enterDuration,
		leaveDuration,
		enterDelay,
		leaveDelay,
		customStyles,
		onExited,
	} = props;
	const isLeaving = props.animationType === 'leave';
	const duration = isLeaving ? leaveDuration : enterDuration;
	const delay = isLeaving ? leaveDelay : enterDelay;
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
		if (isLeaving) onExited();
	};
	return (
		<div style={mergedStyles} className={cls(props.classes.dialog, className)} onAnimationEnd={onAnimationEnd}>
			<div className={cls(props.classes.dialogContent)}>{props.children}</div>
			{closeButton}
		</div>
	);
};

export class Modal extends React.Component {
	state = {
		isVisible: false,
		animationType: 'leave',
	};

	componentDidMount() {
		if (this.props.visible || this.props.open) {
			this.enter();
		}
	}

	componentWillReceiveProps(nextProps) {
		if (!this.props.visible && nextProps.visible) {
			this.enter();
		} else if (this.props.visible && !nextProps.visible) {
			this.leave();
		}
	}

	enter() {
		if (this.props.lockScrollBody) {
			document.body.style.overflow = 'hidden';
		}
		this.setState({
			isVisible: true,
			animationType: 'enter',
		});
	}

	leave() {
		if (this.props.lockScrollBody) {
			document.body.style.overflow = '';
		}
		this.setState(isIE9 ? { isVisible: false } : { animationType: 'leave' });
	}

	onKeyUp = (event) => {
		if (this.props.closeOnEsc && event.keyCode === 27) {
			this.leave();
			this.props.onClose();
		}
	};

	animationEnd = (event) => {
		if (this.state.animationType === 'leave') {
			this.setState({ isVisible: false });
		} else if (this.props.closeOnEsc) {
			this.$el.focus();
		}
		if (event.target === this.$el) {
			const { onAnimationEnd } = this.props;
			onAnimationEnd && onAnimationEnd();
		}
	};

	render() {
		const {
			props: { onClose, ...rest },
			state,
		} = this;
		const isEntering = state.animationType === 'enter';
		const onClickOverlay = rest.closeMaskOnClick ? onClose : null;
		const overlayAnimation =
			(isEntering ? rest.overlayEnterAnimation : rest.overlayLeaveAnimation) || rest.overlayAnimation;
		const className = `Modal-${overlayAnimation}-${state.animationType}`;
		const overlayDuration = isEntering ? rest.overlayEnterDuration : rest.overlayLeaveDuration;
		const overlayDelay = isEntering ? rest.overlayEnterDelay : rest.overlayLeaveDelay;
		const style = {
			...rest.customOverlayStyles,
			display: state.isVisible ? '' : 'none',
			animationDuration: `${overlayDuration}ms`,
			WebkitAnimationDuration: `${overlayDuration}ms`,
			animationDelay: `${overlayDelay}ms`,
			WebkitAnimationDelay: `${overlayDelay}ms`,
		};
		const overlay = rest.showOverlay ? (
			<div
				style={style}
				className={cls(rest.classes.overlay, className, rest.className)}
				onAnimationEnd={this.animationEnd}
				onClick={() => {
					this.leave();
					onClickOverlay();
				}}
			/>
		) : null;
		return (
			<div
				className={cls(rest.classes.root)}
				tabIndex='-1'
				onKeyUp={this.onKeyUp}
				ref={($el) => {
					this.$el = $el;
				}}>
				{overlay}
				<Dialog
					{...rest}
					onClose={() => {
						this.leave();
						onClose();
					}}
					animationType={state.animationType}>
					{rest.children}
				</Dialog>
			</div>
		);
	}
}

Modal.displayName = 'Modal';
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export default Modal;
