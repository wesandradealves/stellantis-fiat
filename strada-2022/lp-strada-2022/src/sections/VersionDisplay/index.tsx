import { FC } from 'react';
import {
  Conditional,
  ScrollToAnchor,
  SectionElement,
} from '@/components';
import { Chevron } from '@/components/SvgComponents';
import { dataMenuLabel } from '@/mocks/menu';
import { observer } from 'mobx-react-lite';
import styles from './index.module.scss';
import SwipersDesktop from './SwipersDesktop';
import SwipersMobile from './SwipersMobile';
import StradaStore from '@/store/StradaStore';
import { useMobxStores } from '@/store';
import { highlightedVersions } from '@/mocks/versions';

const reference = dataMenuLabel().find(
  (c) => c.slug === 'strada-automatica',
);

const VersionDisplay: FC = observer(() => {
  const store: StradaStore = useMobxStores();

  const setReference = (index?: number) => {
    const defaultActiveIndex = store.isDesktop
      ? store.highlightedVersionsSwiperController?.activeIndex ??
        0
      : store.highlightedVersionsMobileSwiperController
          ?.activeIndex ?? 0;
    const activeIndex = index ?? defaultActiveIndex;
    const suffix = highlightedVersions[activeIndex].slug;
    reference &&
      store.currentTab?.parentSlug &&
      store.setCurrentlyVisibleNav(reference, suffix);
  };

  return (
    <SectionElement
      id="VersionDisplay"
      navReference={reference}
      heightBehaviour="soft"
      noPadding
      onSlugSuffix={(slug) => {
        const referenceIndex = highlightedVersions.findIndex(
          (c) => c.slug === slug,
        );
        const index = referenceIndex >= 0 ? referenceIndex : 0;
        if (store.highlightedVersionsSwiperController?.params)
          store.highlightedVersionsSwiperController?.slideTo(
            index,
          );
        if (
          store.highlightedVersionsMobileSwiperController?.params
        )
          store.highlightedVersionsMobileSwiperController?.slideTo(
            index,
          );
      }}
      onVisibilityChange={(isVisible) => {
        if (isVisible) {
          setReference();
        }
      }}
      overrideReference
      className={styles.container}
    >
      <ScrollToAnchor
        reference={reference}
        className={styles.scrollCta}
        pageSubsection="strada-automatica"
        title={` Fiat Strada automática. Era só o que faltava.`}
      >
        <h2>Fiat Strada automática. Era só o que faltava.</h2>
        <Chevron
          title="Seta nova Strada automática"
          color="#ff7d32"
        />
      </ScrollToAnchor>
      <Conditional
        desktop={<SwipersDesktop setReference={setReference} />}
        mobile={<SwipersMobile setReference={setReference} />}
      />
    </SectionElement>
  );
});

export default VersionDisplay;
