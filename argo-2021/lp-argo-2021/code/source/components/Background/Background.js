import React from 'react';
import { Picture } from '@dcode/react/components/Media';
import cls from 'classnames';
import css from './Background.scss';

export const classes = {
	root: css.background,
	picture: css.backgroundPicture,
	img: css.backgroundImg,
};

export const defaultProps = {
	classes,
	className: '',
	alt: '',
	sources: [
		{
			type: 'image/svg+xml',
			srcSet: 'assets/main-bg.svg',
			fallback: {
				type: 'image/jpg',
				srcSet: 'assets/main-bg.jpg',
			},
		},
	],
};

export function Background({ mobile, className, classes, sources, alt, ...props }) {
	return (
		<div className={cls(classes.root, className)}>
			<Picture
				className={cls(classes.picture)}
				classNameImg={cls(classes.img)}
				sources={sources}
				alt={alt}
			/>
		</div>
	);
}

Background.displayName = 'Background';
Background.defaultProps = defaultProps;
export default Background;
