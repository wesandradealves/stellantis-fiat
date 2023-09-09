import productDetails, {
  HeroProductTab,
} from '@/mocks/heroDetails';
import { useMobxStores } from '@/store';
import StradaStore from '@/store/StradaStore';
import DataLayer from '@/utils/DataLayer';
import scssStyles from '@/utils/scssStyles';
import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import styles from './Tabs.module.scss';
import heroProductDetails from '@/mocks/heroDetails';

const pageSubsection = 'fiat-strada';

const Tab: FC<{ tab: HeroProductTab }> = observer(({ tab }) => {
  const store: StradaStore = useMobxStores();

  useEffect(() => {
    if (!store.selectedHeroDetailTab) {
      store.setSelectedHeroDetailTab(heroProductDetails[0]);
      store.swipeToTabHero(heroProductDetails[0]);
    }
  }, [store]);

  return (
    <a
      className={scssStyles([
        styles.tab,
        store.selectedHeroDetailTab === tab.id
          ? styles.active
          : '',
      ])}
      href={`/${tab.slug}`}
      onClick={(e) => {
        DataLayer.clickEvent({
          element: tab.title,
          elementCategory: 'botao',
          pageSection: 'conteudo',
          pageSubsection,
        });
        store.setSelectedHeroDetailTab(tab);
        store.swipeToTabHero(tab);
        e.preventDefault();
      }}
    >
      <div className={styles.content}>{tab.title}</div>
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
