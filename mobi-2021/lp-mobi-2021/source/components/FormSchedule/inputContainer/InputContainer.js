import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import './InputContainer.scss';

export class InputContainer extends React.Component {
	render() {
		const { label, error } = this.props;
		return (
			<div className={cls('InputContainer')}>
				<label className={cls('size-22', 'size-26-mobile', 'label')} dangerouslySetInnerHTML={{ __html: label }} />
				{this.props.children}
				{!!error && (
					<div className={cls('msg-error', 'size-22', 'size-26-mobile')} dangerouslySetInnerHTML={{ __html: error }} />
				)}
			</div>
		);
	}
}

export default InputContainer;
