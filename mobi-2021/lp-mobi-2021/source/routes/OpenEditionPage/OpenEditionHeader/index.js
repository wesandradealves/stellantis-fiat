import PropTypes from 'prop-types';
import OpenEditionHeader from './OpenEditionHeader';
import css from './OpenEditionHeader.scss';

export const classes = {
	openEditionHeader: css.openEditionHeader,
	openEditionHeaderWrapper: css.openEditionHeaderWrapper,
	openEditionHeaderTitle: css.openEditionHeaderTitle,
	openEditionHeaderTitleText: css.openEditionHeaderTitleText,
};

OpenEditionHeader.propTypes = {
	className: PropTypes.string,
	classes: PropTypes.objectOf(PropTypes.string),
	mobile: PropTypes.bool,
};

OpenEditionHeader.defaultProps = {
	className: '',
	classes,
	mobile: true,
};

export { OpenEditionHeader };
export default OpenEditionHeader;
