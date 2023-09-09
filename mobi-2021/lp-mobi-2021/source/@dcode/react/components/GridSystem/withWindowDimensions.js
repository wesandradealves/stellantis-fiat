import React, { PureComponent, forwardRef } from 'react';
import { WindowDimensionsContext } from './WindowDimensionsProvider';

/**
 * @usage:
 *
 *	import React from 'react';
 *	import withWindowDimensions from '@dcode/react/components/withWindowDimensions';
 *
 *	const SampleComponent = ({ width }) => (
 *		<span>Page is {width} pixels wide.</span>
 *	);
 *
 *	const mapDimensionsToProps = dimensions => ({
 *		width: dimensions.width,
 *	});
 *
 *	export default withWindowDimensions(mapDimensionsToProps)(SampleComponent);
 *
 */
export const withWindowDimensions = (mapDimensionsToProps) => (WrappedComponent) => {
	class Wrapped extends PureComponent {
		static displayName = `withWindowDimensions(${WrappedComponent.displayName || WrappedComponent.name})`;

		render() {
			const { forwardedRef } = this.props;
			return (
				<WindowDimensionsContext.Consumer>
					{(dimensions) => (
						<WrappedComponent ref={forwardedRef} {...this.props} {...mapDimensionsToProps(dimensions)} />
					)}
				</WindowDimensionsContext.Consumer>
			);
		}
	}

	return forwardRef((props, ref) => <Wrapped {...props} forwardedRef={ref} />);
};

export default withWindowDimensions;
