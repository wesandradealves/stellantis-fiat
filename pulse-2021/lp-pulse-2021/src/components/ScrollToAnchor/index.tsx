import { FC } from 'react';
import { MenuLabels } from '@/models';
import { useMobxStores } from '@/store';
import PulseStore from '@/store/PulseStore';
import styles from './ScrollToAnchor.module.scss';
import { observer } from 'mobx-react-lite';
import scssStyles from '@/utils/scssStyles';
import DataLayer from '@/utils/DataLayer';

interface ScrollToAnchorProps {
  reference: MenuLabels | undefined;
  title: string;
  pageSubsection: string;
  className?: string;
}

const ScrollToAnchor: FC<ScrollToAnchorProps> = observer(({ reference, className = '', children, title, pageSubsection }) => {
  const store: PulseStore = useMobxStores();

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
