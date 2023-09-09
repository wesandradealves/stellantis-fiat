import React from 'react';
import css from './Guideline.scss';

export const propTypes = {};

export const defaultProps = {};

export const Guideline = () => {
	const $el = React.useRef();
	return (
		<section ref={$el} className={css.Guideline}>
			<h1>/guideline</h1>
		</section>
	);
};

Guideline.propTypes = propTypes;
Guideline.defaultProps = defaultProps;
export default Guideline;
