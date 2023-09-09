import React, { useRef, useState, useEffect } from 'react';
import { FiatBrand } from '~/components/FiatBrand'
import $ from 'jquery';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { DataLayer } from '@dcode/react/components/DataLayer';
import configData from '~/configurations/data';
import { AccordionTab, TabContent, DesktopTabs } from './Info';
import { GalleryPage } from '~/routes/GalleryPage';
import css from './AboutPage.scss';

export const classes = {
	root: css.aboutPage,
	content: css.aboutPageContent,
	accordion: css.aboutPageAccordion,
	accordionTitle: css.aboutPageAccordionTitle,
	accordionList: css.aboutPageAccordionList,
	accordionItem: css.aboutPageAccordionItem,
	accordionContent: css.aboutPageTabContent,
	flag: css.aboutPageFlag,
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
	data: PropTypes.object,
};

export const defaultProps = {
	className: '',
	classes,
	data: configData.about,
};

export function AboutPage({ className, classes, data: info, ...props }) {
	const $el = useRef();
	const [data, setData] = useState(info.data);
	const [currentIndex, setCurrentIndex] = useState(-1);
	const itemOpenedState = useRef({});

  const onClickTab = (evt, item, index) => {
		if (!!data.list[currentIndex]) {
			DataLayer.push('AboutPage_ClicouTabMobile', data.list[currentIndex].title, false);
		}

		if (currentIndex != index) {
			DataLayer.push('AboutPage_ClicouTabMobile', data.list[index].title, true);
		}

		TweenLite.to(window, 0.5, {
			delay: 0.05,
			onComplete: () => {
				itemOpenedState.current[index] = !itemOpenedState.current[index];
				setCurrentIndex(currentIndex === index ? -1 : index);
			},
		});

		TweenLite.killTweensOf(window, true, { scrollTo: true });
	};

	const whenTriggeredFromMenu = (evt, slug) => {
		const index = data.list.findIndex((item) => item.slug === slug);
		setCurrentIndex(index);
	};

	useEffect(() => {
		$(document).on('OPEN_ACCORDION_ITEM', whenTriggeredFromMenu);
		return () => {
			$(document).off('OPEN_ACCORDION_ITEM', whenTriggeredFromMenu);
		};
	}, []);

	const renderItem = (item, index) => {
		return (
			<React.Fragment key={index}>
				{item.slug && <div id={item.slug} data-ui-anchor={item.slug} />}
				<AccordionTab
					className={cls(classes.accordionItem)}
					title={item.title}
					onClick={(evt) => onClickTab(evt, item, index)}
					opened={!!itemOpenedState.current[index]}>
          <TabContent
          	{...props}
          	opened={!!itemOpenedState.current[index] || currentIndex === index}
          	className={cls(classes.accordionContent)}
          	data={item}
          />
				</AccordionTab>
			</React.Fragment>
		);
	};

	const renderList = (list) => {
		return list.map(renderItem);
	};

	return (
		<section
			ref={$el}
			id={props.mobile ? undefined : 'about'}
			data-ui-anchor={props.mobile ? undefined : 'about'}
			className={cls(classes.root, className)}>
			{/* Accordion ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
			<div className={cls(classes.accordion)}>
				{props.mobile && (
					<React.Fragment>
            <FiatBrand noColor className={cls(classes.flag)} />
						<h1 className={cls(classes.accordionTitle)} dangerouslySetInnerHTML={{ __html: data.title }}/>
						<GalleryPage className={cls(classes.accordionContent)} {...props} />
						<div
							id={props.mobile ? 'about' : undefined}
							data-ui-anchor={props.mobile ? 'about' : undefined}
							className={cls(classes.accordionList)}>
							{renderList(data.list)}
						</div>
					</React.Fragment>
				)}
				{!props.mobile && <DesktopTabs data={data.list} />}
			</div>
		</section>
	);
}

AboutPage.propTypes = propTypes;
AboutPage.defaultProps = defaultProps;
export default AboutPage;
