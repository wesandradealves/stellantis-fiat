/* eslint-disable */
import PropTypes from 'prop-types';
import Overlay from './Overlay';
import CloseButton from './CloseButton';
import Dialog from './Dialog';
import Modal from './Modal';
import css from './Modal.scss';

const classes = {
	root: css.modal,
	overlay: css.modalOverlay,
	dialog: css.modalDialog,
	dialogContent: css.modalDialogContent,
	closeButton: css.modalClose,
};

const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.objectOf(PropTypes.string),
	width: PropTypes.number,
	height: PropTypes.number,
	measure: PropTypes.string,
	open: PropTypes.bool,
	visible: PropTypes.bool,
	mobile: PropTypes.bool,
	showOverlay: PropTypes.bool,
	closeOnEsc: PropTypes.bool,
	closeMaskOnClick: PropTypes.bool,
	showCloseButton: PropTypes.bool,
	lockScrollBody: PropTypes.bool,
	onClose: PropTypes.func,
	onAnimationEnd: PropTypes.func,
	onExited: PropTypes.func,

	animation: PropTypes.string,
	enterAnimation: PropTypes.string,
	enterDuration: PropTypes.number,
	enterDelay: PropTypes.number,

	leaveAnimation: PropTypes.string,
	leaveDuration: PropTypes.number,
	leaveDelay: PropTypes.number,

	overlayStyles: PropTypes.object,
	overlayAnimation: PropTypes.string,
	overlayEnterAnimation: PropTypes.string,
	overlayEnterDuration: PropTypes.number,
	overlayEnterDelay: PropTypes.number,

	overlayLeaveAnimation: PropTypes.string,
	overlayLeaveDuration: PropTypes.number,
	overlayLeaveDelay: PropTypes.number,
};

const defaultProps = {
	className: '',
	classes,

	width: 95,
	height: 90,
	measure: '%',
	open: false,
	visible: false,
	mobile: false,
	showOverlay: true,
	closeOnEsc: true,
	closeMaskOnClick: true,
	showCloseButton: true,
	lockScrollBody: false,
	onClose: Function.prototype,
	onAnimationEnd: Function.prototype,
	onExited: Function.prototype,

	animation: 'slideLeft',
	enterAnimation: '',
	enterDuration: 410,
	enterDelay: 50,

	leaveAnimation: '',
	leaveDuration: 290,
	leaveDelay: 0,

	overlayStyles: {},

	overlayAnimation: 'fade',
	overlayEnterAnimation: '',
	overlayEnterDuration: 200,
	overlayEnterDelay: 0,

	overlayLeaveAnimation: '',
	overlayLeaveDuration: 180,
	overlayLeaveDelay: 0,
};

Modal.displayName = 'Modal';
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export { Modal, Dialog, Overlay, CloseButton };
export default Modal;
