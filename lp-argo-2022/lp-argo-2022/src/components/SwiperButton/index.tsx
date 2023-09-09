import React from "react";
import Image from "next/image";

import icoArrowLeft from "../../assets/ico-swiper-arrow-left.svg";
import icoArrowRight from "../../assets/ico-swiper-arrow-right.svg";

import styles from "./styles.module.scss";

interface SwiperButtonProps {
  isNext?: boolean;
  isPrev?: boolean;
  onClick?: () => void;
  className?: string;
}

const SwiperButton = ({
  isNext = false,
  isPrev = false,
  className,
  onClick,
}: SwiperButtonProps) => {
  let sense = "";

  if (isNext) {
    sense = `swiper-button-next ${styles.buttonNext}`;
  }

  if (isPrev) {
    sense = `swiper-button-prev ${styles.buttonPrev}`;
  }

  return (
    <button
      className={`${styles.button} ${sense} ${className}`}
      onClick={onClick}
    >
      <div className={styles.ico}>
        {isNext && <Image src={icoArrowRight} alt="Próximo" />}
        {isPrev && <Image src={icoArrowLeft} alt="Anterior" />}
      </div>
    </button>
  );
};

export default SwiperButton;
