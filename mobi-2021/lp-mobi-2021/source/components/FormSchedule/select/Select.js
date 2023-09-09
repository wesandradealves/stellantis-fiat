import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import './Select.scss';

export const defaultProps = {
	placeholder: 'Selecione',
};

export const propTypes = {
	data: PropTypes.array,
	placeholder: PropTypes.string,
};

export class Select extends React.Component {
	static defaultProps = defaultProps;
	static propTypes = propTypes;

	renderOptions = () => {
		const { data, placeholder } = this.props;
		return [{ value: null, name: placeholder }, ...data].map((item, id) => {
			return (
				<option key={id} value={item.value} className={id === 0 ? 'first' : ''}>
					{item.name}
				</option>
			);
		});
	};

	getLabel = () => {
		const { data, placeholder } = this.props;
		const value = data.filter((v) => v.value === this.props.value);
		if (value.length > 0) {
			return value[0].name;
		}
		return placeholder;
	};

	onChange = (event) => {
		this.props.onChange && this.props.onChange(event);
	};

	render() {
		return (
			<div className={cls('Select')}>
				<div className={cls('arrow')}>
					<img alt='seta' src={require('./assets/arrow.png')} />
				</div>
				<div className={cls('size-22', 'size-26-mobile', 'label')}>{this.getLabel()}</div>
				<select className={cls('size-24', 'size-26-mobile')} onChange={this.onChange}>
					{this.renderOptions()}
				</select>
			</div>
		);
	}
}

export default Select;
