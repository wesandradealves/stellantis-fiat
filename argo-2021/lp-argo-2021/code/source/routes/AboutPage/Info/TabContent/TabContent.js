import React, { createRef, useState, useEffect } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import ReactIdSwiper from 'react-id-swiper';
import * as is from '@dcode/utils/is';
import { Img, Picture } from '@dcode/react/components/Media';
import { Swiper } from 'swiper/dist/js/swiper.esm';
import { DataLayer } from '@dcode/react/components/DataLayer';
import { BlueArrowButton } from '~/components/ArrowButton';
import configData from '~/configurations/data';
import css from './TabContent.scss';

export const classes = {
	root: css.tabContent,
	wrapper: css.tabContentWrapper,
	arrow: css.tabContentArrow,
	arrowPrev: css.tabContentArrowPrev,
	arrowNext: css.tabContentArrowNext,
	poster: css.tabContentPoster,
	posterVideo: css.tabContentPosterVideo,
	posterItem: css.tabContentPosterItem,
	posterPicture: css.tabContentPosterPicture,
	posterImage: css.tabContentPosterImage,
	posterLoader: css.tabContentPosterLoader,
	posterList: css.tabContentPosterList,
	info: css.tabContentInfo,
	infoTitle: css.tabContentInfoTitle,
	infoText: css.tabContentInfoText,
	bullet: css.tabContentBullet,
	bulletList: css.tabContentBulletList,
	bulletItem: css.tabContentBulletItem,
	isActive: css.isActive,
	isSimple: css.isSimple,
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
	data: PropTypes.object,
	mobile: PropTypes.bool,
	opened: PropTypes.bool,
};

export const defaultProps = {
	className: '',
	classes,
	data: configData.about.data,
	mobile: undefined,
	opened: undefined,
};

export function TabContent({ className, classes, data: info, ...props }) {
	const $el = createRef();
	const $infoTextRef = createRef();
	const [data, setData] = useState(info);
	const [swiperPoster, updateSwiperPoster] = useState(null);
	const [swiperThumbs, updateSwiperThumbs] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentItem, setCurrentItem] = useState(data.list[currentIndex] || {});

	const slideNextPoster = (speed, runCallbacks) => {
		DataLayer.push('AboutPage_ArrowNextPoster', data.title);
		swiperPoster && swiperPoster.slideNext();
	};

	const slidePrevPoster = (speed, runCallbacks) => {
		DataLayer.push('AboutPage_ArrowPrevPoster', data.title);
		swiperPoster && swiperPoster.slidePrev();
	};

	const slideToPoster = (index, speed, runCallbacks, internal) => {
		swiperPoster && swiperPoster.slideTo(index, speed, runCallbacks, internal);
	};

	const onPosterSlideChange = () => {
		DataLayer.push('AboutPage_MudouPoster', data.list[swiperPoster.realIndex].title, data.title);
		if (swiperThumbs) {
			const thumbsPage = Math.round((swiperPoster.realIndex - 1) / swiperThumbs.params.slidesPerGroup);
			if (thumbsPage > swiperThumbs.snapIndex) {
				swiperThumbs.slideNext();
			} else if (thumbsPage < swiperThumbs.snapIndex) {
				swiperThumbs.slidePrev();
			}
		}
		setCurrentIndex(swiperPoster.realIndex);
		setCurrentItem(data.list[swiperPoster.realIndex]);
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

	const renderVideo = (item, index) => {
		return (
			<div key={index} className={cls(classes.posterVideo)}>
				<ReactPlayer url={item.video} playing={index === currentIndex} width='100%' height='100%' />
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
				shouldRenderize={props.opened && index === currentIndex}
			/>
		);
	};

	const renderImg = (item, index) => {
		return (
			<Img
				className={cls(classes.posterImage, classes.isSimple, 'swiper-lazy')}
				src={item.poster}
				alt={item.alt ? item.alt : 'img'}
				mode={'cover'}
			/>
		);
	};

	const renderPoster = (item, index) => {
		return (
			<div key={index} className={cls(classes.posterItem)}>
				<DataLayer onEvent={'AboutPage_ClicouPoster'} args={[item.title]}>
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

	const renderBullet = (item, index) => {
		return (
			<DataLayer key={index} onEvent={'AboutPage_ClicouBullet'} args={[item.title, data.title]}>
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

	const renderArrows = (item) => {
		return (
			<div className={cls(classes.arrow)}>
				<DataLayer onEvent={'AboutPage_ClicouVoltar'} args={[item.title]}>
					<BlueArrowButton className={cls(classes.arrowPrev)} onClick={slidePrevPoster} disabled={currentIndex === 0} />
				</DataLayer>
				<DataLayer onEvent={'AboutPage_ClicouAvancar'} args={[item.title]}>
					<BlueArrowButton
						className={cls(classes.arrowNext)}
						onClick={slideNextPoster}
						disabled={currentIndex >= data.list.length - 1}
					/>
				</DataLayer>
			</div>
		);
	};

	return (
		<section ref={$el} className={cls(classes.root, className)}>
			{/* Arrow ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
			{!props.mobile && renderArrows(data.list[currentIndex])}

			{/* Gallery ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
			<div className={cls(classes.wrapper)}>
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
				</div>
				<article className={cls(classes.info)}>
					<h2
						className={cls(classes.infoTitle)}
						dangerouslySetInnerHTML={{
							__html: currentItem.title,
						}}
					/>
					<p
						ref={$infoTextRef}
						className={cls(classes.infoText)}
						dangerouslySetInnerHTML={{
							__html: currentItem.description,
						}}
					/>
				</article>
			</div>
			<div className={cls(classes.bullet)}>
				<div className={cls(classes.bulletList)}>{renderBullets(data.list)}</div>
			</div>
		</section>
	);
}

TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;
export default TabContent;
