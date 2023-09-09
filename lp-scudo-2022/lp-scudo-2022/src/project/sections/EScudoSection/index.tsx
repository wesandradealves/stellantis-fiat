import { brand, reserveCTA as ReserveAsset } from '@/project/assets';
import { links, metaTags } from '@/project/constants';

import {
  Conditional,
  CTAButton,
  ResponsiveLazyImage,
  SectionElement,
} from '@/prox/components';
import { PRODUCT_NAME } from '@/project/constants';
import { dataMenuLabel, VANTAGENS_TITLE } from '@/project/data/menu';
import scssStyles from '@/prox/utils/scssStyles';
import { FC, useCallback } from 'react';
import styles from './EScudoSection.module.scss';
import DataLayer from '@/prox/utils/DataLayer';

const EScudoSection: FC = () => {
  const pageSubsection = 'product-details';
  const content = useCallback(() => {
    return (
      <>
        <div
          className={scssStyles(['bringToFront', styles.spacer])}
        >
          <Conditional notOn="desktop">
            <div className={styles.mobileContent}>
              <div className={styles.versionText}>

                <div className={styles.boxTlt}>

                  <img src={brand.logoEScudo} alt="" />

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

            
                <p className={styles.txtMobile}>
                O e-Scudo é um veículo elétrico a bateria (BEV), com a mesma modularidade e capacidade
                volumétrica da versão movida a combustível. Com ele, você tem zero vibrações e zero emissões
                de CO2. Experimente a economia e a autonomia do motor elétrico de 136 Cv que pode chegar a até
                330 km - sem paradas para carregamento.
                </p>
                <CTAButton
                text={'Avise-me'}
                className={styles.cta}
                title={VANTAGENS_TITLE}
                href={links.avise}
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: `${VANTAGENS_TITLE}`,
                    elementCategory: 'cta',
                    pageSection: 'conteudo',
                    pageSubsection,
                  });
                }}
                handleAuxClick={() => {
                  DataLayer.clickEvent({
                    element: `${VANTAGENS_TITLE}`,
                    elementCategory: 'cta',
                    pageSection: 'conteudo',
                    pageSubsection,
                  });
                }}
              />
              
            </div>
          </Conditional>

          <Conditional notOn="mobile">
            <div className={styles.leftArea}>
              <div>
                <div className={styles.versionText}>

                  <img src={brand.logoEScudo} alt="" />

                </div>
              </div>
              <p>
                O e-Scudo é um veículo elétrico a bateria (BEV), com a mesma modularidade e capacidade
                volumétrica da versão movida a combustível. Com ele, você tem zero vibrações e zero emissões
                de CO2. Experimente a economia e a autonomia do motor elétrico de 136 Cv que pode chegar a até
                330 km - sem paradas para carregamento.
              </p>

              <CTAButton
                text={'Avise-me'}
                className={styles.cta}
                title={VANTAGENS_TITLE}
                href={links.avise}
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: `${VANTAGENS_TITLE}`,
                    elementCategory: 'cta',
                    pageSection: 'conteudo',
                    pageSubsection,
                  });
                }}
                handleAuxClick={() => {
                  DataLayer.clickEvent({
                    element: `${VANTAGENS_TITLE}`,
                    elementCategory: 'cta',
                    pageSection: 'conteudo',
                    pageSubsection,
                  });
                }}
              />

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
      id="EScudoSection"
      className={styles.container}
      noPadding
      navReference={dataMenuLabel().find(
        (c) => c.slug === 'escudo',
      )}
      heightBehaviour="soft"
    >
      <Conditional notOn="mobile">
        <>{content()}</>
      </Conditional>

      <Conditional notOn="desktop">

        <div className="">{content()}</div>
      </Conditional>
    </SectionElement>
  );
};

export default EScudoSection;
