import scssStyles from '@/utils/scssStyles';
import { FC, MouseEventHandler } from 'react';
import { Arrow } from '../SvgComponents';
import styles from './ArrowButton.module.scss';

interface ArrowButtonProps {
  previous?: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  secondary?: boolean;
  light?: boolean;
  large?: boolean;
  disabled?: boolean;
}

const ArrowButton: FC<ArrowButtonProps> = ({
  previous = false,
  className = '',
  secondary = false,
  disabled = false,
  light = false,
  large = false,
  handleClick,
}) => {
  const title = previous ? 'Anterior' : 'Próximo';
  return (
    <button
      title={title}
      className={scssStyles([
        styles.button,
        previous ? styles.previous : styles.next,
        className,
        secondary ? styles.secondary : '',
        light ? styles.light : '',
        large ? styles.large : '',
        disabled ? styles.disabled : '',
      ])}
      onClick={handleClick}
    >
      <Arrow title={title} color="currentColor" />
    </button>
  )
};

export default ArrowButton;
