/* eslint-disable */
import React, { forwardRef, useState } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import css from './AccordionTab.scss';

const classes = {
	root: css.accordionTab,
	button: css.accordionTabButton,
	header: css.accordionTabHeader,
	headerIcon: css.accordionTabHeaderIcon,
	headerText: css.accordionTabHeaderText,
	article: css.accordionTabArticle,
	articleWrapper: css.accordionTabWrapper,
	isOpen: css.isOpen,
	noIcon: css.noIcon,
};

const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.objectOf(PropTypes.string),
	title: PropTypes.string,
	icon: PropTypes.bool,
	opened: PropTypes.bool,
	locked: PropTypes.bool,
	mobile: PropTypes.bool,
	onClick: PropTypes.func,
};

const defaultProps = {
	className: '',
	classes,
	title: '',
	icon: true,
	opened: false,
	locked: false,
	onClick: Function.prototype,
	mobile: undefined,
};

export const AccordionTab = forwardRef(({
	className,
	classes,
	children,
	title,
	opened: initOpened,
	locked,
	icon,
	onClick,
	...props
}, ref) => {
	const [opened, setOpened] = useState(initOpened);

	const onClickAccordionTab = (evt) => {
		if(!locked) setOpened(!opened);
		onClick(evt, title, !opened);
	};

	return (
		<div
			className={cls(className, classes.root, {
				[classes.isOpen]: opened,
				[classes.noIcon]: !icon,
			})} {...props}>
			<button className={cls(classes.button)}>toggle</button>
			<div className={cls(classes.header)} onClick={onClickAccordionTab}>
				<i className={cls(classes.headerIcon)}></i>
				<span className={cls(classes.headerText)}>{title}</span>
			</div>
			<div className={cls(classes.article)}>
				<div className={cls(classes.articleWrapper)}>{children}</div>
			</div>
		</div>
	);
});

AccordionTab.displayName = 'AccordionTab';
AccordionTab.propTypes = propTypes;
AccordionTab.defaultProps = defaultProps;
export default AccordionTab;
