import scssStyles from "@/utils/scssStyles";
import { FC, MouseEventHandler, useCallback } from "react";
import { ChevronRight } from "../SvgComponents";
import styles from "./CTAButton.module.scss";

interface CTAButtonProps {
  handleClick?: MouseEventHandler<HTMLAnchorElement>;
  handleAuxClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
  bgClassName?: string;
  variant?: "secondary" | "primary";
  excludeArrow?: boolean;
  href: string;
  text: string;
  title: string;
  width?: string;
  style?: React.CSSProperties;
  iconCode?: string;
  larger?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
  download?: boolean;
}

const CTAButton: FC<CTAButtonProps> = ({
  className = "",
  bgClassName = "",
  handleClick,
  handleAuxClick,
  excludeArrow = false,
  larger = false,
  width = "100%",
  target = "_blank",
  title,
  style = {},
  variant = "primary",
  href,
  text,
  iconCode = "",
  download = false,
}) => {
  const getVariantClass = useCallback(() => {
    switch (variant) {
      case "secondary":
        return styles.secondary;
      default:
        return "";
    }
  }, [variant]);
  return (
    <a
      title={title}
      href={href}
      target={target}
      download={download}
      className={scssStyles([
        styles.button,
        className,
        getVariantClass(),
        larger ? styles.larger : "",
      ])}
      onClick={handleClick}
      onAuxClick={handleAuxClick}
      style={{
        ...style,
        width,
      }}
    >
      <div className={styles.contentHolder}>
        <p
          data-icon-code={iconCode}
          className={scssStyles([
            styles.content,
            iconCode ? styles.withIcon : "",
          ])}
        >
          {text}
        </p>
        {!excludeArrow && <ChevronRight />}
      </div>
      <p className={scssStyles([styles.bg, bgClassName, styles.testeBg])} />
    </a>
  );
};

export default CTAButton;
