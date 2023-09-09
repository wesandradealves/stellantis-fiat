import React, { useState, useEffect } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import ReactIdSwiper from 'react-id-swiper';
import ReactPlayer from 'react-player';
import * as is from '@dcode/utils/is';
import ensureSlashEnd from '@dcode/utils/xtras/ensureSlashEnd';
import { Img, Picture } from '@dcode/react/components/Media';
import { DataLayer } from '@dcode/react/components/DataLayer';
import { Swiper, Navigation, Pagination } from 'swiper/dist/js/swiper.esm';
import { safeId, getArgByPath } from '~/configurations/data-main';
import css from './Gallery.scss';

export const classes = {
	root: css.gallery,
	poster: css.galleryPoster,
	posterList: css.galleryPosterList,
	posterItem: css.galleryPosterItem,
	posterPicture: css.galleryPosterPicture,
	posterImage: css.galleryPosterImage,
	posterVideo: css.galleryPosterVideo,
	posterLoader: css.galleryPosterLoader,
	info: css.galleryInfo,
	infoTitle: css.galleryInfoTitle,
	infoText: css.galleryInfoText,
	thumb: css.galleryThumb,
	thumbList: css.galleryThumbList,
	thumbItem: css.galleryThumbItem,
	thumbImage: css.galleryThumbImage,
	isActive: css.isActive,
	isSimple: css.isSimple,
};

export const defaultProps = {
	className: '',
	classes,
};

export const propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string,
		}),
	}),
};

export const Gallery = ({ className, classes, location, match, ...props }) => {
	const state = location.state.argumento || getArgByPath(location.hash.replace(/^#/, ''));
	const id = safeId(match.params.id, 0, state.modal.length - 1);
	const [swiperPoster, updateSwiperPoster] = useState(null);
	const [swiperThumbs, updateSwiperThumbs] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(id);
	const [isTracked, setIsTracked] = useState(false);

	const swiperThumbsConfigDesktop = {
		direction: 'horizontal',
		centerInsufficientSlides: true,
		loopFillGroupWithBlank: true,
		loop: false,
		freeMode: false,
		grabCursor: true,
		centeredSlides: false,
		initialSlide: currentIndex,
		slidesPerGroup: 10,
		slidesPerView: 10,
		slidesPerColumn: 1,
		spaceBetween: 18,
	};

	const swiperThumbsConfigTablet = {
		...swiperThumbsConfigDesktop,
		slidesPerView: 6.5,
		slidesPerGroup: 6,
		slidesPerColumn: 1,
	};

	const swiperThumbsConfigSmartphone = {
		...swiperThumbsConfigDesktop,
		slidesPerView: 3.5,
		slidesPerGroup: 3,
		slidesPerColumn: 1,
		spaceBetween: 26,
		cssMode: true,
	};

	const slideNextPoster = (speed, runCallbacks) => {
		swiperPoster && swiperPoster.slideNext(speed, runCallbacks);
	};

	const slidePrevPoster = (speed, runCallbacks) => {
		swiperPoster && swiperPoster.slidePrev(speed, runCallbacks);
	};

	const slideToPoster = (index, speed, runCallbacks, internal) => {
		swiperPoster && swiperPoster.slideTo(index, speed, runCallbacks, internal);
	};

	const putIdOnPath = (pathname, index) => {
		const pathArray = ensureSlashEnd(pathname, false).split('/');
		pathArray.length > 2 && pathArray.pop();
		const nupath = `${pathArray.join('/')}/${index}`;
		window.history.replaceState(null, state.modal[index].title, nupath);
	};

	const onPosterSlideChange = () => {
		if (isTracked) {
			DataLayer.push(
				'ModalGallery_Scroll',
				state.modal[swiperPoster.realIndex].title,
				state.title,
				swiperPoster.realIndex,
			);
			setIsTracked(false);
		}
		if (swiperThumbs) {
			const thumbsPage = Math.round((swiperPoster.realIndex - 1) / swiperThumbs.params.slidesPerGroup);
			if (thumbsPage > swiperThumbs.snapIndex) {
				swiperThumbs.slideNext();
			} else if (thumbsPage < swiperThumbs.snapIndex) {
				swiperThumbs.slidePrev();
			}
		}
		setCurrentIndex(swiperPoster.realIndex);
		putIdOnPath(location.hash.replace(/^#/, ''), swiperPoster.realIndex);
	};

	const onPosterResize = () => {
		swiperPoster && swiperPoster.update();
		swiperThumbs && swiperThumbs.update();
	};

	const onThumbsSliderMove = () => {
		DataLayer.push('ModalGallery_ThumbsScroll', state.modal[swiperPoster.realIndex].title, state.title);
	};

	const onPosterTouchStart = () => {
		setIsTracked(true);
	};

	useEffect(() => DataLayer.push('ModalGallery_Abriu', state.title), []);
	useEffect(() => {
		if (swiperPoster) {
			swiperPoster.on('slideChange', onPosterSlideChange);
			swiperPoster.on('resize', onPosterResize);
			swiperPoster.on('touchStart', onPosterTouchStart);
		}

		if (swiperThumbs) {
			swiperThumbs.on('slideChange', onThumbsSliderMove);
		}

		return () => {
			if (swiperPoster) {
				swiperPoster.off('slideChange', onPosterSlideChange);
				swiperPoster.off('resize', onPosterResize);
				swiperPoster.off('touchStart', onPosterTouchStart);
			}

			if (swiperThumbs) {
				swiperThumbs.off('slideChange', onThumbsSliderMove);
			}
		};
	}, [swiperPoster, swiperThumbs, isTracked]);

	const onPlayVideo = () => {
		const index = swiperPoster ? swiperPoster.realIndex : 0;
		DataLayer.push('ModalGallery_videoPlay', state.title, state.modal[index].title);
	};

	const onPauseVideo = () => {
		const index = swiperPoster ? swiperPoster.realIndex : 0;
		DataLayer.push('ModalGallery_videoPause', state.title, state.modal[index].title);
	};

	const renderThumb = (item, index) => {
		return (
			<div key={index} className={cls(classes.thumbItem)}>
				<DataLayer onEvent={'ModalGallery_ClicouThumb'} args={[item.title, state.title, index]}>
					<img
						className={cls(classes.thumbImage, { [classes.isActive]: index === currentIndex })}
						onClick={() => slideToPoster(index)}
						data-src={item.thumbnail}
						src={item.thumbnail}
						alt={item.alt ? item.alt : 'item-galeria'}
					/>
				</DataLayer>
			</div>
		);
	};

	const renderThumbs = (list) => {
		return list.length > 1 && list.map(renderThumb);
	};

	const renderVideo = (item, index) => {
		return (
			<div key={index} className={cls(classes.posterVideo)}>
				<ReactPlayer
					url={item.video}
					playing={index === currentIndex}
					onPlay={onPlayVideo}
					onPause={onPauseVideo}
					controls={true}
					light={false}
					width='100%'
					height='100%'
				/>
			</div>
		);
	};

	const renderPicture = (item, index) => {
		return (
			<Picture
				className={cls(classes.posterPicture)}
				classNameImg={cls(classes.posterImage, 'swiper-lazy')}
				sources={item.poster.sources}
				alt={item.poster.alt}
			/>
		);
	};

	const renderImg = (item, index) => {
		return (
			<Img
				className={cls(classes.posterImage, classes.isSimple, 'swiper-lazy')}
				src={item.poster}
				alt={item.alt ? item.alt : 'item-galeria'}
				mode={'cover'}
			/>
		);
	};

	const renderPoster = (item, index) => {
		return (
			<div key={index} className={cls(classes.posterItem)}>
				<DataLayer onEvent={'ModalGallery_ClicouPoster'} args={[item.title, state.title]}>
					{is.string(item.poster) ? renderImg(item, index) : renderPicture(item, index)}
				</DataLayer>
				<div className={cls(classes.posterLoader, 'swiper-lazy-preloader', 'swiper-lazy-preloader-white')} />
			</div>
		);
	};

	const renderPosters = (list) => {
		return list.map((item, index) => {
			if (item.video) return renderVideo(item, index);
			return renderPoster(item, index);
		});
	};

	useEffect(() => {
		return () => {
			DataLayer.push('Modal_Fechou_WithTitle', state.title);
		};
	}, []);

	return (
		<div className={cls(classes.root, className)}>
			<div className={cls(classes.poster)}>
				<ReactIdSwiper
					containerClass={cls(classes.posterList)}
					direction={'horizontal'}
					Swiper={Swiper}
					getSwiper={updateSwiperPoster}
					slidesPerView={1}
					spaceBetween={0}
					lazy={true}
					loop={false}
					loopFillGroupWithBlank={true}
					grabCursor={true}
					centeredSlides={true}
					cssMode={props.mobile}
					initialSlide={currentIndex}>
					{renderPosters(state.modal)}
				</ReactIdSwiper>
			</div>
			<div className={cls(classes.thumb)}>
				<ReactIdSwiper
					containerClass={cls(css.thumbList)}
					Swiper={Swiper}
					getSwiper={updateSwiperThumbs}
					{...swiperThumbsConfigDesktop}
					breakpoints={{
						568: {
							...swiperThumbsConfigSmartphone,
						},
						768: {
							...swiperThumbsConfigSmartphone,
						},
						1024: {
							...swiperThumbsConfigTablet,
						},
					}}>
					{renderThumbs(state.modal)}
				</ReactIdSwiper>
			</div>
			<article className={cls(classes.info)}>
				<h2
					className={cls(classes.infoTitle)}
					dangerouslySetInnerHTML={{
						__html: state.modal[currentIndex].title,
					}}
				/>
				<p
					className={cls(classes.infoText)}
					dangerouslySetInnerHTML={{
						__html: state.modal[currentIndex].description,
					}}
				/>
			</article>
		</div>
	);
};

Gallery.displayName = 'Gallery';
Gallery.propTypes = propTypes;
Gallery.defaultProps = defaultProps;
export default Gallery;
