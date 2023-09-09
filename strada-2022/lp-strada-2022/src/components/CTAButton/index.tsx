import sanitizeString from '@/utils/sanitizeString';
import scssStyles from '@/utils/scssStyles';
import { FC, MouseEventHandler, useCallback } from 'react';
import { ChevronRight } from '../SvgComponents';
import styles from './CTAButton.module.scss';

interface CTAButtonProps {
  handleClick?: MouseEventHandler<HTMLAnchorElement>;
  handleAuxClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
  bgClassName?: string;
  variant?: 'secondary' | 'primary';
  excludeArrow?: boolean;
  href: string;
  text: string;
  title: string;
  width?: string;
  style?: React.CSSProperties;
  iconCode?: string;
  larger?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
}

const CTAButton: FC<CTAButtonProps> = ({
  className = '',
  handleClick,
  handleAuxClick,
  excludeArrow = false,
  larger = false,
  width = '100%',
  target = '_blank',
  title,
  style = {},
  variant = 'primary',
  href,
  text,
  iconCode = '',
}) => {
  const getVariantClass = useCallback(() => {
    switch (variant) {
      case 'secondary':
        return styles.secondary;
      default:
        return '';
    }
  }, [variant]);
  return (
    <a
      title={title}
      href={href}
      target={target}
      className={scssStyles([styles.button, className, getVariantClass(), larger ? styles.larger : ''])}
      onClick={handleClick}
      onAuxClick={handleAuxClick}
      style={{
        ...style,
        width
      }}
    >
      <div className={styles.contentHolder}>
        <p data-icon-code={iconCode} className={scssStyles([styles.content, iconCode ? styles.withIcon : ''])}>
          {text}
        </p>
        {!excludeArrow && (
          <ChevronRight
            title={`chevron-${sanitizeString(title)}`}
          />
        )}
      </div>
      {/* <p className={scssStyles([styles.bg, bgClassName])} /> */}
    </a>
  )
};

export default CTAButton;
