import React from 'react';
import HamburgerIcon from './HamburgerIcon';

export function HamburgerButton(props) {
	return <HamburgerIcon {...props} />;
}

HamburgerButton.displayName = 'HamburgerButton';
export default HamburgerButton;
