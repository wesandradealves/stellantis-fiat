import productDetails, { ProductTab, ProductTabSlide } from '@/mocks/productDetails';
import { useMobxStores } from '@/store';
import PulseStore from '@/store/PulseStore';
import { FC, useState, Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Keyboard, Thumbs } from 'swiper';
import styles from './SwipersMobile.module.scss';
import { observer } from 'mobx-react-lite';
import { ArrowButton, ResponsiveLazyImage, VimeoEmbed } from '@/components';
import scssStyles from '@/utils/scssStyles';
import { ui } from '@/assets';
import DataLayer from '@/utils/DataLayer';
import getRangeOfEntries from '@/utils/getRangeOfEntries';
import getClientXFromDifferentEvents from '@/utils/getClientXFromDifferentEvents';

SwiperCore.use([A11y, Keyboard, Thumbs]);

const pageSubsection = 'tudo-sobre-pulse';
interface SlideProps {
  slide: ProductTabSlide;
}

const Slide: FC<SlideProps> = observer(({ slide }) => {
  return (
    <div className={styles.slideContainer}>
      {slide.vimeoId?.mobile ? (
        <div className={styles.videoWrapper}>
          <VimeoEmbed
            id={slide.vimeoId.mobile}
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
        <h2>{slide.title}</h2>
        <div className={styles.slideDescription}>
          {slide.descriptionMobile}
        </div>
      </div>
    </div>
  )
});

interface TabProps {
  tab: ProductTab;
  rerender: React.Dispatch<React.SetStateAction<boolean>>;
}

const Tab: FC<TabProps> = observer(({ tab, rerender }) => {
  const store: PulseStore = useMobxStores();
  const [touchLocation, setTouchLocation] = useState<PointerEvent['clientX']>();
  const bulletProps = getRangeOfEntries(store.mobileSwiperController[tab.id]?.activeIndex, tab.children);
  const activeIndex = store.mobileSwiperController[tab.id]?.activeIndex ?? 0;
  const getMaxHeight = (id: string) => {
    if (store.selectedDetailTab === id) {
      return 700;
    }
    return 0;
  }
  return (
    <>
      <button
        className={scssStyles(['accordion', 'noFocus', store.selectedDetailTab === tab.id ? 'active' : '', styles.accordionTopic])}
        title={store.selectedDetailTab === tab.id ? 'Fechar' : 'Expandir'}
        onClick={() => {
          DataLayer.clickEvent({
            element: tab.title,
            elementCategory: 'botao',
            pageSection: 'conteudo',
            pageSubsection,
          });
          store.setSelectedDetailTab(store.selectedDetailTab === tab.id ? null : tab);
        }}
      >
        <div className="chevron">
          <img src={ui.accordionChevron} alt={store.selectedDetailTab === tab.id ? 'Fechar' : 'Ver mais'} />
        </div>
        <p>{tab.title}</p>
      </button>
      <div
        id={`panel-${tab.id}`}
        className={scssStyles(['panel', styles.topicAnswer])}
        style={{
          maxHeight: getMaxHeight(tab.id)
        }}>
        <div id={`panel-body-${tab.id}`}>
          <div className={styles.controls}>
            <ArrowButton
              previous
              disabled={store.mobileSwiperController[tab.id]?.activeIndex === 0}
              handleClick={() => {
                DataLayer.clickEvent({
                  element: 'anterior',
                  elementCategory: 'icone',
                  pageSection: pageSubsection,
                  pageSubsection: tab.slug,
                });
                store.mobileSwiperController[tab.id]?.slidePrev();
              }}
            />
            <div className={styles.bullets}>
              {!!bulletProps.before && Array.from(Array(bulletProps.before).keys()).slice(0, 2).map((_, i) => (
                <button
                  key={`smaller-bullet-ProductDetails-before-${i}`}
                  className={scssStyles([
                    styles.bullet,
                    i == 1 || bulletProps.before === 1 ? 'mediumBullet' : 'smallerBullet'
                  ])}
                  onClick={() => {
                    DataLayer.clickEvent({
                      element: `foto-${activeIndex - 2}`,
                      elementCategory: 'icone',
                      pageSection: 'conteudo',
                      pageSubsection,
                    });
                    if (store.mobileSwiperController && store.mobileSwiperController[tab.id]) {
                      store.mobileSwiperController[tab.id]?.slideTo(activeIndex - 2);
                    }
                  }}
                >
                  <span />
                </button>
              ))}
              {tab.children.map((c, index) => {
                if (bulletProps.range.indexOf(index) === -1) return null;
                console.log(store.mobileSwiperController[tab.id]?.activeIndex);
                return (
                  <button
                    key={`bullet-s-j-${c.id}`}
                    title={c.title}
                    className={scssStyles([
                      styles.bullet,
                      store.mobileSwiperController[tab.id]?.activeIndex === index ? styles.active : '',
                    ])}
                    onClick={() => {
                      DataLayer.clickEvent({
                        element: `item-${index + 1}`,
                        elementCategory: 'icone',
                        pageSection: pageSubsection,
                        pageSubsection: tab.title,
                      });
                      if (c.index && store.mobileSwiperController && store.mobileSwiperController[tab.id]) {
                        store.mobileSwiperController[tab.id]?.slideTo(index);
                      }
                    }}
                  >
                    <span />
                  </button>
                );
              })}
              {!!bulletProps.after && Array.from(Array(bulletProps.after).keys()).slice(0, 2).map((_, i) => (
                <button
                  key={`smaller-bullet-ProductDetails-after-${i}`}
                  className={scssStyles([
                    styles.bullet,
                    i == 0 || bulletProps.after === 1 ? 'mediumBullet' : 'smallerBullet'
                  ])}
                  onClick={() => {
                    DataLayer.clickEvent({
                      element: `foto-${activeIndex + 2}`,
                      elementCategory: 'icone',
                      pageSection: 'conteudo',
                      pageSubsection,
                    });
                    if (store.mobileSwiperController && store.mobileSwiperController[tab.id]) {
                      store.mobileSwiperController[tab.id]?.slideTo(activeIndex + 2);
                    }
                  }}
                >
                  <span />
                </button>
              ))}
            </div>
            <ArrowButton
              disabled={(store.mobileSwiperController[tab.id]?.activeIndex ?? tab.children.length - 1) >= (tab.children.length - 1)}
              handleClick={() => {
                DataLayer.clickEvent({
                  element: 'proximo',
                  elementCategory: 'icone',
                  pageSection: pageSubsection,
                  pageSubsection: tab.slug,
                });
                store.mobileSwiperController[tab.id]?.slideNext();
              }}
            />
          </div>
          <Swiper
            observer
            observeParents
            parallax
            onSwiper={(e) => store.setMobileSwiperController(e, tab.id)}
            controller={store.mobileSwiperController[tab.id] ? { control: store.mobileSwiperController[tab.id] } : undefined}
            onSlideChange={(e) => {
              store.setMobileSwiperController(e, tab.id);
              rerender((r) => !r);
            }}
            onTouchStart={(_, event) => {
              const clientX = getClientXFromDifferentEvents(event);
              setTouchLocation(clientX);
            }}
            onTouchEnd={(_, event) => {
              const clientX = getClientXFromDifferentEvents(event);
              DataLayer.swipeEvent({
                element: (touchLocation ?? 0) > clientX ? 'proximo' : 'anterior',
                elementCategory: 'slide',
                pageSection: pageSubsection,
                pageSubsection: tab.title,
              });
            }}
          >
            {tab.children.map((slide) => (
              <SwiperSlide key={`${tab.id}-x-0-${slide.id}`}>
                <Slide
                  slide={{ ...slide, tabId: tab.id }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
});

const SwipersMobile: FC = observer(() => {
  const [, rerender] = useState(false);
  return (
    <div className={styles.container}>
      {productDetails.map((tab) => (
        <Fragment key={`sw-frag-${tab.id}`}>
          <Tab
            tab={tab}
            rerender={rerender}
          />
        </Fragment>
      ))}
    </div >
  );
});

export default SwipersMobile;
