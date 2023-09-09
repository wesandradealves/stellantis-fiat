import { PRODUCT_DETAILS_PREFIX } from '@/mocks/menu';
import productDetails, { ProductTab } from '@/mocks/productDetails';
import { useMobxStores } from '@/store';
import PulseStore from '@/store/PulseStore';
import DataLayer from '@/utils/DataLayer';
import scssStyles from '@/utils/scssStyles';
import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import styles from './Tabs.module.scss';

const pageSubsection = 'tudo-sobre-pulse';

const Tab: FC<{ tab: ProductTab }> = observer(({ tab }) => {
  const store: PulseStore = useMobxStores();

  useEffect(() => {
    if (store.selectedDetailTab === '') {
      store.setSelectedDetailTab(productDetails[0]);
      store.swipeToTab(productDetails[0]);
    }
  }, [store]);

  return (
    <a
      className={scssStyles([
        styles.tab,
        store.selectedDetailTab === tab.id ? styles.active : ''
      ])}
      href={`/${PRODUCT_DETAILS_PREFIX}${tab.slug}`}
      onClick={(e) => {
        DataLayer.clickEvent({
          element: tab.title,
          elementCategory: 'botao',
          pageSection: 'conteudo',
          pageSubsection,
        });
        store.setSelectedDetailTab(tab);
        store.swipeToTab(tab);
        e.preventDefault();
      }}
    >
      <div className={styles.content}>
        {tab.title}
      </div>
      <div className={styles.bg} />
    </a>
  )
});

const Tabs: FC = () => {
  return (
    <div className={styles.container}>
      {productDetails.map((tab) => (
        <Tab key={`tab--${tab.id}`} tab={tab} />
      ))}
    </div>
  );
};

export default Tabs;
