import scssStyles from '@/prox/utils/scssStyles';
import { FC } from 'react';
import styles from './Container.module.scss';

const Container: FC<{ flexMiddle?: boolean; className?: string; }> = ({ children, flexMiddle = false, className = '' }) => {
  return (
    <div className={scssStyles([styles.container, flexMiddle ? styles.flexMiddle : '', className])}>
      {children}
    </div>
  );
}

export default Container;