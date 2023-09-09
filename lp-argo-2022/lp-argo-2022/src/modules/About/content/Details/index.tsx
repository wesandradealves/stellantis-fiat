import { useEffect, useState } from "react";
import Swiper, { Navigation, Pagination, History } from "swiper";
import { useRouter } from "next/router";
import { SwiperButton, Button, Image } from "../../../../components";
import { replaceUrl, getQueryParams } from "../../../../utils";
import styles from "./styles.module.scss";

const Details = ({ data }: any) => {
  const [swiper, setSwiper] = useState<Swiper>();
  const [itemActive, setItemActive] = useState<number>(0);
  const [queryParams, setQueryParams] = useState<string>(getQueryParams());

  const router = useRouter();

  useEffect(() => {
    const elSwiper = new Swiper(`.swiper-about-${data.title}`, {
      modules: [Navigation, Pagination, History],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      history: {
        replaceState: true,
        root: "/",
      },
      on: {
        slideChangeTransitionEnd: (e) => {
          setItemActive(e.activeIndex);
          let item = data.items[e.activeIndex];
          replaceUrl(
            String(`${item.categorySlug}/${item.slug}`),
            queryParams,
            router
          );
          document
            .getElementById("wrapperAbout")
            ?.setAttribute(
              "data-history",
              String(`${item.categorySlug}/${item.slug}`)
            );
        },
      },
    });
    setSwiper(elSwiper);
  }, []);

  const handleOnSetSwiper = (position: number) => {
    swiper?.slideTo(position);
  };

  return (
    <div className={styles.container}>
      <div className={`swiper swiper-about-${data.title}`}>
        <div className="swiper-wrapper">
          {data.items.map((item: any, key: number) => (
            <div
              className="swiper-slide"
              data-history={item.slug}
              key={`carousel-item-${key}`}
            >
              <div className={styles.image}>
                <Image src={item.image} alt={item.title} />
              </div>
              <div className={styles.content}>
                <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p>{item.description}</p>
              </div>
              <div className={styles.wrapperButton}>
                {item.link && <Button to={item.link}>{item.labelLink}</Button>}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.swiperWrapperNavigation}>
          <SwiperButton isPrev className={styles.swiperButton} />
          <div className={`${styles.swiperPagination}`}>
            {data.items.map((item: any, key: number) => (
              <div
                onClick={() => handleOnSetSwiper(key)}
                className={`${styles.swiperPaginationBullet} ${
                  itemActive === key && styles.active
                }`}
                key={`swiper-pagination-bullet-${key}`}
              >
                &nbsp;
              </div>
            ))}
          </div>
          <SwiperButton isNext className={styles.swiperButton} />
        </div>
      </div>
    </div>
  );
};

export default Details;
