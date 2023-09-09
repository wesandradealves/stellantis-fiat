import {
  FC,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import {
  ArrowButton,
  Conditional,
  CTAButton,
  ResponsiveLazyImage,
  ScrollToAnchor,
  HighlightedText,
  SectionElement,
} from '@/components';
import styles from './index.module.scss';
import { PRODUCT_NAME, metaTags } from '@/constants';
import {
  dataMenuLabel,
  links,
  COMPRE_TITLE,
} from '@/mocks/menu';
import {
  Chevron,
  ChevronRight,
} from '@/components/SvgComponents';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Keyboard, Thumbs } from 'swiper';
import { ui, versions, versionsThumbs } from '@/assets';
import { dataVersions } from '@/mocks/versions';
import scssStyles from '@/utils/scssStyles';
import { IVersion } from '@/models';
import { useOnScreen } from '@/hooks';
import StradaStore from '@/store/StradaStore';
import { useMobxStores } from '@/store';
import { observer } from 'mobx-react-lite';
import DataLayer from '@/utils/DataLayer';
import getClientXFromDifferentEvents from '@/utils/getClientXFromDifferentEvents';

SwiperCore.use([A11y, Keyboard, Thumbs]);

const pageSubsection = 'famiglia-strada';

const reference = dataMenuLabel().find(
  (c) => c.slug === pageSubsection,
);

interface VersionSlideProps {
  version: IVersion;
  load: boolean;
}

const VersionSlide: FC<VersionSlideProps> = observer(
  ({ version, load }) => {
    const store: StradaStore = useMobxStores();
    const [isOnScreen, setIsOnScreen] = useState(false);
    const [isDoubleCabin, setIsDoubleCabin] = useState(false);
    // const [, updater] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const refRight = useRef<HTMLDivElement | null>(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
      if (
        !!store.versionSlugSuffix &&
        store.versionSlugSuffix.includes('-cd')
      ) {
        setIsDoubleCabin(true);
      }
    }, [store]);

    return (
      <div
        className={scssStyles([
          styles.aligner,
          isVisible ? styles.isActive : '',
        ])}
        ref={ref}
      >
        <div className={styles.row}>
          {/* View para Mobile*/}
          <Conditional notOn="desktop">
            <div className={styles.infoDetails} ref={refRight}>
              <div className={styles.infoDetailsBox}>
                <div className={styles.details}>
                  <p className={styles.firstName}>
                    {`${metaTags.brandName} ${metaTags.productName}`}
                  </p>
                  <p className={styles.secondName}>
                    <HighlightedText
                      color="#ff7d32"
                      padding="0 10px"
                    >
                      {version.name.split(' ')[0]}
                    </HighlightedText>

                    {version.name.split(' ')[1] && (
                      <HighlightedText
                        color="#ff7d32"
                        margin="2px 0 0 0"
                        padding="0 10px"
                      >
                        {version.name.split(' ')[1]}
                      </HighlightedText>
                    )}
                  </p>

                  <div className={styles.carInfo}>
                    <ResponsiveLazyImage
                      className={scssStyles([
                        styles.productImage,
                        isOnScreen ? styles.isVisible : '',
                      ])}
                      containerClassName={
                        styles.productImageContainer
                      }
                      alt={version.name}
                      forceLoad={load}
                      width="100%"
                      height="100%"
                      objectFit="contain"
                      onScreen={(b) => setIsOnScreen(b)}
                      src={`${versions[version.id].path}${
                        isDoubleCabin ? '-cd' : ''
                      }.${versions[version.id].extension}`}
                      src2={`${versions[version.id].path}${
                        isDoubleCabin ? '-cd' : ''
                      }@2x.${versions[version.id].extension}`}
                      src3={`${versions[version.id].path}${
                        isDoubleCabin ? '-cd' : ''
                      }@3x.${versions[version.id].extension}`}
                    />
                  </div>

                  {version.details.map((detail, index) => (
                    <p
                      key={`version-detail-${index}`}
                      className={styles.text}
                    >
                      <ChevronRight
                        title={`detalhes-${version.name}`}
                      />
                      {detail}
                    </p>
                  ))}
                  {version.hasDoubleCabin && (
                    <div
                      className={scssStyles([
                        styles.doubleCabinToggler,
                        styles.mobile,
                      ])}
                    >
                      <p
                        className={scssStyles([
                          !isDoubleCabin ? styles.active : '',
                        ])}
                      >
                        Cabine Plus
                      </p>
                      <label
                        className={scssStyles([
                          'switch',
                          styles.toggler,
                        ])}
                      >
                        <input
                          type="checkbox"
                          checked={isDoubleCabin}
                          onChange={(e) => {
                            setIsDoubleCabin(
                              (e.target as HTMLInputElement)
                                .checked,
                            );
                            DataLayer.clickEvent({
                              element: `${version.short}:${
                                !!e.target.checked
                                  ? 'cabine-dupla'
                                  : 'cabine-plus'
                              }`,
                              elementCategory: 'switcher',
                              pageSection: 'conteudo',
                              pageSubsection,
                            });
                          }}
                        />
                        <span className="slider round" />
                      </label>
                      <p
                        className={scssStyles([
                          isDoubleCabin ? styles.active : '',
                        ])}
                      >
                        Cabine Dupla
                      </p>
                    </div>
                  )}
                </div>
                <div className={styles.ctaHolderMobile}>
                  <CTAButton
                    text="Simular parcelas"
                    className={styles.ctaButton}
                    title="Simular parcelas"
                    href={links.simular}
                    handleClick={() => {
                      DataLayer.clickEvent({
                        element: `simular-parcelas:${version.name}`,
                        elementCategory: 'cta',
                        pageSection: 'conteudo',
                        pageSubsection,
                      });
                    }}
                    handleAuxClick={() => {
                      DataLayer.clickEvent({
                        element: `simular-parcelas:${version.name}`,
                        elementCategory: 'cta',
                        pageSection: 'conteudo',
                        pageSubsection,
                      });
                    }}
                  />
                  <CTAButton
                    text={COMPRE_TITLE}
                    className={styles.ctaButton}
                    title={COMPRE_TITLE}
                    href={links.compre}
                    handleClick={() => {
                      DataLayer.clickEvent({
                        element: `compre-a-sua:${version.name}`,
                        elementCategory: 'cta',
                        pageSection: 'conteudo',
                        pageSubsection,
                      });
                    }}
                    handleAuxClick={() => {
                      DataLayer.clickEvent({
                        element: `compre-a-sua:${version.name}`,
                        elementCategory: 'cta',
                        pageSection: 'conteudo',
                        pageSubsection,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </Conditional>

          {/* View para desktop*/}
          <Conditional notOn="mobile">
            <div className={styles.right} ref={refRight}>
              {version.haNewItens && (
                <div className={styles.seloDetails}>
                  <img src={ui.seloVersions} alt="Menu" />
                </div>
              )}
              <div className={styles.rightBox}>
                <div className={styles.details}>
                  <p className={styles.firstName}>
                    {`${metaTags.brandName} ${metaTags.productName}`}
                  </p>
                  <p className={styles.secondName}>
                    <HighlightedText
                      color="#ff7d32"
                      padding="0 5% 0 10px"
                    >
                      {version.name}
                    </HighlightedText>
                  </p>

                  {version.details.map((detail, index) => (
                    <p key={`version-detail-${index}`}>
                      <ChevronRight
                        title={`detalhes-${version.name}`}
                      />
                      {detail}
                    </p>
                  ))}
                </div>

                <div className={styles.buttonHolder}>
                  {version.hasDoubleCabin && (
                    <div className={styles.doubleCabinToggler}>
                      <p
                        className={scssStyles([
                          !isDoubleCabin ? styles.active : '',
                        ])}
                      >
                        Cabine Plus
                      </p>
                      <label
                        className={scssStyles([
                          'switch',
                          styles.toggler,
                        ])}
                      >
                        <input
                          type="checkbox"
                          checked={isDoubleCabin}
                          onChange={(e) => {
                            setIsDoubleCabin(
                              (e.target as HTMLInputElement)
                                .checked,
                            );
                            DataLayer.selectEvent({
                              element: `${version.short}:${
                                !!e.target.checked
                                  ? 'cabine-dupla'
                                  : 'cabine-plus'
                              }`,
                              elementCategory: 'switcher',
                              pageSection: 'conteudo',
                              pageSubsection,
                            });
                          }}
                        />
                        <span className="slider round" />
                      </label>
                      <p
                        className={scssStyles([
                          isDoubleCabin ? styles.active : '',
                        ])}
                      >
                        Cabine Dupla
                      </p>
                    </div>
                  )}

                  <CTAButton
                    text="Simular parcelas"
                    className={styles.ctaButton}
                    title="Simular parcelas"
                    href={links.simular}
                    handleClick={() => {
                      DataLayer.clickEvent({
                        element: `simular-parcelas:${version.name}`,
                        elementCategory: 'cta',
                        pageSection: 'conteudo',
                        pageSubsection,
                      });
                    }}
                    handleAuxClick={() => {
                      DataLayer.clickEvent({
                        element: `simular-parcelas:${version.name}`,
                        elementCategory: 'cta',
                        pageSection: 'conteudo',
                        pageSubsection,
                      });
                    }}
                  />
                  <CTAButton
                    text={COMPRE_TITLE}
                    className={styles.ctaButton}
                    title={COMPRE_TITLE}
                    href={links.compre}
                    handleClick={() => {
                      DataLayer.clickEvent({
                        element: `compre-a-sua:${version.name}`,
                        elementCategory: 'cta',
                        pageSection: 'conteudo',
                        pageSubsection,
                      });
                    }}
                    handleAuxClick={() => {
                      DataLayer.clickEvent({
                        element: `compre-a-sua:${version.name}`,
                        elementCategory: 'cta',
                        pageSection: 'conteudo',
                        pageSubsection,
                      });
                    }}
                  />
                </div>
              </div>
            </div>

            <div className={styles.carInfo}>
              <ResponsiveLazyImage
                className={scssStyles([
                  styles.productImage,
                  isOnScreen ? styles.isVisible : '',
                ])}
                containerClassName={styles.productImageContainer}
                //alt={version.name}
                alt={version.alt}
                title={version.title}
                forceLoad={load}
                width="100%"
                height="100%"
                objectFit="contain"
                onScreen={(b) => setIsOnScreen(b)}
                src={`${versions[version.id].path}${
                  isDoubleCabin ? '-cd' : ''
                }.${versions[version.id].extension}`}
                src2={`${versions[version.id].path}${
                  isDoubleCabin ? '-cd' : ''
                }@2x.${versions[version.id].extension}`}
                src3={`${versions[version.id].path}${
                  isDoubleCabin ? '-cd' : ''
                }@3x.${versions[version.id].extension}`}
              />
            </div>
          </Conditional>
        </div>
      </div>
    );
  },
);

const Versions: FC = observer(() => {
  const [swiperController, setSwiperController] =
    useState<SwiperCore>();
  const [thumbSwiper, setThumbSwiper] = useState<SwiperCore>();
  const [touchLocation, setTouchLocation] =
    useState<PointerEvent['clientX']>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadAll, setLoadAll] = useState(false);
  const store: StradaStore = useMobxStores();

  const previous = () => {
    if (currentIndex === 0) {
      swiperController?.slideTo(dataVersions.length - 1);
    } else {
      swiperController?.slidePrev();
    }
  };

  const next = () => {
    if (currentIndex >= dataVersions.length - 1) {
      swiperController?.slideTo(0);
    } else {
      swiperController?.slideNext();
    }
  };
  const Buttons = useCallback(
    () =>
      dataVersions.map((version, index) => {
        return (
          <div
            key={`version-card-${version.id}`}
            className={styles.thumbBox}
          >
            <button
              title={version.name}
              className={scssStyles([
                currentIndex === index ? styles.active : '',
              ])}
              onClick={() => {
                DataLayer.clickEvent({
                  element: version.name,
                  elementCategory: 'card',
                  pageSection: 'conteudo',
                  pageSubsection,
                });
                swiperController?.slideTo(index);
              }}
            >
              <div className={styles.selectedBg} />
              <ResponsiveLazyImage
                alt={version.alt}
                title={version.title}
                containerClassName={styles.thumbImageContainer}
                className={styles.thumbImage}
                src={versionsThumbs[version.id].fullPath}
              />
              <p>
                <span className={styles.name}>
                  {version.short}
                </span>
              </p>
            </button>
          </div>
        );
      }),
    [currentIndex, swiperController],
  );

  useEffect(() => {
    if (
      thumbSwiper &&
      swiperController &&
      typeof thumbSwiper?.activeIndex === 'number' &&
      typeof swiperController?.activeIndex === 'number'
    ) {
      thumbSwiper.slideTo(swiperController.activeIndex);
    }
  }, [
    thumbSwiper,
    thumbSwiper?.activeIndex,
    swiperController,
    swiperController?.activeIndex,
  ]);

  return (
    <SectionElement
      id="Versions"
      noPadding
      overrideReference
      onSlugSuffix={(slug) => {
        store.setVersionSlugSuffix(slug);
        if (swiperController?.params) {
          const index = dataVersions.findIndex(
            (c) => c.slug === slug,
          );
          swiperController.slideTo(index >= 0 ? index : 0);
        }
      }}
      onVisibilityChange={(load) => {
        if (load) {
          const suffix =
            dataVersions[swiperController?.activeIndex ?? 0]
              .slug;
          reference &&
            store.currentTab?.parentSlug &&
            store.setCurrentlyVisibleNav(reference, suffix);
        }
        setLoadAll(load);
      }}
      className={styles.container}
      navReference={reference}
    >
      <ScrollToAnchor
        reference={reference}
        className={styles.scrollCta}
        pageSubsection={pageSubsection}
        title={`Conheça todas as versões do ${PRODUCT_NAME}`}
      >
        <h2>{`Conheça todas as versões da FIAT ${PRODUCT_NAME}. Qual a sua?`}</h2>
        <Chevron title="Versões" />
      </ScrollToAnchor>

      <div className={styles.swiperWrapper}>
        <Swiper
          keyboard
          observer
          observeParents
          parallax
          thumbs={{ multipleActiveThumbs: true }}
          onSwiper={(e) => setSwiperController(e)}
          onSlideChange={(swp) => {
            setCurrentIndex(swp.activeIndex);
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
            ) {
              DataLayer.swipeEvent({
                element:
                  (touchLocation ?? 0) > clientX
                    ? 'proximo'
                    : 'anterior',
                elementCategory: 'versao',
                pageSection: 'conteudo',
                pageSubsection,
              });
            }
          }}
          controller={
            swiperController
              ? { control: swiperController }
              : undefined
          }
        >
          {dataVersions.map((version) => (
            <SwiperSlide
              key={`versions-view-slide-${version.id}`}
              className={styles.swiperSlide}
            >
              <VersionSlide load={loadAll} version={version} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* SETAS DESK */}
        <Conditional notOn="mobile">
          <ArrowButton
            title={`Anterior: ${
              dataVersions[
                (swiperController?.activeIndex ?? 0) <= 0
                  ? dataVersions.length - 1
                  : (swiperController?.activeIndex ?? 0) - 1
              ].name
            }`}
            previous
            light
            className={styles.previous}
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
          <ArrowButton
            title={`Próximo: ${
              dataVersions[
                (swiperController?.activeIndex ?? 0) >=
                dataVersions.length - 1
                  ? 0
                  : (swiperController?.activeIndex ?? 0) + 1
              ].name
            }`}
            light
            className={styles.next}
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
        </Conditional>
      </div>

      {/* thumbs */}
      <div
        className={scssStyles([
          styles.thumbs,
          store.pageX <= 992 ? styles.mobile : '',
        ])}
      >
        <Conditional condition={store.pageX > 992}>
          {Buttons()}
        </Conditional>

        <Conditional condition={store.pageX <= 992}>
          <Swiper
            keyboard
            observer
            observeParents
            parallax
            onSwiper={(e) => setThumbSwiper(e)}
            controller={
              thumbSwiper ? { control: thumbSwiper } : undefined
            }
            centeredSlides
            // SLIDES PER VIEW:
            // Calculation based on window width minus padding
            // divided by the desired card (slide) width
            slidesPerView={Math.ceil((store.pageX - 100) / 220)}
            spaceBetween={10}
          >
            {Buttons().map((button) => (
              <SwiperSlide
                key={`versions-${button.key}-mobile`}
                className={styles.swiperSlideMobile}
              >
                {button}
              </SwiperSlide>
            ))}
          </Swiper>
        </Conditional>
      </div>
    </SectionElement>
  );
});

export default Versions;
