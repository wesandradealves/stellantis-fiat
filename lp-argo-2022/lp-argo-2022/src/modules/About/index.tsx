import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Swiper, { Navigation, Pagination, History, Keyboard } from "swiper";
import { useInView } from "react-intersection-observer";
import { SwiperButton, AboutItem, Button, Image } from "../../components";
import { dataLayer } from "../../libs/gtm";
import { replaceUrl, getPath, slugify, getQueryParams } from "../../utils";
import { AboutProps, AboutItemProps, itemMenuProps } from "../../interfaces";
import { aboutData, menuData } from "../../api";
import icoArrowPinkBottom from "../../assets/ico-arrow-bottom-pink.svg";
import icoArrowBottom from "../../assets/ico-arrow-bottom.svg";
import styles from "./styles.module.scss";
import { Details } from "./content";

const About = ({
  setSwiperAbout,
  accordionAbout,
  setShowModalForm,
  aboutActive,
}: AboutProps) => {
  const [data, setData] = useState<AboutItemProps[]>(aboutData);
  const [dataMenu, setDataMenu] = useState<any>({});
  const [itemActive, setItemActive] = useState<number>(0);
  const [menuActive, setMenuActive] = useState<string>("design");
  const [swiper, setSwiper] = useState<Swiper>();
  const [aboutHistory, setAboutHistory] = useState(aboutActive);
  const [queryParams, setQueryParams] = useState<string>(getQueryParams());
  const [idxAbout, setIdxAbout] = useState<number>(0);

  const router = useRouter();
  const { ref, inView, entry } = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    const idx = aboutData.findIndex(
      (item) =>
        item.categorySlug === aboutActive[0] && item.slug === aboutActive[1]
    );
    if (idx >= 0) swiper?.slideTo(idx);
  }, [aboutActive]);

  useEffect(() => {
    let items = {};
    if (accordionAbout && dataMenu) {
      items = dataMenu[accordionAbout].items;
    }
    handleSetAccordion(accordionAbout, items);
    setMenuActive(accordionAbout);
  }, [accordionAbout]);

  useEffect(() => {
    const elSwiper = new Swiper(".swiper-about", {
      modules: [Navigation, Pagination, History, Keyboard],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // history: {
      //   key: "sobre",
      //   replaceState: true,
      //   root: "/",
      // },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      grabCursor: true,
      on: {
        slideChangeTransitionEnd: (e) => {
          setItemActive(e.activeIndex);
        },
        slideNextTransitionEnd: (e) => {
          setIdxAbout(e.activeIndex);
        },
        slidePrevTransitionEnd: (e) => {
          setIdxAbout(e.activeIndex);
        },
      },
    });
    setSwiper(elSwiper);
    setSwiperAbout(elSwiper);

    const groupMenu = groupDataByCategory(data);
    setDataMenu(groupMenu);
  }, []);

  useEffect(() => {
    const item = data[itemActive];
    if (item) {
      // console.log(item.categorySlug);
      // setMenuActive(item.categorySlug);
      const url = String(`${item.categorySlug}/${item.slug}`);
      document
      .getElementById("wrapperAbout")
      ?.setAttribute("data-history", url);
      if (inView) {
        replaceUrl(url, queryParams, router);
      }
    }
  }, [itemActive]);

  useEffect(() => {
    if (inView) {
      replaceUrl(
        String(entry?.target.getAttribute("data-history")),
        queryParams,
        router
      );
    }
  }, [inView]);

  const handleOnSetSwiper = (position: number) => {
    swiper?.slideTo(position);
  };

  const handleSetAccordion = (accordion: string, item: any) => {
    if (accordion === menuActive) {
      setMenuActive("");
      return;
    }
    if (item.length > 0) {
      setTimeout(() => {
        document
          .getElementById("wrapperAbout")
          ?.setAttribute(
            "data-history",
            String(`${item[0].categorySlug}/${item[0].slug}`)
          );
        replaceUrl(
          String(entry?.target.getAttribute("data-history")),
          queryParams,
          router
        );
        document
          .getElementById(`accordion${accordion}`)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
    setMenuActive(accordion);
  };

  const groupDataByCategory = (data: AboutItemProps[]) => {
    return data.reduce((r: any, a: any) => {
      r[a.categorySlug] = r[a.categorySlug] || {};
      r[a.categorySlug]["title"] = a.category;
      r[a.categorySlug]["items"] = r[a.categorySlug]["items"] || [];
      r[a.categorySlug]["items"].push(a);
      return r;
    }, Object.create(null));
  };

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "fiat",
      segment: "landing-page",
      product: "argo",
      elementCategory: "botao",
      interactionType: "clique",
      pageSection: "conteudo",
      pageSubsection: "tudo-sobre",
      selectedValue: null,
      element: "compre-o-seu",
      ...args,
    });
  };

  return (
    <div id="sobre" className="root">
      <div
        ref={ref}
        id="wrapperAbout"
        // data-history={'design/personalidade-argo/'}
        data-history={aboutHistory}
        className={styles.container}
      >
        <div className="desktop desktop-mobile">
          <div className={`${styles.wrapper} wrapper-general`}>
            <h2>
              Tudo do <span data-content="Argo">Argo</span>
              <div className={styles.icoArrow}>
                <Image src={icoArrowBottom.src} alt="" />
              </div>
            </h2>
            
            {/* {console.log('>>', data[itemActive].categorySlug)} */}

            <div className={`${styles.listGroup} wrapper-general padding`}>
              <button
                // className={`${menuActive === "design" && styles.active}`}
                className={`${data[itemActive].categorySlug === "design" && styles.active}`}
                onClick={() => {
                  handleDataLayer({
                    element: slugify("Design"),
                  });
                  handleOnSetSwiper(0);
                }}
              >
                <span>Design</span>
              </button>
              <button
                // className={`${menuActive === "tecnologia" && styles.active}`}
                className={`${data[itemActive].categorySlug === "tecnologia" && styles.active}`}
                onClick={() => {
                  handleDataLayer({
                    element: slugify("Tecnologia"),
                  });
                  handleOnSetSwiper(4);
                }}
              >
                <span>Tecnologia</span>
              </button>
              <button
                // className={`${menuActive === "performance" && styles.active}`}
                className={`${data[itemActive].categorySlug === "performance" && styles.active}`}
                onClick={() => {
                  handleDataLayer({
                    element: slugify("Performance"),
                  });
                  handleOnSetSwiper(7);
                }}
              >
                <span>Performance</span>
              </button>
              <button
                // className={`${menuActive === "seguranca" && styles.active}`}
                className={`${data[itemActive].categorySlug === "seguranca" && styles.active}`}
                onClick={() => {
                  handleDataLayer({
                    element: slugify("Segurança"),
                  });
                  handleOnSetSwiper(10);
                }}
              >
                <span>Segurança</span>
              </button>
              <button
                // className={`${menuActive === "acessorios" && styles.active}`}
                className={`${data[itemActive].categorySlug === "acessorios" && styles.active}`}
                onClick={() => {
                  handleDataLayer({
                    element: slugify("Acessórios"),
                  });
                  handleOnSetSwiper(14);
                }}
              >
                <span>Acessórios</span>
              </button>
              <button
                // className={`${menuActive === "servicos" && styles.active}`}
                className={`${data[itemActive].categorySlug === "servicos" && styles.active}`}
                onClick={() => {
                  handleDataLayer({
                    element: slugify("Serviços"),
                  });
                  handleOnSetSwiper(20);
                }}
              >
                <span>Serviços</span>
              </button>
            </div>

            <div className="swiper swiper-about">
              <div className={`swiper-wrapper ${styles.swiperWrapper}`}>
                {data &&
                  data.map((item: AboutItemProps, key: number) => {
                    return (
                      <div
                        className="swiper-slide"
                        data-history={`${item.categorySlug}-${item.slug}`}
                        key={`about-${item.categorySlug}-${item.slug}-${key}`}
                      >
                        <AboutItem data={item} />
                      </div>
                    );
                  })}
              </div>
              <div className={`${styles.wrapperNavigation} wrapper-general`}>
                {/* <div className={styles.fake}>&nbsp;</div> */}
                <div className={styles.contentNavigation}>
                  <div className={styles.navigation}>
                    {data &&
                      data.map((item: AboutItemProps, key: number) => {
                        if (item.categorySlug === menuActive) {
                          return (
                            <div
                              className={`${styles.bullet} ${
                                itemActive === key && styles.active
                              }`}
                              onClick={() => {
                                handleOnSetSwiper(key);
                                handleDataLayer({
                                  element: `item:${item.idx}`,
                                  elementCategory: "icone",
                                  pageSection: "tudo-sobre",
                                  pageSubsection: menuActive,
                                });
                              }}
                              key={`navigation-about-${key}`}
                            >
                              &nbsp;
                            </div>
                          );
                        }
                      })}
                  </div>
                  <div className={styles.pagination}>
                    <div className={styles.wrapper}>
                      <SwiperButton
                        isPrev
                        onClick={() =>
                          handleDataLayer({
                            element: "anterior",
                            elementCategory: "icone",
                            pageSubsection: data[idxAbout].categorySlug,
                          })
                        }
                      />
                      <SwiperButton
                        isNext
                        onClick={() => {
                          handleDataLayer({
                            element: "proximo",
                            elementCategory: "icone",
                            pageSubsection: data[idxAbout].categorySlug,
                          });
                        }}
                      />
                    </div>
                    {data[itemActive + 1] && (
                      <div className={styles.description}>
                        <h5>Próximo:</h5>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: data[itemActive + 1].title,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile">
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <h2>
                Tudo sobre o Argo
                <div className={styles.icoArrow}>
                  <Image src={icoArrowPinkBottom.src} alt="" />
                </div>
              </h2>
              <div className={styles.wrapperAccordion}>
                {dataMenu &&
                  Object.keys(dataMenu).map((slug: string, key: number) => {
                    return (
                      <div
                        id={`accordion${slug}`}
                        className={styles.itemAccordion}
                        key={`accordion-mobile-${key}`}
                      >
                        <div
                          className={styles.header}
                          onClick={() => {
                            handleDataLayer({
                              element: slugify(slug),
                            });
                            handleSetAccordion(slug, dataMenu[slug].items);
                          }}
                        >
                          <h5>
                            <div
                              className={`${styles.icon} ${
                                menuActive === slug && styles.invert
                              }`}
                            >
                              <Image src={icoArrowPinkBottom.src} alt="" />
                            </div>
                            {dataMenu[slug].title}
                          </h5>
                        </div>
                        {menuActive === slug && (
                          <div className={styles.content}>
                            <Details data={dataMenu[slug]} />
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={styles.listMenu}>
              {menuData &&
                menuData.map((item: itemMenuProps, key: number) => (
                  <div
                    onClick={() => {
                      handleDataLayer({
                        elementCategory: "cta",
                        interactionType: "clique",
                        element: slugify(item.title),
                        pageSection: "footer",
                        pageSubsection: "ctas",
                      });
                      // item.form && setShowModalForm(true);
                    }}
                    key={`sidebar-cta-${key}`}
                  >
                    <Button to={item.link} target="_blank">
                      {item.title}
                    </Button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
