import React, { useEffect, useState, useRef } from 'react';
import cls from 'classnames';
import { Link } from 'react-router-dom';
import { TweenMax, TimelineMax, Back } from 'gsap/all';
import { DataLayer } from '@dcode/react/components/DataLayer';
import { ToggleButton } from '~/components/ToggleButton';
import { getScrollTop } from '~/components/Menu/MenuUtils';
import configData from '~/configurations/data';
import css from './MenuFixed.scss';

const classes = {
	root: css.menuFixed,
	nav: css.menuFixedNav,
	navList: css.menuFixedNavList,
	navItem: css.menuFixedNavItem,
	navLink: css.menuFixedNavLink,
	navLinkIcon: css.menuFixedNavLinkIcon,
	isActive: css.isActive,
	isDark: css.isDark,
	isPrimary: css.isPrimary,
};

const propTypes = {
};

const defaultProps = {
	className: '',
	classes,
	data: configData.menuFixed.data,
};

export const MenuFixed = ({
	className,
	classes,
	...props
}) => {
	const navRef = useRef();
	const menuRef = useRef();
	const anchorList = useRef([]);
	const isScrolling = useRef(false);
	const [isHidden, setIsHidden] = useState(false);
	const [timeline] = useState(new TimelineMax({ paused: true, reversed: true }));

	const enable = () => {
		setIsHidden(false);
	};

	const disable = () => {
		setIsHidden(true);
	};

	const show = () => {
		timeline.play();
	};

	const hide = () => {
		timeline.delay(2).reverse();
	};

	const onScroll = () => {
		const $target = document.querySelector('[data-ui-hidemenu]');
		let reachedLimits;
		if ($target) {
			const offsetY = getScrollTop();
			const selfY = menuRef.current.getBoundingClientRect().top + offsetY;
			const triggerY = $target.getBoundingClientRect().top + offsetY;
			reachedLimits = selfY >= triggerY;
			reachedLimits ? hide() : show();
		}
		if (!reachedLimits && !isHidden.current) {
			hide();
		}
		window.clearTimeout(isScrolling.current);
		isScrolling.current = setTimeout(() => {
			if (!reachedLimits) show();
		}, 66);
	};

	const renderItem = (item, idx) => {
		if (item.router) {
			return (
				<li className={cls(classes.navItem)} key={idx} ref={(el) => anchorList.current[idx] = el}>
					<DataLayer onEvent={item.track}>
						<Link className={cls(classes.navLink, {
							[classes.isDark]: item.dark || item.light === false,
							[classes.isPrimary]: item.primary,
						})}
						to={`${item.href}${window.location.search || ''}`}>
							{item.name}
						</Link>
					</DataLayer>
				</li>
			);
		}
		return (
			<li className={cls(classes.navItem)} key={idx} ref={(el) => anchorList.current[idx] = el}>
				<DataLayer onEvent={item.track}>
					<a className={cls(classes.navLink, {
							[classes.isDark]: item.dark || item.light === false,
							[classes.isPrimary]: item.primary,
						})} href={item.href} target={item.target}>
						{item.name}
					</a>
				</DataLayer>
			</li>
		);
	};

	const renderList = () => {
		return (
			<ul className={cls(classes.navList)}>{props.data.list.map((item, idx) => renderItem(item, idx))}</ul>
		);
	};

	useEffect(() => {
		timeline.eventCallback('onStart', enable);
		timeline.eventCallback('onReverseComplete', disable);
		timeline.from(menuRef.current, 0.9, { yPercent: 100, ease: Back.easeIn });

		//0.6
		//10
		timeline.staggerFrom(anchorList.current, 0.6, { yPercent: 0, ease: Back.easeOut }, 0.05);
		show();
		window.addEventListener('scroll', onScroll, false);
		return () => {
			window.removeEventListener('scroll', onScroll, false);
			window.clearTimeout(isScrolling.current);
			timeline.kill();
		};
	}, []);

	return (
		<div
			ref={menuRef}
			data-ui-hidden={isHidden}
			className={cls(classes.root, className)}>
			<div
				ref={navRef}
				className={classes.nav}>
				{renderList()}
			</div>
		</div>
	);
};

MenuFixed.displayName = 'MenuFixed';
MenuFixed.propTypes = propTypes;
MenuFixed.defaultProps = defaultProps;
export default MenuFixed;
