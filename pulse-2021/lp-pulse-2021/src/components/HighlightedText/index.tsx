import { FC, useRef, useEffect } from 'react';
import { Property } from 'csstype';
import styles from './HighlightedText.module.scss';
import scssStyles from '@/utils/scssStyles';
import { useOnScreen } from '@/hooks';

interface HighlightedTextProps {
  color?: string;
  backgroundColor?: string;
  outlined?: boolean;
  padding?: Property.Padding<string | number>;
  margin?: Property.Margin<string | number>;
  className?: string;
  onVisible?: (isVisible: boolean, element: HTMLSpanElement | null) => void;
}

const HighlightedText: FC<HighlightedTextProps> = ({
  color = '#222652',
  outlined = false,
  backgroundColor = '#92D0DB',
  padding =  '2px 12px 1px 8px',
  margin = '1px 0px',
  children,
  className = '',
  onVisible,
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (onVisible) {
      onVisible(isVisible, ref.current);
    }
  }, [isVisible, onVisible]);

  return (
    <span
      ref={ref}
      className={scssStyles(['highlighted', styles.container, className])}
      style={{
        color: outlined ? backgroundColor : color,
        padding,
        margin,
        backgroundColor,
        WebkitTextStrokeWidth: outlined ? '1px' : '0px',
        WebkitTextStrokeColor: outlined ? color : 'transparent',
      }}
    >
      {children}
    </span>
  );
}

export default HighlightedText;
