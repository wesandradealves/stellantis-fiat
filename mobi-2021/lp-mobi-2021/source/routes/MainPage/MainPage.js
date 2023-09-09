import React, { useRef, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import cls from "classnames";
import PropTypes from "prop-types";
import { useGlobal } from "reactn";
import { TweenLite } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ModalLink as Link } from "react-router-modal-gallery";
import { DataLayer } from "@dcode/react/components/DataLayer";
import { Argomento } from "~/components/Argomento";
import { Background } from "~/components/Background";
import configData from "~/configurations/data";
import { ArgomentosMobile, ArgomentosDesktop } from "./Argomentos";
import IconArrow from "./IconArrow";
import css from "./MainPage.scss";

// do not remove this line
ScrollToPlugin;

export const classes = {
  root: css.mainPage,
  background: css.mainPageBackground,
  content: css.mainPageContent,
  header: css.mainPageHeader,
  headerTitle: css.mainPageHeaderTitle,
  headerTitleLogo: css.mainPageHeaderTitleLogo,
  headerSubtitle: css.mainPageHeaderSubtitle,
  headerText: css.mainPageHeaderText,
  mediumTitle: css.mainPageMediumTitle,
  heavyTitle: css.mainPageHeavyTitle,
  gallery: css.mainPageGallery,
  galleryGrid: css.mainPageGalleryGrid,
  galleryList: css.mainPageGalleryList,
  mobileList: css.mainPageMobileList,
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
  isTL: css.isTL,
  isBL: css.isBL,
  isTR: css.isTR,
  isBR: css.isBR,
  pinkFooter: css.mainPagePinkFooter,
};

export const propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  data: PropTypes.object,
};

export const defaultProps = {
  className: "",
  classes,
  data: configData.main,
};

export const parseText = (value) => {
  if (Array.isArray(value)) return value[0];
  return value;
};

export function MainPage({
  className,
  classes,
  location,
  mobile,
  data: info,
  staticContext,
  ...props
}) {
  const $el = useRef();
  const swiperThumbsRef = useRef();
  const [cluster] = useGlobal("cluster");
  const [data, setData] = useState({});
  const [firstArg, setFirstArg] = useState(undefined);
  const [thumbList, setThumbList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [thumbsPerPage, setThumbsPerPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numPage, setNumPage] = useState(0);

  const setThumbsPage = (index, speed) => {
    if (swiperThumbsRef.current && swiperThumbsRef.current.swiper) {
      swiperThumbsRef.current.swiper.slideTo(
        (index - 1) * swiperThumbsRef.params.slidesPerGroup,
        speed
      );
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

  const scrollToNextFolding = async () => {
    const { default: $ } = await import("jquery");
    const $folding = $("#todas-versoes");
    if ($folding) {
      const scrollCount = $folding.offset().top + (props.mobile ? 0 : 0);
      $("html, body").animate({ scrollTop: scrollCount }, 2000);
    }
  };

  const renderScrollBottomTip = () => {
    return (
      <DataLayer onEvent={"MainPage_ClicouConheca"} args={[]}>
        <div className="scrollTip" onClick={() => scrollToNextFolding()}>
          <i className="fa fa-angle-down" />
        </div>
      </DataLayer>
    );
  };

  useEffect(() => {
    const dataByClusterOrder = info.orderByClusterOrder(
      cluster.argomentos.order
    );
    setData(dataByClusterOrder);
    setFirstArg(dataByClusterOrder[0]);
    setThumbList(dataByClusterOrder.slice(0, dataByClusterOrder.length));
  }, [location, cluster.slug]);

  useEffect(() => {
    const thumbsPerPageCache = mobile ? 1 : 4;
    setThumbsPerPage(thumbsPerPageCache);
    setNumPage(Math.ceil(thumbList.length / thumbsPerPageCache));
  }, [mobile, thumbList]);

  const onThumbsSlideChange = () => {
    if (swiperThumbsRef.current && swiperThumbsRef.current.swiper) {
      setCurrentIndex(swiperThumbsRef.current.swiper.realIndex);
    }
  };

  const onThumbsResize = () => {
    if (swiperThumbsRef.current && swiperThumbsRef.current.swiper) {
      swiperThumbsRef.current.swiper.update();
    }
  };

  useEffect(() => {
    setThumbsPage(props.page, 0);
    if (swiperThumbsRef.current && swiperThumbsRef.current.swiper) {
      swiperThumbsRef.current.swiper.on("slideChange", onThumbsSlideChange);
      swiperThumbsRef.current.swiper.on("resize", onThumbsResize);
    }
    return () => {
      if (swiperThumbsRef.current && swiperThumbsRef.current.swiper) {
        swiperThumbsRef.current.swiper.off("slideChange", onThumbsSlideChange);
        swiperThumbsRef.current.swiper.off("resize", onThumbsResize);
      }
    };
  }, [swiperThumbsRef]);

  const renderThumb = (item, index) => {
    const align = [classes.isTL, classes.isBL, classes.isTR, classes.isBR];
    return (
      <div key={index} className={cls(classes.galleryItem)}>
        <div className={cls(classes.galleryItemWrapper)}>
          <DataLayer
            onEvent={
              item.path === "/tudo-dominado"
                ? "MainPage_ClicouAssistaAoMobiTrekking"
                : "MainPage_ClicouThumbnail"
            }
            args={[item.title]}
          >
            <Link
              className={cls(classes.galleryLink)}
              to={{
                pathname: item.path,
                state: { argumento: item },
              }}
            >
              <Argomento
                className={cls(
                  classes.galleryThumb,
                  { [classes.pinkFooter]: item.modal[0].video },
                  align[index % 4]
                )}
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
            <DataLayer onEvent={"MainPage_ClicouAnterior"} args={[currentPage]}>
              <button
                className={cls(classes.galleryControlPrev, {
                  [css.isDisable]: currentPage === 1,
                })}
                onClick={onClickPrev}
              >
                <IconArrow className={cls(classes.galleryControlPrevIcon)} />
              </button>
            </DataLayer>
            <DataLayer onEvent={"MainPage_ClicouProximo"} args={[currentPage]}>
              <button
                className={cls(classes.galleryControlNext, {
                  [css.isDisable]: currentPage === numPage,
                })}
                onClick={onClickNext}
              >
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
        <DataLayer onEvent={"MainPage_ClicouThumbnail"} args={[item.title]}>
          <Link
            className={cls(classes.galleryLink)}
            to={{
              pathname: item.path,
              state: { argumento: item },
            }}
          >
            <Argomento
              className={cls(classes.galleryPosterCard)}
              mini={false}
              num={/\#index/.test(item.id) ? 0 : item.id}
              title={parseText(item.title)}
              sources={item.picture.sources}
            />
          </Link>
        </DataLayer>
      </div>
    );
  };

  return (
    <section
      ref={$el}
      id={"mobi"}
      data-ui-anchor={"mobi"}
      className={cls(classes.root, className)}
    >
      {/* Background ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      {<Background className={cls(classes.background)} mobile={mobile} />}

      <div className={cls(classes.content)}>
        {/* Header ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <header className={cls(classes.header)}>
          <img {...props} alt="mainpage" src="/assets/trekking.svg" />

          <div className={cls(classes.headerText)}>
            <span className={cls(classes.mediumTitle)}>CHEGOU O</span>
            <br />
            <span className={cls(classes.heavyTitle)}>FIAT MOBI TREKKING</span>
            <br />
            <span className={cls(classes.mediumTitle)}>TÁ TUDO DOMINADO</span>
          </div>
        </header>

        {/* Gallery ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div className={cls(classes.gallery)}>
          <div className={cls(classes.galleryGrid)}>
            {/* {firstArg && renderPoster(firstArg)} */}
            {/* @see https://github.com/kidjp85/react-id-swiper/issues/298 */}
            {mobile ? (
              <ArgomentosMobile
                className={cls(classes.galleryList, {
                  [css.mobileList]: true,
                })}
                page={currentPage}
              >
                {renderThumbs(thumbList)}
              </ArgomentosMobile>
            ) : (
              <ArgomentosDesktop
                className={cls(classes.galleryList)}
                page={currentPage}
              >
                {renderThumbs(thumbList)}
              </ArgomentosDesktop>
            )}
          </div>
          {!mobile && data.length > 5 && renderControls()}
        </div>
      </div>
      {renderScrollBottomTip()}
    </section>
  );
}

MainPage.propTypes = propTypes;
MainPage.defaultProps = defaultProps;
export default MainPage;
