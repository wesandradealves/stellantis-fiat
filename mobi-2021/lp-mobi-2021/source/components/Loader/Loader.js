import React, { useRef, useState, useEffect } from 'react';
import cls from 'classnames';
import { TweenMax, TimelineMax, Expo } from 'gsap/all';
import PropTypes from 'prop-types';
import FiatBrand from '~/components/FiatBrand/FiatBrand';
import createImageLoader from '@dcode/loader/createImageLoader';
import css from './Loader.scss';

const classes = {
	root: css.loader,
	background: css.loaderBackground,
	backgroundSlice: css.loaderBackgroundSlice,
	wrapper: css.loaderWrapper,
	brand: css.loaderBrand,
	brandImage: css.loaderBrandImage,
	progress: css.loaderProgress,
	progressBar: css.loaderProgressBar,
};

const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.objectOf(PropTypes.string),
	onEmpty: PropTypes.func,
	onComplete: PropTypes.func,
	onProgress: PropTypes.func,
	onStart: PropTypes.func,
	onTransitionOutComplete: PropTypes.func,
	visible: PropTypes.bool,
	assets: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			src: PropTypes.string.isRequired,
		}),
	),
};

const defaultProps = {
	className: '',
	classes,
	onEmpty: Function.prototype,
	onComplete: Function.prototype,
	onProgress: Function.prototype,
	onStart: Function.prototype,
	onError: Function.prototype,
	onTransitionOutComplete: Function.prototype,
	visible: false,
	assets: [],
};

export const Loader = ({
	classes,
	className,
	assets,
	onEmpty,
	onComplete,
	onProgress,
	onStart,
	onError,
	onTransitionOutComplete,
	children,
	visible,
	...props
}) => {
	const containerRef = useRef();
	const brandRef = useRef();
	const bgSlicesRef = useRef([]);
	const progressbarRef = useRef([]);
	const [progress, setProgress] = useState(0);
	const disposeImageLoader = useRef();
	const timeline = useRef();

	const createTimeline = () => {
		timeline.current = new TimelineMax({
			paused: true,
			smoothChildTiming: true,
			onComplete: onTransitionOutComplete,
		})

		.set(containerRef.current, {
			autoAlpha: 1,
		})

		.staggerFromTo(bgSlicesRef.current, 1.5, {
			xPercent: 100,
		}, {
			xPercent: 0,
			ease: Expo.easeInOut,
		}, -0.075)

		.addLabel('loaderStart')

			.set([
				progressbarRef.current[0],
				brandRef.current,
			], {
				autoAlpha: 1,
			})

			.fromTo(brandRef.current, 1, {
				yPercent: -100,
				rotation: 20,
			}, {
				yPercent: 0,
				rotation: 0,
				ease: Expo.easeOut,
			})

		.addLabel('loaderProgress')

			.staggerFromTo(progressbarRef.current, 1, {
				scaleX: 0,
			}, {
				scaleX: 1,
				ease: Expo.easeInOut,
			}, 0.75, '-=1')

		.addLabel('loaderInit')

			.set(progressbarRef.current, {
				transformOrigin: 'right',
			})

			.fromTo(progressbarRef.current[0], 1, {
				scaleX: 1,
			},
			{
				scaleX: 0,
				ease: Expo.easeInOut,
			})

			.fromTo(brandRef.current, 1, {
				yPercent: 0,
			}, {
				yPercent: 105,
				ease: Expo.easeOut,
			}, '-=1')

			.staggerFromTo(bgSlicesRef.current, 1.5, {
				xPercent: 0,
			}, {
				xPercent: 100,
				ease: Expo.easeInOut,
			}, 0.075)

			.set(containerRef.current, {
				autoAlpha: 0,
			})

		.addLabel('loaderComplete');
		return timeline.current;
	};

	const stopLoad = () => {
		if (disposeImageLoader.current) {
			disposeImageLoader.current();
		}
	};

	const startLoad = () => {
		stopLoad();
		disposeImageLoader.current = createImageLoader({
			assets,
			onStart,
			onError,
			onProgress: (asset, progress) => {
				setProgress(progress);
				onProgress(asset, progress);
				TweenMax.set(progressbarRef.current[1], { scaleX: progress });
			},
			onEmpty: (response) => {;
				timeline.current.tweenFromTo('loaderInit', 'loaderComplete');
				onEmpty(response);
			},
			onComplete: (response) => {;
				timeline.current.tweenFromTo('loaderInit', 'loaderComplete');
				onComplete(response);
			},
		});
	};

	const show = () => {
		timeline.current.tweenFromTo('loaderStart', 'loaderProgress', {
			onComplete: startLoad,
		});
	};

	const hide = () => {
		timeline.current.reverse();
	};

	const kill = () => {
		timeline.current.kill();
		stopLoad();
	};

	useEffect(() => {
		if (children) return;
		createTimeline();
		return kill;
	}, []);

	useEffect(() => {
		if (children) return;
		if (visible) show();
		else hide();
		return kill;
	}, [visible]);

	const renderDefaultChildren = () => (
		<div
			ref={containerRef}
			className={cls(classes.background)}>
			<div ref={(ref) => bgSlicesRef.current[0] = ref} className={cls(classes.backgroundSlice)} />
			<div className={cls(classes.wrapper)}>
				<figure className={cls(classes.brand)}>
					<div
						ref={brandRef}
						className={cls(classes.brandImage)}>
						<FiatBrand stripes={'italian'}/>
					</div>
				</figure>
				<div
					ref={(ref) => progressbarRef.current[0] = ref}
					className={cls(classes.progress)}>
					<div
						ref={(ref) => progressbarRef.current[1] = ref}
						className={cls(classes.progressBar)}
					/>
				</div>
			</div>
		</div>
	);

	return (
		<div
			className={cls(classes.root, className)}
			{...props}
			role={'progressbar'}
			aria-hidden={true}
			aria-valuemin={0}
			aria-valuemax={1}
			aria-valuenow={progress}>
			{children || renderDefaultChildren()}
		</div>
	);
};

Loader.displayName = 'Loader';
Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;
export default Loader;
