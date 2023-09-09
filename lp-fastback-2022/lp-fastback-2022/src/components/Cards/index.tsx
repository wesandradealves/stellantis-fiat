import { FC } from "react";
import styles from "./Cards.module.scss";
import { CardsItemsProps } from "@/models";
import FastbackStore from "@store/FastbackStore";
import { useMobxStores } from "@/store";
import { observer } from "mobx-react-lite";
import scssStyles from "@/utils/scssStyles";
import { Chevron, Plus } from "../SvgComponents";
import { ResponsiveLazyImage, ScrollToAnchor } from "@/components";
import { dataMenuLabel } from "@/data/menu";
import DataLayer from "@/utils/DataLayer";

export interface CardsProps {
  items: CardsItemsProps[];
}

const pageSubsection = "novo-fastback";

const Cards: FC<CardsProps> = observer(({ items }) => {
  const store: FastbackStore = useMobxStores();

  return (
    <div className={styles.positionFix}>
      <div className={styles.container}>
        <ScrollToAnchor
          reference={dataMenuLabel()[1]}
          className={scssStyles([styles.scrollCta, styles.scrollCtaHorizontal])}
          pageSubsection="novo-fastback"
          title="Scroll para saber mais"
        >
          <p>Scroll para saber mais</p>
          <div>
            <Chevron color="#FFB80F" />
            <Chevron color="#FFB80F" />
            <Chevron color="#FFB80F" />
          </div>
        </ScrollToAnchor>
        <div className={styles.cards}>
          {items.map((item, index) => {
            return (
              <button
                key={`desktop-stories-button-${index}`}
                onClick={() => {
                  DataLayer.clickEvent({
                    element: `${item.titleTag}`,
                    elementCategory: "card",
                    pageSection: "conteudo",
                    pageSubsection,
                  });
                  store.setMainDisplayIndex(index + 1);
                }}
                className={styles.unitaryBox}
                title={item.title2}
              >
                <div
                  id={"thumb" + item.id}
                  className={scssStyles([
                    styles.externalBox,
                    index === store.mainDisplayIndex - 1 ? styles.selected : "",
                  ])}
                >
                  <div
                    className={scssStyles([
                      styles.internalBox,
                      store.mainDisplayIndex !== index + 1
                        ? ""
                        : styles.selected,
                    ])}
                  >
                    <ResponsiveLazyImage
                      fullBg
                      alt={`${item.altTag}`}
                      title={`${item.titleTag}`}
                      src={item.src.fullPath}
                      src2={item.src.fullPath2x}
                      src3={item.src.fullPath3x}
                    />
                    <p className={styles.internalCardTitle}>{item.title}</p>
                  </div>
                  <div className={styles.bgBox} />
                  <div className={styles.cardTransform}>
                    <div className={styles.cardTitleBox}>
                      <div className={styles.flagIcon}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div
                        className={scssStyles([
                          styles.cardIcon,
                          store.mainDisplayIndex !== index + 1
                            ? ""
                            : styles.selected,
                        ])}
                      >
                        <Plus color={"#FF1430"} />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Cards;
