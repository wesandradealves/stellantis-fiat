import { useState, useEffect, useRef } from 'react';

export default function useDisplay(initialIsVisible, hideOnHoverOut) {
	const [display, setDisplay] = useState(initialIsVisible);
	const ref = useRef(null);

	const handleClickOutside = (evt) => {
		if (ref.current && !ref.current.contains(evt.target)) {
			setDisplay(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		hideOnHoverOut && document.addEventListener('mouseover', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
			document.removeEventListener('mouseover', handleClickOutside, true);
		};
	});
	return [display, setDisplay, ref];
}
