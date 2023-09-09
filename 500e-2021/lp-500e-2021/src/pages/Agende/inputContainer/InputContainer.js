/* eslint-disable */
import React from 'react';
import cls from 'classnames';
import css from './InputContainer.scss';

const classes = {
	root: css.inputContainer,
	msgError: css.msgError,
	label: 'label',
	size22: 'size-22',
	size26Mobile: 'size-26-mobile',
};

export const InputContainer = ({
	label,
	error,
	children,
	...props
}) => {
	return (
		<div className={cls(classes.root)}>
			<label
				className={cls(classes.size22, classes.size26Mobile, classes.label)}
				dangerouslySetInnerHTML={{ __html: label }} />
			{children}
			{!!error && (
				<div
					className={cls(classes.msgError, classes.size22, classes.size26Mobile)}
					dangerouslySetInnerHTML={{ __html: error }}
				/>
			)}
		</div>
	);
}

export default InputContainer;
