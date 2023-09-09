import scssStyles from '@/utils/scssStyles';
import { FC, MouseEventHandler } from 'react';
import styles from './IconButton.module.scss';

interface IconButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  secondary?: boolean;
  light?: boolean;
  large?: boolean;
  disabled?: boolean;
  icon: JSX.Element;
  title: string;
}

const IconButton: FC<IconButtonProps> = ({
  className = '',
  secondary = false,
  disabled = false,
  light = false,
  large = false,
  title,
  icon,
  handleClick,
}) => {
  return (
    <button
      title={title}
      className={scssStyles([
        styles.button,
        className,
        secondary ? styles.secondary : '',
        light ? styles.light : '',
        large ? styles.large : '',
        disabled ? styles.disabled : '',
      ])}
      onClick={handleClick}
    >
      {icon}
    </button>
  )
};

export default IconButton;
