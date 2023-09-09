import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import { Link } from 'react-router-dom';
import * as is from '@dcode/utils/is';
import css from './SwitchButton.scss';

export const classes = {
	root: css.switchButton,
	title: css.switchButtonTitle,
	list: css.switchButtonList,
	item: css.switchButtonItem,
	itemIcon: css.switchButtonItemIcon,
	itemText: css.switchButtonItemText,
	isSingle: css.isSingle,
	isInline: css.isInline,
	noIcon: css.noIcon,
};

export const propTypes = {
	buttons: PropTypes.arrayOf(PropTypes.object),
};

export const defaultProps = {
	className: '',
	classes,
	title: '',
	buttons: [],
};

export function SwitchButton({ className, classes, title, buttons, ...props }) {
	const renderSpan = (value, props) => {
		if (is.string(value)) {
			return <span {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
		}
		return <span {...props}>{value}</span>;
	};

	const renderTitle = (title) => {
		return renderSpan(title, { className: cls(classes.title) });
	};

	const renderButton = ({ icon, inline, label, ...item }, index, length) => {
		return (
				<a
					key={index}
					className={cls(classes.item, {
						[classes.isSingle]: length === 1,
						[classes.isInline]: !!inline,
						[classes.noIcon]: !icon,
					})}
					{...item}>
					{icon && renderSpan(icon, { className: cls(classes.itemIcon) })}
					{label && renderSpan(label, { className: cls(classes.itemText) })}
				</a>
		);
	};

	const renderLink = ({ icon, inline, label, ...item }, index, length) => {
		return (
			<Link
				key={index}
				className={cls(classes.item, {
					[classes.isSingle]: length === 1,
					[classes.isInline]: !!inline,
					[classes.noIcon]: !icon,
				})}
				{...item}>
				{icon && renderSpan(icon, { className: cls(classes.itemIcon) })}
				{label && renderSpan(label, { className: cls(classes.itemText) })}
			</Link>
		);
	};

	const renderButtons = (list) => {
		return list.map((item, index) => {
			if (item.to) return renderLink(item, index, list.length);
			return renderButton(item, index, list.length);
		});
	};

	return (
		<div className={cls(classes.root, className)} {...props}>
			{title && renderTitle(title)}
			<div className={cls(classes.list)}>{renderButtons(buttons)}</div>
		</div>
	);
}

SwitchButton.propTypes = propTypes;
SwitchButton.defaultProps = defaultProps;
export default SwitchButton;
