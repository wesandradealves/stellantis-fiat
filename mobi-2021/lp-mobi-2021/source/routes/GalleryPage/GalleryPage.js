import React, { useRef, useState, useEffect } from "react";
import "react-photoswipe/lib/photoswipe.css";
import { PhotoSwipe } from "react-photoswipe";
import Fade from "react-reveal/Fade";
import cls from "classnames";
import PropTypes from "prop-types";
import ReactIdSwiper from "react-id-swiper";
import { useGlobal } from "reactn";
import * as is from "@dcode/utils/is";
import renderH3 from "@dcode/react/components/Elements/H3";
import { Img, Picture } from "@dcode/react/components/Media";
import { DataLayer } from "@dcode/react/components/DataLayer";
import { FiatBrand } from "~/components/FiatBrand";
import configData from "~/configurations/data";
import css from "./GalleryPage.scss";

export const classes = {
  // 0.
  root: css.galleryPage,

  // 1. BACKGROUND
  background: css.galleryPageBackground,

  // 1. CONTENT
  content: css.galleryPageContent,

  // 2. QUOTE
  quote: css.galleryPageQuote,

  // 3. CARD
  card: css.galleryPageCard,

  // ~~~ 3.1. CARD HEADER
  cardHeader: css.galleryPageCardHeader,
  cardHeaderModel: css.galleryPageCardHeaderModel,
  cardHeaderVersion: css.galleryPageCardHeaderVersion,
  cardHeaderPrice: css.galleryPageCardHeaderPrice,

  // ~~~ 3.2. CARD GALLERY
  cardGallery: css.galleryPageCardGallery,

  // ~~~~~ 3.2.1. CARD GALLERY POSTER
  cardGalleryPoster: css.galleryPageCardGalleryPoster,
  cardGalleryPosterList: css.galleryPageCardGalleryPosterList,
  cardGalleryPosterItem: css.galleryPageCardGalleryPosterItem,
  cardGalleryPosterFigure: css.galleryPageCardGalleryPosterFigure,
  cardGalleryPosterFigurePicture: css.galleryPageCardGalleryPosterFigurePicture,
  cardGalleryPosterFigureImage: css.galleryPageCardGalleryPosterFigureImage,
  cardGalleryPosterShare: css.galleryPageCardGalleryPosterShare,
  cardGalleryPosterShareButton: css.galleryPageCardGalleryPosterShareButton,

  // ~~~~~ 3.2.2. CARD GALLERY THUMB
  cardGalleryThumb: css.galleryPageCardGalleryThumb,
  cardGalleryThumbList: css.galleryPageCardGalleryThumbList,
  cardGalleryThumbItem: css.galleryPageCardGalleryThumbItem,
  cardGalleryThumbImage: css.galleryPageCardGalleryThumbImage,

  // ~~~ 3.3. CARD INFO
  cardInfo: css.galleryPageCardInfo,

  // ~~~~~ 3.3.1. CARD INFO ARTICLE
  cardInfoArticle: css.galleryPageCardInfoArticle,
  cardInfoArticleTitle: css.galleryPageCardInfoArticleTitle,
  cardInfoArticleText: css.galleryPageCardInfoArticleText,

  // ~~~~~ 3.3.1 CARD INFO ARROW
  cardInfoArrow: css.galleryPageCardInfoArrow,
  cardInfoArrowPrev: css.galleryPageCardInfoArrowPrev,
  cardInfoArrowNext: css.galleryPageCardInfoArrowNext,

  // ~~~~~ 3.3.2 CARD INFO ARROW
  cardInfoPage: css.galleryPageCardInfoPage,
  cardInfoPageCurrent: css.galleryPageCardInfoPageCurrent,
  cardInfoPageSize: css.galleryPageCardInfoPageSize,

  // ~~~ 3.4. CARD BULLET
  cardBullet: css.galleryPageCardBullet,
  cardBulletList: css.galleryPageCardBulletList,
  cardBulletItem: css.galleryPageCardBulletItem,

  // ~~~ 4. CARD LINE
  cardTail: css.galleryPageCardTail,
  cardLine: css.galleryPageCardLine,

  // ~~~ 5. CARD BULLET
  switch: css.galleryPageSwitch,

  // ~~~ STATES
  hasPrice: css.hasPrice,
  isActive: css.isActive,
  isSimple: css.isSimple,
  zoomIn: css.galleryPageZoomIn,
  zoomInBox: css.galleryPageZoomInBox,
  flagPaper: css.galleryPageFlagPaper,
};

export const propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  data: PropTypes.object,
};

export const defaultProps = {
  className: "",
  classes,
  data: configData.gallery,
};

export function GalleryPage({
  className,
  classes,
  location,
  mobile,
  data: info,
  ...props
}) {
  const $el = useRef();
  const swiperPosterRef = useRef();
  const swiperThumbsRef = useRef();
  const [cluster] = useGlobal("cluster");
  const [data, setData] = useState(info.data.list[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numPage, setNumPage] = useState(0);

  const [hasZoomIn, setHasZoomIn] = useState(false);
  const getGalleryDataZoom = () =>
    JSON.parse(JSON.stringify(data.features))
      .map((thumb, index) => ({
        isActive: index === currentIndex,
        title: thumb.title,
        src: mobile ? thumb.poster.zoom.mobile : thumb.poster.zoom.desk,
        thumbnail: mobile ? thumb.thumbnail.mobile : thumb.thumbnail.desk,
        w: 1280,
        h: 900,
      }))
      .sort((a, b) => a.isActive - b.isActive)
      .reverse();

  const swiperPosterConfigDesktop = {
    direction: "horizontal",
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

  const swiperThumbsConfig = {
    direction: "horizontal",
    centerInsufficientSlides: true,
    loopFillGroupWithBlank: true,
    loop: false,
    freeMode: false,
    grabCursor: true,
    centeredSlides: false,
    initialSlide: currentIndex,
    slidesPerGroup: 2,
    slidesPerView: 2.5,
    slidesPerColumn: 1,
    spaceBetween: 10,
    lazy: true,
  };

  const slideToPoster = (index, speed, runCallbacks, internal) => {
    if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
      DataLayer.push("GalleryPage_OpenZoom", null);
      swiperPosterRef.current.swiper.slideTo(
        index,
        speed,
        runCallbacks,
        internal
      );
    }
  };

  const updatePoster = () => {
    if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
      swiperPosterRef.current.swiper.update();
    }
  };

  const updateThumbs = () => {
    if (swiperThumbsRef.current && swiperThumbsRef.current.swiper) {
      swiperThumbsRef.current.swiper.update();
    }
  };

  const onPosterSlideChange = () => {
    if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
      DataLayer.push(
        "GalleryPage_MudouDica",
        data.features[swiperPosterRef.current.swiper.realIndex].title
      );
      setCurrentIndex(swiperPosterRef.current.swiper.realIndex);
    }
    if (swiperThumbsRef.current && swiperThumbsRef.current.swiper) {
      const thumbsPage = Math.round(
        (swiperPosterRef.current.swiper.realIndex - 1) /
          swiperThumbsRef.current.swiper.params.slidesPerGroup
      );
      if (thumbsPage > swiperThumbsRef.current.swiper.snapIndex) {
        swiperThumbsRef.current.swiper.slideNext();
      } else if (thumbsPage < swiperThumbsRef.current.swiper.snapIndex) {
        swiperThumbsRef.current.swiper.slidePrev();
      }
    }
  };

  const onThumbsSlideChange = () => {
    const thumbsPage = Math.round(
      (swiperThumbsRef.current.swiper.realIndex - 1) /
        swiperThumbsRef.current.swiper.params.slidesPerGroup
    );
    DataLayer.push(
      "GalleryPage_MudouThumbs",
      data.features[swiperThumbsRef.current.swiper.realIndex].title,
      thumbsPage
    );
    setCurrentPage(thumbsPage);
  };

  useEffect(() => {
    if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
      swiperPosterRef.current.swiper.on("slideChange", onPosterSlideChange);
      swiperPosterRef.current.swiper.on("resize", updatePoster);
    }
    if (swiperThumbsRef.current && swiperThumbsRef.current.swiper) {
      swiperThumbsRef.current.swiper.on("slideChange", onThumbsSlideChange);
      swiperThumbsRef.current.swiper.on("resize", updateThumbs);
      setNumPage(
        Math.ceil(
          swiperThumbsRef.current.swiper.params.slidesPerGroup /
            data.features.length
        )
      );
    }
    return () => {
      if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
        swiperPosterRef.current.swiper.off("slideChange", onPosterSlideChange);
        swiperPosterRef.current.swiper.off("resize", updatePoster);
      }
      if (swiperThumbsRef.current && swiperThumbsRef.current.swiper) {
        swiperThumbsRef.current.swiper.off("slideChange", onThumbsSlideChange);
        swiperThumbsRef.current.swiper.off("resize", updateThumbs);
      }
    };
  }, [swiperPosterRef]);

  const renderPicture = (item, index) => {
    return (
      <Picture
        className={cls(classes.cardGalleryPosterFigurePicture)}
        classNameImg={cls(classes.cardGalleryPosterFigureImage, "swiper-lazy")}
        sources={item.poster.sources}
        alt={`img-${item.poster.alt}`}
        shouldRenderize={currentIndex === index}
        dumpSize={!!mobile ? "560x429" : "1800x1120"}
      />
    );
  };

  const renderImg = (item, index) => {
    return (
      <Img
        className={cls(
          classes.cardGalleryPosterFigureImage,
          classes.isSimple,
          "swiper-lazy"
        )}
        src={item.poster}
        alt={`img-${item - alt}`}
        mode={"cover"}
      />
    );
  };

  const thumbByTitle = (title) => {
    const thumbIndex = data.features.findIndex((t) => t.title === title);
    return thumbIndex !== -1
      ? [thumbIndex, data.features[thumbIndex]]
      : [null, null];
  };

  const renderZoomIn = (index) => {
    const zoomInPoster = () => {
      DataLayer.push("GalleryPage_OpenZoom", null);
      setHasZoomIn(true);
    };

    return (
      <React.Fragment>
        <Fade bottom>
          <div
            style={{
              visibility: currentIndex === index ? "visible" : "hidden",
            }}
            className={cls(classes.zoomInBox)}
          >
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
          isOpen={hasZoomIn}
          items={getGalleryDataZoom()}
          onClose={() => {
            DataLayer.push("GalleryPage_CloseZoom", null);
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
        <DataLayer onEvent={"GalleryPage_ClicouPoster"} args={[item.title]}>
          <div className={cls(classes.cardGalleryPosterFigure)}>
            {is.string(item.poster)
              ? renderImg(item, index)
              : renderPicture(item, index)}
          </div>
        </DataLayer>
        {renderZoomIn(index)}
        <div
          className={cls(
            classes.cardGalleryPosterLoader,
            "swiper-lazy-preloader",
            "swiper-lazy-preloader-white"
          )}
        />
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
        })}
      >
        <Fade>
          <DataLayer
            onEvent={"GalleryPage_ClicouThumb"}
            args={[item.title, index]}
          >
            <img
              className={cls(classes.cardGalleryThumbImage, {
                [classes.isActive]: currentIndex === index,
              })}
              onClick={() => slideToPoster(index)}
              data-src={mobile ? item.thumbnail.mobile : item.thumbnail.desk}
              src={mobile ? item.thumbnail.mobile : item.thumbnail.desk}
              alt={`img-${item.alt}`}
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
        onEvent={"GalleryPage_ClicouBullet"}
        args={[item.title]}
      >
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
    <section
      ref={$el}
      id={"gallery"}
      data-ui-anchor={"gallery"}
      className={cls(classes.root, className)}
    >
      {/* PaperClip ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      {mobile && <FiatBrand noColor className={cls(classes.flagPaper)} />}

      {/* Background ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className={cls(classes.background)} />

      {/* Card ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <section className={cls(classes.card)}>
        <div className={cls(classes.content)}>
          {/* Header ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <Fade bottom>
            <header className={cls(classes.cardHeader)}>
              {renderH3(
                mobile
                  ? "Descubra cada detalhe <br /> do Fiat Mobi."
                  : "Descubra cada detalhe do Fiat Mobi.",
                {
                  className: cls(classes.cardHeaderModel),
                }
              )}
            </header>
          </Fade>

          {/* Gallery ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <div className={cls(classes.cardGallery)}>
            {
              <div className={cls(classes.cardGalleryPoster)}>
                <ReactIdSwiper
                  ref={swiperPosterRef}
                  containerClass={cls(classes.cardGalleryPosterList)}
                  {...swiperPosterConfigDesktop}
                >
                  {renderPosters(data.features)}
                </ReactIdSwiper>
              </div>
            }
            {mobile ? (
              <div className={cls(classes.cardGalleryThumb)}>
                <ReactIdSwiper
                  ref={swiperThumbsRef}
                  containerClass={cls(classes.cardGalleryThumbList)}
                  {...swiperThumbsConfig}
                >
                  {renderThumbs(data.features)}
                </ReactIdSwiper>
              </div>
            ) : (
              <div className={cls(classes.cardGalleryThumb)}>
                <div className={cls(classes.cardGalleryThumbList)}>
                  {renderThumbs(data.features)}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {renderPhotoswiper()}
    </section>
  );
}

GalleryPage.propTypes = propTypes;
GalleryPage.defaultProps = defaultProps;
export default GalleryPage;
