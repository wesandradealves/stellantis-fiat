import { FC, useState, useCallback } from 'react';
import {
  ArrowButton,
  Conditional,
  IconButton,
  ResponsiveLazyImage,
  ScrollToAnchor,
  SectionElement,
} from '@/components';
import styles from './index.module.scss';
import { dataMenuLabel } from '@/mocks/menu';
import { Magnifying, Chevron } from '@/components/SvgComponents';
import {
  gallery,
  GalleryAsset,
  galleryThumbs,
} from '@/assets/gallery';
import StradaStore from '@/store/StradaStore';
import { useMobxStores } from '@/store';
import { observer } from 'mobx-react-lite';
import { AnimatePresence, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Keyboard, Thumbs } from 'swiper';
import scssStyles from '@/utils/scssStyles';
import { useSwipeable } from 'react-swipeable';
import ExpandedGallery from './ExpandedGallery';
import DataLayer from '@/utils/DataLayer';
import getRangeOfEntries from '@/utils/getRangeOfEntries';

SwiperCore.use([A11y, Keyboard, Thumbs]);

const reference = dataMenuLabel().find(
  (c) => c.slug === 'galeria',
);

const pageSubsection = 'galeria';

const Gallery: FC = observer(() => {
  const store: StradaStore = useMobxStores();
  const [controller, setController] = useState<SwiperCore>();

  const setReference = (c?: GalleryAsset) => {
    const suffix = c
      ? c.slug
      : gallery.find(
          (g) => g.id === store.selectedGalleryImage.id,
        )?.slug;
    reference && store.setCurrentlyVisibleNav(reference, suffix);
  };

  const findIndex = () => {
    return gallery.findIndex(
      (g) => g.id === store.selectedGalleryImage.id,
    );
  };

  const updateIndex = useCallback(
    (n: number) => {
      store.setSelectedGalleryImage(gallery[n]);
      if (controller && typeof n === 'number') {
        controller?.slideTo(n);
      }
    },
    [controller, store],
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
    onSwipedLeft: () => {
      DataLayer.swipeEvent({
        element: 'proximo',
        elementCategory: 'imagem',
        pageSection: 'conteudo',
        pageSubsection,
      });
      next();
    },
    onSwipedRight: () => {
      DataLayer.swipeEvent({
        element: 'anterior',
        elementCategory: 'imagem',
        pageSection: 'conteudo',
        pageSubsection,
      });
      previous();
    },
  });

  const bulletProps = getRangeOfEntries(findIndex(), gallery);

  return (
    <>
      <SectionElement
        id="Gallery"
        className={styles.container}
        noPadding
        heightBehaviour="unset"
        overrideReference
        navReference={reference}
        onSlugSuffix={(slug) => {
          const asset = gallery.find((c) => c.slug === slug);
          if (asset) {
            store.setSelectedGalleryImage(asset);
          }
        }}
        onVisibilityChange={(visible) => {
          if (visible) {
            setReference();
          }
        }}
      >
        <ScrollToAnchor
          reference={reference}
          className={styles.scrollCta}
          pageSubsection="galeria"
          title={`Que tal conhecer cada detalhe da sua próxima picape?`}
        >
          <h2>
            Que tal conhecer cada detalhe da sua próxima picape?
          </h2>
          <Chevron />
        </ScrollToAnchor>
        <div className={styles.galleryContainer}>
          <div className={styles.aligner}>
            <div className={styles.mainImage}>
              <IconButton
                className={styles.expandIcon}
                title="Expandir imagem"
                icon={
                  <>
                    <Magnifying />
                  </>
                }
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: `amplia-foto-${
                      gallery.findIndex(
                        (c) =>
                          c.id === store.selectedGalleryImage.id,
                      ) + 1
                    }`,
                    elementCategory: 'icone',
                    pageSection: 'conteudo',
                    pageSubsection,
                  });
                  store.toggleGalleryExpanded();
                }}
              />
              <AnimatePresence>
                {gallery.map((g) => {
                  const isMobile = !store.isDesktop;
                  if (store.selectedGalleryImage.id !== g.id)
                    return null;
                  return (
                    <motion.div
                      key={`main-m-gallery-${g.id}`}
                      {...swipeHandlers}
                      initial={{
                        opacity: 0,
                        y: isMobile ? -100 : 0,
                        x: !isMobile ? 100 : 0,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        x: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: isMobile ? 100 : 0,
                        x: !isMobile ? 100 : 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <ResponsiveLazyImage
                        alt={g.alt}
                        title={g.title}
                        src={g.asset.fullPath}
                        src2={g.asset.fullPath2x}
                        src3={g.asset.fullPath3x}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            <Conditional
              mobile={
                <div className={styles.thumbs}>
                  <Swiper
                    keyboard
                    centeredSlides
                    observer
                    observeParents
                    parallax
                    spaceBetween={10}
                    slidesPerView={Math.ceil(store.pageX / 150)}
                    onSwiper={(e) => setController(e)}
                    controller={
                      controller
                        ? { control: controller }
                        : undefined
                    }
                    className={styles.swiperMobile}
                  >
                    {galleryThumbs.map((p, index) => (
                      <SwiperSlide
                        key={`gallery-m-thumb-${p.id}`}
                        className={styles.swiperSlide}
                      >
                        <button
                          title={p.title}
                          onClick={() => {
                            DataLayer.clickEvent({
                              element: `foto-${index + 1}`,
                              elementCategory: 'imagem',
                              pageSection: 'conteudo',
                              pageSubsection,
                            });
                            setReference(p);
                            updateIndex(index);
                          }}
                          className={scssStyles([
                            store.selectedGalleryImage.id ===
                            p.id
                              ? styles.active
                              : '',
                          ])}
                        >
                          <img
                            src={p.thumb}
                            alt={p.alt}
                            title={p.title}
                          />
                          {store.selectedGalleryImage.id ===
                            p.id && (
                            <div className={styles.bar} />
                          )}
                        </button>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              }
              desktop={
                <div className={styles.thumbsDesktop}>
                  {galleryThumbs.map((p, index) => (
                    <button
                      key={`galleryThumb-m-${p.id}`}
                      title={p.title}
                      onClick={() => {
                        DataLayer.clickEvent({
                          element: `foto-${index + 1}`,
                          elementCategory: 'imagem',
                          pageSection: 'conteudo',
                          pageSubsection,
                        });
                        setReference(p);
                        store.setSelectedGalleryImage(p);
                      }}
                      className={scssStyles([
                        store.selectedGalleryImage.id === p.id
                          ? styles.active
                          : '',
                      ])}
                    >
                      <img
                        src={p.thumb}
                        alt={p.alt}
                        title={p.title}
                      />
                      {store.selectedGalleryImage.id ===
                        p.id && <div className={styles.bar} />}
                    </button>
                  ))}
                </div>
              }
            />
          </div>
          <Conditional notOn="desktop">
            <div className={styles.controls}>
              <ArrowButton
                light
                previous
                title={`Anterior: ${
                  gallery[
                    findIndex() <= 0
                      ? gallery.length - 1
                      : findIndex() - 1
                  ]?.title ?? ''
                }`}
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
              <div className={styles.bullets}>
                {!!bulletProps.before &&
                  Array.from(Array(bulletProps.before).keys())
                    .slice(0, 2)
                    .map((_, i) => (
                      <button
                        key={`smaller-bullet-gallery--before-${i}`}
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
                      key={`bullet-gallery-${c.id}`}
                      title={c.title}
                      className={scssStyles([
                        styles.bullet,
                        store.selectedGalleryImage.id === c.id
                          ? styles.active
                          : '',
                      ])}
                      onClick={() => {
                        DataLayer.clickEvent({
                          element: `foto-${index + 1}`,
                          elementCategory: 'icone',
                          pageSection: 'conteudo',
                          pageSubsection,
                        });
                        store.setSelectedGalleryImage(c);
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
                        key={`smaller-bullet-gallery-after-${i}`}
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
              <ArrowButton
                light
                title={`Próximo: ${
                  gallery[
                    findIndex() >= gallery.length - 1
                      ? 0
                      : findIndex() + 1
                  ]?.title ?? ''
                }`}
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: 'proximo',
                    elementCategory: 'icone',
                    pageSection: 'conteudo',
                    pageSubsection,
                  });
                  next();
                }}
              />
            </div>
          </Conditional>
        </div>
      </SectionElement>

      <AnimatePresence>
        {store.galleryExpanded && (
          <ExpandedGallery setReference={setReference} />
        )}
      </AnimatePresence>
    </>
  );
});

export default Gallery;
