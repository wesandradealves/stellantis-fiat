import { useMobxStores } from '@/store';
import PulseStore from '@/store/PulseStore';
import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Keyboard, Thumbs } from 'swiper';
import styles from './SwipersDesktop.module.scss';
import { observer } from 'mobx-react-lite';
import { ArrowButton, ResponsiveLazyImage } from '@/components';
import scssStyles from '@/utils/scssStyles';
import connectMe, { ConnectMeSlide } from '@/mocks/dataConnectMe';
import { AnimatePresence, motion } from 'framer-motion';
import DataLayer from '@/utils/DataLayer';
import getClientXFromDifferentEvents from '@/utils/getClientXFromDifferentEvents';


SwiperCore.use([A11y, Keyboard, Thumbs]);

interface SlideProps {
  slide: ConnectMeSlide;
}

const Slide: FC<SlideProps> = observer(({ slide }) => {
  return (
    <div className={styles.slideContainer}>
      <div className={styles.slideDetails}>
        <h2>{slide.titleElement ?? slide.title}</h2>
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
  )
})

const SwipersDesktop: FC = observer(() => {
  const store: PulseStore = useMobxStores();
  const [, rerender] = useState(false);
  const [touchLocation, setTouchLocation] = useState<PointerEvent['clientX']>();
  const current = connectMe[store.connectMeswiperController?.activeIndex ?? 0];
  const nextSlide = !store.connectMeswiperController ? undefined : connectMe[store.connectMeswiperController.activeIndex + 1];
  return (
    <>
      <AnimatePresence>
        {connectMe.map((slide) => {
          if (slide.id !== current.id) {
            return null;
          }
          return (
            <motion.div
              key={slide.id}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
            >
              <ResponsiveLazyImage
                alt={current.title}
                title={current.title}
                src={current.background.fullPath}
                src2={current.background.fullPath2x}
                src3={current.background.fullPath3x}
                containerClassName={styles.fullBgImage}
              />
            </motion.div>
          )
        })}
      </AnimatePresence>
      <div className={styles.container}>
        <Swiper
          onSwiper={(e) => store.setConnectMeSwiperController(e)}
          controller={store.connectMeswiperController ? { control: store.connectMeswiperController } : undefined}
          spaceBetween={100}
          className={styles.swiperSlide}
          observer
          observeParents
          parallax
          onSlideChange={() => {
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
              elementCategory: 'imagem',
              pageSection: 'conteudo',
              pageSubsection: 'fiat-connect-me',
            });
          }}
        >
          {connectMe.map((slide) => (
            <SwiperSlide key={`$${slide.id}`}>
              <Slide
                slide={slide}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.controls}>
          {store.pageX >= 1200 && (
            <div className={styles.bullets}>
              {connectMe.map((c, index) => {
                return (
                  <button
                    key={`bullet-${c.id}`}
                    title={c.title}
                    className={scssStyles([
                      styles.bullet,
                      store.connectMeswiperController?.activeIndex === index ? styles.active : '',
                    ])}
                    onClick={() => {
                      DataLayer.clickEvent({
                        element: `item-${index + 1}`,
                        elementCategory: 'icone',
                        pageSection: 'conteudo',
                        pageSubsection: 'fiat-connect-me',
                      });
                      store.connectMeswiperController?.slideTo(index);
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
              disabled={(store.connectMeswiperController?.activeIndex ?? 0) === 0}
              handleClick={() => {
                DataLayer.clickEvent({
                  element: 'anterior',
                  elementCategory: 'icone',
                  pageSection: 'conteudo',
                  pageSubsection: 'fiat-connect-me',
                });
                store.connectMeswiperController?.slidePrev();
              }}
            />
            <ArrowButton
              light
              large
              disabled={(store.connectMeswiperController?.activeIndex ?? 0) >= connectMe.length - 1}
              handleClick={() => {
                DataLayer.clickEvent({
                  element: 'proximo',
                  elementCategory: 'icone',
                  pageSection: 'conteudo',
                  pageSubsection: 'fiat-connect-me',
                });
                store.connectMeswiperController?.slideNext();
              }}
            />
            {!!nextSlide?.title && (
              <div className={styles.nextTab}>
                <strong>
                  Próximo
                </strong>
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
