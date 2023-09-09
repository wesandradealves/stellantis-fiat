import React, { createRef, useState, useEffect } from 'react';
import 'react-photoswipe/lib/photoswipe.css';
import { PhotoSwipe } from 'react-photoswipe';
import Fade from 'react-reveal/Fade';
import cls from 'classnames';
import PropTypes from 'prop-types';
import ReactIdSwiper from 'react-id-swiper';
import { useGlobal } from 'reactn';
import * as is from '@dcode/utils/is';
import ensureSlashEnd from '@dcode/utils/xtras/ensureSlashEnd';
import ensureSlashStart from '@dcode/utils/xtras/ensureSlashStart';
import renderH3 from '@dcode/react/components/Elements/H3';
import renderH4 from '@dcode/react/components/Elements/H4';
import renderP from '@dcode/react/components/Elements/P';
import renderSpan from '@dcode/react/components/Elements/Span';
import { Img, Picture } from '@dcode/react/components/Media';
import { DataLayer } from '@dcode/react/components/DataLayer';
import { Swiper, Navigation, Pagination } from 'swiper/dist/js/swiper.esm';
import { Quote } from '~/components/Quote';
import { SwitchButton, WheelIcon, CarIcon } from '~/components/SwitchButton';
import { ArrowButton } from '~/components/ArrowButton';
import { ShareButton } from '~/components/ShareButton';
import configData from '~/configurations/data';
import css from './TipPage.scss';

export const classes = {
	// 0.
	root: css.tipPage,

	// 1. BACKGROUND
	background: css.tipPageBackground,

	// 1. CONTENT
	content: css.tipPageContent,

	// 2. QUOTE
	quote: css.tipPageQuote,

	// 3. CARD
	card: css.tipPageCard,

	// ~~~ 3.1. CARD HEADER
	cardWing: css.tipPageCardWing,
	cardHeaderContainer: css.tipPageCardHeaderContainer,
	cardHeader: css.tipPageCardHeader,
	cardHeaderModel: css.tipPageCardHeaderModel,
	cardHeaderVersion: css.tipPageCardHeaderVersion,
	cardHeaderPrice: css.tipPageCardHeaderPrice,

	// ~~~ 3.2. CARD GALLERY
	cardGallery: css.tipPageCardGallery,

	// ~~~~~ 3.2.1. CARD GALLERY POSTER
	cardGalleryPoster: css.tipPageCardGalleryPoster,
	cardGalleryPosterList: css.tipPageCardGalleryPosterList,
	cardGalleryPosterItem: css.tipPageCardGalleryPosterItem,
	cardGalleryPosterFigure: css.tipPageCardGalleryPosterFigure,
	cardGalleryPosterFigurePicture: css.tipPageCardGalleryPosterFigurePicture,
	cardGalleryPosterFigureImage: css.tipPageCardGalleryPosterFigureImage,
	cardGalleryPosterShare: css.tipPageCardGalleryPosterShare,
	cardGalleryPosterShareButton: css.tipPageCardGalleryPosterShareButton,

	// ~~~~~ 3.2.2. CARD GALLERY THUMB
	cardGalleryThumb: css.tipPageCardGalleryThumb,
	cardGalleryThumbList: css.tipPageCardGalleryThumbList,
	cardGalleryThumbItem: css.tipPageCardGalleryThumbItem,
	cardGalleryThumbImage: css.tipPageCardGalleryThumbImage,

	// ~~~ 3.3. CARD INFO
	cardInfo: css.tipPageCardInfo,

	// ~~~~~ 3.3.1. CARD INFO ARTICLE
	cardInfoArticle: css.tipPageCardInfoArticle,
	cardInfoArticleTitle: css.tipPageCardInfoArticleTitle,
	cardInfoArticleText: css.tipPageCardInfoArticleText,

	// ~~~~~ 3.3.1 CARD INFO ARROW
	cardInfoArrow: css.tipPageCardInfoArrow,
	cardInfoArrowPrev: css.tipPageCardInfoArrowPrev,
	cardInfoArrowNext: css.tipPageCardInfoArrowNext,

	// ~~~~~ 3.3.2 CARD INFO ARROW
	cardInfoPage: css.tipPageCardInfoPage,
	cardInfoPageCurrent: css.tipPageCardInfoPageCurrent,
	cardInfoPageSize: css.tipPageCardInfoPageSize,

	// ~~~ 3.4. CARD BULLET
	cardBullet: css.tipPageCardBullet,
	cardBulletList: css.tipPageCardBulletList,
	cardBulletItem: css.tipPageCardBulletItem,

	// ~~~ 4. CARD LINE
	cardTail: css.tipPageCardTail,
	cardLine: css.tipPageCardLine,

	// ~~~ 5. CARD BULLET
	switch: css.tipPageSwitch,

	// ~~~ STATES
	hasPrice: css.hasPrice,
	isActive: css.isActive,
	isSimple: css.isSimple,
	zoomIn: css.tipPageZoomIn,
	zoomInBox: css.tipPageZoomInBox,
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
	data: PropTypes.object,
};

export const defaultProps = {
	className: '',
	classes,
	data: configData.tip,
};

export function TipPage({ className, classes, location, data: info, ...props }) {
	const $el = createRef();
	const [cluster] = useGlobal('cluster');
	const [data, setData] = useState(info.orderByClusterOrder(cluster.tip.order)[0]);
	const [swiperPoster, updateSwiperPoster] = useState(null);
	const [swiperThumbs, updateSwiperThumbs] = useState(null);
	const [currentPage, setCurrentPage] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [numPage, setNumPage] = useState(0);
	const [showTabs, setShowTabs] = React.useState(true);

	const [hasZoomIn, setHasZoomIn] = useState(false);
	const getGalleryDataZoom = () =>
		JSON.parse(JSON.stringify(showTabs ? data.features : info.data.list[1].features))
			.map((thumb, index) => ({
				isActive: index === currentIndex,
				title: thumb.title,
				src: props.mobile ? thumb.poster.zoom.mobile : thumb.poster.zoom.desk,
				thumbnail: props.mobile ? thumb.thumbnail.mobile : thumb.thumbnail.desk,
				w: 1280,
				h: 900,
			}))
			.sort((a, b) => a.isActive - b.isActive)
			.reverse();

	const swiperPosterConfigDesktop = {
		direction: 'horizontal',
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerColumn: 1,
		spaceBetween: 0,
		loop: false,
		loopFillGroupWithBlank: true,
		grabCursor: true,
		centeredSlides: false,
		freeMode: false,
		lazy: true,
		initialSlide: currentIndex,
	};

	const swiperThumbsConfigDesktop = {
		direction: 'vertical',
		centerInsufficientSlides: true,
		loopFillGroupWithBlank: true,
		loop: false,
		freeMode: false,
		grabCursor: true,
		centeredSlides: false,
		initialSlide: currentIndex,
		slidesPerView: 3,
		slidesPerGroup: 3,
		slidesPerRow: 1,
		slidesPerColumn: 1,
		spaceBetween: 0,
	};

	const slidePrevThumb = (speed, runCallbacks) => {
		swiperThumbs && swiperThumbs.slidePrev();
	};

	const slideNextThumb = (speed, runCallbacks) => {
		swiperThumbs && swiperThumbs.slideNext();
	};

	const slideToPoster = (index, speed, runCallbacks, internal) => {
		swiperPoster && swiperPoster.slideTo(index, speed, runCallbacks, internal);
	};

	const updatePoster = () => {
		swiperPoster && swiperPoster.update();
	};

	const updateThumbs = () => {
		swiperThumbs && swiperThumbs.update();
	};

	const onPosterSlideChange = () => {
		const feature = (showTabs ? data.features : info.data.list[1].features)[swiperPoster.realIndex];
		const model = showTabs ? data.model : info.data.list[1]['model'];
		DataLayer.push('TipPage_MudouDica', model, feature.title);
		setCurrentIndex(swiperPoster.realIndex);
		if (swiperThumbs) {
			const thumbsPage = Math.round((swiperPoster.realIndex - 1) / swiperThumbs.params.slidesPerGroup);
			if (thumbsPage > swiperThumbs.snapIndex) {
				swiperThumbs.slideNext();
			} else if (thumbsPage < swiperThumbs.snapIndex) {
				swiperThumbs.slidePrev();
			}
		}
	};

	const onThumbsSlideChange = () => {
		const feature = (showTabs ? data.features : info.data.list[1].features)[swiperPoster.realIndex];
		const thumbsPage = Math.round((swiperThumbs.realIndex - 1) / swiperThumbs.params.slidesPerGroup);
		const model = showTabs ? data.model : info.data.list[1]['model'];
		DataLayer.push('TipPage_MudouThumbs', model, feature.title, thumbsPage);
		setCurrentPage(thumbsPage);
	};

	useEffect(() => {
		if (swiperPoster) {
			swiperPoster.on('slideChange', onPosterSlideChange);
			swiperPoster.on('resize', updatePoster);
		}
		if (swiperThumbs) {
			swiperThumbs.on('slideChange', onThumbsSlideChange);
			swiperThumbs.on('resize', updateThumbs);
			setNumPage(Math.ceil(swiperThumbs.params.slidesPerGroup / data.features.length));
		}
		return () => {
			if (swiperPoster) {
				swiperPoster.off('slideChange', onPosterSlideChange);
				swiperPoster.off('resize', updatePoster);
			}
			if (swiperThumbs) {
				swiperThumbs.off('slideChange', onThumbsSlideChange);
				swiperThumbs.off('resize', updateThumbs);
			}
		};
	}, [swiperPoster]);

	const renderPicture = (item, index) => {
		return (
			<Picture
				className={cls(classes.cardGalleryPosterFigurePicture)}
				classNameImg={cls(classes.cardGalleryPosterFigureImage, 'swiper-lazy')}
				sources={item.poster.sources}
				alt={item.poster.alt}
				shouldRenderize={currentIndex === index}
			/>
		);
	};

	const renderImg = (item, index) => {
		return (
			<Img
				className={cls(classes.cardGalleryPosterFigureImage, classes.isSimple, 'swiper-lazy')}
				src={item.poster}
				alt={item.alt ? item.alt : 'poster'}
				mode={'cover'}
			/>
		);
	};

	const thumbByTitle = (title) => {
		const thumbIndex = data.features.findIndex((t) => t.title === title);
		return thumbIndex !== -1 ? [thumbIndex, data.features[thumbIndex]] : [null, null];
	};

	const renderZoomIn = (index) => {
		const zoomInPoster = () => {
			const feature = (showTabs ? data.features : info.data.list[1].features)[currentIndex];
			const model = showTabs ? data.model : info.data.list[1]['model'];
			DataLayer.push('TipPage_OpenZoom', model, feature.title);
			setHasZoomIn(true);
		};

		return (
			<React.Fragment>
				<Fade bottom>
					<div style={{ visibility: currentIndex === index ? 'visible' : 'hidden' }} className={cls(classes.zoomInBox)}>
						<i onClick={() => zoomInPoster()} className={cls(classes.zoomIn)} />
					</div>
				</Fade>
			</React.Fragment>
		);
	};

	const renderPhotoswiper = () => {
		let changedGalleryIndex = currentIndex;

		return (
			<React.Fragment>
				<PhotoSwipe
					options={{
						getDoubleTapZoom: () => 2.5,
						fullscreenEl: false,
						zoomEl: false,
						shareEl: false,
						counterEl: true,
					}}
					beforeChange={({ currItem }) => {
						const [thumbIndex, thumb] = thumbByTitle(currItem.title);
						if (thumb && !thumb.isActive) {
							changedGalleryIndex = thumbIndex;
						}
					}}
					afterChange={({ currItem }) => {
						const feature = (showTabs ? data.features : info.data.list[1].features)[currentIndex];
						const model = showTabs ? data.model : info.data.list[1]['model'];
						if (currItem.title !== feature.title) {
							DataLayer.push('TipPage_ZoomChanged', model, currItem.title);
						}
					}}
					isOpen={hasZoomIn}
					items={getGalleryDataZoom()}
					onClose={() => {
						const feature = (showTabs ? data.features : info.data.list[1].features)[changedGalleryIndex];
						const model = showTabs ? data.model : info.data.list[1]['model'];
						DataLayer.push('TipPage_CloseZoom', model, feature.title);
						slideToPoster(changedGalleryIndex);
						setHasZoomIn(false);
					}}
				/>
			</React.Fragment>
		);
	};

	const renderPoster = (item, index) => {
		return (
			<div key={index} className={cls(classes.cardGalleryPosterItem)}>
				<DataLayer
					onEvent={'TipPage_ClicouPoster'}
					args={[showTabs ? data.model : info.data.list[1]['model'], item.title]}>
					<div className={cls(classes.cardGalleryPosterFigure)}>
						{is.string(item.poster) ? renderImg(item, index) : renderPicture(item, index)}
					</div>
				</DataLayer>
				{renderZoomIn(index)}
				<div className={cls(classes.cardGalleryPosterLoader, 'swiper-lazy-preloader', 'swiper-lazy-preloader-white')} />
			</div>
		);
	};

	const renderPosters = (list) => {
		return list.map(renderPoster);
	};

	const renderThumb = (item, index) => {
		return (
			<div
				key={index}
				className={cls(classes.cardGalleryThumbItem, {
					[classes.isActive]: index === currentIndex,
				})}>
				<Fade>
					<DataLayer
						onEvent={'TipPage_ClicouThumb'}
						args={[showTabs ? data.model : info.data.list[1]['model'], item.title]}>
						<img
							className={cls(classes.cardGalleryThumbImage, {
								[classes.isActive]: currentIndex === index,
							})}
							onClick={() => slideToPoster(index)}
							data-src={props.mobile ? item.thumbnail.mobile : item.thumbnail.desk}
							src={props.mobile ? item.thumbnail.mobile : item.thumbnail.desk}
							alt={item.alt ? item.alt : 'poster'}
						/>
					</DataLayer>
				</Fade>
			</div>
		);
	};

	const renderThumbs = (list) => {
		return list.length > 1 && list.map(renderThumb);
	};

	const renderBullet = (item, index) => {
		return (
			<DataLayer
				key={index}
				onEvent={'TipPage_ClicouBullet'}
				args={[showTabs ? data.model : info.data.list[1]['model'], item.title]}>
				<button
					className={cls(classes.cardBulletItem, {
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
		<section ref={$el} id={'s-design'} data-ui-anchor={'s-design'} className={cls(classes.root, className)}>
			{/* Background ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
			<div className={cls(classes.background)} />

			<div className={cls(classes.content)}>
				{/* Fortune Cookie ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
				<Fade bottom>
					<Quote className={classes.quote} title={info.data.title}>
						<span>
							Conheça as versões <strong>mais esportivas</strong> do Fiat Argo.
						</span>
					</Quote>
				</Fade>
			</div>

			{/* Card ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
			<section className={cls(classes.card)}>
				<div className={cls(classes.content)}>
					<div className={cls(classes.cardTail)} />

					{/* Header ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
					<Fade bottom>
						<div className={cls(classes.cardHeaderContainer)}>
							<DataLayer onEvent={'TipPage_ClicouTab'} args={[data.model]}>
								<header
									className={cls(classes.cardHeader)}
									onClick={() => {
										setShowTabs(true);
										slideToPoster(0);
									}}
									style={showTabs ? { backgroundColor: '#edede3' } : { backgroundColor: '#5a4090' }}>
									{showTabs && <div className={cls(classes.cardWing)} />}
									{renderH3(data.model, {
										className: cls(classes.cardHeaderModel),
										style: !showTabs ? { color: '#a194b8' } : { color: '#5a4090' },
									})}
									{renderP(data.version, {
										className: cls(classes.cardHeaderVersion, {
											[classes.hasPrice]: !!data.price,
										}),
									})}
									{renderP(data.price, {
										className: cls(classes.cardHeaderPrice),
										'data-symbol': data.price ? `${data.currencySymbol || 'R$'} ` : undefined,
									})}
								</header>
							</DataLayer>
							<DataLayer onEvent={'TipPage_ClicouTab'} args={[info.data.list[1]['model']]}>
								<header
									className={cls(classes.cardHeader)}
									onClick={() => {
										setShowTabs(false);
										slideToPoster(0);
									}}
									style={!showTabs ? { backgroundColor: '#edede3' } : { backgroundColor: '#5a4090' }}>
									{!showTabs && <div className={cls(classes.cardWing)} />}
									{renderH3(info.data.list[1]['model'], {
										className: cls(classes.cardHeaderModel),
										style: showTabs ? { color: '#a194b8' } : { color: '#5a4090' },
									})}
									{renderP(info.data.list[1]['version'], {
										className: cls(classes.cardHeaderVersion, {
											[classes.hasPrice]: !!data.price,
										}),
									})}
									{renderP(info.data.list[1]['price'], {
										className: cls(classes.cardHeaderPrice),
										'data-symbol': data.price ? `${data.currencySymbol || 'R$'} ` : undefined,
									})}
								</header>
							</DataLayer>
						</div>
					</Fade>

					{/* Gallery ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
					{showTabs ? (
						<div className={cls(classes.cardGallery)}>
							{
								<div className={cls(classes.cardGalleryPoster)}>
									<ReactIdSwiper
										containerClass={cls(classes.cardGalleryPosterList)}
										Swiper={Swiper}
										getSwiper={updateSwiperPoster}
										{...swiperPosterConfigDesktop}>
										{renderPosters(data.features)}
									</ReactIdSwiper>
								</div>
							}
							{!props.mobile && (
								<div className={cls(classes.cardGalleryThumb)}>
									<div className={cls(classes.cardGalleryThumbList)}>{renderThumbs(data.features)}</div>
								</div>
							)}
						</div>
					) : null}
					{!showTabs ? (
						<div className={cls(classes.cardGallery)}>
							{
								<div className={cls(classes.cardGalleryPoster)}>
									<ReactIdSwiper
										containerClass={cls(classes.cardGalleryPosterList)}
										Swiper={Swiper}
										getSwiper={updateSwiperPoster}
										{...swiperPosterConfigDesktop}>
										{renderPosters(info.data.list[1].features)}
									</ReactIdSwiper>
								</div>
							}
							{!props.mobile && (
								<div className={cls(classes.cardGalleryThumb)}>
									<div className={cls(classes.cardGalleryThumbList)}>{renderThumbs(info.data.list[1].features)}</div>
								</div>
							)}
						</div>
					) : null}

					{/* Info ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
					{showTabs ? (
						<div className={cls(classes.cardInfo)}>
							{
								<Fade bottom>
									<article className={cls(classes.cardInfoArticle)}>
										{data.features.length &&
											renderH4(data.features[currentIndex].title, { className: cls(classes.cardInfoArticleTitle) })}
										{data.features.length &&
											renderP(data.features[currentIndex].description, { className: cls(classes.cardInfoArticleText) })}
									</article>
								</Fade>
							}
						</div>
					) : null}
					{!showTabs ? (
						<div className={cls(classes.cardInfo)}>
							{
								<Fade bottom>
									<article className={cls(classes.cardInfoArticle)}>
										{data.features.length &&
											renderH4(info.data.list[1].features[currentIndex].title, {
												className: cls(classes.cardInfoArticleTitle),
											})}
										{data.features.length &&
											renderP(info.data.list[1].features[currentIndex].description, {
												className: cls(classes.cardInfoArticleText),
											})}
									</article>
								</Fade>
							}
						</div>
					) : null}
					{props.mobile && (
						<div className={cls(classes.cardBullet)}>
							<div className={cls(classes.cardBulletList)}>
								{renderBullets(showTabs ? data.features : info.data.list[1].features)}
							</div>
						</div>
					)}
					<div className={cls(classes.cardLine)} />
				</div>
			</section>

			<div className={cls(classes.content)}>
				{/* Switch ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
				<Fade bottom>
					<SwitchButton
						className={cls(classes.switch)}
						title={!props.mobile && info.data.switchTitle}
						buttons={[
							{
								inline: !props.mobile,
								label: 'MONTE O SEU',
								icon: <CarIcon className={cls(classes.switchButtonIcon)} />,
								onClick: () =>
									DataLayer.push('TipPage_ClicouCustomize', showTabs ? data.model : info.data.list[1]['model']),
								href: 'https://argo.fiat.com.br/monte.html',
								target: '_blank',
							},
							{
								inline: !props.mobile,
								label: 'COMPRE O SEU',
								icon: <WheelIcon className={cls(classes.switchButtonIcon)} />,
								onClick: () =>
									DataLayer.push('TipPage_ClicouAgende', showTabs ? data.model : info.data.list[1]['model']),
								to: '/agende',
							},
						]}
					/>
				</Fade>
			</div>
			{renderPhotoswiper()}
		</section>
	);
}

TipPage.propTypes = propTypes;
TipPage.defaultProps = defaultProps;
export default TipPage;
