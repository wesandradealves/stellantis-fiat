import { FC } from "react";
import styles from "./Navigation.module.scss";
import { dataMenuLabel, dataMenuButtons } from "@/data/menu";
import { observer } from "mobx-react-lite";
import FastbackStore from "@store/FastbackStore";
import { useMobxStores } from "@/store";
import scssStyles from "@/utils/scssStyles";
import { brand, ui } from "@/assets/general";
import { Conditional, CTAButton } from "..";
import DataLayer from "@/utils/DataLayer";
import productDetails from "@/data/productDetails";

const Navigation: FC = observer(() => {
  const store: FastbackStore = useMobxStores();
  return (
    <>
      {store.menuOpen && (
        <div
          className={styles.gestureDetector}
          onClick={() => {
            DataLayer.closeEvent({
              elementCategory: "imagem",
              element: "menu",
              pageSection: "header",
              pageSubsection: "menu",
            });
          }}
        />
      )}
      <nav
        id="mainNav"
        className={scssStyles([
          styles.container,
          store.menuOpen ? styles.open : "",
        ])}
      >
        <div className={styles.scroller}>
          <Conditional notOn="mobile">
            <div className={styles.productLogo}>
              <img
                src={brand.logoNav}
                // width="80px"
                // height="32px"
                alt={""}
              />
            </div>
          </Conditional>
          {dataMenuLabel().map((item, index) => {
            const reference = store.currentlyVisibleNav;
            const active = item.id === reference;
            const layerEvent = () => {
              DataLayer.clickEvent({
                elementCategory: "link",
                element: item.label,
                pageSection: "header",
                pageSubsection: "menu",
              });
            };
            return (
              <div className={styles.menuItem} key={`menuItem-${item.id}`}>
                {/* {active && (
                  <img
                    className={styles.iconMenu}
                    src={brand.iconMenu}
                    alt={""}
                  />
                )} */}
                <a
                  key={`menu-link-${item.id}`}
                  className={scssStyles([
                    styles.menuLinks,
                    active ? styles.active : "",
                    item.detailsBox ? styles.detailsBox : "",
                    item.isDetails ? styles.details : "",
                  ])}
                  href={item.url}
                  onAuxClick={() => layerEvent()}
                  onClick={(e) => {
                    layerEvent();
                    if (index === 0) {
                      window?.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    } else {
                      if (item.prefixRelation) {
                        store.scrollToRef(item.prefixRelation);
                        const tabReference = productDetails.find(
                          (p) => p.id === item.id.replace("data-", "")
                        );
                        if (tabReference) {
                          store.setSelectedDetailTab(tabReference);
                          store.swipeToTab(tabReference);
                        }
                      } else {
                        store.scrollToRef(item);
                      }
                    }
                    store.setMenuOpen(false);
                    e.preventDefault();
                  }}
                >
                  <span className={scssStyles([styles.linkUnderline])}>
                    {item.label}
                  </span>
                  <img
                    className={scssStyles([
                      styles.teste1,
                      active ? styles.visible : "",
                    ])}
                    src={ui.selectMenu}
                    alt=""
                  />
                </a>
              </div>
            );
          })}

          {!!dataMenuButtons.length && (
            <div className={styles.buttonsHolder}>
              {dataMenuButtons.map((item) => {
                const layerEvent = () => {
                  DataLayer.clickEvent({
                    elementCategory: "cta",
                    element: item.label,
                    pageSection: "conteudo",
                    pageSubsection: "menu",
                  });
                };
                return (
                  <CTAButton
                    key={`menu-cta-${item.id}`}
                    href={item.url}
                    className={styles.menuButton}
                    text={item.label}
                    width="88%"
                    title={item.label}
                    handleAuxClick={() => layerEvent()}
                    handleClick={() => layerEvent()}
                    iconCode={item.iconCode}
                  />
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </>
  );
});

export default Navigation;
