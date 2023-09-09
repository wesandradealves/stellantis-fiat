import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Swiper, { Navigation, Pagination, History, Keyboard } from "swiper";
import { useInView } from "react-intersection-observer";

import { SwiperButton, ThumbVersion, DetailVersion } from "../../components";

import { dataLayer } from "../../libs/gtm";
import { replaceUrl, getPath, getQueryParams } from "../../utils";
import { versionData } from "../../api";
import { VersionItemProps } from "../../interfaces";

import styles from "./styles.module.scss";

const Versions: React.FC = () => {
  const router = useRouter();
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  const [data, setData] = useState<VersionItemProps[]>(versionData);
  const [swiper, setSwiper] = useState<Swiper>();
  const [swiperThumb, setSwiperThumb] = useState<Swiper>();
  const [pathVersion, setPathVersion] = useState("cronos-10");
  const [queryParams, setQueryParams] = useState<string>(getQueryParams());
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    if (inView) {
      replaceUrl(String(entry?.target.getAttribute("data-history")), queryParams, router);
    }
  }, [inView]);

  useEffect(() => {
    const elSwiper = new Swiper(".swiper-version", {
      modules: [Navigation, Pagination, History, Keyboard],
      navigation: {
        nextEl: ".swiper-button-next-version",
        prevEl: ".swiper-button-prev-version",
      },
      history: {
        key: "versao",
        replaceState: true,
        root: "/",
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      grabCursor: true,
      on: {
        slideChangeTransitionEnd: (e) => {
          document
            .getElementById("wrapperVersion")
            ?.setAttribute("data-history", location.pathname);
          setPathVersion(location.pathname);
          setPosition(e.activeIndex);
        },
      },
    });
    setSwiper(elSwiper);
  }, []);

  useEffect(() => {
    swiper?.slideTo(position);
    swiperThumb?.slideTo(position);
  }, [position]);

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      event: "interaction",
      brand: "fiat",
      segment: "landing-page",
      product: "cronos",
      path: getPath(router),
      elementCategory: "icone",
      interactionType: "clique",
      pageSection: "conteudo",
      pageSubsection: "versoes",
      selectedValue: null,
      ...args,
    });
  };

  return (
    <>
      <div id="versao" className="root">
        <div
          className={styles.container}
          id="wrapperVersion"
          ref={ref}
          data-history={`versao/cronos-10`}
        >
          <h2 className={styles.title}>VEJA TODAS AS VERSÕES DO FIAT CRONOS</h2>
          <div className="swiper swiper-version">
            <div className="swiper-wrapper">
              {data &&
                data.map((item: VersionItemProps, key: any) => (
                  <div
                    className="swiper-slide"
                    data-history={item.slug}
                    key={`version-thumb-${item.slug}-${key}`}
                  >
                    <DetailVersion
                      data={item}
                      handleDataLayer={handleDataLayer}
                      idx={key}
                    />
                  </div>
                ))}
            </div>

            <div className={`wrapper-general ${styles.contentSwiperButton}`}>
              <SwiperButton
                isPrev
                className={`${styles.swiperButton} swiper-button-prev-version`}
                onClick={() => {
                  handleDataLayer({ element: "anterior" });
                }}
              />
              <SwiperButton
                isNext
                className={`${styles.swiperButton} swiper-button-next-version`}
                onClick={() => {
                  handleDataLayer({ element: "proximo" });
                }}
              />
            </div>

            <ThumbListVersions 
              data={data} 
              position={position} 
              setPosition={setPosition}
              setSwiperThumb={setSwiperThumb} 
              pathVersion={pathVersion}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Versions;

export const ThumbListVersions = (props: { data: any; position: number; setPosition: any; setSwiperThumb: any; pathVersion: any;} ) => {
  const { data, position, setPosition, setSwiperThumb, pathVersion } = props;
  const router = useRouter();

  const handleOnSetSwiper = (position: number, slug: string) => {
    dataLayer({
      event: "interaction",
      brand: "fiat",
      segment: "landing-page",
      product: "cronos",
      path: getPath(router),
      elementCategory: "card",
      interactionType: "clique",
      pageSection: "conteudo",
      pageSubsection: "versoes",
      selectedValue: null,
      element: slug,
    });
    setPosition(position);
  };

  useEffect(() => {
    const elSwiperThumb = new Swiper(".swiper-thumbs", {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: ".swiper-list-button-next-version",
        prevEl: ".swiper-list-button-prev-version",
      },
      spaceBetween: 0,
      initialSlide: position,
      slidesPerView: 1.5,
      centeredSlides: true,
      breakpoints: {
        1024: {
          slidesPerView: 4.3,
          noSwiping: true,
          centeredSlides: false
        },
        800: {
          slidesPerView: 4,
        },
        770: {
          slidesPerView: 1.9,
        }
      },
      on: {
        slideChange: (e) => {
          setPosition(e.activeIndex);
        }
      },
    });
    setSwiperThumb(elSwiperThumb);
  }, []);

  return (
    <div className={styles.list}>
      <div className={`${styles.swiperFix} swiper swiper-thumbs`}>
        <div className="swiper-wrapper">
          {data &&
            data.map((item: VersionItemProps, key: number) => (
              <div className="swiper-slide" key={`thumb-list-version-${item.title}-${key}`}>
              <ThumbVersion
                name={`${item.label}`}
                image={item.thumb}
                active={!!pathVersion?.includes(item.slug)}
                onClick={async () => handleOnSetSwiper(key, item.slug)}
              />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
};
