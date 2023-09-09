import { ReserveCTA as ReserveAsset } from '@/assets';
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
import styles from './ReserveCTA.module.scss';

const ReserveCTA: FC = () => {
  const content = useCallback(() => {
    return (
      <>
        <ResponsiveLazyImage
          fullBg
          alt={PRODUCT_NAME}
          src={ReserveAsset.backgroundImage.fullPath}
          src2={ReserveAsset.backgroundImage.fullPath2x}
          src3={ReserveAsset.backgroundImage.fullPath3x}
        />
        <div
          className={scssStyles(['bringToFront', styles.spacer])}
        >
          <Conditional notOn="mobile">
            <div>
              <h2>
                {'GARANTA O SUV'}
                <br />
                {'QUE É A SUA CARA.'}
              </h2>
            </div>
          </Conditional>
          <div>
            <p className={styles.headline}>
              {'Motor Turbo 200 Flex: '}
              <br />
              {'a'}
              <HighlightedText
                backgroundColor="#3A369E"
                color="#EDEDE3"
                margin="0 0 0 4px"
              >
                <strong className="black italic">
                  {'melhor performance'}
                </strong>
              </HighlightedText>
              <br />
              {'da categoria está te esperando.'}
            </p>
            <CTAButton
              href={links.compre}
              larger
              className={styles.button}
              text={COMPRE_TITLE}
              title={COMPRE_TITLE}
              handleClick={() => {
                DataLayer.clickEvent({
                  element: COMPRE_TITLE,
                  elementCategory: 'cta',
                  pageSection: 'conteudo',
                  pageSubsection: 'reserve o seu',
                });
              }}
              handleAuxClick={() => {
                DataLayer.clickEvent({
                  element: COMPRE_TITLE,
                  elementCategory: 'cta',
                  pageSection: 'conteudo',
                  pageSubsection: 'reserve o seu',
                });
              }}
            />
          </div>
        </div>
      </>
    );
  }, []);

  return (
    <SectionElement
      id="ReserveCTA"
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
        <div>
          <h2>
            {'GARANTA O SUV'}
            <br />
            {'QUE É A SUA CARA.'}
          </h2>
        </div>
        <div className={styles.limiter}>{content()}</div>
      </Conditional>
    </SectionElement>
  );
};

export default ReserveCTA;
