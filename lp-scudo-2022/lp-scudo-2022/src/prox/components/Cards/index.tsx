import { ui } from '@/project/assets';
import {
  ResponsiveLazyImage,
  ScrollToAnchor,
} from '@/prox/components';
import { dataMenuLabel } from '@/project/data/menu';
import { CardsItemsProps } from '@/prox/models';
import { useMobxStores } from '@/project/store';
import Store from '@/project/store/Store';
import DataLayer from '@/prox/utils/DataLayer';
import scssStyles from '@/prox/utils/scssStyles';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import styles from './Cards.module.scss';
import heroProductDetails from '@/project/data/heroDetails';
import { PRODUCT_NAME } from '@constants/index';
import Chevron from '@components/SvgComponents/Chevron';

export interface CardsProps {
  items: CardsItemsProps[];
}

interface CardProp {
  card: CardsItemsProps;
  index: number;
}

export const Card: FC<CardProp> = observer(
  ({ card: item, index }) => {
    const store: Store = useMobxStores();
    return (
      <button
        onClick={() => {
          DataLayer.clickEvent({
            element: item.title,
            elementCategory: 'card',
            pageSection: 'conteudo',
            pageSubsection: 'fiat-scudo',
          });
          store.setMainDisplayIndex(index + 1);
          // O Comando abaixo abre o modal com a TAB setada conforme o click no card
          //store.setSelectedHeroDetailTab(heroProductDetails[index]);
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
            //onClick={() => store.setModalHero(true)}
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
          pageSubsection="novo-scudo"
          title="Scroll para saber mais"
        >
          <div className={styles.scroll}>
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
