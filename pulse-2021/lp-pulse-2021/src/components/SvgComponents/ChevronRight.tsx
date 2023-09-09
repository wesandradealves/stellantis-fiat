import { FC } from 'react';

interface ChevronProps {
	color?: string;
	title?: string;
}

const ChevronRight: FC<ChevronProps> = ({ color = 'currentColor', title = 'seta' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="6.099" height="9.408" viewBox="0 0 6.099 9.408" aria-labelledby={`chevron-right-${title}`}>
			<title id={`chevron-right-${title}`}>{title}</title>
			<path id="Path_1019" data-name="Path 1019" d="M0,0,4.257,3.959,8,0" transform="translate(0.732 8.727) rotate(-90)" fill="none" stroke={color} strokeWidth="2" />
		</svg>

	)
}

export default ChevronRight;
