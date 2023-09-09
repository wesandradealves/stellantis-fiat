import PropTypes from 'prop-types';
import Overlay from './Overlay';
import css from './Overlay.scss';

const classes = {
	overlay: css.overlay,
};

const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.objectOf(PropTypes.string),
	// closeMaskOnClick: PropTypes.bool,
	// onClose: PropTypes.func.isRequired,
	// overlayEnterAnimation: PropTypes.string,
	// overlayLeaveAnimation: PropTypes.string,
	// overlayAnimation: PropTypes.string,
	// overlayDuration: PropTypes.number,
	// overlayDelay: PropTypes.number,
	// showOverlay: PropTypes.bool,
};

const defaultProps = {
	className: '',
	classes,
	// closeMaskOnClick: true,
	// onClose: null,
	// overlayEnterAnimation: '',
	// overlayLeaveAnimation: '',
	// overlayAnimation: 'fade',
	// overlayDuration: 300,
	// overlayDelay: 0,
	// showOverlay: true,
};

Overlay.displayName = 'Overlay';
Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
export { Overlay };
export default Overlay;
