import { useMobxStores } from "@/store";

import FastbackStore from "@store/FastbackStore";

import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { A11y, Keyboard, Thumbs } from "swiper";
import styles from "./SwipersDesktop.module.scss";
import { observer } from "mobx-react-lite";
import { ArrowButton, CTAButton, ResponsiveLazyImage } from "@/components";
import scssStyles from "@/utils/scssStyles";
import consumerType from "@/data/dataConsumerType";
//import { AnimatePresence, motion } from "framer-motion";
import DataLayer from "@/utils/DataLayer";
import getClientXFromDifferentEvents from "@/utils/getClientXFromDifferentEvents";
import { HighlightSlide } from "@/models";
//import { dataMenuLabel } from "@/data/menu";
import { LogoConsumerType } from "@/components/SvgComponents";

SwiperCore.use([A11y, Keyboard, Thumbs]);

interface SlideProps {
  slide: HighlightSlide;
}

const Slide: FC<SlideProps> = observer(({ slide }) => {
  return (
    <div className={styles.slideContainer}>
      <div className={styles.slideDetails}>
        <div className={styles.wrapLogo}>
          <div className={styles.detailsWrap}></div>
          <h1>{slide.titleElement ?? slide.title}</h1>
          {slide.descriptionDesktop}

          {slide.linkBtn ? (
            <CTAButton
              className={styles.descripitionButton}
              text={`${slide.labelBtn}`}
              title={`${slide.titleBtn}`}
              href={`${slide.linkBtn}`}
              width="70%"
              target={"_blank"}
              handleClick={() => {
                DataLayer.clickEvent({
                  element: "compre-a-sua",
                  elementCategory: "cta",
                  pageSection: "conteudo",
                  pageSubsection: "venda-direta",
                });
              }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.wrapImgCunsumer}>
        <ResponsiveLazyImage
          alt={slide.alt}
          title={slide.title}
          src={slide.image.fullPath}
          src2={slide.image.fullPath2x}
          src3={slide.image.fullPath3x}
          containerClassName={styles.slideImageContainer}
          className={styles.slideImage}
        />
      </div>
      <div className={styles.testeLogo}>
        <LogoConsumerType title={"teste"} color="currentColor" />
      </div>
    </div>
  );
});

const SwipersDesktop: FC<{ setReference: () => void }> = observer(
  ({ setReference }) => {
    const store: FastbackStore = useMobxStores();
    const [, rerender] = useState(false);
    const [touchLocation, setTouchLocation] =
      useState<PointerEvent["clientX"]>();
    const nextSlide = !store.newProductsSwiperController
      ? undefined
      : consumerType[store.newProductsSwiperController.activeIndex + 1];

    const findIndex = () => {
      return !store.newProductsSwiperController
        ? 0
        : store.newProductsSwiperController.activeIndex;
    };

    return (
      <>
        <div className={styles.container}>
          <Swiper
            keyboard
            onSwiper={(e) => store.setNewProductsSwiperController(e)}
            controller={
              store.newProductsSwiperController
                ? { control: store.newProductsSwiperController }
                : undefined
            }
            spaceBetween={100}
            className={styles.swiperSlide}
            observer
            observeParents
            parallax
            onSlideChange={() => {
              setReference();
              rerender((r) => !r);
            }}
            onTouchStart={(_, event) => {
              const clientX = getClientXFromDifferentEvents(event);
              setTouchLocation(clientX);
            }}
            onTouchEnd={(_, event) => {
              const clientX = getClientXFromDifferentEvents(event);
              if (
                clientX > (touchLocation ?? 0) + 30 ||
                clientX < (touchLocation ?? 0) - 30
              ) {
                DataLayer.swipeEvent({
                  element:
                    (touchLocation ?? 0) > clientX ? "proximo" : "anterior",
                  elementCategory: "imagem",
                  pageSection: "conteudo",
                  pageSubsection: "venda-direta",
                });
              }
            }}
          >
            {consumerType.map((slide) => (
              <SwiperSlide
                className={styles.testeBotton}
                key={`slide-swiper-2-consumerType-${slide.id}`}
              >
                <Slide slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.controls}>
            {store.pageX >= 1200 && (
              <div className={styles.bullets}>
                {consumerType.map((c, index) => {
                  return (
                    <button
                      key={`bullet-swiper-consumerType-${c.id}`}
                      title={c.title}
                      className={scssStyles([
                        styles.bullet,
                        store.newProductsSwiperController?.activeIndex === index
                          ? styles.active
                          : "",
                      ])}
                      onClick={() => {
                        DataLayer.clickEvent({
                          element: `item-${index + 1}`,
                          elementCategory: "icone",
                          pageSection: "conteudo",
                          pageSubsection: "venda-direta",
                        });
                        store.newProductsSwiperController?.slideTo(index);
                      }}
                    >
                      <span />
                    </button>
                  );
                })}
              </div>
            )}
            <div className={styles.arrows}>
              <ArrowButton
                previous
                large
                title={`Anterior: ${
                  consumerType[
                    findIndex() <= 0 ? consumerType.length - 1 : findIndex() - 1
                  ]?.title ?? ""
                }
                `}
                disabled={findIndex() === 0}
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: "anterior",
                    elementCategory: "icone",
                    pageSection: "conteudo",
                    pageSubsection: "venda-direta",
                  });
                  store.newProductsSwiperController?.slidePrev();
                }}
              />
              <ArrowButton
                large
                title={`Próximo: ${
                  consumerType[
                    findIndex() >= consumerType.length - 1 ? 0 : findIndex() + 1
                  ]?.title ?? ""
                }`}
                disabled={
                  (store.newProductsSwiperController?.activeIndex ?? 0) >=
                  consumerType.length - 1
                }
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: "proximo",
                    elementCategory: "icone",
                    pageSection: "conteudo",
                    pageSubsection: "venda-direta",
                  });
                  store.newProductsSwiperController?.slideNext();
                }}
              />
              {/* {!!nextSlide?.title && (
                <div className={styles.nextTab}>
                  <strong>Próximo</strong>
                  <p>{nextSlide?.title}</p>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default SwipersDesktop;
