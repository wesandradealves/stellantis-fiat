import React from 'react';

export function HamburgerIcon(props) {
	return (
		<svg {...props} xmlns='http://www.w3.org/2000/svg' width='48%' height='48%' viewBox='0 0 34.045 28.371'>
			<g transform='translate(1 -5)'>
				<path d='M0 0h34.045v4.965H0z' transform='translate(-1 5)' style={{ fill: '#fff' }} />
				<path d='M0 0h34.045v4.965H0z' transform='translate(-1 28.406)' style={{ fill: '#fff' }} />
				<path d='M0 0h25.534v4.965H0z' transform='translate(-1 17.058)' style={{ fill: '#fff' }} />
			</g>
		</svg>
	);
}

HamburgerIcon.displayName = 'HamburgerIcon';
export default HamburgerIcon;
