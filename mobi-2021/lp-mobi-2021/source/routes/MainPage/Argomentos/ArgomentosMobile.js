import React, { useRef, useState, useEffect } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import ReactIdSwiper from 'react-id-swiper';

export const classes = {};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
	config: PropTypes.object,
};

export const defaultProps = {
	className: '',
	classes,
	config: {},
};

export function ArgomentosMobile({ className, classes, config: swiperConfig, ...props }) {
	const swiperRef = useRef();
	const [currentIndex, setCurrentIndex] = useState(0);

	const config = {
		direction: 'horizontal',
		slidesPerView: 1.5,
		slidesPerGroup: 1,
		slidesPerColumn: 1,
		spaceBetween: 5,
		loop: false,
		loopFillGroupWithBlank: true,
		grabCursor: true,
		centeredSlides: false,
		freeMode: false,
		initialSlide: currentIndex,
		breakpoints: {
			568: {
				slidesPerView: 1.5,
			},
			768: {
				slidesPerView: 1.5,
			},
			1024: {
				slidesPerView: 3.2,
			},
			1140: {
				slidesPerView: 4,
			},
			1680: {
				slidesPerView: 5,
			},
			5120: {
				slidesPerView: 5,
			},
		},
		...swiperConfig,
		shouldSwiperUpdate: true,
	};

	const setPage = (index, speed) => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideTo((index - 1) * swiperRef.current.swiper.params.slidesPerGroup, speed);
		}
	};

	const onSlideChange = () => {
		DataLayer.push('MainPage_PaginouFeaturesNoMobile', swiperRef.current.swiper.realIndex);
		setCurrentIndex(swiperRef.current.swiper.realIndex);
	};

	const onResize = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.update();
		}
	};
	
	useEffect(() => {
		setPage(props.page, 0);
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.on('slideChange', onSlideChange);
			swiperRef.current.swiper.on('resize', onResize);
		}
		return () => {
			if (swiperRef.current && swiperRef.current.swiper) {
				swiperRef.current.swiper.off('slideChange', onSlideChange);
				swiperRef.current.swiper.off('resize', onResize);
			}
		};
	}, [swiperRef]);

	useEffect(() => {
		setPage(props.page);
	}, [props.page]);

	return (
		<ReactIdSwiper
			ref={swiperRef}
			containerClass={cls(classes.root, className)}
			{...config}
			children={props.children}
		/>
	);
}

ArgomentosMobile.propTypes = propTypes;
ArgomentosMobile.defaultProps = defaultProps;
export default ArgomentosMobile;
