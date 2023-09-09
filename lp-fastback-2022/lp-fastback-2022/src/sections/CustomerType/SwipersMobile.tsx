import { useMobxStores } from "@/store";
import FastbackStore from "@store/FastbackStore";
import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { A11y, Keyboard, Thumbs } from "swiper";
import styles from "./SwipersMobile.module.scss";
import { observer } from "mobx-react-lite";
import { ArrowButton, ResponsiveLazyImage, CTAButton } from "@/components";
import scssStyles from "@/utils/scssStyles";
import consumerType from "@/data/dataConsumerType";
import DataLayer from "@/utils/DataLayer";
import getRangeOfEntries from "@/utils/getRangeOfEntries";
import getClientXFromDifferentEvents from "@/utils/getClientXFromDifferentEvents";
import { HighlightSlide } from "@/models";
import { LogoConsumerType } from "@/components/SvgComponents";

SwiperCore.use([A11y, Keyboard, Thumbs]);

interface SlideProps {
  slide: HighlightSlide;
}

const Slide: FC<SlideProps> = observer(({ slide }) => {
  return (
    <div className={styles.slideContainer}>
      <div>
        <h2 className={styles.versionTitle}>
          <div className={styles.wrapLogo}>
            <div className={styles.detailsWrap}></div>
            <h1> {slide.titleElement ?? slide.title} </h1>
            {slide.descriptionMobile}
          </div>
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
        </h2>
      </div>
      <div className={styles.slideDetails}>
        <ResponsiveLazyImage
          alt={slide.alt}
          title={slide.title}
          src={slide.image.fullPath}
          src2={slide.image.fullPath2x}
          src3={slide.image.fullPath3x}
          //aspectRatio={MOBILE_ASPECT_RATIO}
          width="100%"
          height="auto"
          containerClassName={styles.slideImage}
        />
        <div className={styles.testeLogo}>
          <LogoConsumerType title={"teste"} color="currentColor" />
        </div>
      </div>
    </div>
  );
});

const SwipersMobile: FC<{ setReference: () => void }> = observer(
  ({ setReference }) => {
    const store: FastbackStore = useMobxStores();
    const [, rerender] = useState(false);
    const [touchLocation, setTouchLocation] =
      useState<PointerEvent["clientX"]>();
    const bulletProps = getRangeOfEntries(
      store.newProductsMobileSwiperController?.activeIndex ?? 0,
      consumerType
    );
    const findIndex = () => {
      return !store.newProductsMobileSwiperController
        ? 0
        : store.newProductsMobileSwiperController.activeIndex;
    };
    return (
      <>
        <div className={styles.container}>
          <Swiper
            onSwiper={(e) => store.setNewProductsMobileSwiperController(e)}
            controller={
              store.newProductsMobileSwiperController
                ? {
                    control: store.newProductsMobileSwiperController,
                  }
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
              <SwiperSlide key={`slide-swiper-2-mobile-${slide.id}`}>
                <Slide slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.controls}>
            {/* <div className={styles.bullets}>
              {!!bulletProps.before &&
                Array.from(Array(bulletProps.before).keys()).map((_, i) => (
                  <div
                    key={`smaller-bullet-swipersmobile-mobile-before-${i}`}
                    className={scssStyles([
                      "bullet",
                      i == 0 ? "smallerBullet" : "mediumBullet",
                    ])}
                  >
                    <span />
                  </div>
                ))}
              {consumerType.map((c, index) => {
                if (bulletProps.range.indexOf(index) === -1) return null;
                return (
                  <button
                    key={`bullet-mobile-connect-me-${c.id}`}
                    title={c.title}
                    className={scssStyles([
                      styles.bullet,
                      store.newProductsMobileSwiperController?.activeIndex ===
                      index
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
                      store.newProductsMobileSwiperController?.slideTo(index);
                    }}
                  >
                    <span />
                  </button>
                );
              })}
              {!!bulletProps.after &&
                Array.from(Array(bulletProps.after).keys()).map((_, i) => (
                  <div
                    key={`smaller-bullet-swipersmobile-connect-me-after-${i}`}
                    className={i == 0 ? "smallerBullet" : "mediumBullet"}
                  />
                ))}
            </div> */}
            <div className={styles.arrows}>
              <ArrowButton
                previous
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
                  store.newProductsMobileSwiperController?.slidePrev();
                }}
              />
              <ArrowButton
                disabled={
                  (store.newProductsMobileSwiperController?.activeIndex ?? 0) >=
                  consumerType.length - 1
                }
                title={`Próximo: ${
                  consumerType[
                    findIndex() >= consumerType.length - 1 ? 0 : findIndex() + 1
                  ]?.title ?? ""
                }`}
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: "proximo",
                    elementCategory: "icone",
                    pageSection: "conteudo",
                    pageSubsection: "venda-direta",
                  });
                  store.newProductsMobileSwiperController?.slideNext();
                }}
              />
            </div>
          </div>
          <div className={styles.controlsBullets}>
            <div className={styles.bullets}>
              {!!bulletProps.before &&
                Array.from(Array(bulletProps.before).keys()).map((_, i) => (
                  <div
                    key={`smaller-bullet-swipersmobile-mobile-before-${i}`}
                    className={scssStyles([
                      "bullet",
                      i == 0 ? "smallerBullet" : "mediumBullet",
                    ])}
                  >
                    <span />
                  </div>
                ))}
              {consumerType.map((c, index) => {
                if (bulletProps.range.indexOf(index) === -1) return null;
                return (
                  <button
                    key={`bullet-mobile-connect-me-${c.id}`}
                    title={c.title}
                    className={scssStyles([
                      styles.bullet,
                      store.newProductsMobileSwiperController?.activeIndex ===
                      index
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
                      store.newProductsMobileSwiperController?.slideTo(index);
                    }}
                  >
                    <span />
                  </button>
                );
              })}
              {!!bulletProps.after &&
                Array.from(Array(bulletProps.after).keys()).map((_, i) => (
                  <div
                    key={`smaller-bullet-swipersmobile-connect-me-after-${i}`}
                    className={i == 0 ? "smallerBullet" : "mediumBullet"}
                  />
                ))}
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default SwipersMobile;
