import {
  brand,
  professionalImage,
  reserveCTA as ReserveAsset,
} from '@/project/assets';
import {
  Conditional,
  CTAButton,
  ResponsiveLazyImage,
  SectionElement,
} from '@/prox/components';
import { metaTags, PRODUCT_NAME } from '@/project/constants';
import {
  dataMenuLabel,
  links,
  ENCONTRE_TITLE,
  VANTAGENS_TITLE,
} from '@/project/data/menu';
import scssStyles from '@/prox/utils/scssStyles';
import { FC, useCallback, version } from 'react';
import styles from './Professional.module.scss';
import DataLayer from '@/project/data/DataLayer';

const Professional: FC = () => {
  const pageSubsection = 'professional';
  const content = useCallback(() => {
    return (
      <>
        <div
          className={scssStyles(['bringToFront', styles.spacer])}
        >
          <Conditional notOn="desktop">
            <div className={styles.mobileContent}>
              <div className={styles.professionalGraphicsBlueMobile}>
                <img src={brand.professionalGraphicsBlueMobile} alt="" />
              </div>
              <div className={styles.versionText}>
                <div className={styles.versionTextlogo}>
                  <p>Exclusividade, benefícios e ofertas.</p>
                </div>
                <div className={styles.boxTlt}>
                  <p>Isso é ser PROFESSIONAL!</p>
                </div>
              </div>
              <div className={styles.contentImg}>
                {/* <ResponsiveLazyImage
                  alt={PRODUCT_NAME}
                  src={ReserveAsset.cardImage.fullPath}
                  src2={ReserveAsset.cardImage.fullPath2x}
                  src3={ReserveAsset.cardImage.fullPath3x}
                  containerClassName={styles.reserveImg}
                /> */}
                <img src={brand.professionalMobile} alt="" />
              </div>

              <div>
                <p className={styles.txtMobile}>
                  Ter um veículo Fiat Professional significa ter
                  muitas vantagens. Além de ofertas e condições
                  de compra especiais, você é atendido de forma
                  exclusiva nas concessionárias e tem serviços
                  feitos sob medida para o seu negócio.
                </p>
              </div>
              <CTAButton
                text={ENCONTRE_TITLE}
                className={styles.cta}
                title={ENCONTRE_TITLE}
                href={links.concessionarias}
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: `${ENCONTRE_TITLE}`,
                    elementCategory: 'cta',
                    pageSection: 'conteudo',
                    pageSubsection,
                  });
                }}
                handleAuxClick={() => {
                  DataLayer.clickEvent({
                    element: `${ENCONTRE_TITLE}`,
                    elementCategory: 'cta',
                    pageSection: 'conteudo',
                    pageSubsection,
                  });
                }}
              />
              <CTAButton
                text={VANTAGENS_TITLE}
                className={styles.cta}
                title={VANTAGENS_TITLE}
                href={links.professional}
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
            <div className={styles.containerDesktop}>
              <div className={styles.blueGraphicsProfessional}>
                <img
                  src={brand.professionalGraphicsBlue}
                  alt=""
                />


              </div>

              <div className={styles.teste}>
                <div className={styles.leftArea}>
                  <div className={styles.versionText}>
                    <div>
                      <p>Agilidade,</p>
                      <p>exclusividade e benefícios.</p>
                      <p className={styles.professionalText}>
                        Isso é ser PROFESSIONAL!
                      </p>
                    </div>
                  </div>
                  <div
                    className={styles.descriptionProfessional}
                  >
                    <p>
                      Ter um veículo Fiat Professional significa
                      ter muitas vantagens. Além de condições de
                      compra especiais, você é atendido de forma
                      prioritária para não atrapalhar sua rotina
                      e tem serviços de pós-venda personalizados
                      para seu negócio.
                    </p>
                  </div>
                  <CTAButton
                    text={ENCONTRE_TITLE}
                    className={styles.cta}
                    title={ENCONTRE_TITLE}
                    href={links.concessionarias}
                    handleClick={() => {
                      DataLayer.clickEvent({
                        element: `${ENCONTRE_TITLE}`,
                        elementCategory: 'cta',
                        pageSection: 'conteudo',
                        pageSubsection,
                      });
                    }}
                    handleAuxClick={() => {
                      DataLayer.clickEvent({
                        element: `${ENCONTRE_TITLE}`,
                        elementCategory: 'cta',
                        pageSection: 'conteudo',
                        pageSubsection,
                      });
                    }}
                  />
                  <CTAButton
                    text={VANTAGENS_TITLE}
                    className={styles.cta}
                    title={VANTAGENS_TITLE}
                    href={links.professional}
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
                    containerClassName={styles.mobileBackground}
                    alt={"Fiat Professional"}
                    src={professionalImage.professional.fullPath}
                    src2={professionalImage.professional.fullPath2x}
                />
                  </div>
                </div>
              </div>
            </div>
          </Conditional>
        </div>
      </>
    );
  }, []);

  return (
    <SectionElement
      id="Professional"
      className={styles.container}
      noPadding
      navReference={dataMenuLabel().find(
        (c) => c.slug === 'profissional',
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

export default Professional;
