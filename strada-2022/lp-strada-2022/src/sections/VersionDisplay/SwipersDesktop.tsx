import { useMobxStores } from '@/store';
import StradaStore from '@/store/StradaStore';
import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Keyboard, Thumbs } from 'swiper';
import styles from './SwipersDesktop.module.scss';
import { observer } from 'mobx-react-lite';
import { ArrowButton, ResponsiveLazyImage } from '@/components';
import scssStyles from '@/utils/scssStyles';
// import { AnimatePresence, motion } from 'framer-motion';
import DataLayer from '@/utils/DataLayer';
import getClientXFromDifferentEvents from '@/utils/getClientXFromDifferentEvents';
import { HighlightSlide } from '@/models';
import { highlightedVersions } from '@/mocks/versions';

SwiperCore.use([A11y, Keyboard, Thumbs]);

interface SlideProps {
  slide: Omit<HighlightSlide, 'linkBtn'>;
}

const Slide: FC<SlideProps> = observer(({ slide }) => {
  return (
    <div className={styles.slideContainer}>
      <div className={styles.slideDetails}>
        <p className={styles.productName}>Fiat Strada</p>
        <h2 className={styles.versionTitle}>
          {slide.titleElement ?? slide.title}
        </h2>

        <div className={styles.slideDescription}>
          {slide.descriptionDesktop}
        </div>
      </div>
      <ResponsiveLazyImage
        alt={slide.title}
        title={slide.title}
        src={slide.image.fullPath}
        src2={slide.image.fullPath2x}
        src3={slide.image.fullPath3x}
        containerClassName={styles.slideImageContainer}
        className={styles.slideImage}
      />
    </div>
  );
});

const SwipersDesktop: FC<{ setReference: () => void }> =
  observer(({ setReference }) => {
    const store: StradaStore = useMobxStores();
    const [, rerender] = useState(false);
    const [touchLocation, setTouchLocation] =
      useState<PointerEvent['clientX']>();
    const nextSlide = !store.highlightedVersionsSwiperController
      ? undefined
      : highlightedVersions[
          store.highlightedVersionsSwiperController.activeIndex +
            1
        ];
    return (
      <>
        <div className={styles.container}>
          <Swiper
            keyboard
            onSwiper={(e) =>
              store.setHighlightedVersionsSwiperController(e)
            }
            controller={
              store.highlightedVersionsSwiperController
                ? {
                    control:
                      store.highlightedVersionsSwiperController,
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
                key={`slide-swiper-2-versiondisplay-${slide.id}`}
              >
                <Slide slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.controls}>
            {store.pageX >= 1200 && (
              <div className={styles.bullets}>
                {highlightedVersions.map((c, index) => {
                  return (
                    <button
                      key={`bullet-swiper-versiondisplay-me-${c.id}`}
                      title={c.title}
                      className={scssStyles([
                        styles.bullet,
                        store.highlightedVersionsSwiperController
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
                        store.highlightedVersionsSwiperController?.slideTo(
                          index,
                        );
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
                title={`Anterior: ${
                  highlightedVersions[
                    (store.highlightedVersionsSwiperController
                      ?.activeIndex ?? 0) <= 0
                      ? highlightedVersions.length - 1
                      : (store
                          .highlightedVersionsSwiperController
                          ?.activeIndex ?? 0) - 1
                  ]?.title ?? ''
                }`}
                previous
                large
                disabled={
                  (store.highlightedVersionsSwiperController
                    ?.activeIndex ?? 0) === 0
                }
                light
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: 'anterior',
                    elementCategory: 'seta',
                    pageSection: 'conteudo',
                    pageSubsection: 'strada-automatica',
                  });
                  store.highlightedVersionsSwiperController?.slidePrev();
                }}
              />
              <ArrowButton
                title={`Próximo: ${
                  highlightedVersions[
                    (store.highlightedVersionsSwiperController
                      ?.activeIndex ?? 0) >=
                    highlightedVersions.length - 1
                      ? 0
                      : (store
                          .highlightedVersionsSwiperController
                          ?.activeIndex ?? 0) + 1
                  ]?.title ?? ''
                }`}
                large
                disabled={
                  (store.highlightedVersionsSwiperController
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
                  store.highlightedVersionsSwiperController?.slideNext();
                }}
              />
              {!!nextSlide?.title && (
                <div className={styles.nextTab}>
                  <strong>Próximo:</strong>
                  <p>{nextSlide?.title}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  });

export default SwipersDesktop;
