import scssStyles from '@/utils/scssStyles';
import { FC } from 'react';
import styles from './InputMscError.module.scss';

interface InputMscErrorProps {
  error: boolean;
  errorMsc?: string;
  className?: string;
}

const InputMscError: FC<InputMscErrorProps> = ({
  children,
  error,
  className = '',
  errorMsc = ''
}) => (
  <div className={scssStyles([styles.container, className])}>
    <div className={styles.container}>
      {children}
    </div>
    {!!errorMsc && error && (
      <p><span>* {errorMsc}</span></p>
    )}
  </div>
);

export default InputMscError;