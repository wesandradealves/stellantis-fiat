import productDetails, {
//  getProductDetails,
  ProductTab,
} from '@/mocks/productDetails';
import { useMobxStores } from '@/store';
import StradaStore from '@/store/StradaStore';
import DataLayer from '@/utils/DataLayer';
import scssStyles from '@/utils/scssStyles';
import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import styles from './Tabs.module.scss';

const pageSubsection = 'tudo-sobre-strada';

const Tab: FC<{ tab: ProductTab }> = observer(({ tab }) => {
  const store: StradaStore = useMobxStores();

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
        store.selectedDetailTab === tab.id ? styles.active : ''
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
        <Tab key={`tab-tabs-${tab.id}`} tab={tab} />
      ))}
    </div>
  );
};

export default Tabs;
