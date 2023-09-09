import {FC, useState, useCallback} from 'react';
import {
  ArrowButton,
  Conditional,
  IconButton,
  ResponsiveLazyImage,
  VimeoEmbed,
} from '@/prox/components';
import styles from './Gallery.module.scss';
import {Magnifying} from '@/prox/components/SvgComponents';
import {
  gallery as galleryData,
  GalleryAsset,
  galleryThumbs,
  galleryThumbsMobile,
} from '@/project/assets/gallery';
import Store from '@/project/store/Store';
import {useMobxStores} from '@/project/store';
import {observer} from 'mobx-react-lite';
import {AnimatePresence, motion} from 'framer-motion';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {A11y, Keyboard, Thumbs} from 'swiper';
import scssStyles from '@/prox/utils/scssStyles';
import {useSwipeable} from 'react-swipeable';
import DataLayer from '@/prox/utils/DataLayer';
import getRangeOfEntries from '@/prox/utils/getRangeOfEntries';
import Masonry from 'react-masonry-css';
//import Masonry from 'react-masonry-css';

SwiperCore.use([A11y, Keyboard, Thumbs]);

interface GalleryProps {
  versionId: string;
  setReference: (c?: GalleryAsset | undefined) => void;
  pageSubsection: string;
}

const Gallery: FC<GalleryProps> = observer(
    ({versionId, setReference, pageSubsection}) => {
      const store: Store = useMobxStores();
      const [controller, setController] = useState<SwiperCore>();
      const gallery: GalleryAsset[] = galleryData()[
          versionId
          ]?.map((g) => ({
        ...g,
        id: `gallery-image-${versionId}-${g.slug}`,
      }));

      if (!gallery) return null;

      const findIndex = () => {
        return gallery.findIndex(
            (g) =>
                g.slug === store.selectedGalleryImage[versionId]?.slug,
        );
      };

      const updateIndex = useCallback(
          (n: number) => {
            store.setSelectedGalleryImage(versionId, gallery[n]);
            if (controller && typeof n === 'number') {
              controller?.slideTo(n);
              console.log("stoaa", store.selectedGalleryImage);
            }
          },
          [controller, store, versionId, gallery],
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

      const ArrowRight = (
          <ArrowButton
              color={'#edede3'}
              title={`Próximo: ${
                  gallery[
                      findIndex() >= gallery.length - 1
                          ? 0
                          : findIndex() + 1
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
              color={'#edede3'}
              title={`Anterior: ${
                  gallery[
                      findIndex() <= 0
                          ? gallery.length - 1
                          : findIndex() - 1
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

      const bulletProps = getRangeOfEntries(findIndex(), gallery);

      return (
          <>
            {/* <div>
          <h2 className={styles.galleryTitle}>
            {' '}
            <strong>
              <Conditional notOn="mobile">NEW</Conditional>
              <strong> {''}</strong>
              {versionId.toUpperCase()}
            </strong>
          </h2>
        </div> */}

            <div className={styles.galleryContainer}>
              <div className={styles.aligner}>
                <div className={styles.mainImage}>
                  {!store.selectedGalleryImage.video && (
                      <IconButton
                          className={styles.expandIcon}
                          title="Expandir imagem"
                          icon={
                            <>
                              <Magnifying/>
                            </>
                          }
                          handleClick={() => {
                            DataLayer.clickEvent({
                              element: `amplia-foto-${
                                  gallery.findIndex(
                                      (c) =>
                                          c.slug ===
                                          store.selectedGalleryImage[versionId]
                                              ?.slug,
                                  ) + 1
                              }`,
                              elementCategory: 'icone',
                              pageSection: 'conteudo',
                              pageSubsection,
                            });
                            store.toggleGalleryExpanded();
                          }}
                      />
                  )}
                  <AnimatePresence>
                    {gallery.map((g) => {
                      const isMobile = !store.isDesktop;
                      if (
                          store.selectedGalleryImage[versionId]
                              ?.slug !== g.slug
                      )
                        return null;
                      return (
                          <motion.div
                              key={`main-gallery-${g.id}`}
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
                            {!!g.video && !!g.video.desktop ? (
                                <VimeoEmbed
                                    id={g.video.desktop}
                                    className={styles.videoHolder}
                                    title={g.title}
                                />
                            ) : (
                                <ResponsiveLazyImage
                                    alt={g.title}
                                    src={g.asset.fullPath}
                                    src2={g.asset.fullPath2x}
                                    src3={g.asset.fullPath3x}
                                />
                            )}
                          </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
                <Conditional notOn={'desktop'}>
                  <p>
                    {store.selectedGalleryImage[versionId]
                        ?.title}
                  </p>
                </Conditional>


                <Conditional
                    mobile={

                      <div className={styles.thumbs}>
                        <Swiper
                            centeredSlides
                            observer
                            observeParents
                            parallax
                            spaceBetween={10}
                            slidesPerView={Math.ceil(store.pageX / 150)}
                            onSwiper={(e) => setController(e)}
                            controller={
                              controller
                                  ? {control: controller}
                                  : undefined
                            }
                            className={styles.swiperMobile}
                        >
                          {galleryThumbsMobile()[versionId]?.map(
                              (p, index) => (
                                  <SwiperSlide
                                      key={`gallery-thumb-${versionId}-${index}`}
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
                                          updateIndex(index);
                                        }}
                                        className={scssStyles([
                                          store.selectedGalleryImage[
                                              versionId
                                              ]?.slug === p.slug
                                              ? styles.active
                                              : '',
                                        ])}
                                    >
                                      <ResponsiveLazyImage
                                          alt={p.title}
                                          src={p.asset}
                                          title={p.title}
                                      />
                                      {store.selectedGalleryImage[
                                          versionId
                                          ]?.slug === p.slug && (
                                          <div className={styles.bar}/>
                                      )}
                                    </button>
                                  </SwiperSlide>
                              ),
                          )}
                          <div
                              className={styles.controls}
                              {...swipeHandlers}
                          >
                            {ArrowLeft}
                            <div className={styles.bullets}>
                              {!!bulletProps.before &&
                              Array.from(
                                  Array(bulletProps.before).keys(),
                              )
                                  .slice(0, 2)
                                  .map((_, i) => (
                                      <button
                                          key={`smaller-bullet-galleryExpanded-before-${i}`}
                                          className={scssStyles([
                                            styles.bullet,
                                            i == 1 ||
                                            bulletProps.before === 1
                                                ? 'mediumBullet'
                                                : 'smallerBullet',
                                          ])}
                                          onClick={() => {
                                            DataLayer.clickEvent({
                                              element: `foto-${
                                                  findIndex() - 2
                                              }`,
                                              elementCategory: 'icone',
                                              pageSection: 'conteudo',
                                              pageSubsection,
                                            });
                                            updateIndex(findIndex() - 2);
                                          }}
                                      >
                                        <span/>
                                      </button>
                                  ))}
                              {gallery.map((c, index) => {
                                if (
                                    bulletProps.range.indexOf(index) ===
                                    -1
                                )
                                  return null;
                                return (
                                    <button
                                        title={c.title}
                                        key={`bullet-expanded-gallery-${c.id}`}
                                        className={scssStyles([
                                          styles.bullet,
                                          store.selectedGalleryImage[
                                              versionId
                                              ]?.slug === c.slug
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
                                          setReference(c);
                                          store.setSelectedGalleryImage(
                                              versionId,
                                              c,
                                          );
                                          store.expandedGallerySwiperController?.slideTo(
                                              gallery.findIndex(
                                                  (x) => x.slug === c.slug,
                                              ),
                                          );
                                        }}
                                    >
                                      <span/>
                                    </button>
                                );
                              })}
                              {!!bulletProps.after &&
                              Array.from(
                                  Array(bulletProps.after).keys(),
                              )
                                  .slice(0, 2)
                                  .map((_, i) => (
                                      <button
                                          key={`smaller-bullet-galleryExpanded-after-${i}`}
                                          className={scssStyles([
                                            styles.bullet,
                                            i == 0 ||
                                            bulletProps.after === 1
                                                ? 'mediumBullet'
                                                : 'smallerBullet',
                                          ])}
                                          onClick={() => {
                                            DataLayer.clickEvent({
                                              element: `foto-${
                                                  findIndex() + 2
                                              }`,
                                              elementCategory: 'icone',
                                              pageSection: 'conteudo',
                                              pageSubsection,
                                            });
                                            updateIndex(findIndex() + 2);
                                          }}
                                      >
                                        <span/>
                                      </button>
                                  ))}
                            </div>
                            {ArrowRight}
                          </div>
                        </Swiper>
                      </div>

                    }
                    desktop={
                      <div className={styles.thumbsDesktop}>
                        <Masonry
                            className={styles.masonryGrid}
                            columnClassName={styles.masonryGridColumn}
                            breakpointCols={2}
                        >
                          {galleryThumbs()[versionId]?.map(
                              (p, index) => (
                                  <button
                                      key={`galleryThumb-${p.id}`}
                                      title={p.title}
                                      onClick={() => {
                                        DataLayer.clickEvent({
                                          element: `foto-${index + 1}`,
                                          elementCategory: 'imagem',
                                          pageSection: 'conteudo',
                                          pageSubsection,
                                        });
                                        const asset = gallery.find(
                                            (x) => x.slug === p.slug,
                                        );
                                        if (asset) {
                                          store.setSelectedGalleryImage(
                                              versionId,
                                              asset,
                                          );
                                          setReference(asset);
                                        }
                                      }}
                                      className={scssStyles([
                                        store.selectedGalleryImage[versionId]
                                            ?.slug === p.slug
                                            ? styles.active
                                            : '',
                                      ])}
                                  >
                                    <ResponsiveLazyImage
                                        src={p.asset}
                                        alt={p.title}
                                        title={p.title}
                                    />
                                    {store.selectedGalleryImage[versionId]
                                        ?.slug === p.slug && (
                                        <div className={styles.bar}/>
                                    )}
                                  </button>
                              ),
                          )}

                        </Masonry>
                      </div>
                    }
                />
              </div>

              <Conditional notOn={'mobile'}>
                <p>
                  {store.selectedGalleryImage[versionId]
                      ?.title}
                </p>
              </Conditional>


            </div>
          </>
      );
    },
);

export default Gallery;
