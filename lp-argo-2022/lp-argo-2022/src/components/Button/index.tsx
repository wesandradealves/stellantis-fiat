import React from "react";
import Image from "next/image";

import icoArrowRight from "../../assets/ico-arrow-right.svg";

import styles from "./styles.module.scss";

interface ButtonProps {
  to?: string | undefined;
  model?: "link" | "button";
  target?: string;
  children: JSX.Element | string;
  onClick?: () => void;
}

const Button = ({
  to,
  model = "link",
  target,
  children,
  onClick,
  ...args
}: ButtonProps) => {
  return model === "link" ? (
    <a
      href={!onClick !== undefined ? to : undefined}
      target={target}
      className={styles.container}
      onClick={onClick}
      {...args}
    >
      <span className={styles.text}>
        {children}
        <div className={styles.ico}>
          <Image src={icoArrowRight} alt="Saíba mais" />
        </div>
      </span>
      <div className={styles.bg} />
    </a>
  ) : (
    <button className={styles.container} {...args}>
      <span className={styles.text}>
        {children}
        <div className={styles.ico}>
          <Image src={icoArrowRight} alt="Saíba mais" />
        </div>
      </span>
      <div className={styles.bg} />
    </button>
  );
};

export default Button;
