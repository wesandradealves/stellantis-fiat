import {
  SectionElement,
  Stories,
} from '@/prox/components/index';
import { Stories as StoriesAssets } from '@/project/assets/components';
import { brand, heroContent } from '@/project/assets';
import React, { FC } from 'react';
import styles from './MainStories.module.scss';
import { observer } from 'mobx-react-lite';
import { dataHero } from '@/project/data/dataHero';
import { dataMenuLabel } from '@/project/data/menu';
import ResponsiveLazyImage from "@components/ResponsiveLazyImage";

const MainStories: FC = observer(() => {
  return (
    <SectionElement
      id="mobileStories"
      navReference={dataMenuLabel()[0]}
      className={styles.container}
      noPadding
      heightBehaviour="unset"
    >
      <Stories
        items={[
          {
            showNext: true,
            title: 'Fiat e-Scudo',
            body: (
              <div className={styles.slides}>
                <div className={styles.slidesContainer}>
                  <div className={styles.topBox}>
                    <div className={styles.topTlt}>
                      <p className={styles.noTop}>
                        NOVO FIAT SCUDO:
                      </p>
                      <span>SAIU DA GARAGEM,</span>
                      <br />
                      <span>SAIU NO LUCRO.</span>
                      <br />
                      <div className={styles.vanSubtitle}>
                      <span>A VAN 100% PENSADA PARA</span>
                      <br />
                      <span>RENTABILIZAR O SEU NEGÓCIO</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.footerHero}>
                    <img
                      src={brand.grafismoVermelhoMobile}
                      alt=""
                    />
                  </div>
                </div>
                {/*<div className={styles.teste}>*/}
                {/*  <img src={brand.scudoCar} alt="" />*/}
                {/*</div>*/}

                
              </div>
            ),
            scrollCtaOrientation: 'vertical',
            background: {
              src: StoriesAssets.backgrounds.mainStorie,
            },
            durationInS: 1500,
          },
          {
            showNext: true,
            title: dataHero[0].title,
            body: (
              <>
                <div className={styles.slides}>
                  <div className={styles.slidesContainer}>
                    <div className={styles.topBox}>
                      <div className={styles.topTlt2}>
                        <p>VERSATILIDADE</p>
                        <span>{dataHero[0].description}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.footerHero}>
                    <img
                      src={brand.grafismoVermelhoMobile}
                      alt=""
                    />
                  </div>
                </div>
              </>
            ),
            scrollCtaOrientation: 'vertical',
            background: {
              src: StoriesAssets.backgrounds.secondStorie,
            },
            durationInS: 1500000,
          },
          {
            showNext: true,
            title: dataHero[1].title,
            body: (
              <>
                <div className={styles.slides}>
                  <div className={styles.slidesContainer}>
                    <div className={styles.topBox}>
                      <div className={styles.topTlt3}>
                        <div className={styles.title}>
                          <p>
                            CONFORTO
                          </p>
                        </div>
                        <div className={styles.title2}>
                          <p>
                            E VIDA A BORDO
                          </p>
                        </div>
                        <span>{dataHero[1].description}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.footerHero}>
                    <img
                      src={brand.grafismoVermelhoMobile}
                      alt=""
                    />
                  </div>
                </div>
              </>
            ),
            scrollCtaOrientation: 'vertical',
            background: {
              src: StoriesAssets.backgrounds.thirdStorie,
            },
            durationInS: 15000,
          },
          {
            showNext: true,
            title: dataHero[2].title,
            body: (
              <>
                <div className={styles.slides}>
                  <div className={styles.slidesContainer}>
                    <div className={styles.topBox}>
                      <div className={styles.topTlt4}>
                        <div className={styles.title}>
                          <p>
                            VANTAGENS
                          </p>
                        </div>
                        <div className={styles.title2}>
                          <p>
                            PARA SEU NEGÓCIO
                          </p>
                        </div>
                        <span>{dataHero[2].description}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.footerHero}>
                    <img
                      src={brand.grafismoVermelhoMobile}
                      alt=""
                    />
                  </div>
                </div>
              </>
            ),
            scrollCtaOrientation: 'vertical',
            background: {
              src: StoriesAssets.backgrounds.fourthStorie,
            },
            durationInS: 1500,
          },
          {
            showNext: true,
            title: dataHero[3].title,
            body: (
              <>
                <div className={styles.slides}>
                  <div className={styles.slidesContainer}>
                    <div className={styles.topBox}>
                      <div className={styles.topTlt5}>
                        <p>e-SCUDO</p>
                        <span>{dataHero[3].description}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.footerHero}>
                    <img
                      src={brand.grafismoVermelhoMobile}
                      alt=""
                    />
                  </div>
                </div>
              </>
            ),
            scrollCtaOrientation: 'vertical',
            background: {
              src: StoriesAssets.backgrounds.fifthStorie,
            },
            durationInS: 15,
          },
        ]}
      />
    </SectionElement>
  );
});

export default MainStories;
