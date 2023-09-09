import {
  ReserveCTA as ReserveAsset,
  soundSitemImages,
} from '@/assets';
import {
  Conditional,
  CTAButton,
  HighlightedText,
  ResponsiveLazyImage,
  SectionElement,
} from '@/components';
import { PRODUCT_NAME } from '@/constants';
import {
  dataMenuLabels,
  links,
  COMPRE_TITLE,
} from '@/mocks/menu';
import DataLayer from '@/utils/DataLayer';
import scssStyles from '@/utils/scssStyles';
import { FC, useCallback } from 'react';
import styles from './DesignSound.module.scss';

const DesignSound: FC = () => {
  const content = useCallback(() => {
    return (
      <>
        <ResponsiveLazyImage
          fullBg
          alt={PRODUCT_NAME}
          src={soundSitemImages.background}
        />

        <Conditional notOn="desktop">
          <ResponsiveLazyImage
            fullBg
            alt={PRODUCT_NAME}
            src={soundSitemImages.backgroundMobile}
          />
        </Conditional>
        <div
          className={scssStyles(['bringToFront', styles.spacer])}
        >
          <div>
            <h2>{'FIAT'}</h2>
          </div>

          <div>
            <Conditional notOn="mobile">
              <p className={styles.headline}>
                <span>{'SOUND '}</span>
                {' DESIGN'}
              </p>
            </Conditional>

            <Conditional notOn="desktop">
              <p className={styles.headline}>
                <span>{'SOUND '} </span>
                {' DESIGN'}
                <br />
                <br />
              </p>
            </Conditional>

            <p>
              Os sons são essenciais no nosso dia a dia, em
              especial durante o trânsito. Descubra uma
              experiência conectada com a sua rotina através do
              Sound Design, a nova imersão sonora de Fiat Pulse.
              A cada ato, um som sincronizado.
              <Conditional notOn="desktop">
                <br />
                <br />
              </Conditional>
            </p>
          </div>
        </div>
      </>
    );
  }, []);

  return (
    <SectionElement
      id="DesignSound"
      className={styles.container}
      noPadding
      navReference={dataMenuLabels().find(
        (c) => c.slug === 'compre-o-seu',
      )}
      heightBehaviour="soft"
    >
      <Conditional notOn="mobile">
        <>{content()}</>
      </Conditional>
      <Conditional notOn="desktop">
        <div className={styles.limiter}>{content()}</div>
      </Conditional>
    </SectionElement>
  );
};

export default DesignSound;
