import { FC } from 'react';
import styles from './index.module.scss';
import { dataMenuLabel, dataMenuButtons } from '@/mocks/menu';
import { observer } from 'mobx-react-lite';
import StradaStore from '@/store/StradaStore';
import { useMobxStores } from '@/store';
import scssStyles from '@/utils/scssStyles';
import { brand } from '@/assets';
import { metaTags, PRODUCT_NAME } from '@/constants';
import { Conditional, CTAButton } from '..';
import DataLayer from '@/utils/DataLayer';
import productDetails from '@/mocks/productDetails';

const Navigation: FC = observer(() => {
  const store: StradaStore = useMobxStores();
  return (
    <>
      {store.menuOpen && (
        <div
          className={styles.gestureDetector}
          onClick={() => {
            store.setMenuOpen(false);
            DataLayer.closeEvent({
              elementCategory: 'imagem',
              element: 'menu',
              pageSection: 'header',
              pageSubsection: 'menu',
            });
          }}
        />
      )}
      <nav
        id="mainNav"
        className={scssStyles([
          styles.container,
          store.menuOpen ? styles.open : '',
        ])}
      >
        <div className={styles.scroller}>
          <Conditional notOn="mobile">
            <div className={styles.productLogo}>
              <img
                src={brand.logoHeader}
                alt={PRODUCT_NAME}
              />
              <h1>
                {`${metaTags.brandName} ${metaTags.productName}`}
              </h1>
            </div>
          </Conditional>
          {dataMenuLabel().map((item, index) => {
            const reference = store.currentlyVisibleNav;
            const active = item.id === reference;
            const layerEvent = () => {
              DataLayer.clickEvent({
                elementCategory: 'link',
                element: item.label,
                pageSection: 'header',
                pageSubsection: 'menu',
              });
            };
            return (
              <a
                key={`menu-${item.id}`}
                id={item.id}
                className={scssStyles([
                  styles.menuLinks,
                  active ? styles.active : '',
                ])}
                href={item.url}
                onAuxClick={() => layerEvent()}
                onClick={(e) => {
                  layerEvent();
                  if (index === 0) {
                    window?.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                  } else {
                    if (item.prefixRelation) {
                      store.scrollToRef(item.prefixRelation);
                      const tabReference = productDetails.find((p) => p.id === item.id.replace('data-', ''));
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
                <span>
                  {item.label}
                </span>
              </a>
            );
          })}
          {!!dataMenuButtons.length && (
            <div className={styles.buttonsHolder}>
              {dataMenuButtons.map((item, index) => {
                const layerEvent = () => {
                  DataLayer.clickEvent({
                    elementCategory: 'cta',
                    element: item.label,
                    pageSection: 'header',
                    pageSubsection: 'menu',
                  });
                };
                return (
                  <CTAButton
                    key={`menu-cta-${item.id}-${index}`}
                    href={item.url}
                    className={styles.menuButton}
                    text={item.label}
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
