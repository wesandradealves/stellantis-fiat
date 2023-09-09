import React from 'react';

export const Background = ({ mobile, ...props }) => {
	return !mobile ? (
		<img {...props} alt="background" src='assets/bg-main@2x.jpg' />
	) : (
		<img {...props} alt="background" src='assets/bg-main__mobile@2x.jpg' />
	);
}

export default Background;
