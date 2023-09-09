import React, { createRef, useState, useEffect } from 'react';
import { useGlobal } from 'reactn';
import Fade from 'react-reveal/Fade';
import cls from 'classnames';
import PropTypes from 'prop-types';
import ReactIdSwiper from 'react-id-swiper';
import { Swiper, Navigation, Pagination } from 'swiper/dist/js/swiper.esm';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import * as is from '@dcode/utils/is';
import { DataLayer } from '@dcode/react/components/DataLayer';
import { Quote } from '~/components/Quote';
import { SwitchButton, OffersIcon } from '~/components/SwitchButton';
import Loading from '~/components/Loading/Loading';
import PixiCanvas from '~/components/Pixi360/PixiCanvas';
import Pixi360 from '~/components/Pixi360/Pixi360';
import configData from '~/configurations/data';
import IconHand from './IconHand';
import css from './VersionsPage.scss';
import { BlueArrowButton } from '~/components/ArrowButton';
import { FiatBrand } from '~/components/FiatBrand';

// do not remove this line
ScrollToPlugin;

export const classes = {
	root: css.versionsPage,
	background: css.versionsPageBackground,
	content: css.versionsPageContent,
	content2: css.versionsPageContent2,
	quote: css.versionsPageQuote,
	arrow: css.versionsPageArrow,
	arrowPrev: css.versionsPageArrowPrev,
	arrowNext: css.versionsPageArrowNext,
	card: css.versionsPageCard,
	cardTail: css.versionsPageCardTail,
	cardHeader: css.versionsPageCardHeader,
	cardHeaderTitle: css.versionsPageCardHeaderTitle,
	cardHeaderText: css.versionsPageCardHeaderText,
	cardCanvas: css.versionsPageCardCanvas,
	cardCanvasContainer: css.versionsPageCardCanvasContainer,
	cardCanvasLoading: css.versionsPageCardCanvasLoading,
	cardCanvas360: css.versionsPageCardCanvas360,
	thumb: css.versionsPageThumb,
	thumbList: css.versionsPageThumbList,
	thumbItem: css.versionsPageThumbItem,
	thumbBox: css.versionsPageThumbBox,
	thumbPicture: css.versionsPageThumbPicture,
	thumbImage: css.versionsPageThumbImage,
	thumbCaption: css.versionsPageThumbCaption,
	switch: css.versionsPageSwitch,
	switchButtonIcon: css.versionsPageSwitchButtonIcon,
	help: css.versionsPageHelp,
	helpIcon: css.versionsPageHelpIcon,
	helpText: css.versionsPageHelpText,
	isActive: css.isActive,
	isHidden: css.isHidden,
	isDraggable: 'is-draggable',
	isHorizontal: 'is-horizontal',
	isVertical: 'is-vertical',
	flag: css.versionsPageFlag,
	flagPaper: css.versionsPageFlagPaper,
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
	data: PropTypes.object,
};

export const defaultProps = {
	className: '',
	classes,
	data: configData.versions,
};

export function VersionsPage({ className, classes, data: info, ...props }) {
	const $el = createRef();
	const [data, setData] = useState(info.data);
	const [type, setType] = useState(data.versions[1]);
	const [color, setColor] = useState(data.colors[0]);
	const [isTracked, setIsTracked] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [preview360, setPreview360] = useState({});
	const [isStarted, setIsStarted] = useState(false);
	const [swiperThumbs, updateSwiperThumbs] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(1);
	const [progress, setProgress] = useState(0);

	const swiperThumbsConfigDesktop = {
		direction: 'horizontal',
		centerInsufficientSlides: true,
		loopFillGroupWithBlank: true,
		loop: false,
		freeMode: false,
		grabCursor: true,
		centeredSlides: false,
		initialSlide: currentIndex,
		slidesPerGroup: 1,
		slidesPerView: data.versions.length,
		slidesPerColumn: 1,
		spaceBetween: 18,
	};

	const swiperThumbsConfigTablet = {
		...swiperThumbsConfigDesktop,
		centeredSlides: true,
		slidesPerView: 3.8,
		slidesPerGroup: 1,
		slidesPerColumn: 1,
		cssMode: true,
	};

	const swiperThumbsConfigSmartphone = {
		...swiperThumbsConfigDesktop,
		centeredSlides: true,
		slidesPerView: 2,
		slidesPerGroup: 1,
		slidesPerColumn: 1,
		spaceBetween: 26,
		cssMode: true,
	};

	const slideNextThumb = (index, speed, runCallbacks, internal) => {
		swiperThumbs && swiperThumbs.slideNext(speed);
	};

	const slidePrevThumb = (index, speed, runCallbacks, internal) => {
		swiperThumbs && swiperThumbs.slidePrev(speed);
	};

	const slideToThumb = (index, speed, runCallbacks, internal) => {
		swiperThumbs && swiperThumbs.slideTo(index, speed, runCallbacks, internal);
	};

	const slideToThumbClickedSlide = () => {
		swiperThumbs && swiperThumbs.slideToClickedSlide();
	};

	const onSlideChange = () => {
		setCurrentIndex(swiperThumbs.realIndex);
		setProgress(0);
		setType(data.versions[swiperThumbs.realIndex]);
		setColor(data.colors[data.versions[swiperThumbs.realIndex].colorIndex]);
		setIsTracked(false);
		setIsStarted(false);
	};

	const onThumbsResize = () => {
		swiperThumbs && swiperThumbs.update();
	};

	useEffect(() => {
		if (swiperThumbs) {
			swiperThumbs.on('slideChange', onSlideChange);
			swiperThumbs.on('resize', onThumbsResize);
		}
		return () => {
			if (swiperThumbs) {
				swiperThumbs.off('slideChange', onSlideChange);
				swiperThumbs.off('resize', onThumbsResize);
			}
		};
	}, [swiperThumbs]);

	const onRotate = () => {
		if (!isTracked) {
			const versao = type.info.label;
			const cor = data.colors[type.colorIndex];
			DataLayer.push('VersionsPage_GirouCarro', versao, cor);
			setIsTracked(true);
		}
	};

	const onLoadProgress = (percentage) => {
		setProgress(percentage);
	};

	const onInit = () => {
		setIsLoading(true);
	};

	const onLoadComplete = () => {
		setIsLoading(false);
		setProgress(1);
		TweenLite.to(`.${classes.cardCanvasContainer}`, 0.8, {
			scale: 1,
			opacity: 1,
			ease: Power3.easeInOut,
		});
	};

	const onStart = () => {
		if (isStarted) return;
		const version = type.info.label;
		const color = data.colors[type.colorIndex];
		DataLayer.push('VersionsPage_GirouCarroPrimeiraVez', version, color);
		setIsStarted(true);
		setIsLoading(false);
	};

	const onEnd = () => {
		setIsStarted(false);
	};

	const selectVersion = (type, index) => {
		const version = type.info.label;
		const color = data.colors[type.colorIndex];
		TweenLite.to(window, 0.5, { scrollTo: { y: `.${classes.card}`, autoKill: false } });
		DataLayer.push('VersionsPage_SelecionouVersaoCarro', version, color);
		setCurrentIndex(index);
		setProgress(0);
		setType(type);
		setColor(color);
		setIsTracked(false);
		setIsStarted(false);
		slideToThumbClickedSlide();
		setPreview360({ [type.id]: true });
	};

	const renderImg = (item, index) => {
		return is.string(item.icon) ? (
			<img
				className={cls(classes.thumbImage, { [classes.isActive]: index === currentIndex })}
				src={item.icon}
				alt={item.alt ? item.alt : 'versions'}
			/>
		) : (
			<picture>
				<source srcSet={item.icon.srcSet} type={item.icon.type} />
				<img
					className={cls(classes.thumbImage)}
					src={item.icon.fallback.srcSet}
					type={item.icon.fallback.type}
					alt={item.alt ? item.alt : 'versions'}
				/>
			</picture>
		);
	};

	const renderThumb = (item, index) => {
		return (
			<div key={index} className={cls(item.css)}>
				<Fade delay={index > 0 ? index * 100 : 0}>
					<div className={cls(classes.thumbItem, { [classes.isActive]: index === currentIndex })}>
						<div className={cls(classes.thumbBox)} onClick={() => selectVersion(item, index)}>
							<div className={cls(classes.thumbPicture)}>
								{renderImg(item, index)}
								<span className={cls(classes.thumbCaption)} dangerouslySetInnerHTML={{ __html: item.label }} />
							</div>
						</div>
					</div>
				</Fade>
			</div>
		);
	};

	const renderThumbs = (list) => {
		return list.length > 1 && list.map(renderThumb);
	};

	const onWantToSee360 = () => {
		setCurrentIndex(0);
		setProgress(0);
		setIsLoading(true);
		setIsTracked(false);
		setIsStarted(false);
		setPreview360({ [type.id]: true });
	};

	const render360 = (sizeMobile = 1, sizeDesktop = 1) => {
		return (
			<Pixi360
				className={cls(classes.cardCanvas360)}
				pathImgs={`/assets/${props.mobile ? '360mobile' : '360'}/${type.id}/`}
				ext={type.ext}
				totalImgs={props.mobile ? sizeMobile : sizeDesktop}
				onInit={onInit}
				onLoadProgress={onLoadProgress}
				onLoadComplete={onLoadComplete}
				onRotate={onRotate}
			/>
		);
	};

	return (
		<section ref={$el} id={'todas-versoes'} data-ui-anchor={'todas-versoes'} className={cls(classes.root, className)}>
			{!props.mobile && <FiatBrand noColor className={cls(classes.flagPaper)} />}

			{/* Background ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
			<div className={cls(classes.background)} />

			<div className={cls(classes.content)}>
				{/* Fortune Cookie ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
				<Quote className={classes.quote} title={data.title} text={data.description} />
			</div>

			{/* Card ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
			<div
				className={cls(classes.card, {
					[classes.isDraggable]: true,
					[classes.isHorizontal]: true,
					[classes.isVertical]: false,
				})}
				onTouchStart={preview360[type.id] ? onStart : undefined}
				onMouseDown={preview360[type.id] ? onStart : undefined}
				onTouchEnd={onEnd}
				onMouseUp={onEnd}>
				<div className={cls(classes.content)}>
					<div className={cls(classes.cardTail)} />
					<Fade bottom>
						<header className={cls(classes.cardHeader)}>
							<h3 className={cls(classes.cardHeaderTitle)} dangerouslySetInnerHTML={{ __html: type.info.name }} />
							<p
								className={cls(classes.cardHeaderText)}
								dangerouslySetInnerHTML={{ __html: `• ${type.info.details.join('<br/>• ')}` }}
							/>
						</header>
					</Fade>
					<div key={type.id + color.id} className={cls(classes.cardCanvas)}>
						{isLoading && <Loading className={cls(classes.cardCanvasLoading)} progress={progress} />}
						<Fade>
							<PixiCanvas
								onClick={onWantToSee360}
								onTouchStart={onWantToSee360}
								onMouseDown={onWantToSee360}
								className={cls(classes.cardCanvasContainer)}
								width={props.mobile ? 768 : 1920 / 2}
								height={props.mobile ? 433 : 1080 / 2}>
								{preview360[type.id] ? render360(30, 30) : render360(1, 1)}
							</PixiCanvas>
						</Fade>
					</div>
					<div className={cls(classes.help, { [classes.isHidden]: isStarted })}>
						<img alt='versoes-360' src='/assets/360/nav/base.png' className={props.mobile ? 'base-mobile' : 'base'} />
						<span className={cls(classes.helpText)}>
							<img src='assets/360/nav/360.png' alt='Clique para ver o 360' />
						</span>
					</div>
				</div>
			</div>

			<div className={cls(classes.content, 'swiper')}>
				{!props.mobile && (
					<div className={cls(classes.flag)}>
						<img alt='flag' src='assets/icons/flag.png' />
					</div>
				)}
				<div className={cls(classes.arrow)}>
					{currentIndex > 0 && <BlueArrowButton className={cls(classes.arrowPrev)} onClick={slidePrevThumb} />}
					<BlueArrowButton className={cls(classes.arrowNext)} onClick={slideNextThumb} />
				</div>
				<div className={cls(classes.content2)}>
					{/* Thumbs ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
					<div className={cls(classes.thumb)}>
						{/* Arrow ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}

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
								1023: {
									...swiperThumbsConfigTablet,
								},
							}}>
							{renderThumbs(data.versions)}
						</ReactIdSwiper>
					</div>
				</div>
			</div>

			{/* Link ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
			<div className={cls(classes.content, 'buttons')}>
				<Fade bottom>
					<SwitchButton
						className={cls(classes.switch)}
						title={!props.mobile && data.switchTitle}
						buttons={[
							{
								inline: true,
								label: 'OFERTAS FIAT',
								icon: <OffersIcon className={cls(classes.switchButtonIcon)} />,
								onClick: () => {
									const version = type.info.label;
									DataLayer.push('VersionsPage_ClicouOfertas', version);
								},
								href: 'https://ofertas.fiat.com.br/?q=argo',
								target: '_blank',
							},
						]}
					/>
				</Fade>
			</div>
		</section>
	);
}

VersionsPage.propTypes = propTypes;
VersionsPage.defaultProps = defaultProps;
export default VersionsPage;
