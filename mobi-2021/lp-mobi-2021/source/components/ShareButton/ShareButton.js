import React from 'react';
import cls from 'classnames';
import css from './ShareButton.scss';

export const classes = {
	root: css.shareButton,
	icon: css.shareButtonIcon,
};

export const defaultProps = {
	className: '',
	classes,
};

export function ShareButton({ className, classes, ...props }) {
	return (
		<button className={cls(classes.root, className)} {...props}>
			<svg
				className={cls(classes.icon)}
				xmlns='http://www.w3.org/2000/svg'
				width='31.257'
				height='31.257'
				viewBox='0 0 31.257 31.257'>
				<path
					d='M10.656 14.587a2.3 2.3 0 0 1-1.674-.723 2.507 2.507 0 0 1-.694-1.748 2.565 2.565 0 0 1 .157-.882l-4.1-2.6a2.34 2.34 0 0 1-1.979 1.12A2.425 2.425 0 0 1 0 7.284a2.425 2.425 0 0 1 2.368-2.473 2.338 2.338 0 0 1 1.979 1.12l4.1-2.578a2.544 2.544 0 0 1-.158-.88A2.425 2.425 0 0 1 10.656 0a2.425 2.425 0 0 1 2.368 2.473 2.425 2.425 0 0 1-2.368 2.473 2.333 2.333 0 0 1-2-1.149L4.567 6.37a2.556 2.556 0 0 1 0 1.827l4.092 2.593a2.452 2.452 0 0 1 .323-.422 2.3 2.3 0 0 1 3.348 0 2.549 2.549 0 0 1 0 3.5 2.3 2.3 0 0 1-1.674.719zm.042-4.235a1.832 1.832 0 0 0-1.315.55 1.9 1.9 0 0 0 0 2.663 1.846 1.846 0 0 0 2.631 0 1.9 1.9 0 0 0 0-2.663 1.838 1.838 0 0 0-1.314-.55zM2.325 5.646a1.882 1.882 0 0 0 0 3.765 1.882 1.882 0 0 0 0-3.765zM10.7.471a1.882 1.882 0 1 0 1.861 1.882A1.873 1.873 0 0 0 10.7.471z'
					transform='translate(8.633 8.335)'
				/>
			</svg>
		</button>
	);
}

ShareButton.displayName = 'ShareButton';
ShareButton.defaultProps = defaultProps;
export default ShareButton;