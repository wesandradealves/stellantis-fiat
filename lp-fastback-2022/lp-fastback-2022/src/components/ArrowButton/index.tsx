import scssStyles from "@/utils/scssStyles";
import { FC, MouseEventHandler } from "react";
import { Arrow } from "../SvgComponents";
import styles from "./ArrowButton.module.scss";

interface ArrowButtonProps {
  previous?: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  secondary?: boolean;
  light?: boolean;
  large?: boolean;
  disabled?: boolean;
  title: string;
}

const ArrowButton: FC<ArrowButtonProps> = ({
  previous = false,
  className = "",
  secondary = false,
  disabled = false,
  light = false,
  large = false,
  title,
  handleClick,
}) => {
  return (
    <button
      title={title}
      className={scssStyles([
        styles.button,
        previous ? styles.previous : styles.next,
        className,
        secondary ? styles.secondary : "",
        light ? styles.light : "",
        large ? styles.large : "",
        disabled ? styles.disabled : "",
      ])}
      onClick={handleClick}
    >
      <span className={styles.outsideBox}>
        <Arrow title={title} color="currentColor" />
      </span>
    </button>
  );
};

export default ArrowButton;
