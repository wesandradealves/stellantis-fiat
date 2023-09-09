import scssStyles from "@/prox/utils/scssStyles";
import { FC } from "react";
import styles from "./InputMsgError.module.scss";

interface InputMsgErrorProps {
  error: boolean;
  errorMsc?: string;
  className?: string;
  fullLine?: boolean;
}

const InputMsgError: FC<InputMsgErrorProps> = ({
  children,
  error,
  className = "",
  errorMsc = "",
  fullLine,
}) => (
  <div
    className={scssStyles([
      styles.container,
      className,
      fullLine ? styles.fullLine : "",
    ])}
  >
    <div className={styles.container}>{children}</div>
    {!!errorMsc && error && (
      <p>
        <span>* {errorMsc}</span>
      </p>
    )}
  </div>
);

export default InputMsgError;
