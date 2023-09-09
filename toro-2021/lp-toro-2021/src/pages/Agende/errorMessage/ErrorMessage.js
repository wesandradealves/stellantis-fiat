/* eslint-disable */
import React from 'react';
import cls from 'classnames';
import { connect } from '@cerebral/react';
import { state, signal, props } from 'cerebral/tags';
import { form, field } from '@cerebral/forms';
import './ErrorMessage.scss';

export default connect({ field: field(state`${props`path`}`) }, (props) => {
	const { field } = props;
	const { touched, errorMessage, customErrorMessage, value, isValid } = field;
	const message = touched && !isValid ? (customErrorMessage ? customErrorMessage : errorMessage) : null;
	return message ? <div className={cls('ErrorMessage', 'size-22', 'size-26-mobile')}>*{message}</div> : null;
});
