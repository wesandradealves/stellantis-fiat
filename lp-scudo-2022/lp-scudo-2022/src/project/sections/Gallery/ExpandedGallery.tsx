import { useMobxStores } from '@/project/store';
import Store from '@/project/store/Store';
import { FC, useEffect, useCallback, useState } from 'react';
import styles from './Gallery.module.scss';
import {
  gallery as galleryAssets,
  GalleryAsset,
} from '@/project/assets/gallery';
import {
  ArrowButton,
  Conditional,
  ResponsiveLazyImage,
} from '@/prox/components';
import { motion } from 'framer-motion';
import scssStyles from '@/prox/utils/scssStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwipeable } from 'react-swipeable';
import { Close } from '@/prox/components/SvgComponents';
import DataLayer from '@/prox/utils/DataLayer';
import getRangeOfEntries from '@/prox/utils/getRangeOfEntries';
import { observer } from 'mobx-react-lite';
import getClientXFromDifferentEvents from '@/prox/utils/getClientXFromDifferentEvents';

const VisibleImage: FC<{ g: GalleryAsset }> = observer(
  ({ g }) => {
    return (
      <ResponsiveLazyImage
        alt={g.title}
        src={g.asset.fullPath}
        src2={g.asset.fullPath2x}
        src3={g.asset.fullPath3x}
      />
    );
  },
);

const pageSubsection = 'galeria-modal';

const ExpandedGallery: FC = observer(({}) => {
  const store: Store = useMobxStores();
  const [, update] = useState(false);
  const [touchLocation, setTouchLocation] =
    useState<PointerEvent['clientX']>();
  const gallery = galleryAssets()[store.currentVersion.slug];
  const findIndex = useCallback(() => {
    return gallery.findIndex(
      (g) =>
        g.slug ===
        store.selectedGalleryImage[store.currentVersion.slug]
          .slug,
    );
  }, [
    gallery,
    store.selectedGalleryImage,
    store.currentVersion.slug,
  ]);

  const updateIndex = useCallback(
    (n: number) => {
      store.setSelectedGalleryImage(
        store.currentVersion.slug,
        gallery[n],
      );
      store.expandedGallerySwiperController?.slideTo(n);
    },
    [store, gallery],
  );

  const next = () => {
    const index = findIndex();
    const nIndex =
      index + 1 > gallery.length - 1 ? 0 : index + 1;
    updateIndex(nIndex);
  };
  const previous = () => {
    const index = findIndex();
    const nIndex =
      index - 1 < 0 ? gallery.length - 1 : index - 1;
    updateIndex(nIndex);
  };

  const swipeHandlers = useSwipeable({
    trackMouse: true,
    onSwipedLeft: () => next(),
    onSwipedRight: () => previous(),
  });

  const ArrowRight = (
    <ArrowButton
      title={`Próximo: ${
        gallery[
          findIndex() >= gallery.length - 1 ? 0 : findIndex() + 1
        ]?.title ?? ''
      }`}
      className={styles.arrowRight}
      handleClick={() => {
        DataLayer.clickEvent({
          element: 'próximo',
          elementCategory: 'icone',
          pageSection: 'conteudo',
          pageSubsection,
        });
        next();
      }}
    />
  );

  const ArrowLeft = (
    <ArrowButton
      title={`Anterior: ${
        gallery[
          findIndex() <= 0 ? gallery.length - 1 : findIndex() - 1
        ]?.title ?? ''
      }`}
      previous
      className={styles.arrowLeft}
      handleClick={() => {
        DataLayer.clickEvent({
          element: 'anterior',
          elementCategory: 'icone',
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
      store.expandedGallerySwiperController?.slideTo(
        findIndex(),
      );
    }
  }, [
    store.galleryExpanded,
    findIndex,
    store.expandedGallerySwiperController,
  ]);

  useEffect(() => {
    const escapeClose = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') {
        store.setGalleryExpanded(false);
      }
    };

    document.body?.addEventListener('keydown', (e) =>
      escapeClose(e),
    );

    return () => {
      document.body?.removeEventListener('keydown', (e) =>
        escapeClose(e),
      );
    };
  }, [store]);

  const bulletProps = getRangeOfEntries(findIndex(), gallery);

  return (
    <motion.div
      className={styles.expandedGallery}
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 100,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Swiper
        keyboard
        observeParents
        observer
        parallax
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(e) =>
          store.setExpandedGallerySwiperController(e)
        }
        controller={
          store.expandedGallerySwiperController
            ? {
                control: store.expandedGallerySwiperController,
              }
            : undefined
        }
        onSlideChange={(e) => {
          const index = e.activeIndex;
          const galleryAsset = gallery[index];

          store.setSelectedGalleryImage(
            store.currentVersion.slug,
            galleryAsset,
          );
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
          )
            DataLayer.swipeEvent({
              element:
                (touchLocation ?? 0) > clientX
                  ? 'proximo'
                  : 'anterior',
              elementCategory: 'imagem',
              pageSection: 'conteudo',
              pageSubsection,
            });
        }}
      >
        {gallery.map((g) => (
          <SwiperSlide
            key={`expanded-slide-gallery-${g.id}`}
            className={styles.expandedSlide}
          >
            <VisibleImage g={g} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Conditional notOn="desktop">
        <div className={styles.controls} {...swipeHandlers}>
          {ArrowLeft}
          <div className={styles.bullets}>
            {!!bulletProps.before &&
              Array.from(Array(bulletProps.before).keys())
                .slice(0, 2)
                .map((_, i) => (
                  <button
                    key={`smaller-bullet-galleryExpanded-before-${i}`}
                    className={scssStyles([
                      styles.bullet,
                      i == 1 || bulletProps.before === 1
                        ? 'mediumBullet'
                        : 'smallerBullet',
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
              if (bulletProps.range.indexOf(index) === -1)
                return null;
              return (
                <button
                  title={c.title}
                  key={`bullet-expanded-gallery-${c.id}`}
                  className={scssStyles([
                    styles.bullet,
                    store.selectedGalleryImage[
                      store.currentVersion.slug
                    ].id === c.id
                      ? styles.active
                      : '',
                  ])}
                  onClick={() => {
                    DataLayer.clickEvent({
                      element: `foto-${index + 1}`,
                      elementCategory: 'imagem',
                      pageSection: 'conteudo',
                      pageSubsection,
                    });

                    store.setSelectedGalleryImage(
                      store.currentVersion.slug,
                      c,
                    );
                    store.expandedGallerySwiperController?.slideTo(
                      gallery.findIndex(
                        (x) => x.slug === c.slug,
                      ),
                    );
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
                    key={`smaller-bullet-galleryExpanded-after-${i}`}
                    className={scssStyles([
                      styles.bullet,
                      i == 0 || bulletProps.after === 1
                        ? 'mediumBullet'
                        : 'smallerBullet',
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
  );
});

export default ExpandedGallery;
