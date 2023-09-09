import {
  Conditional,
  SectionElement,
  ScrollToAnchor,
} from '@/prox/components';
import { Chevron } from '@/prox/components/SvgComponents';
import { metaTags } from '@/project/constants';

import { PRODUCT_DETAILS_REF } from '@/project/data/menu';
import { FC } from 'react';
import Tabs from './Tabs';
import styles from './index.module.scss';
import SwipersDesktop from './SwipersDesktop';
import SwipersMobile from './SwipersMobile';
import productDetails, {
  allSlides,
} from '@/project/data/productDetails';
import { useMobxStores } from '@/project/store';
import { getProductDetails } from '@/project/data/menu';
import Store from '@/project/store/Store';
import { brand } from '@/project/assets';

const ProductDetails: FC = () => {
  const store: Store = useMobxStores();

  const setReference = () => {
    const reference = getProductDetails(productDetails).find((p) => p.id === `data-${store.currentTab?.id}`);
    const index = !store.isDesktop ? store.productDetailsMobileSwiperController[store.selectedDetailTab]?.activeIndex : store.productDetailsSwiperController?.activeIndex;
    const suffix = allSlides[index ?? 0].slug;
    reference && store.currentTab?.parentSlug && store.setCurrentlyVisibleNav(reference, suffix);
  };
  return (
    <SectionElement
      id="ProductDetails"
      navReference={PRODUCT_DETAILS_REF}
      heightBehaviour="soft"
      noPadding
      overrideReference
      className={styles.container}
      slugPrefixes={productDetails.map((p) => p.slug)}
      onSlugSuffix={(slug) => {
        if (slug) {
          const slide = allSlides.find((s) => s.slug === slug);
          const index = allSlides.findIndex((s) => s.slug === slug);
          console.log({ params: store.productDetailsSwiperController?.params, slug });
          if (slide && store.productDetailsSwiperController?.params) {
            console.log({ slide, index });
            store.productDetailsSwiperController.slideTo(index >= 0 ? index : 0);
          }
          if (slide && store.productDetailsMobileSwiperController?.params) {

          }
        }
      }}
      onVisibilityChange={(visible) => {
        if (visible) {
          setReference();
        }
      }}
    >
      <Conditional notOn="mobile">

      <ScrollToAnchor
        reference={PRODUCT_DETAILS_REF}
        className={styles.scrollCta}
        pageSubsection={PRODUCT_DETAILS_REF.slug}
        title={`Tudo sobre o novo ${metaTags.productName}`}
      >
        <h2 className={styles.title}>
          Tudo sobre o novo Fiat Scudo
        </h2>
        <Chevron />
      </ScrollToAnchor>
      </Conditional>
      <Conditional notOn="desktop">
      <ScrollToAnchor
        reference={PRODUCT_DETAILS_REF}
        className={styles.scrollCtaMobile}
        pageSubsection={PRODUCT_DETAILS_REF.slug}
        title={`Tudo sobre o novo ${metaTags.productName}`}
      >
        <h2 className={styles.title}>
          Tudo sobre o novo Fiat Scudo
        </h2>
        <Chevron />
      </ScrollToAnchor>
      </Conditional>

      <Conditional
        desktop={
          <>

            <Tabs />
            <SwipersDesktop
              setReference={setReference}
            />
          </>
        }
        mobile={
          <>


            <SwipersMobile setReference={setReference} /></>

        }
      />
    </SectionElement >
  );
};

export default ProductDetails;
