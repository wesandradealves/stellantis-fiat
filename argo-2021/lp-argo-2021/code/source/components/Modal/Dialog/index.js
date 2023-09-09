import PropTypes from 'prop-types';
import Dialog from './Dialog';

const classes = {
	dialog: 'Modal-dialog',
	dialogContent: 'Modal-dialogContent',
};

const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.objectOf(PropTypes.string),
	width: PropTypes.number,
	height: PropTypes.number,
	measure: PropTypes.string,
	showCloseButton: PropTypes.bool,
	animation: PropTypes.string,
	enterAnimation: PropTypes.string,
	leaveAnimation: PropTypes.string,
	duration: PropTypes.number,
	delay: PropTypes.number,
	customStyles: PropTypes.object,
	onClose: PropTypes.func.isRequired,
	onExited: PropTypes.func,
};

const defaultProps = {
	classes,
	width: 95,
	height: 89,
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

Dialog.displayName = 'Dialog';
Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
export { Dialog };
export default Dialog;
