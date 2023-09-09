import React, { createContext, useContext, useState, useEffect } from 'react';

export const WindowDimensionsContext = createContext(null);

export const useWindowDimensions = () => {
	return useContext(WindowDimensionsContext);
};

export const windowDimensions = () => ({
	width: window.innerWidth,
	height: window.innerHeight,
});

export const WindowDimensionsProvider = ({ children }) => {
	const [dimensions, setDimensions] = useState(windowDimensions());
	useEffect(() => {
		const handleResize = () => setDimensions(windowDimensions());
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return <WindowDimensionsContext.Provider value={dimensions}>{children}</WindowDimensionsContext.Provider>;
};

export default WindowDimensionsProvider;
