import { useMobxStores } from '@/store';
import StradaStore from '@/store/StradaStore';
import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Keyboard, Thumbs } from 'swiper';
import styles from './SwipersMobile.module.scss';
import { observer } from 'mobx-react-lite';
import { ArrowButton, ResponsiveLazyImage } from '@/components';
import scssStyles from '@/utils/scssStyles';
import DataLayer from '@/utils/DataLayer';
import getRangeOfEntries from '@/utils/getRangeOfEntries';
import getClientXFromDifferentEvents from '@/utils/getClientXFromDifferentEvents';
import { HighlightSlide } from '@/models';
import { highlightedVersions } from '@/mocks/versions';
import { MOBILE_ASPECT_RATIO } from '@/styles/variables';

SwiperCore.use([A11y, Keyboard, Thumbs]);

interface SlideProps {
  slide: Omit<HighlightSlide, 'linkBtn'>;
}

const Slide: FC<SlideProps> = observer(({ slide }) => {
  return (
    <div className={styles.slideContainer}>
      <div>
        <p className={styles.productName}>Fiat Strada</p>
        <h2 className={styles.versionTitle}>
          {slide.titleElement ?? slide.title}
        </h2>
        <ResponsiveLazyImage
          alt={slide.title}
          src={slide.image.fullPath}
          src2={slide.image.fullPath2x}
          src3={slide.image.fullPath3x}
          aspectRatio={MOBILE_ASPECT_RATIO}
          width="100%"
          height="auto"
          containerClassName={styles.slideImage}
        />
      </div>
      <div className={styles.slideDetails}>
        <div className={styles.slideDescription}>
          {slide.descriptionMobile}
        </div>
      </div>
    </div>
  );
});

const SwipersMobile: FC<{ setReference: () => void }> = observer(
  ({ setReference }) => {
    const store: StradaStore = useMobxStores();
    const [, rerender] = useState(false);
    const [touchLocation, setTouchLocation] =
      useState<PointerEvent['clientX']>();
    const bulletProps = getRangeOfEntries(
      store.highlightedVersionsMobileSwiperController
        ?.activeIndex ?? 0,
      highlightedVersions,
    );
    return (
      <>
        <div className={styles.container}>
          <div className={styles.bgFade} />
          <Swiper
            onSwiper={(e) =>
              store.setHighlightedVersionsMobileSwiperController(
                e,
              )
            }
            controller={
              store.highlightedVersionsMobileSwiperController
                ? {
                    control:
                      store.highlightedVersionsMobileSwiperController,
                  }
                : undefined
            }
            spaceBetween={100}
            className={styles.swiperSlide}
            observer
            observeParents
            parallax
            onSlideChange={() => {
              rerender((r) => !r);
              setReference();
            }}
            onTouchStart={(_, event) => {
              const clientX =
                getClientXFromDifferentEvents(event);
              setTouchLocation(clientX);
            }}
            onTouchEnd={(_, event) => {
              const clientX =
                getClientXFromDifferentEvents(event);
              if (
                clientX > (touchLocation ?? 0) + 30 ||
                clientX < (touchLocation ?? 0) - 30
              ) {
                DataLayer.swipeEvent({
                  element:
                    (touchLocation ?? 0) > clientX
                      ? 'proximo'
                      : 'anterior',
                  elementCategory: 'imagem',
                  pageSection: 'conteudo',
                  pageSubsection: 'strada-automatica',
                });
              }
            }}
          >
            {highlightedVersions.map((slide) => (
              <SwiperSlide
                key={`slide-swiper-2-mobile-versiondisplay-${slide.id}`}
              >
                <Slide slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.controls}>
            <div className={styles.bullets}>
              {!!bulletProps.before &&
                Array.from(Array(bulletProps.before).keys()).map(
                  (_, i) => (
                    <div
                      key={`smaller-bullet-swipersmobile-versiondisplay-mobile-before-${i}`}
                      className={scssStyles([
                        'bullet',
                        i == 0
                          ? 'smallerBullet'
                          : 'mediumBullet',
                      ])}
                    >
                      <span />
                    </div>
                  ),
                )}
              {highlightedVersions.map((c, index) => {
                if (bulletProps.range.indexOf(index) === -1)
                  return null;
                return (
                  <button
                    key={`bullet-mobile-versiondisplay-me-${c.id}`}
                    title={c.title}
                    className={scssStyles([
                      styles.bullet,
                      store
                        .highlightedVersionsMobileSwiperController
                        ?.activeIndex === index
                        ? styles.active
                        : '',
                    ])}
                    onClick={() => {
                      DataLayer.clickEvent({
                        element: `item-${index + 1}`,
                        elementCategory: 'icone',
                        pageSection: 'conteudo',
                        pageSubsection: 'strada-automatica',
                      });
                      store.highlightedVersionsMobileSwiperController?.slideTo(
                        index,
                      );
                    }}
                  >
                    <span />
                  </button>
                );
              })}
              {!!bulletProps.after &&
                Array.from(Array(bulletProps.after).keys()).map(
                  (_, i) => (
                    <div
                      key={`smaller-bullet-swipersmobile-versiondisplay-me-after-${i}`}
                      className={
                        i == 0 ? 'smallerBullet' : 'mediumBullet'
                      }
                    />
                  ),
                )}
            </div>
            <div className={styles.arrows}>
              <ArrowButton
                title={`Anterior: ${
                  highlightedVersions[
                    (store
                      .highlightedVersionsMobileSwiperController
                      ?.activeIndex ?? 0) <= 0
                      ? highlightedVersions.length - 1
                      : (store
                          .highlightedVersionsMobileSwiperController
                          ?.activeIndex ?? 0) - 1
                  ]?.title ?? ''
                }`}
                previous
                disabled={
                  (store
                    .highlightedVersionsMobileSwiperController
                    ?.activeIndex ?? 0) === 0
                }
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: 'anterior',
                    elementCategory: 'seta',
                    pageSection: 'conteudo',
                    pageSubsection: 'strada-automatica',
                  });
                  store.highlightedVersionsMobileSwiperController?.slidePrev();
                }}
              />
              <ArrowButton
                title={`Próximo: ${
                  highlightedVersions[
                    (store
                      .highlightedVersionsMobileSwiperController
                      ?.activeIndex ?? 0) >=
                    highlightedVersions.length - 1
                      ? 0
                      : (store
                          .highlightedVersionsMobileSwiperController
                          ?.activeIndex ?? 0) + 1
                  ]?.title ?? ''
                }`}
                disabled={
                  (store
                    .highlightedVersionsMobileSwiperController
                    ?.activeIndex ?? 0) >=
                  highlightedVersions.length - 1
                }
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: 'proximo',
                    elementCategory: 'seta',
                    pageSection: 'conteudo',
                    pageSubsection: 'strada-automatica',
                  });
                  store.highlightedVersionsMobileSwiperController?.slideNext();
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  },
);

export default SwipersMobile;
