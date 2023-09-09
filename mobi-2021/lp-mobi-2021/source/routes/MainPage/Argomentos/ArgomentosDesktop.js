import React, { useRef, useState, useEffect } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import ReactIdSwiper from 'react-id-swiper';

export const classes = {};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
	config: PropTypes.object,
	page: PropTypes.number,
};

export const defaultProps = {
	className: '',
	classes,
	config: {},
	page: 1,
};

export function ArgomentosDesktop({ className, classes, config: swiperConfig, ...props }) {
	const swiperRef = useRef();
	const [currentIndex, setCurrentIndex] = useState(0);

	const config = {
		direction: 'horizontal',
		slidesPerView: 2,
		slidesPerGroup: 2,
		slidesPerColumn: 2,
		loop: false,
		loopFillGroupWithBlank: true,
		grabCursor: true,
		centeredSlides: false,
		freeMode: false,
		initialSlide: currentIndex,
		...swiperConfig,
		shouldSwiperUpdate: true,
	};

	const setPage = (index, speed) => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideTo((index - 1) * swiperRef.current.swiper.params.slidesPerGroup, speed);
		}
	};

	const onSlideChange = () => {
		// DataLayer.push('MainPage_PaginouFeaturesNoMobile', swiper.realIndex);
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

ArgomentosDesktop.propTypes = propTypes;
ArgomentosDesktop.defaultProps = defaultProps;
export default ArgomentosDesktop;
