import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';

export const classes = {
	overlay: 'Modal-overlay',
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
	closeMaskOnClick: PropTypes.bool,
	onClose: PropTypes.func.isRequired,
	overlayEnterAnimation: PropTypes.string,
	overlayLeaveAnimation: PropTypes.string,
	overlayAnimation: PropTypes.string,
	overlayDuration: PropTypes.number,
	overlayDelay: PropTypes.number,
	showOverlay: PropTypes.bool,
};

export const defaultProps = {
	className: '',
	classes,
	closeMaskOnClick: true,
	onClose: null,
	overlayEnterAnimation: '',
	overlayLeaveAnimation: '',
	overlayAnimation: 'fade',
	overlayDuration: 300,
	overlayDelay: 0,
	showOverlay: true,
};

export const Overlay = ({ ...rest }) => {
	const onClose = rest.closeMaskOnClick ? rest.onClose : null;
	const overlayAnimation =
		(state.animationType === 'enter' ? rest.overlayEnterAnimation : rest.overlayLeaveAnimation) ||
		rest.overlayAnimation;
	const className = `Modal-${overlayAnimation}-${state.animationType}`;
	const style = {
		display: state.isVisible ? '' : 'none',
		animationDuration: `${rest.overlayDuration}ms`,
		WebkitAnimationDuration: `${rest.overlayDuration}ms`,
		animationDelay: `${rest.overlayDelay}ms`,
		WebkitAnimationDelay: `${rest.overlayDelay}ms`,
	};
	return rest.showOverlay ? (
		<div
			style={style}
			className={cls(rest.classes.overlay, className, rest.className)}
			onAnimationEnd={this.animationEnd}
			onClick={onClose}
		/>
	) : null;
};

Overlay.displayName = 'Overlay';
Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
export default Overlay;
