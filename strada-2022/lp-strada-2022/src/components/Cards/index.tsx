import { ui } from '@/assets';
import {
  ResponsiveLazyImage,
  ScrollToAnchor,
} from '@/components';
import { dataMenuLabel } from '@/mocks/menu';
import { CardsItemsProps } from '@/models';
import { useMobxStores } from '@/store';
import StradaStore from '@/store/StradaStore';
import DataLayer from '@/utils/DataLayer';
import scssStyles from '@/utils/scssStyles';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import styles from './index.module.scss';
import heroProductDetails from '@/mocks/heroDetails';

export interface CardsProps {
  items: CardsItemsProps[];
}

interface CardProp {
  card: CardsItemsProps;
  index: number;
}

export const Card: FC<CardProp> = observer(
  ({ card: item, index }) => {
    const store: StradaStore = useMobxStores();
    return (
      <button
        onClick={() => {
          DataLayer.clickEvent({
            element: item.title,
            elementCategory: 'card',
            pageSection: 'conteudo',
            pageSubsection: 'fiat-strada',
          });
          store.setMainDisplayIndex(index + 1);
          // O Comando abaixo abre o modal com a TAB setada conforme o click no card
          store.setSelectedHeroDetailTab(heroProductDetails[index]);
        }}
        className={styles.unitaryBox}
        title={item.title}
      >
        <div
          id={'thumb' + item.id}
          className={scssStyles([
            styles.externalBox,
            index === store.mainDisplayIndex - 1
              ? styles.selected
              : '',
          ])}
        >
          <div
            onClick={() => store.setModalHero(true)}
            className={styles.internalBox}
          >
            {item.title2 != '' ? (
              <h3 className={styles.cardTitle}>
                {`${item.title} ${item.title2}`}
              </h3>
            ) : (
              <h3 className={styles.cardTitle}>
                {`${item.title}`}
              </h3>
            )}
            <ResponsiveLazyImage
              alt={`Card ${item.title}`}
              src={item.src.fullPath}
              src2={item.src.fullPath2x}
              src3={item.src.fullPath3x}
            />
            <div className={styles.gradient} />
            <div className={styles.addCross} />
          </div>
        </div>
      </button>
    );
  },
);

const Cards: FC<CardsProps> = observer(({ items }) => {
  return (
    <div className={styles.positionFix}>
      <div className={styles.container}>
        <ScrollToAnchor
          reference={dataMenuLabel()[1]}
          className={scssStyles([
            styles.scrollCta,
            styles.scrollCtaHorizontal,
          ])}
          pageSubsection="fiat-strada"
          title="Scroll para saber mais"
        >
          <p>Scroll para saber mais</p>
          <div style={{ alignItems: 'start' }}>
            <img alt={'veja-mais'} src={ui.arrowDown} />
          </div>
        </ScrollToAnchor>
        <div className={styles.cards}>
          {items.map((item, index) => {
            return (
              <Card
                key={`desktop-stories-${item.id}-button-${index}`}
                card={item}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Cards;
