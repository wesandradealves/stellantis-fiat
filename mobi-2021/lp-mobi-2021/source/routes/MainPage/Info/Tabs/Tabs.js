import React, { useRef, useState, useEffect } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import ReactIdSwiper from "react-id-swiper";
import ReactPlayer from "react-player";
import * as is from "@dcode/utils/is";
import ensureSlashEnd from "@dcode/utils/xtras/ensureSlashEnd";
import $ from "jquery";
import { Img, Picture } from "@dcode/react/components/Media";
import { DataLayer } from "@dcode/react/components/DataLayer";
import { safeId, getArgByPath } from "~/configurations/data-main";
import css from "./Tabs.scss";

export const classes = {
  root: css.tabs,
  poster: css.tabsPoster,
  posterList: css.tabsPosterList,
  posterItem: css.tabsPosterItem,
  posterPicture: css.tabsPosterPicture,
  posterImage: css.tabsPosterImage,
  posterVideo: css.tabsPosterVideo,
  posterLoader: css.tabsPosterLoader,
  modalWithVideo: css.tabsModalWithVideo,
  infoWithVideo: css.tabsInfoWithVideo,
  infoTitleWithVideo: css.tabsInfoTitleWithVideo,
  rootWithVideo: css.tabsWithVideo,
  info: css.tabsInfo,
  infoTitle: css.tabsInfoTitle,
  infoText: css.tabsInfoText,
  tab: css.tabsTab,
  tabList: css.tabsTabList,
  tabItem: css.tabsTabItem,
  tabLink: css.tabsTabLink,
  isActive: css.isActive,
  isSimple: css.isSimple,
  thumb: css.tabsThumbVideo,
  thumbImage: css.tabsThumbImage,
  thumbImageIsTransparent: css.tabsThumbImageIsTransparent,
};

export const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export const defaultProps = {
  className: "",
  classes,
};

export const Tabs = ({
  className,
  classes,
  mobile,
  location,
  match,
  ...props
}) => {
  const swiperPosterRef = useRef();
  const state =
    location.state.argumento ||
    getArgByPath(window.location.hash.replace(/^#/, ""));
  const id = safeId(match.params.id, 0, state.modal.length - 1);
  const [currentIndex, setCurrentIndex] = useState(id);
  const [isTracked, setIsTracked] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(false);
  const [thumbIsTransparent, setTransparencyOfThumb] = useState(false);

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
    const nupath = `${pathArray.join("/")}/${index}`;
    window.history.replaceState(null, state.modal[index].title, nupath);
  };

  const playVideo = (playerTab) => {
    console.log(playerTab, playingVideo);
    setPlayingVideo(!playingVideo);
    setTransparencyOfThumb(!thumbIsTransparent);
  };

  const onPosterSlideChange = () => {
    if (isTracked) {
      DataLayer.push(
        "ModalTabs_Scroll",
        state.modal[swiperPosterRef.current.swiper.realIndex].title,
        state.title,
        swiperPosterRef.current.swiper.realIndex
      );

      setIsTracked(false);
    }

    // Antigo evento, não é utilizado p/ o tracking
    // DataLayer.push(
    // 	'ModalTabs_MudouTab',
    // 	state.modal[swiperPosterRef.current.swiper.realIndex].title,
    // 	state.title,
    // 	swiperPosterRef.current.swiper.realIndex,
    // );

    setCurrentIndex(swiperPosterRef.current.swiper.realIndex);
    putIdOnPath(
      window.location.hash.replace(/^#/, ""),
      swiperPosterRef.current.swiper.realIndex
    );
  };

  const onPosterTouchStart = () => {
    setIsTracked(true);
  };

  useEffect(() => DataLayer.push("ModalTabs_Abriu", state.title), []);
  useEffect(() => {
    if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
      swiperPosterRef.current.swiper.on("slideChange", onPosterSlideChange);
      swiperPosterRef.current.swiper.on("touchStart", onPosterTouchStart);
    }
    return () => {
      if (swiperPosterRef.current && swiperPosterRef.current.swiper) {
        swiperPosterRef.current.swiper.off("slideChange", onPosterSlideChange);
        swiperPosterRef.current.swiper.off("touchStart", onPosterTouchStart);
      }
    };
  }, [swiperPosterRef, isTracked]);

  const onPlayVideo = () => {
    const index =
      swiperPosterRef.current && swiperPosterRef.current.swiper
        ? swiperPosterRef.current.swiper.realIndex
        : 0;
    DataLayer.push(
      "ModalTabs_videoPlay",
      state.title /*, state.modal[index].title*/
    );
    setTransparencyOfThumb(true);
    setPlayingVideo(true);
  };

  const onPauseVideo = () => {
    const index =
      swiperPosterRef.current && swiperPosterRef.current.swiper
        ? swiperPosterRef.current.swiper.realIndex
        : 0;
    DataLayer.push(
      "ModalTabs_videoPause",
      state.title /*, state.modal[index].title*/
    );
    setPlayingVideo(false);
    setTransparencyOfThumb(false);
  };

  const renderTab = (item, index) => {
    return (
      <li key={index} className={cls(classes.tabItem)}>
        <DataLayer
          onEvent={"ModalTabs_ClicouTab"}
          args={[item.title, state.title, index]}
        >
          <button
            className={cls(classes.tabLink, {
              [classes.isActive]: index === currentIndex,
            })}
            onClick={() => slideToPoster(index)}
            dangerouslySetInnerHTML={{
              __html: item.shortTitle,
            }}
          />
        </DataLayer>
      </li>
    );
  };

  const renderTabs = (list) => {
    return (
      list.length > 1 && (
        <ul className={cls(classes.tabList)}>{list.map(renderTab)}</ul>
      )
    );
  };

  const renderVideo = (item, index) => {
    return (
      <div className={cls(classes.posterItem)}>
        <div key={index} className={cls(classes.posterVideo, classes.isSimple)}>
          <ReactPlayer
            // ref={playerRef}
            url={item.video}
            className="react-player"
            playing={playingVideo}
            // playing={index === currentIndex}
            onPlay={onPlayVideo}
            onPause={onPauseVideo}
            onEnded={() => playVideo()}
            controls={false}
            light={false}
            width="100%"
            height="100%"
          />
        </div>
        {/* <div className={cls(classes.thumb, classes.isSimple)} onClick={() => playVideo()}>
					<img
					className={playingVideo ? cls(classes.thumbImageIsTransparent) : cls(classes.thumbImage, classes.isSimple) } src={item.thumb} />
				</div> */}
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
          onEvent={"ModalTabs_ClicouPoster"}
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

  if (state.modal[currentIndex].video) {
    $(".frame").css("background-color", "red");
  }

  useEffect(() => {
    return () => {
      DataLayer.push("Modal_Fechou_WithTitle", state.title);
    };
  }, []);

  return (
    <div
      className={cls(classes.root, className, {
        [classes.rootWithVideo]: state.modal[currentIndex].video,
      })}
    >
      {state.modal[currentIndex].video && (
        <article
          className={cls(classes.info, {
            [classes.infoWithVideo]: state.modal[currentIndex].video,
          })}
        >
          {props.mobile && (
            <h2
              className={cls(classes.infoTitle, {
                [classes.infoTitleWithVideo]: state.modal[currentIndex].video,
              })}
              onClick={() => console.log(props.mobile)}
              dangerouslySetInnerHTML={{
                __html: state.modal[currentIndex].title,
              }}
            />
          )}
          {!props.mobile && (
            <h2
              onClick={() => console.log(props.mobile)}
              className={cls(classes.infoTitle, {
                [classes.infoTitleWithVideo]: state.modal[currentIndex].video,
              })}
            >
              <span>CLIQUE E ASSISTA:</span>
            </h2>
          )}
        </article>
      )}
      <div
        className={cls(classes.poster, {
          [classes.modalWithVideo]: state.modal[currentIndex].video,
        })}
      >
        <ReactIdSwiper
          ref={swiperPosterRef}
          containerClass={cls(classes.posterList)}
          direction={"horizontal"}
          slidesPerView={1}
          loop={false}
          lazy={true}
          loopFillGroupWithBlank={true}
          grabCursor={true}
          centeredSlides={true}
          cssMode={props.mobile}
          initialSlide={currentIndex}
        >
          {renderPosters(state.modal)}
        </ReactIdSwiper>
      </div>
      <div className={cls(classes.tab)}>{renderTabs(state.modal)}</div>
      {!state.modal[currentIndex].video && (
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
      )}
    </div>
  );
};

Tabs.displayName = "Tabs";
Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
export default Tabs;
