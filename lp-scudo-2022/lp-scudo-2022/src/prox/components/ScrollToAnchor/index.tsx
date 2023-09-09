import { FC } from 'react';
import { MenuLabel } from '@/prox/models';
import { useMobxStores } from '@/project/store';
import Store from '@/project/store/Store';
import styles from './ScrollToAnchor.module.scss';
import { observer } from 'mobx-react-lite';
import scssStyles from '@/prox/utils/scssStyles';
import DataLayer from '@/prox/utils/DataLayer';

interface ScrollToAnchorProps {
  reference: MenuLabel | undefined;
  title: string;
  pageSubsection: string;
  className?: string;
}

const ScrollToAnchor: FC<ScrollToAnchorProps> = observer(({ reference, className = '', children, title, pageSubsection }) => {
  const store: Store = useMobxStores();

  if (!reference || !reference?.slug || !store.navRefs[reference.slug]) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <a
      className={scssStyles([styles.link, className])}
      href={`${process.env.BASE_PREFIX}${reference.slug}`}
      title={title}
      onClick={(e) => {
        DataLayer.clickEvent({
          element: title,
          pageSection: 'conteudo',
          pageSubsection,
          elementCategory: 'link',
        });
        store.scrollToRef(reference);
        e.preventDefault();
      }}
    >
      {children}
    </a>
  );
});

export default ScrollToAnchor;
