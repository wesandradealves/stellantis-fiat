import React from 'react';
import Fade from 'react-reveal/Fade';
import cls from 'classnames';
import PropTypes from 'prop-types';
import * as is from '@dcode/utils/is';
import css from './Quote.scss';

export const classes = {
	root: css.quote,
	hgroup: css.quoteHgroup,
	title: css.quoteTitle,
	text: css.quoteText,
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.objectOf(PropTypes.string),
	children: PropTypes.element,
  icon: PropTypes.element
};

export const defaultProps = {
	className: '',
	classes,
};

function Quote(props) {
	const renderH6 = (value, props) => {
		if (is.string(value)) {
			return <h6 {...props} dangerouslySetInnerHTML={{ __html: value }} />;
		}
		return <h6 {...props}>{value}</h6>;
	};

	const renderP = (value, props) => {
		if (is.string(value)) {
			return <p {...props} dangerouslySetInnerHTML={{ __html: value }} />;
		}
		return <p {...props}>{value}</p>;
	};

	return (
		<Fade>
			<header className={cls(props.classes.root, props.className)}>
				<div className={cls(props.classes.hgroup)}>
          {props.icon && props.icon}
					{renderH6(props.title, { className: cls(props.classes.title) })}
					{renderP(props.text, { className: cls(props.classes.text) })}
					{props.children}
				</div>
			</header>
		</Fade>
	);
}

Quote.propTypes = propTypes;
Quote.defaultProps = defaultProps;
export default Quote;
