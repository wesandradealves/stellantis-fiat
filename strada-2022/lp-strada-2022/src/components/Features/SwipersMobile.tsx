import {
  heroAllSlides,
  HeroProductTabSlide,
} from '@/mocks/heroDetails';
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
import VimeoEmbed from '../../sections/VimeoEmbed';
import getClientXFromDifferentEvents from '@/utils/getClientXFromDifferentEvents';
import getRangeOfEntries from '@/utils/getRangeOfEntries';
import { MOBILE_ASPECT_RATIO } from '@/styles/variables';

SwiperCore.use([A11y, Keyboard, Thumbs]);

interface SlideProps {
  slide: HeroProductTabSlide;
}

const pageSection = 'fiat-strada';

const Slide: FC<SlideProps> = observer(({ slide }) => {
  return (
    <div className={styles.slideContainer}>
      <h4 className={styles.slideTitle}>{slide.title}</h4>
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
          aspectRatio={MOBILE_ASPECT_RATIO}
        />
      )}
      <div className={styles.slideDetails}>
        <div className={styles.slideDescription}>
          {slide.descriptionMobile}
        </div>
      </div>
    </div>
  );
});

const SwipersDesktop: FC = observer(() => {
  const store: StradaStore = useMobxStores();
  const [, rerender] = useState(false);
  const [touchLocation, setTouchLocation] =
    useState<PointerEvent['clientX']>();
  const bulletProps = getRangeOfEntries(
    store.featuresMobileSwiperController?.activeIndex,
    heroAllSlides,
  );
  const activeIndex =
    store.featuresMobileSwiperController?.activeIndex ?? 0;
  return (
    <div className={styles.container}>
      <Swiper
        observer
        observeParents
        parallax
        navigation
        initialSlide={store.mainDisplayIndex - 1}
        onSwiper={(e) =>
          store.setFeaturesMobileSwiperController(e)
        }
        controller={
          store.featuresMobileSwiperController
            ? { control: store.featuresMobileSwiperController }
            : undefined
        }
        spaceBetween={0}
        onSlideChange={() => {
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
                (touchLocation ?? 0) > clientX
                  ? 'proximo'
                  : 'anterior',
              elementCategory: 'imagem',
              pageSection,
              pageSubsection:
                heroAllSlides[activeIndex]?.title ?? '',
            });
          }
        }}
      >
        {heroAllSlides.map((slide) => (
          <SwiperSlide key={`hero-mobile-${slide.id}`}>
            <Slide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.controls}>
        <ArrowButton
          title={`Anterior`}
          previous
          disabled={
            store.featuresMobileSwiperController?.activeIndex ===
            0
          }
          handleClick={() => {
            DataLayer.clickEvent({
              element: 'anterior',
              elementCategory: 'seta',
              pageSection,
              pageSubsection:
                heroAllSlides[activeIndex]?.title ?? '',
            });
            store.featuresMobileSwiperController?.slidePrev();
          }}
        />
        <div className={styles.bullets}>
          {!!bulletProps.before &&
            Array.from(Array(bulletProps.before).keys())
              .slice(0, 2)
              .map((_, i) => (
                <button
                  key={`smaller-bullet-mobile-ProductDetails-before-${i}`}
                  className={scssStyles([
                    styles.bullet,
                    i == 1 || bulletProps.before === 1
                      ? 'mediumBullet'
                      : 'smallerBullet',
                  ])}
                  onClick={() => {
                    DataLayer.clickEvent({
                      element: `foto-${activeIndex - 2}`,
                      elementCategory: 'icone',
                      pageSection,
                      pageSubsection:
                        heroAllSlides[activeIndex]?.title ?? '',
                    });
                    if (store.featuresMobileSwiperController) {
                      store.featuresMobileSwiperController?.slideTo(
                        activeIndex - 2,
                      );
                    }
                  }}
                >
                  <span />
                </button>
              ))}
          {heroAllSlides.map((c, index) => {
            if (bulletProps.range.indexOf(index) === -1)
              return null;
            return (
              <button
                key={`bullet-s-mobile-j-${c.id}`}
                title={c.title}
                className={scssStyles([
                  styles.bullet,
                  store.featuresMobileSwiperController
                    ?.activeIndex === index
                    ? styles.active
                    : '',
                ])}
                onClick={() => {
                  DataLayer.clickEvent({
                    element: `item-${index + 1}`,
                    elementCategory: 'icone',
                    pageSection,
                    pageSubsection: c.title,
                  });
                  if (
                    c.index &&
                    store.featuresMobileSwiperController
                  ) {
                    store.featuresMobileSwiperController?.slideTo(
                      index,
                    );
                  }
                }}
              >
                <span />
              </button>
            );
          })}
          {!!bulletProps.after &&
            Array.from(Array(bulletProps.after).keys())
              .slice(0, 2)
              .map((_, i) => (
                <button
                  key={`smaller-bullet-mobile-ProductDetails-after-${i}`}
                  className={scssStyles([
                    styles.bullet,
                    i == 0 || bulletProps.after === 1
                      ? 'mediumBullet'
                      : 'smallerBullet',
                  ])}
                  onClick={() => {
                    DataLayer.clickEvent({
                      element: `foto-${activeIndex + 2}`,
                      elementCategory: 'icone',
                      pageSection,
                      pageSubsection:
                        heroAllSlides[activeIndex]?.title ?? '',
                    });
                    if (store.featuresMobileSwiperController) {
                      store.featuresMobileSwiperController?.slideTo(
                        activeIndex + 2,
                      );
                    }
                  }}
                >
                  <span />
                </button>
              ))}
        </div>
        <ArrowButton
          title={`Próximo`}
          disabled={
            (store.featuresMobileSwiperController?.activeIndex ??
              0 - 1) >=
            heroAllSlides.length - 1
          }
          handleClick={() => {
            DataLayer.clickEvent({
              element: 'proximo',
              elementCategory: 'seta',
              pageSection,
              pageSubsection:
                heroAllSlides[activeIndex]?.title ?? '',
            });
            store.featuresMobileSwiperController?.slideNext();
          }}
        />
      </div>
    </div>
  );
});

export default SwipersDesktop;
