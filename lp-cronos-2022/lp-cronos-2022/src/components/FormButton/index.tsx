import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";
import Image from "next/image";

import icoArrowRight from "../../assets/ico-arrow-right.svg";

import styles from "./styles.module.scss";

interface FormButtonProps {
  children: string;
  onClick?: () => void;
}

const FormButton = ({ children, onClick }: FormButtonProps) => (
  <button type="submit" className={styles.container} onClick={onClick}>
    <span className={styles.text}>
      {children}
      <div className={styles.ico}>
        <Image src={icoArrowRight} alt="Saíba mais" />
      </div>
    </span>
  </button>
);

export default FormButton;
