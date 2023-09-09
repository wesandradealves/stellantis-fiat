import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import './Check.scss';

export const classes = {
	root: 'Check',
	isSelected: 'selected',
	check: 'check',
	label: 'label',
	uLight: 'u-light',
	size22: 'size-22',
	size26Mobile: 'size-26-mobile',
};

export const defaultProps = {
	className: '',
	classes,
};

export class Check extends React.Component {
	onClick = () => {
		this.props.onChange({
			target: {
				value: !this.props.value,
			},
		});
	};

	render() {
		const { label, className } = this.props;
		return (
			<div
				className={cls(classes.root, className, {
					[classes.isSelected]: this.props.value,
				})}
				onClick={this.onClick}>
				<div className={cls(classes.check)}>
					<img alt='check' src={require('./assets/check.png')} />
				</div>
				<div
					className={cls(classes.label, classes.uLight, classes.size22, classes.size26Mobile)}
					dangerouslySetInnerHTML={{ __html: label }}
				/>
			</div>
		);
	}
}

export default Check;
