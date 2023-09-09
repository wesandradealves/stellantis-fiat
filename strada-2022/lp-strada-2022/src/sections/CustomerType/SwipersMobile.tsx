import { useMobxStores } from '@/store';
import StradaStore from '@/store/StradaStore';
import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Keyboard, Thumbs } from 'swiper';
import styles from './SwipersMobile.module.scss';
import { observer } from 'mobx-react-lite';
import {
  ArrowButton,
  ResponsiveLazyImage,
  CTAButton,
} from '@/components';
import scssStyles from '@/utils/scssStyles';
import cutomerType from '@/mocks/dataConsumerType';
import DataLayer from '@/utils/DataLayer';
import getRangeOfEntries from '@/utils/getRangeOfEntries';
import getClientXFromDifferentEvents from '@/utils/getClientXFromDifferentEvents';
import { HighlightSlide } from '@/models';
import { MOBILE_ASPECT_RATIO } from '@/styles/variables';
import { COMPRE_TITLE, links } from '@/mocks/menu';

SwiperCore.use([A11y, Keyboard, Thumbs]);

interface SlideProps {
  slide: HighlightSlide;
}

const Slide: FC<SlideProps> = observer(({ slide }) => {
  return (
    <div className={styles.slideContainer}>
      <div>
        <h2 className={styles.versionTitle}>
          {slide.titleElement ?? slide.title}
        </h2>
        <ResponsiveLazyImage
          alt={slide.alt}
          title={slide.title}
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
        <div className={styles.buttonsContainer}>
          <CTAButton
            className={styles.descripitionButton}
            text={COMPRE_TITLE}
            title={COMPRE_TITLE}
            href={links.compre}
            width="100%"
            handleClick={() => {
              DataLayer.clickEvent({
                element: 'compre-a-sua',
                elementCategory: 'cta',
                pageSection: 'conteudo',
                pageSubsection: 'venda-direta',
              });
            }}
          />

          <CTAButton
            className={styles.descripitionButton}
            text="Saiba Mais"
            title="Saiba Mais"
            href={slide.linkBtn}
            width="100%"
            handleClick={() => {
              DataLayer.clickEvent({
                element: 'saiba-mais',
                elementCategory: 'cta',
                pageSection: 'conteudo',
                pageSubsection: 'venda-direta',
              });
            }}
          />
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
      store.newProductsMobileSwiperController?.activeIndex ?? 0,
      cutomerType,
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
            onSwiper={(e) =>
              store.setNewProductsMobileSwiperController(e)
            }
            controller={
              store.newProductsMobileSwiperController
                ? {
                    control:
                      store.newProductsMobileSwiperController,
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
                  pageSubsection: 'venda-direta',
                });
              }
            }}
          >
            {cutomerType.map((slide) => (
              <SwiperSlide
                key={`slide-swiper-2-mobile-connectme-${slide.id}`}
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
                      key={`smaller-bullet-swipersmobile-connectme-mobile-before-${i}`}
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
              {cutomerType.map((c, index) => {
                if (bulletProps.range.indexOf(index) === -1)
                  return null;
                return (
                  <button
                    key={`bullet-mobile-connect-me-${c.id}`}
                    title={c.title}
                    className={scssStyles([
                      styles.bullet,
                      store.newProductsMobileSwiperController
                        ?.activeIndex === index
                        ? styles.active
                        : '',
                    ])}
                    onClick={() => {
                      DataLayer.clickEvent({
                        element: `item-${index + 1}`,
                        elementCategory: 'icone',
                        pageSection: 'conteudo',
                        pageSubsection: 'venda-direta',
                      });
                      store.newProductsMobileSwiperController?.slideTo(
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
                      key={`smaller-bullet-swipersmobile-connect-me-after-${i}`}
                      className={
                        i == 0 ? 'smallerBullet' : 'mediumBullet'
                      }
                    />
                  ),
                )}
            </div>
            <div className={styles.arrows}>
              <ArrowButton
                previous
                title={`Anterior: ${
                  cutomerType[
                    findIndex() <= 0
                      ? cutomerType.length - 1
                      : findIndex() - 1
                  ]?.title ?? ''
                }
                `}
                disabled={findIndex() === 0}
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: 'anterior',
                    elementCategory: 'icone',
                    pageSection: 'conteudo',
                    pageSubsection: 'venda-direta',
                  });
                  store.newProductsMobileSwiperController?.slidePrev();
                }}
              />
              <ArrowButton
                disabled={
                  (store.newProductsMobileSwiperController
                    ?.activeIndex ?? 0) >=
                  cutomerType.length - 1
                }
                title={`Próximo: ${
                  cutomerType[
                    findIndex() >= cutomerType.length - 1
                      ? 0
                      : findIndex() + 1
                  ]?.title ?? ''
                }`}
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: 'proximo',
                    elementCategory: 'icone',
                    pageSection: 'conteudo',
                    pageSubsection: 'venda-direta',
                  });
                  store.newProductsMobileSwiperController?.slideNext();
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
