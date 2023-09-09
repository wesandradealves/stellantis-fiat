import { FC } from 'react';
import styles from './TitleBox3d.module.scss';

interface TitleBoxProps {
  text: string;
  color?: string;
  backgroundColor?: string;
  outlined?: boolean;
  uppercase?: boolean;
}

const TitleBox3d: FC<TitleBoxProps> = ({
  text,
  color = '#3A369E',
  outlined = false,
  uppercase = false,
}) => {
  return (
    <div
      style={{
        color,
        WebkitTextStrokeWidth: outlined ? '1px' : '0px',
        WebkitTextStrokeColor: outlined ? color : 'transparent',
        textTransform: uppercase ? 'uppercase' : 'inherit',
      }}
      className={styles.container}
    >
      <div className={styles.secondLayer} />
      <div className={styles.firstLayer}>
        <h2>
          {text}
        </h2>
      </div>
    </div>
  );
};

export default TitleBox3d;
