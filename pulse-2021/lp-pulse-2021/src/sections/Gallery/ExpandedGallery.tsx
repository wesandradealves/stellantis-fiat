import { useMobxStores } from '@/store';
import PulseStore from '@/store/PulseStore';
import { FC, useEffect, useCallback, useState } from 'react';
import styles from './Gallery.module.scss';
import { gallery as galleryAll, GalleryAsset } from '@/assets/gallery';
import { ArrowButton, Conditional, ResponsiveLazyImage } from '@/components';
import { motion } from 'framer-motion';
import scssStyles from '@/utils/scssStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwipeable } from 'react-swipeable';
import { Close } from '@/components/SvgComponents';
import DataLayer from '@/utils/DataLayer';
import getRangeOfEntries from '@/utils/getRangeOfEntries';
import { observer } from 'mobx-react-lite';
import getClientXFromDifferentEvents from '@/utils/getClientXFromDifferentEvents';

const VisibleImage: FC<{ g: GalleryAsset }> = observer(({ g }) => {
  return (
    <ResponsiveLazyImage
      alt={g.title}
      src={g.asset.fullPath}
      src2={g.asset.fullPath2x}
      src3={g.asset.fullPath3x}
    />
  )
});

const pageSubsection = 'galeria-modal';

const gallery = galleryAll.filter((c) => !c.video);

const ExpandedGallery: FC = observer(() => {
  const store: PulseStore = useMobxStores();
  const [, update] = useState(false);
  const [touchLocation, setTouchLocation] = useState<PointerEvent['clientX']>();

  const findIndex = useCallback(() => {
    return gallery.findIndex((g) => g.id === store.selectedGalleryImage.id);
  }, [store.selectedGalleryImage?.id]);

  const updateIndex = useCallback((n: number) => {
    store.setSelectedGalleryImage(gallery[n]);
    store.expandedSwiperController?.slideTo(n);
  }, [store]);

  const next = () => {
    const index = findIndex();
    const nIndex = index + 1 > gallery.length - 1 ? 0 : index + 1;
    updateIndex(nIndex);
  }
  const previous = () => {
    const index = findIndex();
    const nIndex = index - 1 < 0 ? gallery.length - 1 : index - 1;
    updateIndex(nIndex);
  }

  const swipeHandlers = useSwipeable({
    trackMouse: true,
    onSwipedLeft: () => next(),
    onSwipedRight: () => previous(),
  });

  const ArrowRight = (
    <ArrowButton
      className={styles.arrowRight}
      handleClick={() => {
        DataLayer.clickEvent({
          element: 'proximo',
          elementCategory: 'imagem',
          pageSection: 'conteudo',
          pageSubsection,
        });
        next();
      }}
    />
  );

  const ArrowLeft = (
    <ArrowButton
      previous
      className={styles.arrowLeft}
      handleClick={() => {
        DataLayer.clickEvent({
          element: 'anterior',
          elementCategory: 'imagem',
          pageSection: 'conteudo',
          pageSubsection,
        });
        previous();
      }}
    />
  );

  useEffect(() => {
    update((v) => !v);
  }, []);

  useEffect(() => {
    if (store.galleryExpanded) {
      store.expandedSwiperController?.slideTo(findIndex());
    }
  }, [store.galleryExpanded, findIndex, store.expandedSwiperController]);

  useEffect(() => {
    const escapeClose = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') {
        store.setGalleryExpanded(false);
      }
    }

    document.body?.addEventListener('keydown', (e) => escapeClose(e));

    return () => {
      document.body?.removeEventListener('keydown', (e) => escapeClose(e));
    }
  }, [store]);

  const bulletProps = getRangeOfEntries(findIndex(), gallery);

  return (
    <motion.div
      className={styles.expandedGallery}
      initial={{
        opacity: 0.2,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0.2,
        y: 100,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <Swiper
        observeParents
        observer
        parallax
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(e) => store.setExpandedSwiperController(e)}
        controller={store.expandedSwiperController ? { control: store.expandedSwiperController } : undefined}
        onSlideChange={(e) => {
          const index = e.activeIndex;
          store.setSelectedGalleryImage(gallery[index]);
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
            pageSubsection,
          });
        }}
      >
        {gallery.map((g) => (
          <SwiperSlide key={`expanded-gallery-${g.id}`} className={styles.expandedSlide}>
            <VisibleImage g={g} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Conditional notOn="desktop">
        <div className={styles.controls} {...swipeHandlers}>
          {ArrowLeft}
          <div className={styles.bullets}>
            {!!bulletProps.before && Array.from(Array(bulletProps.before).keys()).slice(0, 2).map((_, i) => (
              <button
                key={`smaller-bullet-galleryExpanded-before-${i}`}
                className={scssStyles([
                  styles.bullet,
                  i == 1 || bulletProps.before === 1 ? 'mediumBullet' : 'smallerBullet'
                ])}
                onClick={() => {
                  DataLayer.clickEvent({
                    element: `foto-${findIndex() - 2}`,
                    elementCategory: 'icone',
                    pageSection: 'conteudo',
                    pageSubsection,
                  });
                  updateIndex(findIndex() - 2);
                }}
              >
                <span />
              </button>
            ))}
            {gallery.map((c, index) => {
              if (bulletProps.range.indexOf(index) === -1) return null;
              return (
                <button
                  title={c.title}
                  key={`bullet-${c.id}`}
                  className={scssStyles([
                    styles.bullet,
                    store.selectedGalleryImage.id === c.id ? styles.active : '',
                  ])}
                  onClick={() => {
                    DataLayer.clickEvent({
                      element: `foto-${index + 1}`,
                      elementCategory: 'imagem',
                      pageSection: 'conteudo',
                      pageSubsection,
                    });
                    store.setSelectedGalleryImage(c);
                    store.expandedSwiperController?.slideTo(gallery.findIndex((x) => x.id === c.id));
                  }}
                >
                  <span />
                </button>
              );
            })}
            {!!bulletProps.after && Array.from(Array(bulletProps.after).keys()).slice(0, 2).map((_, i) => (
              <button
                key={`smaller-bullet-galleryExpanded-after-${i}`}
                className={scssStyles([
                  styles.bullet,
                  i == 0 || bulletProps.after === 1 ? 'mediumBullet' : 'smallerBullet'
                ])}
                onClick={() => {
                  DataLayer.clickEvent({
                    element: `foto-${findIndex() + 2}`,
                    elementCategory: 'icone',
                    pageSection: 'conteudo',
                    pageSubsection,
                  });
                  updateIndex(findIndex() + 2);
                }}
              >
                <span />
              </button>
            ))}
          </div>
          {ArrowRight}
        </div>
      </Conditional>
      <button
        title="Fechar"
        className={styles.closeButton}
        onClick={() => {
          DataLayer.clickEvent({
            element: 'fechar',
            elementCategory: 'icone',
            pageSection: 'conteudo',
            pageSubsection,
          });
          store.toggleGalleryExpanded();
        }}
      >
        <Close />
      </button>
      <Conditional notOn="mobile">
        <div className={styles.controlsDesktop}>
          {ArrowLeft}
          {ArrowRight}
        </div>
      </Conditional>
    </motion.div>
  )
});

export default ExpandedGallery;
