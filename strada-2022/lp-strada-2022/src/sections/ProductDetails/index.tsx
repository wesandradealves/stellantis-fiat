import {
  Conditional,
  SectionElement,
  ScrollToAnchor,
} from '@/components';
import { Chevron } from '@/components/SvgComponents';
import { metaTags } from '@/constants';

import { PRODUCT_DETAILS_REF } from '@/mocks/menu';
import { FC } from 'react';
import Tabs from './Tabs';
import styles from './index.module.scss';
import SwipersDesktop from './SwipersDesktop';
import SwipersMobile from './SwipersMobile';
import productDetails, {
  allSlides,
} from '@/mocks/productDetails';
import { useMobxStores } from '@/store';
import { getProductDetails } from '@/mocks/menu';
import StradaStore from '@/store/StradaStore';

const ProductDetails: FC = () => {
  const store: StradaStore = useMobxStores();

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
      <ScrollToAnchor
        reference={PRODUCT_DETAILS_REF}
        className={styles.scrollCta}
        pageSubsection={PRODUCT_DETAILS_REF.slug}
        title={`Tudo sobre a ${metaTags.brandName} ${metaTags.productName}`}
      >
        <h2 className={styles.title}>
          Tudo sobre a {metaTags.brandName}{' '}
          {metaTags.productName}
        </h2>
        <Chevron />
      </ScrollToAnchor>
      <Conditional
        desktop={
          <>
            <Tabs />
            <SwipersDesktop
              setReference={setReference}
            />
          </>
        }
        mobile={<SwipersMobile setReference={setReference} />}
      />
    </SectionElement>
  );
};

export default ProductDetails;
