import { useMobxStores } from '@/store';
import PulseStore from '@/store/PulseStore';
import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Keyboard, Thumbs } from 'swiper';
import styles from './SwipersMobile.module.scss';
import { observer } from 'mobx-react-lite';
import { ArrowButton, ResponsiveLazyImage } from '@/components';
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
          {slide.descriptionMobile}
        </div>
      </div>
    </div>
  )
})

const SwipersMobile: FC = observer(() => {
  const store: PulseStore = useMobxStores();
  const [, rerender] = useState(false);
  const [touchLocation, setTouchLocation] = useState<PointerEvent['clientX']>();
  const current = connectMe[store.connectMeswiperController?.activeIndex ?? 0];
  return (
    <>
      <div className={styles.container}>
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
        <div className={styles.bgFade} />
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
          <div className={styles.arrows}>
            <ArrowButton
              previous
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
          </div>
        </div>
      </div>
    </>
  );
});

export default SwipersMobile;
