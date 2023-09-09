import {
  StoriesBackgroundStyleProps,
  DisplayItemProps,
} from '@/prox/models';
import {
  FC,
  useState,
  useRef,
  useCallback,
  useEffect,
  CSSProperties,
} from 'react';
import styles from './Display.module.scss';
import regex from '@/prox/utils/testRegex';
import { AnimateSharedLayout, motion } from 'framer-motion';
import {
  SwipeableHandlers,
  useSwipeable,
} from 'react-swipeable';
import SwiperCore, { A11y, Keyboard, Thumbs } from 'swiper';
import Store from '@/project/store/Store';
import { useMobxStores } from '@/project/store';
import { observer } from 'mobx-react-lite';
import { ArrowButton } from '..';
import DataLayer from '@/prox/utils/DataLayer';

SwiperCore.use([A11y, Keyboard, Thumbs]);

const VideoElement: FC<{ story: DisplayItemProps }> = ({
  story,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
      if (videoRef?.current) {
          videoRef.current.defaultMuted = true;
          videoRef.current.muted = true;
      }
  }, [videoRef]);

  if (!story.videoProps) {
      return null;
  }
  return (
      <video
          ref={videoRef}
          autoPlay={story.videoProps.autoPlay ?? true}
          muted
          loop={story.videoProps.loop ?? true}
          playsInline
          className={styles.video}
      >
          <source src={story.videoProps.src} />
      </video>
  );
};

interface SlideProps {
  index: number;
  swipingNext: boolean;
  swipe: DisplayItemProps;
  swipeHandlers: SwipeableHandlers;
  style: CSSProperties;
}

const Slide: FC<SlideProps> = observer(
  ({ index, swipe, swipingNext, swipeHandlers, style }) => {
      const store: Store = useMobxStores();
      const currentIndex = store.mainDisplayIndex;
      const active = index === store.mainDisplayIndex;
      const animate = useCallback(() => {
          if (active)
              return {
                  opacity: 1,
                  left: '0%',
              };
          if (swipingNext)
              return {
                  opacity: 0,
                  left: index < currentIndex ? '-100%' : '100%',
              };
          return {
              opacity: 0,
              left: index < currentIndex ? '-100%' : '100%',
          };
      }, [active, swipingNext, currentIndex, index]);
      return (
          <motion.div
              {...swipeHandlers}
              className={styles.story}
              layoutId={`story-desktop--${index}`}
              initial={
                  !active
                      ? {
                          opacity: 0,
                      }
                      : undefined
              }
              animate={animate()}
              transition={{
                  left: { type: 'spring', stiffness: 300, damping: 30 },
                  duration: 0.2,
              }}
          >
              <div className={styles.imageHolder} style={style}>
                  {swipe.videoProps?.src &&
                      regex.testVideo(swipe.videoProps.src) && (
                          <VideoElement story={swipe} />
                      )}
                  <motion.div
                      {...swipeHandlers}
                      key={`swipe-${index}`}
                      className={styles.story}
                      initial={{
                          x: swipingNext ? '100%' : '-100%',
                          opacity: 0,
                      }}
                      animate={{
                          x: '0%',
                          opacity: 1,
                      }}
                      exit={{
                          x: swipingNext ? '-100%' : '100%',
                          opacity: 0,
                      }}
                      transition={{
                          ease: 'easeInOut',
                          delay: 0.1,
                          duration: 0.2,
                      }}
                  >
                      {swipe.body}
                  </motion.div>
              </div>
          </motion.div>
      );
  },
);

interface DisplayProps {
  items: DisplayItemProps[];
  previousEvent?: (event: () => void) => void;
  nextEvent?: (event: () => void) => void;
}

const Display: FC<DisplayProps> = observer(({ items, nextEvent, previousEvent }) => {
  const [swipingNext, setSwipingNext] = useState(true);
  const [previousIsSet, setPreviousIsSet] = useState(false);
  const [nextIsSet, setNextIsSet] = useState(false);
  const store: Store = useMobxStores();

  const next = () => {
      setSwipingNext(true);
      store.setMainDisplayIndex((i) => {
          const nI = i >= items.length - 1 ? 0 : i + 1;
          return nI;
      });
  };

  const previous = () => {
      setSwipingNext(false);
      store.setMainDisplayIndex((i) => {
          const nI = i <= 0 ? items.length - 1 : i - 1;
          return nI;
      });
  };

  if (previousEvent && !previousIsSet) {
      previousEvent(previous);
      setPreviousIsSet(true);
  }

  if (nextEvent && !nextIsSet) {
      nextEvent(next);
      setNextIsSet(true);
  }

  const swipeHandlers = useSwipeable({
      trackMouse: true,
      onSwipedLeft: () => {
          DataLayer.swipeEvent({
              element: 'proximo',
              elementCategory: 'slide',
              pageSection: 'conteudo',
              pageSubsection: 'novo-scudo',
          });
          next();
      },
      onSwipedRight: () => {
          DataLayer.swipeEvent({
              element: 'anterior',
              elementCategory: 'slide',
              pageSection: 'conteudo',
              pageSubsection: 'novo-scudo',
          });
          previous();
      },
  });


  return (
      <div className={styles.container}>
          <div className={styles.wrapper}>
              <AnimateSharedLayout>
                  {items.map((swipe, index) => {
                      const getBgs = () => {
                          if (store.isDesktop) {
                              return swipe.background?.src?.fullPath3x;
                          }
                          if (store.isMinWidth) {
                              return swipe.background?.src?.fullPath;
                          }
                          return swipe.background?.src?.fullPath2x;
                      };

                      const style: StoriesBackgroundStyleProps = {
                          backgroundImage:
                              swipe.background?.src &&
                                  regex.testImage(swipe.background.src.fullPath)
                                  ? `url('${getBgs()}')`
                                  : 'unset',
                          backgroundColor: swipe.background?.color
                              ? swipe.background.color
                              : 'unset',
                      };

                      if (swipe.background?.style?.backgroundPosition) {
                          style['backgroundPosition'] =
                              swipe.background?.style?.backgroundPosition;
                      }
                      if (swipe.background?.style?.backgroundSize) {
                          style['backgroundSize'] =
                              swipe.background?.style?.backgroundSize;
                      }
                      if (swipe.background?.style?.backgroundRepeat) {
                          style['backgroundRepeat'] =
                              swipe.background?.style?.backgroundRepeat;
                      }
                      return (
                          <Slide
                              key={`swipe--${index}`}
                              index={index}
                              swipe={swipe}
                              style={style}
                              swipeHandlers={swipeHandlers}
                              swipingNext={swipingNext}
                          />
                      );
                  })}
              </AnimateSharedLayout>
              <ArrowButton
                  previous
                  className={styles.previous}
                  title={'Anterior'}
                  handleClick={() => {
                      DataLayer.clickEvent({
                          element: 'anterior',
                          elementCategory: 'icone',
                          pageSection: 'conteudo',
                          pageSubsection: 'novo-scudo',
                      });
                      previous();
                  }}
              />
              <ArrowButton
                  className={styles.next}
                  title={'Próximo'}
                  handleClick={() => {
                      DataLayer.clickEvent({
                          element: 'proximo',
                          elementCategory: 'icone',
                          pageSection: 'conteudo',
                          pageSubsection: 'novo-scudo',
                      });
                      next();
                  }}
              />
          </div>
      </div>
  );
});

export default Display;
