import React, { FC } from 'react';
import styles from './index.module.scss';
import {
  Cards,
  Card,
  ResponsiveLazyImage,
  Conditional,
  SectionElement,
} from '@/components';
import { dataHero } from '@/mocks/dataHero';
import { dataMenuLabel } from '@/mocks/menu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ui, kv } from '@/assets';
import StradaStore from '@/store/StradaStore';
import { useMobxStores } from '@/store';
import { observer } from 'mobx-react-lite';

const Hero: FC = observer(() => {
  const store: StradaStore = useMobxStores();
  return (
    <SectionElement
      id="desktopDisplay"
      className={styles.container}
      navReference={dataMenuLabel()[0]}
      noPadding
      heightBehaviour="unset"
    >
      <Conditional
        desktop={<div className={styles.rectangle} />}
      />
      <div className={styles.heroImageHolder}>
        <ResponsiveLazyImage
          containerClassName={styles.heroImage}
          alt="Fiat Strada na cor cinza strato com árvores ao fundo"
          title="Fiat Strada Cinza"
          src={kv.fullKv.fullPath}
          src2={kv.fullKv.fullPath2x}
          src3={kv.fullKv.fullPath3x}
          objectFit="contain"
        />
      </div>

      <Conditional
        desktop={
          <Cards
            items={dataHero.map((d) => ({
              ...d,
              src: d.cardSrc,
            }))}
          />
        }
        mobile={
          <div className={styles.contentMobile}>
            <h4 className={styles.knowTheNews}>
              Arraste e conheça as novidades
              <img alt="novidades" src={ui.chevronLeft} />
            </h4>
            <Swiper
              keyboard
              className={styles.Swiper}
              // (Size Pagina - Size Card) / Size Card
              slidesPerView={(store.pageX - 120) / 85}
              slidesOffsetBefore={40}
            >
              {dataHero.map((card, index) => (
                <SwiperSlide key={`hero-mobile-${card.id}`}>
                  <Card
                    card={{ ...card, src: card.cardSrc }}
                    index={index}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.seeMore}>
              <Conditional
                desktop={
                  <img alt={'Veja mais'} src={ui.arrowDown} />
                }
              />
              <h4>
                <Conditional
                  mobile={
                    <img
                      alt={'Veja mais'}
                      src={ui.arrowDownMobile}
                    />
                  }
                />
                {'Scroll para saber mais'}
              </h4>
            </div>
          </div>
        }
      />
    </SectionElement>
  );
});

export default Hero;
