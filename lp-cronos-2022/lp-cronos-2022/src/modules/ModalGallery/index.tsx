import { useEffect, useState } from "react";
import Swiper, { Navigation, Pagination, History, Keyboard } from "swiper";
import Image from "next/image";
import { useRouter } from "next/router";
import { SwiperButton } from "../../components";
import { getQueryParams, replaceUrl, getPath } from "../../utils";
import { dataLayer } from "../../libs/gtm";
import { modalGalleryProps, itemGalleryProps } from "../../interfaces";
import icoCloseYellow from "../../assets/ico-close-red.svg";
import styles from "./styles.module.scss";

const ModalGallery = ({
  data,
  position,
  setShowModalGallery,
  // gallerySwiper,
  setBulletActive,
}: modalGalleryProps) => {
  const [swiper, setSwiper] = useState<Swiper>();
  const [queryParams, setQueryParams] = useState<string>(getQueryParams());

  const router = useRouter();

  const handleCloseModal = () => {
    handleDataLayer({
      element: "fechar",
    });
    document.body.style.overflow = "auto";
    setShowModalGallery(false);
    swiper?.update();
  };

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "fiat",
      segment: "landing-page",
      product: "cronos",
      elementCategory: "icone",
      interactionType: "clique",
      pageSection: "conteudo",
      pageSubsection: "modal-galeria",
      selectedValue: null,
      ...args,
    });
  };

  useEffect(() => {
    const elSwiper = new Swiper(".swiper-modal-gallery", {
      modules: [Navigation, Pagination, History, Keyboard],
      navigation: {
        nextEl: ".swiper-button-next-modal-gallery",
        prevEl: ".swiper-button-prev-modal-gallery",
      },
      history: {
        key: "galeria",
        replaceState: true,
        root: "/",
      },
      preloadImages: true,
      lazy: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      grabCursor: true,
      on: {
        slideChangeTransitionEnd: (e) => {
          replaceUrl(String(location.pathname), queryParams, router);
          // gallerySwiper?.slideTo(e.activeIndex);
          setBulletActive(e.activeIndex);
        },
        slideNextTransitionEnd: () => {
          handleDataLayer({
            element: "proximo",
          });
        },
        slidePrevTransitionEnd: () => {
          handleDataLayer({
            element: "anterior",
          });
        },
      },
    });
    setSwiper(elSwiper);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    });

    return () => {
      document.removeEventListener("keydown", handleCloseModal);
    };
  }, []);

  useEffect(() => {
    swiper?.update();
    swiper?.slideTo(position);
  }, [swiper]);

  return (
    <div className={styles.modal}>
      <ButtonClose onClick={handleCloseModal} />
      <div className={`${styles.wrapperGallery}`}>
        <div className="swiper swiper-modal-gallery">
          <div className="swiper-wrapper">
            {data &&
              data.map((item: itemGalleryProps, key: any) => (
                <div
                  className="swiper-slide"
                  data-history={item.slug}
                  key={`version-thumb-${key}`}
                >
                  <div className={styles.full}>
                    <img src={item.full} alt="" />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <SwiperButton isPrev className="swiper-button-prev-modal-gallery" />
        <SwiperButton isNext className="swiper-button-next-modal-gallery" />
      </div>
    </div>
  );
};

export default ModalGallery;

interface ButtonCloseProps {
  onClick: () => void;
}

const ButtonClose = ({ onClick }: ButtonCloseProps) => {
  return (
    <button className={styles.close} onClick={onClick}>
      <Image src={icoCloseYellow} alt="fechar" layout="fill" />
    </button>
  );
};
