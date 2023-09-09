/* eslint-disable */
import React, { forwardRef, useState } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
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
	fadeDelay: PropTypes.number,
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
	fadeDelay: 0,
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
	fadeDelay,
	...props
}, ref) => {
	const [opened, setOpened] = useState(initOpened);

	const onClickAccordionTab = (evt) => {
		if(!locked) setOpened(!opened);
		onClick(evt, title, !opened);
	};

	return (
		<div className={cls(className, classes.root, { [classes.isOpen]: opened })} {...props}>
			<button className={cls(classes.button)}>toggle</button>
			<Fade bottom delay={fadeDelay}>
				<div className={cls(classes.header, { [classes.noIcon]: !icon })} onClick={onClickAccordionTab}>
					<i className={cls('icon', 'icon-angle-down')} /> {title}
				</div>
			</Fade>
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
