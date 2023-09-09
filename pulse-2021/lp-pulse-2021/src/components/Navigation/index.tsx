import { FC } from 'react';
import styles from './Navigation.module.scss';
import {
  dataMenuLabels,
  dataMenuButtons,
} from '@/mocks/menu';
import { observer } from 'mobx-react-lite';
import PulseStore from '@/store/PulseStore';
import { useMobxStores } from '@/store';
import scssStyles from '@/utils/scssStyles';
import { brand } from '@/assets';
import { metaTags, PRODUCT_NAME } from '@/constants';
import { Conditional, CTAButton } from '..';
import DataLayer from '@/utils/DataLayer';

const Navigation: FC = observer(() => {
  const store: PulseStore = useMobxStores();
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
                width="28.26px"
                height="20.87px"
                alt={metaTags.brandName}
              />
              <img
                src={brand.logoProductDark}
                width="85.97px"
                height="9.57px"
                alt={PRODUCT_NAME}
              />
            </div>
          </Conditional>
          {dataMenuLabels().map((item, index) => {
            const active = item.reference
              ? (item.reference.id === store.currentlyVisibleNav || item.id === store.currentlyVisibleNav)
              : item.id === store.currentlyVisibleNav;
            const layerEvent = () => {
              DataLayer.clickEvent({
                elementCategory: 'link',
                element: item.label,
                pageSection: 'header',
                pageSubsection: 'menu',
              });
            }
            return (
              <a
                key={item.id}
                className={scssStyles([styles.menuLinks, active ? styles.active : ''])}
                href={item.url}
                onAuxClick={() => layerEvent()}
                onClick={(e) => {
                  layerEvent();
                  if (index === 0) {
                    window?.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    store.scrollToRef(item);
                  }
                  store.setMenuOpen(false);
                  e.preventDefault();
                }}
              >
                {' '}
                {item.label}{' '}
              </a>
            );
          })}
          {!!dataMenuButtons.length && (
            <div className={styles.buttonsHolder}>
              {dataMenuButtons.map((item) => {
                const layerEvent = () => {
                  DataLayer.clickEvent({
                    elementCategory: 'cta',
                    element: item.label,
                    pageSection: 'header',
                    pageSubsection: 'menu',
                  });
                }
                return (
                  <CTAButton
                    key={item.id}
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
