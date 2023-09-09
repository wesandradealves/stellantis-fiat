import { useSwipeable } from "react-swipeable";
import { FC, useState, useEffect, useRef, useCallback } from "react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import styles from "./Stories.module.scss";
import { Chevron, LoadingFlag, Pointer } from "../SvgComponents";
import { ArrowButton, ScrollToAnchor } from "@/components";
import regex from "@utils/testRegex";
import { dataMenuLabel } from "@/data/menu";
import DataLayer from "@utils/DataLayer";
import FastbackStore from "@store/FastbackStore";
import { useMobxStores } from "@/store";
import useLongPressDiv from "@/hooks/useLongPressDiv";
import { StoriesBackgroundStyleProps, StoriesItemProps } from "@/models";
import scssStyles from "@/utils/scssStyles";

interface StoryProps {
  story: StoriesItemProps;
  swipingNext: boolean;
  index: number;
  currentIndex: number;
  style: StoriesBackgroundStyleProps;
  next: () => void;
  previous: () => void;
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Story: FC<StoryProps> = ({
  story,
  index,
  swipingNext,
  currentIndex,
  style,
  state,
  next,
  previous,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const active = index === currentIndex;
  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, [videoRef]);

  const longPress = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    //videoRef?.current?.pause();
    state[1](false);
    e.preventDefault();
  };

  const clear = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    videoRef?.current?.play();
    state[1](true);
    e.preventDefault();
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      DataLayer.swipeEvent({
        elementCategory: "stories",
        element: "proximo",
        pageSection: "conteudo",
        pageSubsection: "novo-fastback",
      });
      next();
    },
    onSwipedRight: () => {
      DataLayer.swipeEvent({
        elementCategory: "stories",
        element: "anterior",
        pageSection: "conteudo",
        pageSubsection: "novo-fastback",
      });
      previous();
    },
  });

  const {
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchStart,
    onTouchCancel,
  } = useLongPressDiv(
    {
      onLongPress: longPress,
      onClear: clear,
    },
    {
      delay: 400,
    }
  );

  const animate = useCallback(() => {
    if (active)
      return {
        opacity: 1,
        left: "0%",
      };
    if (swipingNext)
      return {
        opacity: 0,
        left: index < currentIndex ? "-100%" : "100%",
      };
    return {
      opacity: 0,
      left: index < currentIndex ? "-100%" : "100%",
    };
  }, [active, swipingNext, currentIndex, index]);

  const isVideo = regex.testVideo(story?.videoProps?.src ?? "");

  return (
    <motion.div
      {...swipeHandlers}
      key={`story-l-${index}`}
      className={styles.story}
      onMouseDown={(e) => onMouseDown(e)}
      onMouseLeave={(e) => onMouseLeave(e)}
      onMouseUp={(e) => onMouseUp(e)}
      onTouchEnd={(e) => onTouchEnd(e)}
      onTouchStart={(e) => onTouchStart(e)}
      onTouchCancel={(e) => onTouchCancel(e)}
      layoutId={`story-v-v-${index}`}
      initial={
        !active
          ? {
              opacity: 0,
            }
          : undefined
      }
      animate={animate()}
      transition={{
        left: { type: "spring", stiffness: 300, damping: 30 },
        duration: 0.2,
      }}
    >
      <div className={styles.imageHolder} style={style}>
        {story.videoProps?.src && isVideo && (
          <>
            <LoadingFlag />
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
          </>
        )}
        <motion.div
          {...swipeHandlers}
          key={`story-${index}`}
          className={styles.story}
          initial={{
            x: swipingNext ? "100%" : "-100%",
          }}
          animate={{
            x: "0%",
          }}
          exit={{
            x: swipingNext ? "-100%" : "100%",
          }}
          transition={{
            ease: "easeInOut",
            delay: 0.1,
            duration: 0.2,
          }}
        >
          {story.body}
        </motion.div>
      </div>
    </motion.div>
  );
};

interface StoriesProps {
  items: StoriesItemProps[];
}

const Stories: FC<StoriesProps> = ({ items }) => {
  const store: FastbackStore = useMobxStores();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipingNext, setSwipingNext] = useState(true);
  const playControl = useState(true);
  const wrapperRef = useRef<null | HTMLDivElement>(null);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timer?.current) {
      clearTimeout(timer.current);
    }
    if (wrapperRef) {
      if ((wrapperRef?.current as HTMLDivElement)?.style) {
        (wrapperRef.current as HTMLDivElement).style.backgroundColor =
          items[currentIndex].background?.color ?? "transparent";
      }
    }
    timer.current = setTimeout(() => {
      setSwipingNext(true);
      setCurrentIndex((i) => {
        const nI = i >= items.length - 1 ? 0 : i + 1;
        return nI;
      });
    }, items[0].durationInS * 1000);

    return () => {
      if (timer?.current) {
        clearTimeout(timer.current);
      }
    };
  }, [items, currentIndex]);

  const next = () => {
    setSwipingNext(true);
    setCurrentIndex((i) => {
      const nI = i >= items.length - 1 ? 0 : i + 1;
      return nI;
    });
  };

  const previous = () => {
    setSwipingNext(false);
    setCurrentIndex((i) => {
      const nI = i <= 0 ? items.length - 1 : i - 1;
      return nI;
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.bar}>
        {items.map((story, index) => {
          const hasGone = currentIndex > index;
          const active = currentIndex === index;
          return (
            <div
              key={`story-bar-${index}`}
              className={styles.barItemHolder}
              onClick={() => {
                setSwipingNext(currentIndex < index);
                setCurrentIndex(index);
                DataLayer.clickEvent({
                  elementCategory: "stories",
                  element: story.title2 || "",
                  pageSection: "conteudo",
                  pageSubsection: "novo-fastback",
                });
              }}
            >
              <div
                className={scssStyles([
                  styles.barItem,
                  hasGone ? styles.hasGone : "",
                  active ? styles.hasActive : "",
                ])}
              >
                <AnimatePresence>
                  {active && (
                    <div
                      className={styles.loadinBar}
                      style={{
                        animationDuration: `${story.durationInS}s`,
                        animationPlayState: playControl[0]
                          ? "running"
                          : "paused",
                      }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
      <div ref={wrapperRef} className={styles.wrapper}>
        <button
          title="Story anterior"
          className={styles.previous}
          onClick={() => {
            DataLayer.clickEvent({
              element: "anterior",
              elementCategory: "stories",
              pageSection: "conteudo",
              pageSubsection: "novo-fastback",
            });
            previous();
          }}
        />
        <button
          title="Próximo story"
          className={styles.next}
          onClick={() => {
            DataLayer.clickEvent({
              element: "proximo",
              elementCategory: "stories",
              pageSection: "conteudo",
              pageSubsection: "novo-fastback",
            });
            next();
          }}
        />

        <div className={styles.clickCta}>
          <Pointer />
          Toque e veja as novidades
        </div>
        <ScrollToAnchor
          reference={dataMenuLabel()[1]}
          className={scssStyles([
            styles.scrollCta,
            items[currentIndex].scrollCtaOrientation === "vertical"
              ? styles.scrollCtaVertical
              : styles.scrollCtaHorizontal,
          ])}
          pageSubsection="fiat-fastback"
          title="Scroll para saber mais"
        >
          <p>Scroll para saber mais</p>
          <div>
            <Chevron color="#FFB80F" />
            <Chevron color="#FFB80F" />
            <Chevron color="#FFB80F" />
          </div>
        </ScrollToAnchor>

        <AnimateSharedLayout>
          {items.map((story, index) => {
            const getBgs = () => {
              if (store.isDesktop) {
                return story.background?.src?.fullPath3x;
              }
              if (store.isMinWidth) {
                return story.background?.src?.fullPath;
              }
              return story.background?.src?.fullPath2x;
            };
            const style: StoriesBackgroundStyleProps = {
              backgroundImage:
                story.background?.src &&
                regex.testImage(story.background.src.fullPath)
                  ? `url('${getBgs()}')`
                  : "unset",
              backgroundColor: story.background?.color
                ? story.background.color
                : "unset",
            };
            if (story.background?.style?.backgroundPosition) {
              style["backgroundPosition"] =
                story.background?.style?.backgroundPosition;
            }
            if (story.background?.style?.backgroundSize) {
              style["backgroundSize"] = story.background?.style?.backgroundSize;
            }
            if (story.background?.style?.backgroundRepeat) {
              style["backgroundRepeat"] =
                story.background?.style?.backgroundRepeat;
            }
            return (
              <Story
                key={`story---${story.durationInS}${index}`}
                story={story}
                index={index}
                style={style}
                previous={previous}
                next={next}
                currentIndex={currentIndex}
                swipingNext={swipingNext}
                state={playControl}
              />
            );
          })}
        </AnimateSharedLayout>
        {!!items[currentIndex]?.includeGradient && (
          <div className={styles.gradient} />
        )}
        <AnimatePresence>
          {!!items[currentIndex]?.showNext && items[currentIndex + 1]?.title && (
            <motion.div
              title={items[currentIndex + 1].title2}
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 1,
                y: 100,
              }}
              className={styles.nextTopic}
              transition={{
                duration: 0.2,
                x: {
                  type: "inertia",
                  bounceStiffness: 300,
                  bounceDamping: 400,
                },
              }}
              onClick={() => {
                DataLayer.clickEvent({
                  element: "proximo",
                  elementCategory: "stories",
                  pageSection: "conteudo",
                  pageSubsection: "novo-fastback",
                });
                next();
              }}
            >
              <div className={styles.nextTopicText}>
                {items[currentIndex + 1].title}
              </div>
              <ArrowButton
                className={styles.nextBtn}
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: "proximo",
                    elementCategory: "icone",
                    pageSection: "conteudo",
                    pageSubsection: "teste",
                  });
                  next();
                }}
                title="Foto anterior"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Stories;
