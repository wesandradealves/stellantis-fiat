/* eslint-disable */
import ReactIdSwiper from "react-id-swiper";
import "react-photoswipe/lib/photoswipe.css";
import { PhotoSwipe } from "react-photoswipe";
import React, { useRef, useState, useRef, useEffect } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { gsap, ScrollToPlugin } from "gsap/all";
import { DataLayer } from "@dcode/react/components/DataLayer";
import { Img } from "@dcode/react/components/Media";
import data from "~/configurations/data-open-edition";
import OpenEditionHeader from "./OpenEditionHeader";
import { FiatBrand } from "~/components/FiatBrand";
import css from "./OpenEditionPage.scss";

gsap.registerPlugin(ScrollToPlugin);

const classes = {
  root: css.openEditionPage,
  header: css.openEditionPageHeader,
  headerWrapper: css.openEditionPageHeaderWrapper,
  headerTitle: css.openEditionPageHeaderTitle,
  content: css.openEditionPageContent,
  current: css.openEditionPageCurrent,
  button: css.openEditionPageButton,
  title: css.openEditionPageTitle,
  galleryTitle: css.openEditionPageGalleryTitle,
  gallery: css.openEditionPageGallery,
  poster: css.openEditionPagePoster,
  thumbs: css.openEditionPageThumbs,
  thumb: css.openEditionPageThumb,
  selected: css.openEditionPageSelected,
  cta: css.openEditionPageCta,
  ctaTitle: css.openEditionPageCtaTitle,
  bullet: css.openEditionPageBullet,
  bulletList: css.openEditionPageBulletList,
  bulletItem: css.openEditionPageBulletItem,
  isActive: css.isActive,
  zoomIn: css.openEditionPageZoomIn,
  zoomInBox: css.openEditionPageZoomInBox,
  posterMobile: css.openEditionPagePosterMobile,
  posterLoader: css.openEditionPagePosterLoader,
  posterListMobile: css.openEditionPagePosterListMobile,
};

const propTypes = {
  className: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string),
  mobile: PropTypes.bool,
};

const defaultProps = {
  className: "",
  classes,
  mobile: undefined,
};

export const OpenEditionPage = ({ className, classes, mobile }) => {
  const swiperPosterRef = useRef();
  const [poster, setPoster] = useState(data[0]);
  const [thumbs, setThumbs] = useState(data);
  const [currentThumbIndex, setCurrentThumbIndex] = useState(0);
  const [hasZoomIn, setHasZoomIn] = useState(false);

  const $el = useRef();
  const refPoster = useRef();
  const $refThumbs = useRef();

  const getGalleryDataZoom = () =>
    JSON.parse(JSON.stringify(thumbs))
      .sort((a, b) => a.isActive - b.isActive)
      .map((thumb) => ({
        title: thumb.title,
        src: thumb.media.desktopZoom,
        thumbnail: thumb.media.thumb,
        w: 1280,
        h: 900,
      }))
      .reverse();

  const activate = (thumb) => {
    const thumbfy = JSON.stringify(thumb);
    setThumbs(
      thumbs.map((t, index) => {
        const tbfy = JSON.stringify(t);
        if (tbfy === thumbfy) {
          t.isActive = true;
          setCurrentThumbIndex(index);
        }
        t.isActive = false;
        return t;
      })
    );
    thumb.isActive = true;
    return thumb;
  };

  const thumbByTitle = (title) => {
    const thumbIndex = thumbs.findIndex((t) => t.title === title);
    return thumbIndex !== -1 ? [thumbIndex, thumbs[thumbIndex]] : [null, null];
  };

  const renderZoomIn = () => {
    const zoomInPoster = () => {
      DataLayer.push("OpenEdition_OpenZoom", thumbs[currentThumbIndex].title);
      setHasZoomIn(true);
    };

    let changedGalleryIndex = currentThumbIndex;

    return (
      <React.Fragment>
        <div className={cls(classes.zoomInBox)}>
          <i onClick={() => zoomInPoster()} className={cls(classes.zoomIn)} />
        </div>
        <PhotoSwipe
          options={{
            getDoubleTapZoom: () => 2.5,
          }}
          beforeChange={({ currItem }) => {
            const [thumbIndex, thumb] = thumbByTitle(currItem.title);
            if (thumb && !thumb.isActive) {
              changedGalleryIndex = thumbIndex;
            }
          }}
          isOpen={hasZoomIn}
          items={getGalleryDataZoom()}
          onClose={() => {
            const currentThumb = thumbs[changedGalleryIndex];
            DataLayer.push("OpenEdition_CloseZoom", currentThumb.title);
            setPoster(activate(currentThumb));
            setHasZoomIn(false);
          }}
        />
      </React.Fragment>
    );
  };

  const renderThumb = (thumb, index) => (
    <img
      alt={`thumb-${index}`}
      key={index}
      onClick={() => {
        DataLayer.push("OpenEdition_ClicouThumb", thumb.title);
        thumb = activate(thumb);
        setPoster(thumb);
      }}
      className={cls({
        [classes.thumb]: true,
        [classes.selected]: thumb.isActive,
      })}
      src={thumb.media.thumb}
    />
  );

  const renderPoster = (poster, index) => {
    return (
      <div className={cls(classes.poster)}>
        {renderZoomIn()}
        <img
          alt={`thumb-${index}`}
          onClick={() => setHasZoomIn(true)}
          key={index}
          ref={refPoster}
          src={poster.media.desktop}
        />
      </div>
    );
  };

  const renderThumbs = (thumbs) => {
    return (
      <div ref={$refThumbs} className={cls(classes.thumbs)}>
        {thumbs.map(renderThumb)}
      </div>
    );
  };

  const renderImageTitle = ({ title }) => (
    <p className={cls(classes.galleryTitle)}>{title}</p>
  );

  const renderBullet = (thumb, index) => {
    return (
      <button
        className={cls(classes.bulletItem, {
          [classes.isActive]: index === currentThumbIndex,
        })}
        onClick={() => {
          thumb = activate(thumb);
          setPoster(thumb);
          if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
            swiperPosterRef.current.swiper.slideTo(index);
          }
        }}
      />
    );
  };

  const renderBullets = (thumbs) => {
    return (
      <div className={cls(classes.bullet)}>
        <div className={cls(classes.bulletList)}>
          {thumbs.map(renderBullet)}
        </div>
      </div>
    );
  };

  const renderDesktopGallery = () => {
    return (
      <div className={cls(classes.gallery)}>
        {renderPoster(poster)}
        {renderThumbs(thumbs)}
        {renderImageTitle(poster)}
      </div>
    );
  };

  const renderCTA = () => (
    <div className={cls(classes.cta)}>
      <Fade bottom>
        <h2 className={cls(classes.ctaTitle)}>
          Quer ser um dos únicos a levar uma das 250 unidades para casa? Fale
          com uma concessionária.
        </h2>
      </Fade>
    </div>
  );

  const renderPosterMobile = (poster) => {
    return (
      <div className={cls(classes.posterMobile)}>
        <Img
          className={cls("swiper-lazy")}
          src={poster.media.mobile}
          alt={`poster-${poster.title}`}
          mode={"cover"}
        />
        {renderImageTitle(poster)}
        <div
          className={cls(
            classes.posterLoader,
            "swiper-lazy-preloader",
            "swiper-lazy-preloader-white"
          )}
        />
      </div>
    );
  };

  const renderPostersMobile = (posters) => {
    return posters.map(renderPosterMobile);
  };

  useEffect(() => {
    if (!(swiperPosterRef.current || swiperPosterRef.current.swiper)) return;
    swiperPosterRef.current.swiper.on("slideChange", () => {
      const currentThumb = thumbs[swiperPosterRef.current.swiper.activeIndex];
      DataLayer.push("OpenEdition_ClicouThumb", currentThumb.title);
      setPoster(activate(currentThumb));
    });
  }, [swiperPosterRef]);

  const renderMobileGallery = () => {
    return (
      <div className={cls(classes.posterMobile)}>
        <ReactIdSwiper
          ref={swiperPosterRef}
          containerClass={cls(classes.posterListMobile)}
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={0}
          lazy={true}
          loop={false}
          loopFillGroupWithBlank={true}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={currentThumbIndex}
        >
          {renderPostersMobile(thumbs)}
        </ReactIdSwiper>
      </div>
    );
  };

  return (
    <section
      ref={$el}
      id={OpenEditionPage.displayName}
      data-ui-anchor={OpenEditionPage.displayName}
      className={cls(classes.root, className, "has-menu-focus")}
    >
      <div className={cls(classes.content)}>
        {/* PaperClip ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        {/*<FiatBrand
					noColor
					className={cls(classes.paperClip)}
				/>*/}

        {/* Header ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <OpenEditionHeader
          className={classes.header}
          title="Conheça a edição limitada da nova Fiat Strada."
        />

        {/* Current ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div className={cls(classes.current)}>
          <h1 className={cls(classes.title)}>
            <strong>STRADA OPEN EDITION</strong> 1.3 FLEX MANUAL
          </h1>
          {!mobile && renderDesktopGallery()}
          {mobile && renderMobileGallery()}
          {mobile && renderBullets(thumbs)}
          {renderCTA()}
        </div>
      </div>
    </section>
  );
};

OpenEditionPage.displayName = "OpenEditionPage";
OpenEditionPage.propTypes = propTypes;
OpenEditionPage.defaultProps = defaultProps;
export default OpenEditionPage;
