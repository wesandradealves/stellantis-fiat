import React from 'react';

export function OffersIcon(props) {
	return (
		<svg {...props} xmlns='http://www.w3.org/2000/svg' width='20.758' height='22.906' viewBox='0 0 20.758 22.906'>
			<g transform='translate(3.854 3.26)'>
				<g transform='rotate(10 22.128 -13.73)'>
					<path
						style={{ fill: '#ffffff', stroke: '#ffffff', strokeWidth: 0.7, fillRule: 'evenodd' }}
						d='M.154 5.376A.563.563 0 0 0 0 5.763v12.994a.563.563 0 0 0 .563.563h9.475a.563.563 0 0 0 .563-.563V5.763a.563.563 0 0 0-.154-.387L5.4.041 5.39.036a.13.13 0 0 0-.184.005z'
						transform='rotate(-45 9.048 3.748)'
					/>
					<circle
						style={{ fill: '#ff8094', stroke: '#ff8094', strokeWidth: 0.5 }}
						cx='1.117'
						cy='1.117'
						r='1.117'
						transform='rotate(-45 11.144 -3.007)'
					/>
					<text
						style={{ fill: '#ff8094', fontSize: 7, fontFamily: 'FuturaPT Medium, FuturaPT', fontWeight: 500 }}
						transform='rotate(-45 25.698 -7.189)'>
						<tspan x='0' y='0'>
							$
						</tspan>
					</text>
				</g>
			</g>
		</svg>
	);
}

OffersIcon.displayName = 'OffersIcon';
export default OffersIcon;
