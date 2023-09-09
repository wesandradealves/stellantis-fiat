import { Conditional, SectionElement } from '@/components';
import { metaTags } from '@/constants';
import { PRODUCT_DETAILS_REF } from '@/mocks/menu';
import { FC } from 'react';
import Tabs from './Tabs';
import styles from './ProductDetails.module.scss';
import SwipersDesktop from './SwipersDesktop';
import SwipersMobile from './SwipersMobile';

const ProductDetails: FC = () => {
  return (
    <SectionElement
      id="ProductDetails"
      navReference={PRODUCT_DETAILS_REF}
      heightBehaviour="soft"
      noPadding
      className={styles.container}
    >
      <h2>Tudo do {metaTags.productName}</h2>
      <Conditional
        desktop={(
          <>
            <Tabs />
            <SwipersDesktop />
          </>
        )}
        mobile={(
          <SwipersMobile />
        )}
      />
    </SectionElement>
  );
};

export default ProductDetails;
