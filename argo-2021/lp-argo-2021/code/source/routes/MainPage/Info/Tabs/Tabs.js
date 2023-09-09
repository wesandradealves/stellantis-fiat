/* eslint-disable */
import React, { useRef, useState, useEffect, useCallback } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { useGlobal } from 'reactn';
import { ModalLink as Link } from 'react-router-modal-gallery';
import { useSwipeable } from 'react-swipeable';
import { ensureSlashEnd } from '@dcode/utils/xtras/ensureSlashEnd';
import { Img, Picture } from '@dcode/react/components/Media';
import isString from '@dcode/is/string/string';
import { DataLayer } from '@dcode/react/components/DataLayer';
import { data, safeId, getArgByPath } from '~/configurations/data-poster';
import { BlueArrowButton } from '~/components/ArrowButton';
import css from './Tabs.scss';
import secondCss from '../../../GalleryPage/GalleryPage.scss';

const classes = {
	root: css.tabs,
	poster: css.tabsPoster,
	posterList: css.tabsPosterList,
	posterItem: css.tabsPosterItem,
	posterPicture: css.tabsPosterPicture,
	posterImage: css.tabsPosterImage,
	posterVideo: css.tabsPosterVideo,
	posterCaption: css.tabsPosterCaption,
	posterCaptionWrapper: css.tabsPosterCaptionWrapper,
	posterCaptionIcon: css.tabsPosterCaptionIcon,
	posterCaptionIconBrand: css.tabsPosterCaptionIconBrand,
	posterCaptionText: css.tabsPosterCaptionText,
	posterLoader: css.tabsPosterLoader,
	info: css.tabsInfo,
	infoTitle: css.tabsInfoTitle,
	infoText: css.tabsInfoText,
	tab: css.tabsTab,
	tabList: css.tabsTabList,
	tabItem: css.tabsTabItem,
	tabLink: css.tabsTabLink,
	bullet: css.tabsBullet,
	bulletList: css.tabsBulletList,
	bulletListDesktop: css.tabsBulletListDesktop,
	bulletItem: css.tabsBulletItem,
	pagination: css.tabsPagination,
	paginationList: css.tabsPaginationList,
	paginationItem: css.tabsPaginationItem,
	arrow: css.tabsArrow,
	arrowWrapper: css.tabsArrowWrapper,
	arrowLink: css.tabsArrowLink,
	arrowInfo: css.tabsArrowInfo,
	arrowInfoSap: css.tabsArrowInfoSap,
	arrowInfoTitle: css.tabsArrowInfoTitle,
	arrowMobile: css.tabsArrowMobile,
	arrowPrevMobile: css.tabsArrowPrevMobile,
	arrowNextMobile: css.tabsArrowNextMobile,
	arrowPrev: css.tabsArrowPrev,
	arrowNext: css.tabsArrowNext,
	isActive: css.isActive,
	isSimple: css.isSimple,
	thumb: secondCss.galleryPageThumb,
	thumbItem: secondCss.galleryPageThumbItem,
	thumbImage: secondCss.galleryPageThumbImage,
};

const propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string,
		}),
	}),
};

const defaultProps = {
	className: '',
	classes,
	data,
};

const extractIndexFromUrl = (pathname) => {
	const pathArray = ensureSlashEnd(pathname, false).split('/');
	return pathArray.length > 2 ? pathArray.pop() : 0;
};

export const Tabs = ({ className, classes, location, match, data, ...props }) => {
	const [mobile] = useGlobal('mobile');
	const state = location.state.feature || getArgByPath(window.location.hash.replace(/^#/, '')) || {};
	const idUrl = extractIndexFromUrl(window.location.hash.replace(/^#/, ''));
	const id = safeId(match.params.id || idUrl, 0, state.modal.length - 1);
	const [isHoveringPrev, setIsHoveringPrev] = useState(null);
	const [swiperPoster, updateSwiperPoster] = useState(null);
	const [isTracked, setIsTracked] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(id);
	const [currentTab, setCurrentTab] = useState(null);
	const caption = state.modal.caption;
	const [posterInteract, setPosterInteract] = useState(false);

	const [numUserInteractions, setNumUserInteractions] = useState(0);
	const [swiperThumbs, updateSwiperThumbs] = useState(null);

	const clicouSetas = useRef(false);

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
		slidesPerView: 11.5,
		slidesPerColumn: 1,
		spaceBetween: 10,
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

	const slideNextPoster = useCallback(
		(speed, runCallbacks) => {
			swiperPoster && swiperPoster.slideNext(speed, runCallbacks);
		},
		[swiperPoster],
	);

	const slidePrevPoster = useCallback(
		(speed, runCallbacks) => {
			swiperPoster && swiperPoster.slidePrev(speed, runCallbacks);
		},
		[swiperPoster],
	);

	const slideToPoster = useCallback(
		(index, speed, runCallbacks, internal) => {
			console.log(`Index da bullet: ${index}`);
			swiperPoster && swiperPoster.slideTo(index, speed, runCallbacks, internal);
		},
		[swiperPoster],
	);

	const putIdOnPath = (pathname, index) => {
		const pathArray = ensureSlashEnd(pathname, false).split('/');
		pathArray.length > 2 && pathArray.pop();
		const nupath = `${pathArray.join('/')}/${index}`;
		window.history.replaceState(null, state.modal[index].title, nupath);
	};

	const slideNextModal = () => {
		const arrow = getRoutesFromPath(state);

		if (arrow.nextIndex !== null) {
			document.getElementById(`pag-${arrow.nextIndex}`).click();
		}
	};

	const slidePrevModal = () => {
		const arrow = getRoutesFromPath(state);

		if (arrow.prevIndex !== null) {
			document.getElementById(`pag-${arrow.prevIndex}`).click();
		}
	};

	const handlers = useSwipeable({
		onSwipedLeft: (eventData) => slideNextModal(),
		onSwipedRight: (eventData) => slidePrevModal(),
	});

	const onPosterSlideChange = useCallback(() => {
		if (isTracked) {
			DataLayer.push(
				'ModalTabs_Scroll',
				state.modal[swiperPoster.realIndex].title,
				state.title.mobile,
				swiperPoster.realIndex,
			);
			setIsTracked(false);
		}
		DataLayer.push(
			'ModalTabs_MudouTab',
			state.modal[swiperPoster.realIndex].title,
			state.title.mobile,
			swiperPoster.realIndex,
		);
		setCurrentIndex(swiperPoster.realIndex);
		putIdOnPath(location.hash.replace(/^#/, ''), swiperPoster.realIndex);
	}, [swiperPoster, isTracked, currentIndex]);

	const onPosterTouchStart = useCallback(() => {
		setIsTracked(true);
		setPosterInteract(true);
	}, [isTracked, posterInteract]);

	const onPlayVideo = () => {
		const index = swiperPoster ? swiperPoster.realIndex : 0;
		DataLayer.push('ModalTabs_videoPlay', state.title.mobile, state.modal[index].title);
	};

	const onPauseVideo = () => {
		const index = swiperPoster ? swiperPoster.realIndex : 0;
		DataLayer.push('ModalTabs_videoPause', state.title.mobile, state.modal[index].title);
	};

	const renderTab = (item, index) => {
		return (
			<li key={index} className={cls(classes.tabItem)}>
				<DataLayer onEvent={'ModalTabs_ClicouTab'} args={[item.title, state.title.mobile, index]}>
					<button
						className={cls(classes.tabLink, {
							[classes.isActive]: index === currentIndex,
						})}
						onClick={() => slideToPoster(index)}
						dangerouslySetInnerHTML={{
							__html: item.tabName,
						}}
					/>
				</DataLayer>
			</li>
		);
	};

	const renderTabs = (list) => {
		return list.length > 1 && <ul className={cls(classes.tabList)}>{list.map(renderTab)}</ul>;
	};

	const renderVideo = (item, index) => {
		return (
			<div key={index} className={cls(classes.posterVideo)}>
				<ReactPlayer
					url={item.video}
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
				className={cls(classes.posterImage, classes.isSimple)}
				src={item.poster}
				alt={item.alt ? item.alt : 'tab'}
				mode={'cover'}
			/>
		);
	};

	const renderPoster = (item, index) => {
		return (
			<div key={index} className={cls(classes.posterItem)}>
				<DataLayer onEvent={'ModalTabs_ClicouPoster'} args={[item.title, state.title.mobile]}>
					{isString(item.poster) ? renderImg(item, index) : renderPicture(item, index)}
				</DataLayer>
			</div>
		);
	};

	const renderPosters = (list) => {
		return list.map((item, index) => {
			if (item.video) return renderVideo(item, index);
			return renderPoster(item, index);
		});
	};

	const renderMiniThumbs = (list) => {
		return list.map((item, index) => {
			if (item.video) return renderVideo(item, index);
			return renderMiniThumb(item, index);
		});
	};

	const renderMiniThumb = (item, index) => {
		return (
			// <div key={index} className={cls(classes.posterItem)}>
			<div key={index}>
				<DataLayer args={[item.title, state.title.mobile]}>{renderPictureThumb(item, index)}</DataLayer>
				<div className={cls(classes.posterLoader, 'swiper-lazy-preloader', 'swiper-lazy-preloader-white')} />
			</div>
		);
	};

	const renderPictureThumb = (item, index) => {
		return (
			<div className='thumbs-gallery'>
				<Picture classNameImg={cls('swiper-lazy')} sources={item.poster.sources} alt={item.poster.alt} />
			</div>
		);
	};

	const renderThumb = (item, index) => {
		return (
			<div key={index} className={cls(classes.thumbItem)}>
				<DataLayer onEvent={'GalleryPage_ClicouThumb'} args={[index]}>
					<Img
						className={cls(classes.thumbImage, {
							[classes.isActive]: index === currentIndex,
						})}
						onClick={() => slideToPoster(index)}
						data-src={item.thumbnail}
						src={item.thumbnail}
						alt={item.alt ? item.alt : 'tab'}
					/>
				</DataLayer>
			</div>
		);
	};

	const renderThumbs = (list) => {
		return list.length >= 1 && list.map(renderThumb);
	};

	const getRoutesFromPath = (item) => {
		let arrows = {
			prev: null,
			prevIndex: null,
			next: null,
			nextIndex: null,
		};

		if (item.path) {
			data.list.forEach((value, index) => {
				if (value.path === item.path) {
					const prev = index > 0 ? data.list[index - 1] : item;
					const prevIndex = index > 0 ? index - 1 : null;
					const next = index < data.list.length - 1 ? data.list[index + 1] : item;
					const nextIndex = index < data.list.length - 1 ? index + 1 : null;
					arrows = { prev, prevIndex, next, nextIndex };
				}
			});
		}

		return arrows;
	};

	const renderArrows = (item) => {
		let arrows = getRoutesFromPath(item);
		return (
			<div className={cls(classes.arrow)}>
				<div className={cls(classes.arrowWrapper)}>
					<DataLayer onEvent={'ModalTabs_ClicouAnterior'} args={[item.title.mobile]}>
						<Link
							className={cls(classes.arrowLink)}
							// onMouseOver={() => setIsHoveringPrev(true)}
							// onMouseOut={() => setIsHoveringPrev(null)}
							onClick={() => (clicouSetas.current = true)}
							disabled={currentTab === 0}
							to={{
								pathname: arrows.prev.path,
								state: { feature: arrows.prev, mobile },
							}}>
							<BlueArrowButton className={cls(classes.arrowPrev)} disabled={currentTab === 0} />
						</Link>
					</DataLayer>
					<DataLayer onEvent={'ModalTabs_ClicouProximo'} args={[item.title.mobile]}>
						<Link
							className={cls(classes.arrowLink)}
							// onMouseOver={() => setIsHoveringPrev(false)}
							// onMouseOut={() => setIsHoveringPrev(null)}
							onClick={() => (clicouSetas.current = true)}
							disabled={currentTab >= data.list.length - 1}
							to={{
								pathname: arrows.next.path,
								state: { feature: arrows.next, mobile },
							}}>
							<BlueArrowButton className={cls(classes.arrowNext)} disabled={currentTab >= data.list.length - 1} />
						</Link>
					</DataLayer>
				</div>
				<header
					className={cls(classes.arrowInfo, {
						'is-hidden': currentTab >= data.list.length - 1, // isHoveringPrev === null,
					})}>
					<p
						className={cls(classes.arrowInfoSap)}
						dangerouslySetInnerHTML={{
							__html: currentTab >= data.list.length - 1 || isHoveringPrev ? 'ANTERIOR' : 'PRÓXIMO:',
						}}
					/>
					<p
						className={cls(classes.arrowInfoTitle)}
						dangerouslySetInnerHTML={{
							__html: (currentTab >= data.list.length - 1 || isHoveringPrev ? arrows.prev : arrows.next).title.desk,
						}}
					/>
				</header>
			</div>
		);
	};

	const renderBullet = (item, index) => {
		return (
			<DataLayer key={index} onEvent={'MainPage_ClicouBullet'} args={[item.title, state.title.mobile]}>
				<button
					className={cls(classes.bulletItem, {
						[classes.isActive]: index === currentIndex,
					})}
					onClick={() => slideToPoster(index + 1)}
				/>
			</DataLayer>
		);
	};

	const renderBullets = (list) => {
		return list.map(renderBullet);
	};

	const renderArrowsMobile = (item) => {
		let arrows = getRoutesFromPath(item);

		return (
			<div className={cls(classes.arrowMobile)}>
				<DataLayer onEvent={'ModalPage_ClicouVoltar'} args={[item.title.mobile]}>
					<Link
						className={cls(classes.arrowPrevMobile)}
						disabled={currentTab === 0}
						to={{
							pathname: arrows.prev.path,
							state: { feature: arrows.prev, mobile },
						}}
					/>
				</DataLayer>
				<DataLayer onEvent={'ModalPage_ClicouAvancar'} args={[item.title.mobile]}>
					<Link
						className={cls(classes.arrowNextMobile)}
						disabled={currentTab >= data.list.length - 1}
						to={{
							pathname: arrows.next.path,
							state: { feature: arrows.next, mobile },
						}}
					/>
				</DataLayer>
			</div>
		);
	};

	const renderTabPagination = (list) => {
		return (
			<div className={cls(classes.paginationList)}>
				{list.map((value, index) => {
					return (
						<DataLayer key={index} onEvent={'ModalPage_ClicouPagination'} args={[value.title.mobile]}>
							<Link
								id={`pag-${index}`}
								className={cls(classes.paginationItem, {
									'is-active': currentTab === index,
								})}
								to={{
									pathname: value.path,
									state: { feature: value, mobile },
								}}
							/>
						</DataLayer>
					);
				})}
			</div>
		);
	};

	useEffect(() => {
		DataLayer.push('ModalTabs_Abriu', state.title.mobile);

		if (data.list.length > 0) {
			data.list.map((value, index) => {
				if (value.path === state.path) {
					setCurrentTab(index);
				}
			});
		}

		return () => {
			if (!clicouSetas.current) {
				DataLayer.push('Modal_Fechou_WithTitle', state.title.mobile);
			}
		};
	}, []);

	useEffect(() => {
		if (swiperPoster) {
			swiperPoster.on('slideChange', onPosterSlideChange);
			swiperPoster.on('touchStart', onPosterTouchStart);
		}
		return () => {
			if (swiperPoster) {
				swiperPoster.off('slideChange', onPosterSlideChange);
				swiperPoster.off('touchStart', onPosterTouchStart);
			}
		};
	}, [swiperPoster, isTracked]);

	return (
		<div className={cls(classes.root, className)} {...handlers}>
			<div className={cls(classes.poster)}>{renderPoster(state.modal, 1)}</div>

			<article className={cls(classes.info)}>
				<h2
					className={cls(classes.infoTitle)}
					dangerouslySetInnerHTML={{
						__html: state.modal.title,
					}}
				/>
				<p
					className={cls(classes.infoText)}
					dangerouslySetInnerHTML={{
						__html: state.modal[`description${mobile ? 'Mobile' : ''}`],
					}}
				/>
				{!mobile && renderArrows(state)}
			</article>

			{mobile && (
				<div className={cls(classes.pagination)}>
					{renderArrows(state)}
					{/*renderTabPagination(data.list)*/}
					{/*renderArrowsMobile(state)*/}
				</div>
			)}
		</div>
	);
};

Tabs.displayName = 'Tabs';
Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
export default Tabs;
