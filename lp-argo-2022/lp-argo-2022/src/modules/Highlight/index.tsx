import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Swiper, {
  Navigation,
  Keyboard,
  Autoplay,
  Pagination,
  Lazy
} from "swiper";
import { useInView } from "react-intersection-observer";
import {
  SwiperButton,
  HighlightItem,
  ThumbHighlight,
  Image
} from "../../components";
import { dataLayer } from "../../libs/gtm";
import {
  replaceUrl,
  getPath,
  slugify,
  getQueryParams,
  handleChangeSection
} from "../../utils";
import { HighlightProps, HighlightItemProps } from "../../interfaces";
import { highlightData } from "../../api";
import logoArgo from "../../assets/logo.png";
import icoScroll from "../../assets/ico-scroll.svg";
import icoHighlightNextWhite from "../../assets/ico-highlight-next-white.svg";
import styles from "./styles.module.scss";

const Highlight = ({ toggleSidebar, setToggleSidebar }: HighlightProps) => {
  const [data, setData] = useState<HighlightItemProps[]>(highlightData);
  const [swiper, setSwiper] = useState<Swiper>();
  const [pathVersion, setPathVersion] = useState("argo-10");
  const [position, setPosition] = useState(0);
  const [queryParams, setQueryParams] = useState<string>(getQueryParams());

  const router = useRouter();
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    const elSwiper = new Swiper(".swiper-highlight", {
      autoHeight: false,
      modules: [Navigation, Keyboard, Autoplay, Pagination, Lazy],
      navigation: {
        nextEl: ".swiper-button-next-highlight",
        prevEl: ".swiper-button-prev-highlight",
      },
      pagination: {
        el: ".swiper-pagination-highlight",
        clickable: true,
        renderBullet: function (index, className) {
          return `<div class="${className}"><span>${index + 1}</div>`;
        },
      },
      speed: 500,
      preloadImages: true,
      lazy: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      autoplay: {
        delay: 15000,
        disableOnInteraction: false,
      },
      grabCursor: true,
      breakpoints: {
        770: {
          autoplay: false,
        },
      },
      on: {
        slideChangeTransitionEnd: (e) => {
          setPosition(e.realIndex);
        },
      },
    });
    setSwiper(elSwiper);
  }, []);

  useEffect(() => {
    if (inView) {
      replaceUrl("", queryParams, router);
    }
  }, [inView]);

  const handleOnSetSwiper = (position: number, title: string) => {
    handleDataLayer({
      element: slugify(title),
      elementCategory: "card",
    });
    swiper?.slideTo(position);
    swiper?.updateProgress();
  };

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "fiat",
      segment: "landing-page",
      product: "argo",
      elementCategory: "stories",
      interactionType: "clique",
      pageSection: "conteudo",
      pageSubsection: "novo-fiat-argo",
      selectedValue: null,
      ...args,
    });
  };

  return (
    <div id="destaques">
      <div className={styles.container}>
        <header className={styles.header}>
          <button
            className={`${styles.menu} ${toggleSidebar && styles.menuOpen}`}
            onClick={() => setToggleSidebar(!toggleSidebar)}
          ></button>
          <div className={styles.logo}>
            <div className="desktop">
              {/* <Image src={logoFiat.src} alt="Fiat" /> */}
            </div>
            <div className={`mobile ${styles.mobile}`}>
              <Image src={logoArgo.src} alt="Fiat Argo" />
            </div>
          </div>
          <div className={styles.fake}>&nbsp;</div>
        </header>
        <div ref={ref} id="wrapperHighlight">
          <div className="swiper swiper-highlight">
            <div className="swiper-wrapper">
              {data &&
                data.map((item: HighlightItemProps, key: number) => (
                  <div
                    className={`swiper-slide ${styles.swiperSlide}`}
                    data-history={item.slug}
                    key={`highlight-${key}`}
                  >
                    <HighlightItem data={item} />
                  </div>
                ))}
            </div>

            <div
              className={`wrapper-general position-absolute zIndex10 ${styles.content}`}
            >
              <SwiperButton
                isPrev
                className={`${styles.swiperButton} ${styles.swiperButtonPrev} swiper-button-prev-highlight`}
                onClick={() => {
                  handleDataLayer({
                    element: "anterior",
                  });
                }}
              />
              <SwiperButton
                isNext
                className={`${styles.swiperButton} ${styles.swiperButtonNext} swiper-button-next-highlight`}
                onClick={() => {
                  handleDataLayer({
                    element: "proximo",
                  });
                }}
              />
            </div>

            <div className="mobile">
              <div className={`${styles.timerMobile}`}>
                {data &&
                  data.map((item: HighlightItemProps, key: number) => (
                    <div
                      className={key === position ? styles.active : ""}
                      onClick={async () => {
                        handleOnSetSwiper(key, item.tag);
                      }}
                      key={`pagination-highlight-${key}`}
                    >
                      <span>&nbps;</span>
                    </div>
                  ))}
              </div>

              {data && data[position + 1] && (
                <div
                  onClick={async () => {
                    handleOnSetSwiper(position + 1, data[position + 1].tag);
                  }}
                  className={`${styles.nextStorie} mobile`}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data[position + 1].label,
                    }}
                  />
                  <div className={styles.icon}>
                    <Image src={icoHighlightNextWhite.src} alt="Próximo" />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className={`wrapper-general position-absolute zIndex10 paddingLeft ${styles.contentListThumb}`}
          >
            {data && (
              <div className={styles.listThumb}>
                {data.map((item: HighlightItemProps, key: number) => (
                  <ThumbHighlight
                    data={item}
                    onClick={async () => {
                      handleOnSetSwiper(key, item.tag);
                    }}
                    active={!!pathVersion?.includes(item.slug)}
                    key={`thumb-highlight-${key}`}
                  />
                ))}
              </div>
            )}
            <div
              className={`${styles.btnScroll} ${
                position === 0 ? styles.textBlue : ""
              }`}
              onClick={() => handleChangeSection("compre")}
            >
              <p>Scroll para saber mais</p>
              <div className={styles.ico}>
                <Image src={icoScroll.src} alt="Scroll para saber mais" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
