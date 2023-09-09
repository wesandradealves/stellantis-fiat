import React, { useRef, useState, useEffect } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import ReactIdSwiper from "react-id-swiper";
import ReactPlayer from "react-player";
import * as is from "@dcode/utils/is";
import ensureSlashEnd from "@dcode/utils/xtras/ensureSlashEnd";
import { Img, Picture } from "@dcode/react/components/Media";
import { DataLayer } from "@dcode/react/components/DataLayer";
import { safeId, getArgByPath } from "~/configurations/data-main";
import css from "./Gallery.scss";

export const classes = {
  root: css.gallery,
  poster: css.galleryPoster,
  posterList: css.galleryPosterList,
  posterItem: css.galleryPosterItem,
  posterPicture: css.galleryPosterPicture,
  posterImage: css.galleryPosterImage,
  posterVideo: css.galleryPosterVideo,
  posterLoader: css.galleryPosterLoader,
  info: css.galleryInfo,
  infoTitle: css.galleryInfoTitle,
  infoText: css.galleryInfoText,
  bullet: css.galleryBullet,
  bulletPrev: css.galleryBulletPrev,
  bulletNext: css.galleryBulletNext,
  bulletList: css.galleryBulletList,
  bulletItem: css.galleryBulletItem,
  thumb: css.galleryThumb,
  thumbList: css.galleryThumbList,
  thumbItem: css.galleryThumbItem,
  thumbImage: css.galleryThumbImage,
  isActive: css.isActive,
  isSimple: css.isSimple,
};

export const defaultProps = {
  className: "",
  classes,
};

export const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export const Gallery = ({ className, classes, location, match, ...props }) => {
  const swiperPosterRef = useRef();
  const swiperThumbsRef = useRef();
  const state =
    location.state.argumento || getArgByPath(location.hash.replace(/^#/, ""));
  const id = safeId(match.params.id, 0, state.modal.length - 1);
  const [currentIndex, setCurrentIndex] = useState(id);
  const [isTracked, setIsTracked] = useState(false);

  const swiperThumbsConfigDesktop = {
    direction: "horizontal",
    centerInsufficientSlides: true,
    loopFillGroupWithBlank: true,
    loop: false,
    freeMode: false,
    grabCursor: true,
    centeredSlides: false,
    initialSlide: currentIndex,
    slidesPerGroup: 10,
    slidesPerView: 10,
    slidesPerColumn: 1,
    spaceBetween: 18,
  };

  const swiperThumbsConfigTablet = {
    ...swiperThumbsConfigDesktop,
    slidesPerView: 6.5,
    slidesPerGroup: 6,
    slidesPerColumn: 1,
  };

  const swiperThumbsConfigSmartphone = {
    ...swiperThumbsConfigDesktop,
    slidesPerView: 3.5,
    slidesPerGroup: 3,
    slidesPerColumn: 1,
    spaceBetween: 26,
    cssMode: true,
  };

  const slideNextPoster = (speed, runCallbacks) => {
    if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
      swiperPosterRef.current.swiper.slideNext(speed, runCallbacks);
    }
  };

  const slidePrevPoster = (speed, runCallbacks) => {
    if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
      swiperPosterRef.current.swiper.slidePrev(speed, runCallbacks);
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

  const putIdOnPath = (pathname, index) => {
    const pathArray = ensureSlashEnd(pathname, false).split("/");
    pathArray.length > 2 && pathArray.pop();
    const nupath = `#${pathArray.join("/")}/${index}`;
    window.history.replaceState(null, state.modal[index].title, nupath);
  };

  const onPosterSlideChange = () => {
    if (
      isTracked &&
      swiperPosterRef.current &&
      swiperPosterRef.current.swiper
    ) {
      DataLayer.push(
        "ModalGallery_Scroll",
        state.modal[swiperPosterRef.current.swiper.realIndex].title,
        state.title,
        swiperPosterRef.current.swiper.realIndex
      );
      setIsTracked(false);
    }
    if (swiperThumbsRef.current && swiperThumbsRef.current.swiper) {
      const thumbsPage = Math.round(
        (swiperPosterRef.current.swiper.realIndex - 1) /
          swiperThumbsRef.current.swipe.params.slidesPerGroup
      );
      if (thumbsPage > swiperThumbsRef.current.swipe.snapIndex) {
        swiperThumbsRef.current.swipe.slideNext();
      } else if (thumbsPage < swiperThumbsRef.current.swipe.snapIndex) {
        swiperThumbsRef.current.swipe.slidePrev();
      }
    }
    if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
      setCurrentIndex(swiperPosterRef.current.swiper.realIndex);
      putIdOnPath(
        window.location.hash.replace(/^#/, ""),
        swiperPosterRef.current.swiper.realIndex
      );
    }
  };

  const onPosterResize = () => {
    if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
      swiperPosterRef.current.swiper.update();
    }
    if (swiperThumbsRef.current && swiperThumbsRef.current.swiper) {
      swiperThumbsRef.current.swiper.update();
    }
  };

  const onThumbsSliderMove = () => {
    DataLayer.push(
      "ModalGallery_ThumbsScroll",
      state.modal[swiperPosterRef.current.swiper.realIndex].title,
      state.title
    );
  };

  const onPosterTouchStart = () => {
    setIsTracked(true);
  };

  useEffect(() => DataLayer.push("ModalGallery_Abriu", state.title), []);
  useEffect(() => {
    if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
      swiperPosterRef.current.swiper.on("slideChange", onPosterSlideChange);
      swiperPosterRef.current.swiper.on("resize", onPosterResize);
      swiperPosterRef.current.swiper.on("touchStart", onPosterTouchStart);
    }
    if (swiperThumbsRef.current && swiperThumbsRef.current.swiper) {
      swiperThumbsRef.current.swiper.on("slideChange", onThumbsSliderMove);
    }
    return () => {
      if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
        swiperPosterRef.current.swiper.off("slideChange", onPosterSlideChange);
        swiperPosterRef.current.swiper.off("resize", onPosterResize);
        swiperPosterRef.current.swiper.off("touchStart", onPosterTouchStart);
      }
      if (swiperThumbsRef.current && swiperThumbsRef.current.swiper) {
        swiperThumbsRef.current.swiper.off("slideChange", onThumbsSliderMove);
      }
    };
  }, [swiperPosterRef, swiperThumbsRef, isTracked]);

  const onPlayVideo = () => {
    const index =
      swiperPosterRef.current && swiperPosterRef.current.swiper
        ? swiperPosterRef.current.swiper.realIndex
        : 0;
    DataLayer.push(
      "ModalGallery_videoPlay",
      state.title,
      state.modal[index].title
    );
  };

  const onPauseVideo = () => {
    const index =
      swiperPosterRef.current && swiperPosterRef.current.swiper
        ? swiperPosterRef.current.swiper.realIndex
        : 0;
    DataLayer.push(
      "ModalGallery_videoPause",
      state.title,
      state.modal[index].title
    );
  };

  const renderBullet = (item, index) => {
    return (
      <DataLayer
        key={index}
        onEvent={"ModalGallery_ClicouThumb"}
        args={[item.title, state.title, index]}
      >
        <button
          className={cls(classes.bulletItem, {
            [classes.isActive]: index === currentIndex,
          })}
          onClick={() => slideToPoster(index)}
        />
      </DataLayer>
    );
  };

  const renderBullets = (list) => {
    return list.length > 1 && list.map(renderBullet);
  };

  const renderThumb = (item, index) => {
    return (
      <div key={index} className={cls(classes.thumbItem)}>
        <DataLayer
          onEvent={"ModalGallery_ClicouThumb"}
          args={[item.title, state.title, index]}
        >
          <img
            className={cls(classes.thumbImage, {
              [classes.isActive]: index === currentIndex,
            })}
            onClick={() => slideToPoster(index)}
            data-src={item.thumbnail}
            src={item.thumbnail}
            alt={`img-${item.alt}`}
          />
        </DataLayer>
      </div>
    );
  };

  const renderThumbs = (list) => {
    return list.length > 1 && list.map(renderThumb);
  };

  const renderVideo = (item, index) => {
    return (
      <div key={index} className={cls(classes.posterVideo)}>
        <ReactPlayer
          url={item.video}
          playing={index === currentIndex}
          onPlay={onPlayVideo}
          onPause={onPauseVideo}
          controls={true}
          light={false}
          width="100%"
          height="100%"
        />
      </div>
    );
  };

  const renderPicture = (item, index) => {
    return (
      <Picture
        className={cls(classes.posterPicture)}
        classNameImg={cls(classes.posterImage, "swiper-lazy")}
        sources={item.poster.sources}
        alt={`img-${item.poster.alt}`}
      />
    );
  };

  const renderImg = (item, index) => {
    return (
      <Img
        className={cls(classes.posterImage, classes.isSimple, "swiper-lazy")}
        src={item.poster}
        alt={`img-${item.alt}`}
        mode={"cover"}
      />
    );
  };

  const renderPoster = (item, index) => {
    return (
      <div key={index} className={cls(classes.posterItem)}>
        <DataLayer
          onEvent={"ModalGallery_ClicouPoster"}
          args={[item.title, state.title]}
        >
          {is.string(item.poster)
            ? renderImg(item, index)
            : renderPicture(item, index)}
        </DataLayer>
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

  const renderPosters = (list) => {
    return list.map((item, index) => {
      if (item.video) return renderVideo(item, index);
      return renderPoster(item, index);
    });
  };

  useEffect(() => {
    return () => {
      DataLayer.push("Modal_Fechou_WithTitle", state.title);
    };
  }, []);

  return (
    <div className={cls(classes.root, className)}>
      <div className={cls(classes.poster)}>
        <ReactIdSwiper
          ref={swiperPosterRef}
          containerClass={cls(classes.posterList)}
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={0}
          lazy={true}
          loop={false}
          loopFillGroupWithBlank={true}
          grabCursor={true}
          centeredSlides={true}
          cssMode={props.mobile}
          initialSlide={currentIndex}
        >
          {renderPosters(state.modal)}
        </ReactIdSwiper>
      </div>
      <div className={cls(classes.bullet)}>
        <div
          className={cls(classes.bulletPrev, {
            ["is-inactive"]: currentIndex === 0,
          })}
          onClick={slidePrevPoster}
        >
          <img src={"/assets/icons/arrow.svg"} alt={"previous"} />
        </div>
        <div className={cls(classes.bulletList)}>
          {renderBullets(state.modal)}
        </div>
        <div
          className={cls(classes.bulletNext, {
            ["is-inactive"]: currentIndex >= state.modal.length - 1,
          })}
          onClick={slideNextPoster}
        >
          <img src={"/assets/icons/arrow.svg"} alt={"next"} />
        </div>
      </div>
      <article className={cls(classes.info)}>
        <h2
          className={cls(classes.infoTitle)}
          dangerouslySetInnerHTML={{
            __html: state.modal[currentIndex].title,
          }}
        />
        <p
          className={cls(classes.infoText)}
          dangerouslySetInnerHTML={{
            __html: state.modal[currentIndex].description,
          }}
        />
      </article>
    </div>
  );
};

Gallery.displayName = "Gallery";
Gallery.propTypes = propTypes;
Gallery.defaultProps = defaultProps;
export default Gallery;
