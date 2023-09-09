import { reserveCTA as ReserveAsset, brand } from '@/project/assets';
import { metaTags } from '@/project/constants';

import {
  Conditional,
  ResponsiveLazyImage,
  SectionElement,
} from '@/prox/components';
import { PRODUCT_NAME } from '@/project/constants';
import { dataMenuLabel } from '@/project/data/menu';
import scssStyles from '@/prox/utils/scssStyles';
import { FC, useCallback } from 'react';
import styles from './ReserveCTA.module.scss';

const ReserveCTA: FC = () => {
  const content = useCallback(() => {
    return (
      <>
        <div
          className={scssStyles(['bringToFront', styles.spacer])}
        >
          <Conditional notOn="desktop">
            <div className={styles.mobileContent}>
              <div className={styles.versionText}>
                <div className={styles.versionTextlogo}>
                 
                  <h2>Lorem ipsum </h2>
                </div>
                <div className={styles.boxTlt}>
                  <p>dolor sit amet</p>
                </div>
              </div>
              <div className={styles.contentImg}>
                <ResponsiveLazyImage
                  alt={PRODUCT_NAME}
                  src={ReserveAsset.cardImage.fullPath}
                  src2={ReserveAsset.cardImage.fullPath2x}
                  src3={ReserveAsset.cardImage.fullPath3x}
                  containerClassName={styles.reserveImg}
                />
              </div>

              <div>
                <p
                  className={scssStyles([
                    styles.headline,
                    styles.noTopMargin,
                  ])}
                >
                  Excepteur sint <br />
                  <strong>Anim id est laborum.</strong>
                </p>
                <p className={styles.txtMobile}>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam,
                </p>
              </div>
            </div>
          </Conditional>

          <Conditional notOn="mobile">
            <div className={styles.leftArea}>
              <div>
                <div className={styles.versionText}>
                  <div className={styles.versionTextlogo}>
                    <h2>Lorem ipsum</h2>
                  </div>
                  <div className={styles.boxTlt}>
                    <p className={styles.subTlt}>Lorem ipsum</p>
                    <p>
                      Excepteur sint <br />
                      <strong>Anim id est laborum.</strong>
                    </p>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad
                minim veniam,
              </p>
            </div>
            <div className={styles.rightArea}>
              <div>
                <ResponsiveLazyImage
                  alt={PRODUCT_NAME}
                  src={ReserveAsset.cardImage.fullPath}
                  src2={ReserveAsset.cardImage.fullPath2x}
                  src3={ReserveAsset.cardImage.fullPath3x}
                  containerClassName={styles.reserveImg}
                />
              </div>
            </div>
          </Conditional>
        </div>
      </>
    );
  }, []);

  return (
    <SectionElement
      id="ReserveCTA"
      className={styles.container}
      noPadding
      navReference={dataMenuLabel().find(
        (c) => c.slug === 'serie-s',
      )}
      heightBehaviour="soft"
    >
      <Conditional notOn="mobile">
        <ResponsiveLazyImage
          fullBg
          alt={PRODUCT_NAME}
          src={ReserveAsset.backgroundImage.fullPath2x}
          src2={ReserveAsset.backgroundImage.fullPath3x}
        />
        <>{content()}</>
      </Conditional>

      <Conditional notOn="desktop">
        <ResponsiveLazyImage
          containerClassName={styles.mobileBackground}
          fullBg
          alt={PRODUCT_NAME}
          src={ReserveAsset.backgroundImageMobile.fullPath}
          src2={ReserveAsset.backgroundImageMobile.fullPath2x}
        />
        <div className="">{content()}</div>
      </Conditional>
    </SectionElement>
  );
};

export default ReserveCTA;
