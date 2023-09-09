import { useMobxStores } from '@/store';
import StradaStore from '@/store/StradaStore';
import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Keyboard, Thumbs } from 'swiper';
import styles from './SwipersDesktop.module.scss';
import { observer } from 'mobx-react-lite';
import {
  ArrowButton,
  HighlightedText,
  CTAButton,
  ResponsiveLazyImage,
} from '@/components';
import scssStyles from '@/utils/scssStyles';
import cutomerType from '@/mocks/dataConsumerType';
// import { AnimatePresence, motion } from 'framer-motion';
import DataLayer from '@/utils/DataLayer';
import getClientXFromDifferentEvents from '@/utils/getClientXFromDifferentEvents';
import { HighlightSlide } from '@/models';
import { COMPRE_TITLE, links } from '@/mocks/menu';

SwiperCore.use([A11y, Keyboard, Thumbs]);

interface SlideProps {
  slide: HighlightSlide;
}

const Slide: FC<SlideProps> = observer(({ slide }) => {
  return (
    <div className={styles.slideContainer}>
      <div className={styles.slideDetails}>
        <HighlightedText>
          <h2>{slide.titleElement ?? slide.title} </h2>
        </HighlightedText>

        <div className={styles.slideDescription}>
          <div className={styles.textDescription}>
            {slide.descriptionDesktop}
          </div>
          <CTAButton
            className={styles.descripitionButton}
            text={COMPRE_TITLE}
            title={COMPRE_TITLE}
            href={links.compre}
            width="70%"
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
            width="70%"
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
  );
});

const SwipersDesktop: FC<{ setReference: () => void }> =
  observer(({ setReference }) => {
    const store: StradaStore = useMobxStores();
    const [, rerender] = useState(false);
    const [touchLocation, setTouchLocation] =
      useState<PointerEvent['clientX']>();
    const nextSlide = !store.newProductsSwiperController
      ? undefined
      : cutomerType[
          store.newProductsSwiperController.activeIndex + 1
        ];

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
            onSwiper={(e) =>
              store.setNewProductsSwiperController(e)
            }
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
                key={`slide-swiper-2-consumerType-${slide.id}`}
              >
                <Slide slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.controls}>
            {store.pageX >= 1200 && (
              <div className={styles.bullets}>
                {cutomerType.map((c, index) => {
                  return (
                    <button
                      key={`bullet-swiper-consumerType-${c.id}`}
                      title={c.title}
                      className={scssStyles([
                        styles.bullet,
                        store.newProductsSwiperController
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
                        store.newProductsSwiperController?.slideTo(
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
                previous
                large
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
                  store.newProductsSwiperController?.slidePrev();
                }}
              />
              <ArrowButton
                large
                title={`Próximo: ${
                  cutomerType[
                    findIndex() >= cutomerType.length - 1
                      ? 0
                      : findIndex() + 1
                  ]?.title ?? ''
                }`}
                disabled={
                  (store.newProductsSwiperController
                    ?.activeIndex ?? 0) >=
                  cutomerType.length - 1
                }
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: 'proximo',
                    elementCategory: 'icone',
                    pageSection: 'conteudo',
                    pageSubsection: 'venda-direta',
                  });
                  store.newProductsSwiperController?.slideNext();
                }}
              />
              {!!nextSlide?.title && (
                <div className={styles.nextTab}>
                  <strong>Próximo</strong>
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
