import {
  StoriesBackgroundStyleProps,
  DisplayItemProps,
} from '@/models';
import {
  FC,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import styles from './Display.module.scss';
import regex from '@/utils/testRegex';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import PulseStore from '@/store/PulseStore';
import { useMobxStores } from '@/store';
import { observer } from 'mobx-react-lite';
import { ArrowButton } from '..';
import DataLayer from '@/utils/DataLayer';
import { CSSProperties } from 'node_modules/@types/react';

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
  style: CSSProperties;
  next: () => void;
  previous: () => void;
}

const Slide: FC<SlideProps> = observer(
  ({ index, swipe, swipingNext, next, previous, style }) => {
    const store: PulseStore = useMobxStores();
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

    const swipeHandlers = useSwipeable({
      trackMouse: true,
      onSwipedLeft: () => next(),
      onSwipedRight: () => previous(),
    });
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
}
const Display: FC<DisplayProps> = observer(({ items }) => {
  const [swipingNext, setSwipingNext] = useState(true);
  const store: PulseStore = useMobxStores();

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
                next={next}
                previous={previous}
                swipingNext={swipingNext}
              />
            );
          })}
        </AnimateSharedLayout>
        <ArrowButton
          previous
          className={styles.previous}
          handleClick={() => {
            DataLayer.clickEvent({
              element: 'anterior',
              elementCategory: 'card',
              pageSection: 'conteudo',
              pageSubsection: 'fiat-pulse',
            });
            previous();
          }}
        />
        <ArrowButton
          className={styles.next}
          handleClick={() => {
            DataLayer.clickEvent({
              element: 'proximo',
              elementCategory: 'card',
              pageSection: 'conteudo',
              pageSubsection: 'fiat-pulse',
            });
            next();
          }}
        />
      </div>
    </div>
  );
});

export default Display;
