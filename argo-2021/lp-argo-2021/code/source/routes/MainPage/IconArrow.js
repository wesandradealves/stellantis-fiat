import React from 'react';

export function IconArrow({ mobile, ...props }) {
	return (
		<svg {...props} xmlns='http://www.w3.org/2000/svg' width='8.68' height='14.921' viewBox='0 0 8.68 14.921'>
			<g transform='translate(.707 .707)'>
				<path d='M0 0l7.266 7.266' style={{ fill: 'none', stroke: '#fff', strokeWidth: 2 }} />
				<path
					d='M0 7.266L7.266 0'
					style={{ fill: 'none', stroke: '#fff', strokeWidth: 2 }}
					transform='translate(0 6.241)'
				/>
			</g>
		</svg>
	);
}

export default IconArrow;
