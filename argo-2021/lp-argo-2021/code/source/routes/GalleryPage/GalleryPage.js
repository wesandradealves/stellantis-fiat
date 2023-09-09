import React, { createRef, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import cls from 'classnames';
import PropTypes from 'prop-types';
import ReactIdSwiper from 'react-id-swiper';
import { Swiper, Navigation, Pagination } from 'swiper/dist/js/swiper.esm';
import { Picture } from '@dcode/react/components/Media';
import { DataLayer } from '@dcode/react/components/DataLayer';
import { GalleryC2A } from '~/components/GalleryC2A';
import { Quote } from '~/components/Quote';
import { FiatBrand } from '~/components/FiatBrand';
import configData from '~/configurations/data';
import css from './GalleryPage.scss';
import * as is from '@dcode/utils/is';

export const classes = {
	root: css.galleryPage,
	content: css.galleryPageContent,
	background: css.galleryPageBackground,
	quote: css.galleryPageQuote,
	card: css.galleryPageCard,
	cardTail: css.galleryPageCardTail,
	poster: css.galleryPagePoster,
	posterVideo: css.galleryPagePosterVideo,
	posterItem: css.galleryPagePosterItem,
	posterPicture: css.galleryPagePosterPicture,
	posterImage: css.galleryPagePosterImage,
	posterLoader: css.galleryPagePosterLoader,
	posterList: css.galleryPagePosterList,
	posterC2A: css.galleryPagePosterC2A,
	thumb: css.galleryPageThumb,
	thumbItem: css.galleryPageThumbItem,
	thumbImage: css.galleryPageThumbImage,
	bullet: css.galleryPageBullet,
	bulletList: css.galleryPageBulletList,
	bulletItem: css.galleryPageBulletItem,
	isActive: css.isActive,
	isSimple: css.isSimple,
	flag: css.galleryPageFlag,
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
	data: PropTypes.object,
};

export const defaultProps = {
	className: '',
	classes,
	data: configData.gallery,
};

export function GalleryPage({ className, classes, data: info, ...props }) {
	const $el = createRef();
	const [data, setData] = useState(info.data);
	const [swiperPoster, updateSwiperPoster] = useState(null);
	const [swiperThumbs, updateSwiperThumbs] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [numUserInteractions, setNumUserInteractions] = useState(0);

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
		lazy: true,
	};

	const swiperThumbsConfigTablet = {
		...swiperThumbsConfigDesktop,
		slidesPerView: 4.5,
		slidesPerGroup: 4,
		slidesPerColumn: 1,
	};

	const swiperThumbsConfigSmartphone = {
		...swiperThumbsConfigDesktop,
		slidesPerView: 2.5,
		slidesPerGroup: 2,
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
		setNumUserInteractions(numUserInteractions + 1);
		swiperPoster && swiperPoster.slideTo(index, speed, runCallbacks, internal);
	};

	const onPosterSlideChange = () => {
		DataLayer.push('GalleryPage_MudouPoster', data.list[swiperPoster.realIndex].poster.alt);
		if (swiperThumbs) {
			const thumbsPage = Math.round((swiperPoster.realIndex - 1) / swiperThumbs.params.slidesPerGroup);
			if (thumbsPage > swiperThumbs.snapIndex) {
				swiperThumbs.slideNext();
			} else if (thumbsPage < swiperThumbs.snapIndex) {
				swiperThumbs.slidePrev();
			}
		}
		setCurrentIndex(swiperPoster.realIndex);
	};

	const onPosterResize = () => {
		swiperPoster && swiperPoster.update();
		swiperThumbs && swiperThumbs.update();
	};

	useEffect(() => {
		if (swiperPoster) {
			swiperPoster.on('slideChange', onPosterSlideChange);
			swiperPoster.on('resize', onPosterResize);
		}
		return () => {
			if (swiperPoster) {
				swiperPoster.off('slideChange', onPosterSlideChange);
				swiperPoster.off('resize', onPosterResize);
			}
		};
	}, [swiperPoster]);

	const renderThumb = (item, index) => {
		return (
			<div key={index} className={cls(classes.thumbItem)}>
				<DataLayer onEvent={'GalleryPage_ClicouThumb'} args={[item.alt]}>
					{is.string(item.thumbnail) ? (
						<img
							className={cls(classes.thumbImage, { [classes.isActive]: index === currentIndex })}
							onClick={() => slideToPoster(index)}
							data-src={item.thumbnail}
							src={item.thumbnail}
							alt={item.alt ? item.alt : 'item-galeria'}
						/>
					) : (
						<picture>
							<source srcSet={item.thumbnail.srcSet} type={item.thumbnail.type} />
							<img
								onClick={() => slideToPoster(index)}
								className={cls(classes.thumbImage, { [classes.isActive]: index === currentIndex })}
								src={item.thumbnail.fallback.srcSet}
								type={item.thumbnail.fallback.type}
								alt={item.alt ? item.alt : 'item-galeria'}
							/>
						</picture>
					)}
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
				<ReactPlayer url={item.video} playing={index === currentIndex} width='100%' height='100%' />
			</div>
		);
	};

	const renderPoster = (item, index) => {
		return (
			<div key={index} className={cls(classes.posterItem)}>
				<DataLayer onEvent={'GalleryPage_ClicouPoster'} args={[item.title]}>
					<Fade>
						<Picture
							className={cls(classes.posterPicture)}
							classNameImg={cls(classes.posterImage, 'swiper-lazy')}
							sources={item.poster.sources}
							alt={item.poster.alt}
							shouldRenderize={currentIndex === index}
						/>
					</Fade>
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

	const renderBullet = (item, index) => {
		return (
			<DataLayer key={index} onEvent={'GalleryPage_ClicouBullet'} args={[item.title]}>
				<button
					className={cls(classes.bulletItem, {
						[classes.isActive]: index === currentIndex,
					})}
					onClick={() => slideToPoster(index)}
				/>
			</DataLayer>
		);
	};

	const renderBullets = (list) => {
		return list.map(renderBullet);
	};

	return (
		<section ref={$el} id={'galeria'} data-ui-anchor={'galeria'} className={cls(classes.root, className)}>
			<div className={cls(classes.content)}>
				{/* Fortune Cookie ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
				{!props.mobile && <Quote className={classes.quote} title={data.title} text={data.description} />}
			</div>

			{/* Gallery ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
			<div className={cls(classes.card)}>
				<div className={cls(classes.content)}>
					<div className={cls(classes.cardTail)} />
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
							initialSlide={currentIndex}>
							{renderPosters(data.list)}
						</ReactIdSwiper>
						<GalleryC2A className={cls(classes.posterC2A)} show={numUserInteractions >= 4} />
					</div>
					<div className={cls(classes.thumb)}>
						<ReactIdSwiper
							containerClass={cls(classes.thumbList)}
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
							{renderThumbs(data.list)}
						</ReactIdSwiper>
					</div>
					{/*props.mobile && (
						<div className={cls(classes.bullet)}>
							<div className={cls(classes.bulletList)}>{renderBullets(data.list)}</div>
						</div>
					)*/}
				</div>
			</div>
		</section>
	);
}

GalleryPage.propTypes = propTypes;
GalleryPage.defaultProps = defaultProps;
export default GalleryPage;
