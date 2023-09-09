import React, { FC } from 'react';
import {
  heroImages,
  brand,
  heroContent,
} from '@/project/assets';
import styles from './HeroDesktop.module.scss';
import {
  Display,
  Cards,
  SectionElement,
} from '@/prox/components';
import { dataHero } from '@/project/data/dataHero';
import { dataMenuLabel } from '@/project/data/menu';
import scssStyles from '@/prox/utils/scssStyles';
import ResponsiveLazyImage from '@components/ResponsiveLazyImage';

const HeroDesktop: FC = () => {
  const previous = React.useRef<(() => void) | null>(null);
  const next = React.useRef<(() => void) | null>(null);
  return (
    <SectionElement
      id="desktopDisplay"
      className={styles.container}
      navReference={dataMenuLabel().find((c) => c.slug === '')}
      noPadding
      heightBehaviour="soft"
  
    >
  
      <Display
        previousEvent={(e) => {
          previous.current = e;
        }}
        nextEvent={(e) => {
          next.current = e;
        }}
        items={[
          {
            //slide 1
            body: (
              <div className={scssStyles([styles.slides])}>
                <div className={styles.content}>
                <img src={brand.descriptionHero} alt="" />
                </div>
                <div className={styles.firstFooterHero}>
                <img src={brand.firstFooter} alt="" />
                </div>
              </div>
            ),
            background: {
              src: heroImages.mainBg,
            },
          },
          {
            // slide 2
            body: (
              <div className={scssStyles([styles.slides])}>
                <div className={styles.fullBgGradient} />
                <div className={styles.content}>
                  <div className={styles.descriptionLayoutTwo}>
                    <div className={styles.tltBottom}>
                      <p>VERSATILIDADE</p>
                    </div>
                    <p className={styles.subtitle}>
                      Tenha mais versatilidade no manuseio de
                      cargas com um utilitário compacto de 1.9m
                      de altura, ideal para o trajeto urbano. As
                      portas traseiras tem abertura de 180°,
                      enquanto as laterais são deslizantes e
                      permitem até a carga do veículo com uma
                      empilhadeira.
                    </p>
                  </div>
                </div>
                <div className={styles.footerHero}>
                  <img
                    src={brand.grafismoVermelhoSecundario}
                    alt="hero-footer-grafismo-vermelho"
                  />
                </div>
              </div>
            ),
            background: {
              src: heroImages.secondContent,
            },
          },
          {
            //slide 3
            body: (
              <div
                className={scssStyles([
                  styles.slides,
                  //styles.centered,
                ])}
              >
                <div className={styles.fullBgGradient} />
                <div className={styles.content}>
                  <div className={styles.descriptionLayoutTwo}>
                    {/* <p className={styles.tltBottom}>CONFORTO</p>
                    <p className={styles.tltBottom2}>
                      E VIDA A BORDO
                    </p> */}
                    <div className={styles.tltBottom}>
                      <p>CONFORTO</p>
                      <p>E VIDA A BORDO</p>
                    </div>
                    <p className={styles.subtitle}>
                      Aproveite sua vida a bordo com itens que
                      elevam sua comodidade, como piloto
                      automático, função "One Touch" que comanda
                      os vidros dianteiros com apenas um toque,
                      rádio com AM/FM, USB e Bluetooth +2
                      alto-falantes, sistema Stop & Start e
                      tomada 12V no painel.
                    </p>
                  </div>
                </div>
                <div className={styles.footerHero}>
                  <img
                    src={brand.grafismoVermelhoSecundario}
                    alt="hero-footer-grafismo-vermelho"
                  />
                </div>
              </div>
            ),
            background: {
              src: heroImages.thirdContent,
            },
          },
          {
            //slide 4
            body: (
              <div className={scssStyles([styles.slides])}>
                <div className={styles.fullBgGradient} />
                <div className={styles.content}>
                  <div className={styles.descriptionLayoutTwo}>
                    <div className={styles.tltBottom}>
                      <p>VANTAGENS</p>
                      <p> PARA O SEU NEGÓCIO</p>
                    </div>
                    <p className={styles.subtitle}>
                      Escolha um veículo nota A no Inmetro em
                      economia. Além de um ótimo custo-benefício,
                      o Scudo também possui um dos melhores
                      índices TCO (custo total de propriedade de
                      um produto) da categoria, resultando em
                      melhores vantagens pra você e o seu
                      negócio.
                    </p>
                  </div>
                </div>
                <div className={styles.footerHero}>
                  <img
                    src={brand.grafismoVermelhoSecundario}
                    alt="hero-footer-grafismo-vermelho"
                  />
                </div>
              </div>
            ),
            background: {
              src: heroImages.fourthContent,
            },
          },
          {
            //slide 5
            body: (
              <div className={scssStyles([styles.slides])}>
                <div className={styles.footerHero}>
                  <img
                    src={brand.grafismoVermelhoSecundario}
                    alt="hero-footer-grafismo-vermelho"
                  />
                </div>
                <div className={styles.fullBgGradient} />
                <div className={styles.content}>
                  <div className={styles.descriptionLayoutTwo}>
                    <div className={styles.tltBottom}>
                      <p>e-SCUDO</p>
                    </div>
                    <p className={styles.subtitle}>
                    Conheça o e-Scudo: zero stress, zero ruído e zero emissões de 
                    CO2 com a mesma capacidade de carga da versão a combustível. 
                    Com autonomia de até 330km sem paradas para carregar, a 
                    sustentabilidade veio para ficar com a versão elétrica.
                    </p>
                  </div>
                </div>
              </div>
            ),
            background: {
              src: heroImages.fifthContent,
            },
          },
        ]}
      />
      <Cards
        items={dataHero.map((d) => ({ ...d, src: d.cardSrc }))}
      />
    </SectionElement>
  );
};

export default HeroDesktop;
