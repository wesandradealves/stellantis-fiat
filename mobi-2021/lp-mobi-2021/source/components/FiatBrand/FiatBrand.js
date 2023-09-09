import React from 'react';

export function FiatBrand({ noColor, ...props }) {
	return (
    <svg
      { ...props }
			role='img'
			aria-hidden='true'
			xmlns='http://www.w3.org/2000/svg'
			height='48%'
			viewBox='0 0 43.211 31.401'>
			<path d='M10.182 0L0 31.4h4.718L14.9 0z' style={{fill: noColor ? '#ff8094' : 'rgb(38, 143, 82)'}} />
			<path d='M44.382 0L34.2 31.4h4.718L49.1 0z' transform='translate(-24.763)' style={{fill: noColor ? '#ff8094' : 'rgb(255, 255, 255)'}} />
			<path d='M78.582 0L68.4 31.4h4.718L83.3 0z' transform='translate(-49.526)' style={{fill: noColor ? '#ff8094' : 'rgb(255, 255, 255)'}} />
			<path d='M112.782 0L102.6 31.4h4.718L117.5 0z' transform='translate(-74.289)' style={{fill: noColor ? '#ff8094' : 'rgb(255, 20, 48)'}} />
		</svg>
	);
}

FiatBrand.displayName = 'FiatBrand';
export default FiatBrand;
