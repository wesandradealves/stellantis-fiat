import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import range from '@dcode/utils/xtras/range';
import css from './RevealedBox.scss';

export const classes = {
	root: css.revealedBox,
	stripe: css.revealedBoxStripe,
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.objectOf(PropTypes.string),
	stripes: PropTypes.number,
};

export const defaultProps = {
	className: '',
	classes,
	stripes: 2,
};

export const RevealedBox = (props) => {
	const renderStripes = () => {
		const stripes = [];
		for (const stripe of range(props.stripes + 1)) {
			stripes.push(<span key={stripe} className={cls(props.classes.stripe)} />);
		}
		return stripes;
	};
	return (
		<div className={cls(props.classes.root, props.className, 'goLeft', 'scroll-animation')}>
			<div className={cls('contentBox')}>{props.children}</div>
			{renderStripes()}
		</div>
	);
};

RevealedBox.displayName = 'RevealedBox';
RevealedBox.propTypes = propTypes;
RevealedBox.defaultProps = defaultProps;
export default RevealedBox;
