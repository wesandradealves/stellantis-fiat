import React, { useState, useEffect } from 'react';

export const defaultProps = {
	onProgress: () => {},
	color: '#ff8094',
	height: 4,
	zIndex: 100,
};

export const ScrollProgress = ({ color, height, zIndex, onProgress }) => {
	const [width, setWidth] = useState(null);

	const onScroll = () => {
		const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
		const winScroll = document.body.scrollTop || scrollTop;
		const winHeight = scrollHeight - clientHeight;
		const progress = winScroll / winHeight;
		const percent = `${progress * 100}%`;
		if (winHeight > 0) {
			onProgress({ progress, percent });
			return setWidth(percent);
		}
		onProgress({ progress: 0, percent: 0 });
		return setWidth(0);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, [color, height]);

	const styles = {
		progress: {
			top: 0,
			marginTop: 0,
			padding: 0,
			position: 'fixed',
			transition: 'width 200ms ease-out',
			backgroundColor: color,
			height: height,
			width: width,
			zIndex: zIndex,
		},
	};

	return <div style={styles.progress} />;
};

ScrollProgress.defaultProps = defaultProps;
export default ScrollProgress;
