import React from 'react';

export function PinIcon(props) {
	return (
		<svg {...props} xmlns='http://www.w3.org/2000/svg' width={'48%'} height={'48%'} viewBox='0 0 23.248 31.702'>
			<g transform='translate(-.4 18.6)'>
				<g transform='translate(1 -18)'>
					<path
						style={{
							fill: '#fff',
							stroke: '#fff',
							strokeWidth: '1.2px',
						}}
						d='M10.862 30.378C6.82 25.776 0 18.014 0 10.909a11.025 11.025 0 0 1 22.048 0c0 7.1-6.822 14.867-10.895 19.506a.432.432 0 0 1-.294-.039zm.373-24.446a5.3 5.3 0 1 0 5.3 5.3 5.306 5.306 0 0 0-5.3-5.3z'
					/>
				</g>
			</g>
		</svg>
	);
}

PinIcon.displayName = 'PinIcon';
export default PinIcon;
