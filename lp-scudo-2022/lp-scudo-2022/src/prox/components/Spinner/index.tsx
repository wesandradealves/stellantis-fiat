import { FC } from 'react';
import styles from './Spinner.module.scss';

interface SpinnerProps {
  scale?: number;
}

const Spinner: FC<SpinnerProps> = ({ scale = 1 }) => {
  return (
    <div
      className={styles.container}
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <svg className={styles.spinner} viewBox={`0 0 50 50`}>
        <circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
      </svg>
    </div>
  );
}

export default Spinner;