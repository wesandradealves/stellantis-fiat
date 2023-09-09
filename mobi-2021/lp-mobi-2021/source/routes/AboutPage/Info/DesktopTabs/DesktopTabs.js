import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import $ from 'jquery';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { TabContent } from '..';
import './DesktopTabs.scss';
import { DataLayer } from '@dcode/react/components/DataLayer';

export const classes = {
	root: 'DesktopTabs',
	rootFx: 'DesktopTabs-effect-slide-fade',
	content: 'DesktopTabs-content',
	list: 'DesktopTabs-list',
	accordionContent: '',
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
	mobile: PropTypes.bool,
	data: PropTypes.arrayOf(PropTypes.object),
};

export const defaultProps = {
	className: '',
	classes,
	mobile: undefined,
	data: [],
};

export const DesktopTabs = ({ className, classes, children, data: info, ...props }) => {
	const [data, setData] = useState(info);
	const [currentIndex, setCurrentIndex] = useState(0);

	const whenTriggeredFromMenu = (evt, slug) => {
		const index = data.findIndex((item) => item.slug === slug);
		// if (index > 0) setCurrentIndex(index);
		setCurrentIndex(index);
	};

	useEffect(() => {
		$(document).on('OPEN_ACCORDION_ITEM', whenTriggeredFromMenu);
		return () => {
			$(document).off('OPEN_ACCORDION_ITEM', whenTriggeredFromMenu);
		};
	}, []);

	const onRadioChange = (index, evt) => {
		DataLayer.push('AboutPage_ClicouTab', data[index].title);

		if (index != currentIndex) {
			DataLayer.push('AboutPage_ClicouTab_Close', data[currentIndex].title);
		}
	};

	const renderTab = (item, index, list) => {
		return (
			<React.Fragment key={index}>
        <Fade bottom delay={index > 0 ? index * 100 : 0}>
					<input
						type='radio'
						name='AboutPage-tabs'
						id={item.slug}
						data-ui-anchor={item.slug}
						// defaultChecked={index === currentIndex}
						defaultChecked={false}
						onClick={() => setCurrentIndex(index)}
						onChange={onRadioChange.bind(this, index)}
						className={cls({
							['tab-content-first']: !index,
							[`tab-content-${index + 1}`]: index > 0 && index < list.length - 1,
							[`tab-content-last`]: index === list.length - 1,
							['is-checked']: index === currentIndex,
						})}
					/>
					<label htmlFor={item.slug}>
						<i className={'icon-bolt'} />
						<span dangerouslySetInnerHTML={{ __html: item.title || '&nbsp;' }} />
					</label>
				</Fade>
			</React.Fragment>
		);
	};

	const renderTabs = (list) => {
		return list.map(renderTab);
	};

	const renderContentItem = (item, index, list) => {
		return (
			<li
				key={index}
				className={cls('tab-content', {
					['tab-content-first']: !index,
					[`tab-content-${index + 1}`]: index > 0 && index < list.length - 1,
					[`tab-content-last`]: index === list.length - 1,
				})}>
        <TabContent {...props} opened={currentIndex === index} className={cls(classes.accordionContent)} data={item} />
			</li>
		);
	};

	const renderContent = (list) => {
		return list.map(renderContentItem);
	};

	return (
		<div className={cls(classes.root, classes.rootFx, className)}>
			<div className={cls(classes.content)}>
				{renderTabs(data)}
				<ul className={cls(classes.list)}>{renderContent(data)}</ul>
			</div>
		</div>
	);
};

DesktopTabs.propTypes = propTypes;
DesktopTabs.defaultProps = defaultProps;
export default DesktopTabs;
