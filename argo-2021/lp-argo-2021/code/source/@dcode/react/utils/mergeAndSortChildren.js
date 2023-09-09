import React from 'react';
import isTypeEqual from './isTypeEqual';

// merge default children
// sort them by `order` property
// filter them by `disabled` property
export const mergeAndSortChildren = (defaultChildren, _children, _parentProps, defaultOrder = 1) => {
	const children = React.Children.toArray(_children);
	const { order, ...parentProps } = _parentProps; // ignore order from parent
	return children
		.filter((el) => !el.props.disabled) // filter the disabled components
		.concat(defaultChildren.filter((c) => !find(children, (component) => isTypeEqual(component, c))))
		.map((element) => {
			const defaultComponent = find(defaultChildren, (c) => isTypeEqual(c, element));
			const defaultProps = defaultComponent ? defaultComponent.props : {};
			const props = {
				...parentProps, // inherit from parent component
				...defaultProps, // inherit from default component
				...element.props, // element's own props
			};
			const elClone = React.cloneElement(element, props, element.props.children);
			return elClone;
		})
		.sort((a, b) => (a.props.order || defaultOrder) - (b.props.order || defaultOrder));
};

export default mergeAndSortChildren;
