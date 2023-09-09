import React, { useRef, useState, useEffect } from "react";
import "react-photoswipe/lib/photoswipe.css";
import { PhotoSwipe } from "react-photoswipe";
import Fade from "react-reveal/Fade";
import cls from "classnames";
import PropTypes from "prop-types";
import ReactIdSwiper from "react-id-swiper";
import { useGlobal } from "reactn";
import * as is from "@dcode/utils/is";
import renderH4 from "@dcode/react/components/Elements/H4";
import renderP from "@dcode/react/components/Elements/P";
import { Img, Picture } from "@dcode/react/components/Media";
import { DataLayer } from "@dcode/react/components/DataLayer";
import { Quote } from "~/components/Quote";
import { SwitchButton, WheelIcon } from "~/components/SwitchButton";
import configData from "~/configurations/data";
import css from "./TipPage.scss";
import { FiatBrand } from "~/components/FiatBrand";

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
  cardBulletPrev: css.tipPageCardBulletPrev,
  cardBulletNext: css.tipPageCardBulletNext,
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
  flagPaper: css.tipPageFlagPaper,
};

export const propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  data: PropTypes.object,
};

export const defaultProps = {
  className: "",
  classes,
  data: configData.tip,
};

export function TipPage({
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
  const [data, setData] = useState(
    info.orderByClusterOrder(cluster.tip.order)[0]
  );
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

  const swiperThumbsConfigDesktop = {
    direction: "vertical",
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
    slidesPerColumn: 2,
    spaceBetween: 0,
  };

  const slidePrevPoster = (speed, runCallbacks) => {
    if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
      swiperPosterRef.current.swiper.slidePrev();
    }
  };

  const slideNextPoster = (speed, runCallbacks) => {
    if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
      swiperPosterRef.current.swiper.slideNext();
    }
  };

  const slideToPoster = (index, speed, runCallbacks, internal) => {
    if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
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
        "TipPage_MudouDica",
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
      "TipPage_MudouThumbs",
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
        alt={`page-${item.poster.alt}`}
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
        alt={`galeria-${item.alt}`}
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
      DataLayer.push("TipPage_ClicouZoom", currentIndex);
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
          //afterChange={({ currItem }) => {
          //  DataLayer.push('TipPage_MudouZoomItem', );
          //}}
          isOpen={hasZoomIn}
          items={getGalleryDataZoom()}
          onClose={() => {
            DataLayer.push("TipPage_ClicouCloseZoom", null);
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
        <DataLayer onEvent={"TipPage_ClicouPoster"} args={[item.title]}>
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
          <DataLayer onEvent={"TipPage_ClicouThumb"} args={[item.title]}>
            <img
              className={cls(classes.cardGalleryThumbImage, {
                [classes.isActive]: currentIndex === index,
              })}
              onClick={() => slideToPoster(index)}
              data-src={mobile ? item.thumbnail.mobile : item.thumbnail.desk}
              src={mobile ? item.thumbnail.mobile : item.thumbnail.desk}
              alt={`data-${item.alt}`}
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
        onEvent={"TipPage_ClicouBullet"}
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
      id={"trekking"}
      data-ui-anchor={"trekking"}
      className={cls(classes.root, className)}
    >
      {!mobile && <FiatBrand noColor className={cls(classes.flagPaper)} />}

      {/* Background ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className={cls(classes.background)} />

      <div className={cls(classes.content)}>
        {/* Fortune Cookie ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <Fade bottom>
          <Quote
            className={classes.quote}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="82.669"
                height="79.823"
                viewBox="0 0 82.669 79.823"
              >
                <path
                  id="Caminho_1017"
                  fill="#ff8094"
                  d="M2779.289 586.8l-41.335-57.739-41.334 57.739h15.812l-15.812 22.084h82.669l-15.812-22.084zm-73.237-4.847l31.9-44.563 31.9 44.563h-9.845l-22.054-30.806-22.053 30.806zm15.811 0l16.091-22.479 16.091 22.479zm-3.471 4.847h17.138v17.237h-29.477zm51.462 17.237h-29.477V586.8h17.139z"
                  data-name="Caminho 1017"
                  transform="translate(-2696.62 -529.061)"
                />
              </svg>
            }
            text={info.data.description}
          />
        </Fade>
      </div>

      {/* Card ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <section className={cls(classes.card)}>
        <div className={cls(classes.content)}>
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
            {!mobile && (
              <div className={cls(classes.cardGalleryThumb)}>
                <div className={cls(classes.cardGalleryThumbList)}>
                  {renderThumbs(data.features)}
                </div>
              </div>
            )}
          </div>

          {/* Bullets ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          {mobile && (
            <div className={cls(classes.cardBullet)}>
              <div
                className={cls(classes.cardBulletPrev, {
                  ["is-inactive"]: currentIndex === 0,
                })}
                onClick={slidePrevPoster}
              >
                <img src={"/assets/icons/arrow.svg"} alt={"previous"} />
              </div>
              <div className={cls(classes.cardBulletList)}>
                {renderBullets(data.features)}
              </div>
              <div
                className={cls(classes.cardBulletNext, {
                  ["is-inactive"]: currentIndex >= data.features.length - 1,
                })}
                onClick={slideNextPoster}
              >
                <img src={"/assets/icons/arrow.svg"} alt={"next"} />
              </div>
            </div>
          )}
          {/* Info ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <div className={cls(classes.cardInfo)}>
            {
              <Fade bottom>
                <article className={cls(classes.cardInfoArticle)}>
                  {data.features.length &&
                    renderH4(
                      mobile
                        ? data.features[currentIndex].titleMobile
                        : data.features[currentIndex].title,
                      {
                        className: cls(classes.cardInfoArticleTitle),
                      }
                    )}
                  {data.features.length &&
                    renderP(data.features[currentIndex].description, {
                      className: cls(classes.cardInfoArticleText),
                    })}
                </article>
              </Fade>
            }
          </div>
          {!mobile && <div className={cls(classes.cardLine)} />}
        </div>
      </section>

      <div className={cls(classes.content, "cta")}>
        {/* Switch ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <Fade bottom>
          <SwitchButton
            className={cls(classes.switch)}
            title={!mobile && info.data.switchTitle}
            buttons={[
              {
                inline: !mobile,
                label: mobile ? "OFERTAS" : "OFERTAS FIAT",
                onClick: () => DataLayer.push("TipPage_ClicouAgende"),
                href: "https://ofertas.fiat.com.br/?q=mobi",
                target: "_blank",
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
