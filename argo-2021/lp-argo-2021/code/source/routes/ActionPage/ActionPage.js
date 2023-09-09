import React, { createRef, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DataLayer } from '@dcode/react/components/DataLayer';
import { Quote } from '~/components/Quote';
import configData from '~/configurations/data';
import css from './ActionPage.scss';

export const classes = {
	root: css.actionPage,
	content: css.actionPageContent,
	quote: css.actionPageQuote,
	nav: css.actionPageNav,
	navList: css.actionPageNavList,
	navItem: css.actionPageNavItem,
	navButton: css.actionPageNavButton,
	socialNav: css.actionPageSocialNav,
	socialNavList: css.actionPageSocialNavList,
	socialNavItem: css.actionPageSocialNavItem,
	socialNavButton: css.actionPageSocialNavButton,
	facebook: css.facebook,
	youtube: css.youtube,
	twitter: css.twitter,
	instagram: css.instagram,
	legal: css.actionPageLegal,
	logo: css.actionPageLogo,
	logoIbama: css.actionPageLogoIbama,
  icon: css.icon
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
	data: PropTypes.object,
};

export const defaultProps = {
	className: '',
	classes,
	data: configData.action,
};

export function ActionPage({ className, classes, data: info, ...props }) {
	const $el = createRef();
	const [data, setData] = useState(info.data);

	const renderNavAnchor = (item, index) => {
		return (
			<li key={index} className={cls(classes.navItem)}>
				<DataLayer onEvent={item.dataLayer || 'ActionPage_ClicouNavItem'} args={[item.label]}>
					<a
						className={cls(classes.navButton)}
						dangerouslySetInnerHTML={{ __html: item.label }}
						href={item.href}
						target={item.target}
					/>
				</DataLayer>
			</li>
		);
	};

	const renderNavLink = (item, index) => {
		return (
			<li key={index} className={cls(classes.navItem)}>
				<DataLayer onEvent={item.dataLayer || 'ActionPage_ClicouNavItem'} args={[item.label]}>
					<Link className={cls(classes.navButton)} dangerouslySetInnerHTML={{ __html: item.label }} to={`${item.to}${window.location.search || ''}`} />
				</DataLayer>
			</li>
		);
	};

	const renderNav = (list) => {
		return list.map((item, index) => {
			if (item.to) return renderNavLink(item, index);
			return renderNavAnchor(item, index);
		});
	};

	const renderSocialItem = (item, index) => {
		return (
			<li key={index} className={cls(classes.socialNavItem)}>
				<Fade bottom>
					<DataLayer onEvent={item.dataLayer || 'ActionPage_ClicouSocialItem'} args={[item.label]}>
						<a
							className={cls(classes.socialNavButton, classes[item.label.toLowerCase()])}
							href={item.href}
							target={item.target}>
							<i className={cls('icon', `icon-${item.label.toLowerCase()}`)} aria-hidden={true} />
						</a>
					</DataLayer>
				</Fade>
			</li>
		);
	};

	const renderSocialNav = (list) => {
		return list.map(renderSocialItem);
	};

	return (
		<section
			ref={$el}
			id={'footer'}
			data-ui-anchor={'footer'}
			data-ui-hidemenu={true}
			className={cls(classes.root, className)}>
			<div className={cls(classes.content)}>
				{/* Fortune Cookie ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
				<Quote className={classes.quote} title={data.title} text={data.description} />

				{/* Interno/Externo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
				<nav className={cls(classes.nav)}>
					<ul className={cls(classes.navList)}>{renderNav(data.list)}</ul>
				</nav>

				{/* Social ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
				<nav className={cls(classes.socialNav)}>
					<ul className={cls(classes.socialNavList)}>{renderSocialNav(data.social)}</ul>
				</nav>

				{/* Legal ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
				<Fade>
					<p
						className={cls(classes.legal)}
						dangerouslySetInnerHTML={{
							__html: data.legal,
						}}
					/>
				</Fade>
				{/* Ibama ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
				<div className={cls(classes.logo)}>
					<img
						className={cls(classes.logoIbama)}
						src={'/assets/logos/logo-ibama@2x.png'}
						width={41}
						height={46}
						alt={'IBAMA'}
					/>
				</div>
			</div>
		</section>
	);
}

ActionPage.propTypes = propTypes;
ActionPage.defaultProps = defaultProps;
export default ActionPage;
