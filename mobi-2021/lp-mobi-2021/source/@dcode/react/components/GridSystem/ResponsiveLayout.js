import { useWindowDimensions } from './WindowDimensionsProvider';

/**
 * @usage:
 *	import React from 'react';
 *	import ResponsiveLayout from '@dcode/react/components/ResponsiveLayout';
 *	import MobileView from './MobileView';
 *	import DesktopView from './DesktopView';
 *
 *	const Content = ({ items }) => {
 *		return (
 *			<ResponsiveLayout
 *				breakPoint={767}
 *				renderDesktop={() => (
 *					<DesktopView items={items} />
 *				)}
 *				renderMobile={() => (
 *					<MobileView items={items} />
 *				)}
 *			/>
 *		);
 *	}
 *
 *	export default Content;
 */
export const ResponsiveLayout = ({ breakPoint = 414, renderMobile, renderDesktop }) => {
	const { width } = useWindowDimensions();
	return width > breakPoint ? renderDesktop() : renderMobile();
};

export default ResponsiveLayout;
