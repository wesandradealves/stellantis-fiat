import React from "react";

import { Image } from "..";

import styles from "./styles.module.scss";

const HighlightItem = (props: { data: any }) => {
  const { data } = props;
  return (
    <div className={styles.container}>
      <div className={`wrapper-general padding ${styles.content}`}>
        <div className={styles.containerTitle}>
          <h2
            className={`desktop desktop-mobile ${styles.title}`}
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <h2
            className={`desktop desktop-mobile ${styles.shadow}`}
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <h2
            className={`mobile ${styles.title}`}
            dangerouslySetInnerHTML={{ __html: data.titleMobile }}
          />
          <h2
            className={`mobile ${styles.shadow}`}
            dangerouslySetInnerHTML={{ __html: data.titleMobile }}
          />
        </div>
        <p dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>
      <div className={styles.image}>
        <div className="desktop desktop-mobile">
          <Image src={data.image} alt={data.label} />
        </div>
        <div className="mobile">
          <Image src={data.imageMobile} alt={data.label} />
        </div>
      </div>
    </div>
  );
};

export default HighlightItem;
