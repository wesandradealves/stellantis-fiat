import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import range from '@dcode/utils/xtras/range';
import css from './Guidelines.scss';

export const classes = {
	root: css.guidelines,
	column: css.guidelinesColumn,
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.objectOf(PropTypes.string),
	columns: PropTypes.number,
	maxWidth: PropTypes.number,
};

export const defaultProps = {
	className: '',
	classes,
	columns: 12,
	maxWidth: undefined,
};

export const Guidelines = (props) => {
	const renderColumns = () => {
		const columns = [];
		for (const column of range(props.columns + 1)) {
			columns.push(<span key={column} className={props.classes.column} />);
		}
		return columns;
	};
	return (
		/^development$/i.test(process.env.NODE_ENV) && (
			<div className={cls(props.classes.root, props.className)} style={{ maxWidth: props.maxWidth }}>
				{renderColumns()}
			</div>
		)
	);
};

Guidelines.displayName = 'Guidelines';
Guidelines.propTypes = propTypes;
Guidelines.defaultProps = defaultProps;
export default Guidelines;
