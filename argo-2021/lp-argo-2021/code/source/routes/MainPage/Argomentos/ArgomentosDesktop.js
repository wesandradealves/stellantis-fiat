import React, { useState, useEffect } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import ReactIdSwiper from 'react-id-swiper';
import { Swiper } from 'swiper/dist/js/swiper.esm';

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
	const [swiper, updateSwiper] = useState(null);
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
		Swiper: Swiper,
		getSwiper: updateSwiper,
		shouldSwiperUpdate: true,
	};

	const setPage = (index, speed) => {
		if (swiper) {
			swiper.slideTo((index - 1) * swiper.params.slidesPerGroup, speed);
		}
	};

	const onSlideChange = () => {
		// DataLayer.push('MainPage_PaginouFeaturesNoMobile', swiper.realIndex);
		setCurrentIndex(swiper.realIndex);
	};

	const onResize = () => swiper && swiper.update();
	useEffect(() => {
		setPage(props.page, 0);
		if (swiper) {
			swiper.on('slideChange', onSlideChange);
			swiper.on('resize', onResize);
		}
		return () => {
			if (swiper) {
				swiper.off('slideChange', onSlideChange);
				swiper.off('resize', onResize);
			}
		};
	}, [swiper]);

	useEffect(() => {
		setPage(props.page);
	}, [props.page]);

	return <ReactIdSwiper containerClass={cls(classes.root, className)} {...config} children={props.children} />;
}

ArgomentosDesktop.propTypes = propTypes;
ArgomentosDesktop.defaultProps = defaultProps;
export default ArgomentosDesktop;
