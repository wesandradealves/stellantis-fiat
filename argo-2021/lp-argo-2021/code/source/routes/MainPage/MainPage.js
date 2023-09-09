import React, { createRef, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { useGlobal } from 'reactn';
import { TweenLite } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ModalLink as Link } from 'react-router-modal-gallery';
import { DataLayer } from '@dcode/react/components/DataLayer';
import { Argomento } from '~/components/Argomento';
import { Background } from '~/components/Background';
import configData from '~/configurations/data';
import { ArgomentosMobile, ArgomentosDesktop } from './Argomentos';
import IconArrow from './IconArrow';
import IconC2A from './IconC2A';
import css from './MainPage.scss';

// do not remove this line
ScrollToPlugin;

export const classes = {
	root: css.mainPage,
	background: css.mainPageBackground,
	content: css.mainPageContent,
	wrapper: css.mainPageWrapper,
	header: css.mainPageHeader,
	headerCar: css.mainPageHeaderCar,
	headerLogo: css.mainPageHeaderLogo,
	headerTitle: css.mainPageHeaderTitle,
	headerTitleLogo: css.mainPageHeaderTitleLogo,
	headerSubtitle: css.mainPageHeaderSubtitle,
	gallery: css.mainPageGallery,
	galleryGrid: css.mainPageGalleryGrid,
	galleryList: css.mainPageGalleryList,
	galleryItem: css.mainPageGalleryItem,
	galleryItemWrapper: css.mainPageGalleryItemWrapper,
	galleryPoster: css.mainPageGalleryPoster,
	galleryPosterCard: css.mainPageGalleryPosterCard,
	galleryThumb: css.mainPageGalleryThumb,
	galleryLink: css.mainPageGalleryLink,
	galleryControl: css.mainPageGalleryControl,
	galleryControlWrapper: css.mainPageGalleryControlWrapper,
	galleryControlPrev: css.mainPageGalleryControlPrev,
	galleryControlPrevIcon: css.mainPageGalleryControlPrevIcon,
	galleryControlNext: css.mainPageGalleryControlNext,
	galleryControlNextIcon: css.mainPageGalleryControlNextIcon,
	c2a: css.mainPageC2A,
	c2aButton: css.mainPageC2AButton,
	c2aButtonIcon: css.mainPageC2AButtonIcon,
	isDisable: css.isDisable,
	isRear: css.isRear,
	isFront: css.isFront,
	isTL: css.isTL,
	isBL: css.isBL,
	isTR: css.isTR,
	isBR: css.isBR,
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
	data: PropTypes.object,
};

export const defaultProps = {
	className: '',
	classes,
	data: configData.main,
};

export const parseText = (value) => {
	if (Array.isArray(value)) return value[0];
	return value;
};

export function MainPage({ className, classes, location, data: info, ...props }) {
	const $el = createRef();
	const [cluster] = useGlobal('cluster');
	const [data, setData] = useState({});
	const [firstArg, setFirstArg] = useState(undefined);
	const [thumbList, setThumbList] = useState([]);
	const [swiperThumbs, updateSwiperThumbs] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [thumbsPerPage, setThumbsPerPage] = useState(1);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [numPage, setNumPage] = useState(0);

	const swiperThumbsConfigDesktop = {
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
		shouldSwiperUpdate: true,
	};

	const swiperThumbsConfigTablet = {
		...swiperThumbsConfigDesktop,
	};

	const swiperThumbsConfigSmartphone = {
		...swiperThumbsConfigDesktop,
	};

	const slideNextThumbs = (speed, runCallbacks) => {
		swiperThumbs && swiperThumbs.slideNext(speed, runCallbacks);
	};

	const slidePrevThumbs = (speed, runCallbacks) => {
		swiperThumbs && swiperThumbs.slidePrev(speed, runCallbacks);
	};

	const setThumbsPage = (index, speed) => {
		if (swiperThumbs) {
			swiperThumbs.slideTo((index - 1) * swiperThumbs.params.slidesPerGroup, speed);
		}
	};

	const onClickPrev = (evt) => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const onClickNext = (evt) => {
		if (currentPage < numPage) {
			setCurrentPage(currentPage + 1);
		}
	};

	const onClickC2A = (evt) => {
		evt.preventDefault();
		DataLayer.push('MainPage_ClicouConheca');
		TweenLite.to(window, 0.5, {
			scrollTo: {
				y: `[data-ui-anchor="s-design"]`,
				autoKill: false,
			},
		});
	};

	useEffect(() => {
		const dataByClusterOrder = info.orderByClusterOrder(cluster.argomentos.order);
		setData(dataByClusterOrder);
		setFirstArg(dataByClusterOrder[0]);
		setThumbList(dataByClusterOrder.slice(1, dataByClusterOrder.length));
	}, [location, cluster.slug]);

	useEffect(() => {
		const thumbsPerPageCache = props.mobile ? 1 : 4;
		setThumbsPerPage(thumbsPerPageCache);
		setNumPage(Math.ceil(thumbList.length / thumbsPerPageCache));
	}, [props.mobile, thumbList]);

	const onThumbsSlideChange = () => setCurrentIndex(swiperThumbs.realIndex);
	const onThumbsResize = () => swiperThumbs && swiperThumbs.update();
	useEffect(() => {
		setThumbsPage(props.page, 0);
		if (swiperThumbs) {
			swiperThumbs.on('slideChange', onThumbsSlideChange);
			swiperThumbs.on('resize', onThumbsResize);
		}
		return () => {
			if (swiperThumbs) {
				swiperThumbs.off('slideChange', onThumbsSlideChange);
				swiperThumbs.off('resize', onThumbsResize);
			}
		};
	}, [swiperThumbs]);

	const renderThumb = (item, index) => {
		const align = [classes.isTL, classes.isBL, classes.isTR, classes.isBR];
		return (
			<div key={index} className={cls(classes.galleryItem)}>
				<div className={cls(classes.galleryItemWrapper)}>
					<DataLayer onEvent={'MainPage_ClicouThumbnail'} args={[item.title]}>
						<Link
							className={cls(classes.galleryLink)}
							to={{
								pathname: item.path,
								state: { argomento: item, mobile: props.mobile },
							}}>
							<Argomento
								className={cls(classes.galleryThumb, align[index % 4])}
								mini={true}
								num={/\#index/.test(item.id) ? index : item.id}
								title={parseText(item.title)}
								sources={item.thumb.sources}
							/>
						</Link>
					</DataLayer>
				</div>
			</div>
		);
	};

	const renderThumbs = (list) => {
		return list.map(renderThumb);
	};

	const renderControls = () => {
		return (
			<div className={cls(classes.galleryControl)}>
				<div className={cls(classes.galleryControlWrapper)}>
					<Fade bottom>
						<DataLayer onEvent={'MainPage_ClicouAnterior'} args={[currentPage]}>
							<button
								className={cls(classes.galleryControlPrev, { [css.isDisable]: currentPage === 1 })}
								onClick={onClickPrev}>
								<IconArrow className={cls(classes.galleryControlPrevIcon)} />
							</button>
						</DataLayer>
						<DataLayer onEvent={'MainPage_ClicouProximo'} args={[currentPage]}>
							<button
								className={cls(classes.galleryControlNext, { [css.isDisable]: currentPage === numPage })}
								onClick={onClickNext}>
								<IconArrow className={cls(classes.galleryControlNextIcon)} />
							</button>
						</DataLayer>
					</Fade>
				</div>
			</div>
		);
	};

	const renderPoster = (item) => {
		return (
			<div className={cls(classes.galleryPoster)}>
				<DataLayer onEvent={'MainPage_ClicouThumbnail'} args={[item.title]}>
					<Link
						className={cls(classes.galleryLink)}
						to={{
							pathname: item.path,
							state: { argumento: item },
						}}>
						<Argomento
							className={cls(classes.galleryPosterCard)}
							mini={false}
							num={/\#index/.test(item.id) ? 0 : item.id}
							title={parseText(item.title)}
							mobile={props.mobile}
							useSprite={!!item.picture.sprite}
							sources={item.picture.sprite || item.picture.sources}
						/>
					</Link>
				</DataLayer>
			</div>
		);
	};

	return (
		<section ref={$el} id={'argomentos'} data-ui-anchor={'argomentos'} className={cls(classes.root, className)}>
			{/* Background ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
			{
				<Background
					className={cls(classes.background)}
					sources={[
						props.mobile
							? {
									type: 'image/svg+xml',
									srcSet: 'assets/main-bg__mobile.svg',
									fallback: {
										type: 'image/jpg',
										srcSet: 'assets/main-bg__mobile.jpg',
									},
							  }
							: {
									type: 'image/svg+xml',
									srcSet: 'assets/main-bg.svg',
									fallback: {
										type: 'image/jpg',
										srcSet: 'assets/main-bg.jpg',
									},
							  },
					]}
				/>
			}

			<div className={cls(classes.content)}>
				<div className={cls(classes.wrapper)}>
					{/* Header ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
					<header className={cls(classes.header)}>
						{!props.mobile && (
							<img
								className={cls(classes.headerCar, { [classes.isRear]: true })}
								src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAAD0AQMAAAAIfsk0AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAB9JREFUeNrtwQEBAAAAgiD/r25IQAEAAAAAAAAAAG8GJDgAAXUk5/EAAAAASUVORK5CYII='
								alt='main page'
							/>
						)}
						<img
							className={cls(classes.headerLogo)}
							src={'/assets/main-logo__mobile.svg'}
							alt={info.default.title ? info.default.title : 'logo'}
						/>
						{!props.mobile && (
							<img
								className={cls(classes.headerCar, { [classes.isFront]: true })}
								src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAAD0AQMAAAAIfsk0AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAB9JREFUeNrtwQEBAAAAgiD/r25IQAEAAAAAAAAAAG8GJDgAAXUk5/EAAAAASUVORK5CYII='
								alt='logo'
							/>
						)}
					</header>

					{/* Gallery ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
					<div className={cls(classes.gallery)}>
						<div className={cls(classes.galleryGrid)}>
							{firstArg && renderPoster(firstArg)}
							{/* @see https://github.com/kidjp85/react-id-swiper/issues/298 */}
							{props.mobile ? (
								<ArgomentosMobile className={cls(classes.galleryList)} page={currentPage}>
									{renderThumbs(thumbList)}
								</ArgomentosMobile>
							) : (
								<ArgomentosDesktop className={cls(classes.galleryList)} page={currentPage}>
									{renderThumbs(thumbList)}
								</ArgomentosDesktop>
							)}
						</div>
						{!props.mobile && data.length > 5 && renderControls()}
					</div>

					{/* C2A ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
					{
						<div className={cls(classes.c2a)}>
							<button className={cls(classes.c2aButton)} onClick={onClickC2A}>
								<IconC2A className={cls(classes.c2aButtonIcon)} />
							</button>
						</div>
					}
				</div>
			</div>
		</section>
	);
}

MainPage.propTypes = propTypes;
MainPage.defaultProps = defaultProps;
export default MainPage;
