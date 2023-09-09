import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import { DataLayer } from '@dcode/react/components/DataLayer';
import './Concessionaria.scss';

export const propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.any,
};

export class Concessionaria extends React.Component {
	static propTypes = propTypes;

	onClick = () => {
		DataLayer.push('FormSchedule_SelecionouConcessionaria', this.props.data.nome);
		this.props.onChange({
			target: {
				value: this.props.data.id,
			},
		});
	};

	render() {
		const { id, fantasyName, address, city } = this.props.data;
		return (
			<div className='gr-4 prefix-1 suffix-1 gr-4@mobile prefix-0@mobile suffix-0@mobile'>
				<div className="Concessionaria" onClick={this.onClick}>
                <div className={"radio size-24 size-24-mobile"}>
                    <div className={cls("u-radio", { "is-active": this.props.value === id })}></div>
                </div>

                <div className="info">
                    <div className="size-22 size-26-mobile u-medium">{fantasyName}</div>
                    <div className="size-22 size-26-mobile u-light">{address}</div>
                    <div className="size-22 size-26-mobile u-light">{city.name}</div>
                </div>
            </div>
			</div>
		);
	}
}

export default Concessionaria;
