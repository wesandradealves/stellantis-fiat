import PropTypes from 'prop-types';
import CloseButton from './CloseButton';
import css from './CloseButton.scss';

const classes = {
	root: css.closeButton,
	icon: css.closeButtonIcon,
	iconX: css.closeButtonIconX,
	iconY: css.closeButtonIconY,
};

const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.objectOf(PropTypes.string),
	display: PropTypes.bool,
};

const defaultProps = {
	className: '',
	classes,
	display: true,
};

CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
export { CloseButton };
export default CloseButton;
