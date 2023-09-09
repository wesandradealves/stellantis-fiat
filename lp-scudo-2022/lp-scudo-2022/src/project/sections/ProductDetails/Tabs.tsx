import productDetails, {
  //  getProductDetails,
  ProductTab,
} from '@/project/data/productDetails';
import { useMobxStores } from '@/project/store';
import Store from '@/project/store/Store';
import DataLayer from '@/prox/utils/DataLayer';
import scssStyles from '@/prox/utils/scssStyles';
import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import styles from './Tabs.module.scss';

const pageSubsection = 'tudo-sobre-scudo';

const Tab: FC<{ tab: ProductTab }> = observer(({ tab }) => {
  const store: Store = useMobxStores();

  useEffect(() => {
    if (store.selectedDetailTab === '') {
      // const menuLabel = getProductDetails().find((p) => p.id === productDetails[0].id);
      store.setSelectedDetailTab(productDetails[0], false);
      store.swipeToTab(productDetails[0]);
    }
  }, [store]);

  return (
    <a
      className={scssStyles([
        styles.tab,
        store.selectedDetailTab === tab.id ? styles.active : '',
      ])}
      href={`/${tab.slug}`}
      onClick={(e) => {
        DataLayer.clickEvent({
          element: tab.title,
          elementCategory: 'botao',
          pageSection: 'conteudo',
          pageSubsection,
        });
        // const menuLabel = getProductDetails().find((p) => p.id === tab.id);
        store.setSelectedDetailTab(tab);
        store.swipeToTab(tab);
        e.preventDefault();
      }}
    >
      <span className={styles.boxRigth}></span>
      <div className={styles.content}>
        <span className={styles.boxLeft}></span>
        <span className={styles.name}>{tab.title}</span>
        <span className={styles.boxRigth}></span>
      </div>
      <span className={styles.boxLeft}></span>

      <div className={styles.bg} />
    </a>
  );
});

const Tabs: FC = () => {
  return (
    <div className={styles.container}>
      {productDetails.map((tab) => (
        <Tab key={`tab-tabs-${tab.id}`} tab={tab} />
      ))}
    </div>
  );
};

export default Tabs;
