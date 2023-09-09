import React from 'react';

export function IconCross({ mobile, ...props }) {
	return (
		<svg {...props} xmlns='http://www.w3.org/2000/svg' width='12.979' height='12.979' viewBox='0 0 12.979 12.979'>
			<g transform='translate(-20.694 -19.66)'>
				<path
					d='M0 0v12.979'
					style={{ fill: 'none', stroke: '#fff', strokeWidth: 2 }}
					transform='translate(27.183 19.66)'
				/>
				<path
					d='M0 0v12.979'
					style={{ fill: 'none', stroke: '#fff', strokeWidth: 2 }}
					transform='rotate(90 3.762 29.911)'
				/>
			</g>
		</svg>
	);
}

export default IconCross;
