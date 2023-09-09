import productDetails, {
  allSlides,
  ProductTab,
  ProductTabSlide,
} from '@/mocks/productDetails';
import { useMobxStores } from '@/store';
import PulseStore from '@/store/PulseStore';
import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Keyboard, Thumbs } from 'swiper';
import styles from './SwipersDesktop.module.scss';
import { observer } from 'mobx-react-lite';
import {
  ArrowButton,
  ResponsiveLazyImage,
  VimeoEmbed,
} from '@/components';
import scssStyles from '@/utils/scssStyles';
import DataLayer from '@/utils/DataLayer';
import getClientXFromDifferentEvents from '@/utils/getClientXFromDifferentEvents';

SwiperCore.use([A11y, Keyboard, Thumbs]);

interface SlideProps {
  slide: ProductTabSlide;
  tab: ProductTab;
}

const pageSubsection = 'tudo-sobre-pulse';

const Slide: FC<SlideProps> = observer(({ slide, tab }) => {
  return (
    <div className={styles.slideContainer}>
      {slide.vimeoId?.desktop ? (
        <div className={styles.videoWrapper}>
          <VimeoEmbed
            id={slide.vimeoId.desktop}
            title={slide.title}
          />
        </div>
      ) : (
        <ResponsiveLazyImage
          alt={slide.title}
          title={slide.title}
          src={slide.image.fullPath}
          src2={slide.image.fullPath2x}
          src3={slide.image.fullPath3x}
          containerClassName={styles.slideImageContainer}
          className={styles.slideImage}
        />
      )}
      <div className={styles.slideDetails}>
        <h3>{tab.title}</h3>
        <h2>{slide.title}</h2>
        <div className={styles.slideDescription}>
          {slide.descriptionDesktop}
        </div>
      </div>
    </div>
  );
});

const SwipersDesktop: FC = observer(() => {
  const store: PulseStore = useMobxStores();
  const [, rerender] = useState(false);
  const [touchLocation, setTouchLocation] =
    useState<PointerEvent['clientX']>();
  const nextSlide = !store.swiperController
    ? undefined
    : allSlides[store.swiperController.activeIndex + 1];
  const previousSlide = !store.swiperController
    ? undefined
    : allSlides[store.swiperController.activeIndex - 1];
  return (
    <div className={styles.container}>
      <Swiper
        observer
        observeParents
        parallax
        onSwiper={(e) => store.setSwiperController(e)}
        controller={
          store.swiperController
            ? { control: store.swiperController }
            : undefined
        }
        spaceBetween={100}
        onSlideChange={(swiper) => {
          const index = swiper.activeIndex;
          const tab = productDetails.find(
            (p) => p.id === allSlides[index].tabId,
          );
          if (tab) {
            store.setSelectedDetailTab(tab);
          }
          rerender((r) => !r);
        }}
        onTouchStart={(_, event) => {
          const clientX = getClientXFromDifferentEvents(event);
          setTouchLocation(clientX);
        }}
        onTouchEnd={(_, event) => {
          const clientX = getClientXFromDifferentEvents(event);
          DataLayer.swipeEvent({
            element:
              (touchLocation ?? 0) > clientX
                ? 'proximo'
                : 'anterior',
            elementCategory: 'imagem',
            pageSection: pageSubsection,
            pageSubsection:
              ((touchLocation ?? 0) > clientX
                ? nextSlide
                : previousSlide
              )?.parentSlug ??
              productDetails.find(
                (c) => c.id === store.selectedDetailTab,
              )?.slug ??
              '',
          });
        }}
      >
        {productDetails.map((tab) =>
          tab.children.map((slide) => (
            <SwiperSlide key={`detail-${tab.id}-${slide.id}`}>
              <Slide
                tab={tab}
                slide={{ ...slide, tabId: tab.id }}
              />
            </SwiperSlide>
          )),
        )}
      </Swiper>
      <div className={styles.controls}>
        {store.pageX >= 1200 && (
          <div className={styles.bullets}>
            {allSlides
              .filter((t) => t.tabId === store.currentTab?.id)
              .map((c, index) => {
                return (
                  <button
                    key={`bullet-sw-${c.id}`}
                    title={c.title}
                    className={scssStyles([
                      styles.bullet,
                      store.swiperController?.activeIndex ===
                      c.index
                        ? styles.active
                        : '',
                    ])}
                    onClick={() => {
                      DataLayer.clickEvent({
                        element: `item-${index + 1}`,
                        elementCategory: 'icone',
                        pageSection: pageSubsection,
                        pageSubsection:
                          productDetails.find(
                            (c) =>
                              c.id === store.selectedDetailTab,
                          )?.slug ?? '',
                      });
                      if (c.index && store.swiperController) {
                        store.swiperController?.slideTo(c.index);
                      }
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
            light
            large
            disabled={
              (store.swiperController?.activeIndex ?? 0) - 1 < 0
            }
            handleClick={() => {
              DataLayer.clickEvent({
                element: 'anterior',
                elementCategory: 'icone',
                pageSection: pageSubsection,
                pageSubsection:
                  productDetails.find(
                    (c) => c.id === store.selectedDetailTab,
                  )?.slug ?? '',
              });
              store.swiperController?.slidePrev();
            }}
          />
          <ArrowButton
            light
            large
            disabled={
              (store.swiperController?.activeIndex ??
                allSlides.length) >=
              allSlides.length - 1
            }
            handleClick={() => {
              DataLayer.clickEvent({
                element: 'proximo',
                elementCategory: 'icone',
                pageSection: pageSubsection,
                pageSubsection:
                  productDetails.find(
                    (c) => c.id === store.selectedDetailTab,
                  )?.slug ?? '',
              });
              store.swiperController?.slideNext();
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
  );
});

export default SwipersDesktop;
