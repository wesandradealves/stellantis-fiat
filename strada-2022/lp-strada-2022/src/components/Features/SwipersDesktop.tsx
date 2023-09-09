import productDetails, {
  heroAllSlides,
  HeroProductTabSlide,
} from '@/mocks/heroDetails';
import { useMobxStores } from '@/store';
import StradaStore from '@/store/StradaStore';
import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Keyboard, Thumbs } from 'swiper';
import styles from './SwipersDesktop.module.scss';
import { observer } from 'mobx-react-lite';
import { ResponsiveLazyImage } from '@/components';
import scssStyles from '@/utils/scssStyles';
import DataLayer from '@/utils/DataLayer';
import VimeoEmbed from '../../sections/VimeoEmbed';
import getClientXFromDifferentEvents from '@/utils/getClientXFromDifferentEvents';

SwiperCore.use([A11y, Keyboard, Thumbs]);

interface SlideProps {
  slide: HeroProductTabSlide;
}

const pageSection = 'fiat-strada';

const Slide: FC<SlideProps> = observer(({ slide }) => {
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
        <>
          <ResponsiveLazyImage
            alt={slide.alt}
            title={slide.title}
            src={slide.image.fullPath}
            src2={slide.image.fullPath2x}
            src3={slide.image.fullPath3x}
            containerClassName={styles.slideImageContainer}
            className={styles.slideImage}
          />
        </>
      )}
      <div className={styles.slideDetails}>
        {/* <h3>{tab.title}</h3> */}
        <h2>{slide.title}</h2>
        <div className={styles.slideDescription}>
          {slide.descriptionDesktop}
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
  return (
    <div className={styles.container}>
      <Swiper
        keyboard
        observer
        observeParents
        parallax
        onSwiper={(e) => store.setFeaturesSwiperController(e)}
        controller={
          store.featuresSwiperController
            ? { control: store.featuresSwiperController }
            : undefined
        }
        spaceBetween={100}
        onSlideChange={(swiper) => {
          const index = swiper.activeIndex;
          const tab = productDetails.find(
            (p) => p.id === heroAllSlides[index].tabId,
          );
          if (tab) {
            store.setSelectedHeroDetailTab(tab);
          }
          rerender((r) => !r);
        }}
        initialSlide={store.mainDisplayIndex - 1}
        onTouchStart={(_, event) => {
          const clientX = getClientXFromDifferentEvents(event);
          setTouchLocation(clientX);
        }}
        onTouchEnd={(_, event) => {
          store.setFixModalHero(true);
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
                heroAllSlides[
                  store.featuresSwiperController?.activeIndex ??
                    0
                ]?.title ?? '',
            });
          }
          setTimeout(() => store.setFixModalHero(false), 300);
        }}
      >
        {productDetails.map((tab) =>
          tab.children.map((slide) => (
            <SwiperSlide
              key={`detail-swi-desktop-${tab.id}-${slide.id}`}
            >
              <Slide slide={{ ...slide, tabId: tab.id }} />
            </SwiperSlide>
          )),
        )}
      </Swiper>
      <div className={styles.controls}>
        {store.pageX >= 1200 && (
          <div className={styles.bullets}>
            {heroAllSlides
              .filter((t) => t.tabId === store.currentTab?.id)
              .map((c, index) => {
                return (
                  <button
                    key={`bullet-sw-desktop-${c.id}`}
                    title={c.title}
                    className={scssStyles([
                      styles.bullet,
                      store.featuresSwiperController
                        ?.activeIndex === c.index
                        ? styles.active
                        : '',
                    ])}
                    onClick={() => {
                      DataLayer.clickEvent({
                        element: `item-${index + 1}`,
                        elementCategory: 'icone',
                        pageSection,
                        pageSubsection:
                          productDetails.find(
                            (c) => c.slug === c.parentSlug,
                          )?.title ?? c.title,
                      });
                      if (
                        c.index &&
                        store.featuresSwiperController
                      ) {
                        store.featuresSwiperController?.slideTo(
                          c.index,
                        );
                      }
                    }}
                  >
                    <span />
                  </button>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
});

export default SwipersDesktop;
