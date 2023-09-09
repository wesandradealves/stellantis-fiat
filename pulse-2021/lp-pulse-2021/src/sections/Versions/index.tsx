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
  HighlightedText,
  ResponsiveLazyImage,
  ScrollToAnchor,
  SectionElement,
} from '@/components';
import styles from './Versions.module.scss';
import { PRODUCT_NAME } from '@/constants';
import {
  dataMenuLabels,
  links,
  COMPRE_TITLE,
} from '@/mocks/menu';
import { Chevron } from '@/components/SvgComponents';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Keyboard, Thumbs } from 'swiper';
import { versions, versionsThumbs } from '@/assets';
import { dataVersions } from '@/mocks/versions';
import scssStyles from '@/utils/scssStyles';
import { IVersion } from '@/models';
import { useOnScreen } from '@/hooks';
import PulseStore from '@/store/PulseStore';
import { useMobxStores } from '@/store';
import { observer } from 'mobx-react-lite';
import DataLayer from '@/utils/DataLayer';
import getClientXFromDifferentEvents from '@/utils/getClientXFromDifferentEvents';

SwiperCore.use([A11y, Keyboard, Thumbs]);

const reference = dataMenuLabels().find(
  (c) => c.slug === 'versoes',
);

interface VersionSlideProps {
  version: IVersion;
  load: boolean;
}

const pageSubsection = 'todas-as-versoes';

const VersionSlide: FC<VersionSlideProps> = observer(
  ({ version, load }) => {
    const store: PulseStore = useMobxStores();
    const [isOnScreen, setIsOnScreen] = useState(false);
    // const [refRight, setRefRight] = useState<HTMLPictureElement | null>(null);
    const [, updater] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const refRight = useRef<HTMLDivElement | null>(null);
    const isVisible = useOnScreen(ref);
    const paddings = {
      desktop: [
        '8px 75px 8px 70px',
        '8px 65px 8px 80px',
        '8px 90px',
      ],
      mobile: ['8px 30px', '8px 60px', '8px 30px'],
    };
    const margins = {
      desktop: [
        '0.375rem -100px 0.375rem 0px',
        '0.375rem 15px 0.375rem  0px',
        '0.375rem 0 0.375rem 0px',
      ],
      mobile: ['8px 0 0', '8px 0 0', '8px 0 0'],
    };

    useEffect(() => {
      //RERENDER TO UPDATE ELEMENTS POSITIONS
      const updateDom = () => {
        updater((u) => !u);
      };
      window?.addEventListener('resize', updateDom);

      return () => {
        window?.removeEventListener('resize', updateDom);
      };
    }, []);

    return (
      <div
        className={scssStyles([
          styles.aligner,
          isVisible ? styles.isActive : '',
        ])}
        ref={ref}
      >
        <div className={scssStyles([styles.versionName])}>
          <Conditional
            desktop={<p>{version.fullName}</p>}
            mobile={
              <>
                <p>{version.nameParts.first}</p>
                {!!version.nameParts.second && (
                  <p>{version.nameParts.second}</p>
                )}
              </>
            }
          />
        </div>
        <div className={styles.row}>
          <div className={styles.carInfo}>
            <ResponsiveLazyImage
              className={scssStyles([
                styles.productImage,
                isOnScreen ? styles.isVisible : '',
              ])}
              containerClassName={styles.productImageContainer}
              alt={version.fullName}
              forceLoad={load}
              width="100%"
              onScreen={(b) => setIsOnScreen(b)}
              src={versions[version.id].fullPath}
              src2={versions[version.id].fullPath2x}
              src3={versions[version.id].fullPath3x}
            />
          </div>
          <Conditional
            desktop={
              <div
                className={styles.bg}
                style={{
                  backgroundColor: version.hex,
                  top: refRight?.current?.offsetTop,
                }}
              />
            }
            mobile={
              <div
                className={styles.bgMobile}
                style={{
                  backgroundColor: version.hex,
                }}
              />
            }
          />
          <div className={styles.right} ref={refRight}>
            <div className={styles.details}>
              {version.details.map((detail, index) => (
                <HighlightedText
                  key={`${version.id}-${detail}`}
                  color={
                    version.text === 'light' && !store.isDesktop
                      ? '#EDEDE3'
                      : '#222652'
                  }
                  backgroundColor={
                    !store.isDesktop ? version.hex : '#EDEDE3'
                  }
                  className={scssStyles([
                    styles[`span${index}`],
                  ])}
                  padding={
                    paddings[
                      store.isDesktop ? 'desktop' : 'mobile'
                    ][index]
                  }
                  margin={
                    margins[
                      store.isDesktop ? 'desktop' : 'mobile'
                    ][index]
                  }
                >
                  {detail}
                </HighlightedText>
              ))}
            </div>
            <Conditional notOn="mobile">
              <div className={styles.buttonHolder}>
                <CTAButton
                  href={links.compre}
                  className={styles.cta}
                  text={COMPRE_TITLE}
                  title={COMPRE_TITLE}
                  handleClick={() => {
                    DataLayer.clickEvent({
                      element: COMPRE_TITLE,
                      elementCategory: 'cta',
                      pageSection: 'conteudo',
                      pageSubsection,
                    });
                  }}
                  handleAuxClick={() => {
                    DataLayer.clickEvent({
                      element: COMPRE_TITLE,
                      elementCategory: 'cta',
                      pageSection: 'conteudo',
                      pageSubsection,
                    });
                  }}
                />
              </div>
            </Conditional>
          </div>
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
  const store: PulseStore = useMobxStores();

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
          <button
            key={`thumb-${version.id}`}
            title={version.name}
            className={scssStyles([
              currentIndex === index ? styles.active : '',
            ])}
            onClick={() => {
              DataLayer.clickEvent({
                element: version.name,
                elementCategory: 'botao',
                pageSection: 'conteudo',
                pageSubsection,
              });
              swiperController?.slideTo(index);
            }}
          >
            <ResponsiveLazyImage
              alt={version.fullName}
              containerClassName={styles.thumbImageContainer}
              src={versionsThumbs[version.id].fullPath}
            />
            <p>
              <span
                className={styles.outline}
                style={{
                  backgroundColor: version.hex,
                }}
              />
              <span className={styles.name}>
                {version.short}
              </span>
            </p>
          </button>
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
      onVisibe={(load) => setLoadAll(load)}
      className={styles.container}
      navReference={reference}
    >
      <ScrollToAnchor
        reference={reference}
        className={styles.scrollCta}
        pageSubsection={pageSubsection}
        title={`Conheça todas as versões do ${PRODUCT_NAME}`}
      >
        <HighlightedText padding="2px 24px" margin="0 0 4px 0">
          {'Conheça todas as'}
        </HighlightedText>
        <HighlightedText padding="2px 20px">
          {`versões do ${PRODUCT_NAME}`}
        </HighlightedText>
        <Chevron />
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
            DataLayer.swipeEvent({
              element:
                (touchLocation ?? 0) > clientX
                  ? 'proximo'
                  : 'anterior',
              elementCategory: 'slide',
              pageSection: 'conteudo',
              pageSubsection,
            });
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
        <Conditional notOn="mobile">
          <ArrowButton
            previous
            secondary
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
            secondary
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
                key={`${button.key}-mobile`}
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
