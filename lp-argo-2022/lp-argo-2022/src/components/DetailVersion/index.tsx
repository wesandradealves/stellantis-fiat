import React from "react";

import { Button, Image } from "../";

import styles from "./styles.module.scss";
interface OptionsProps {
  name: string;
  image: string;
}

interface VersionItemProps {
  slug: string;
  title: string;
  subtitle: string;
  label: string;
  image: string;
  link: string;
  options: OptionsProps[];
}

interface DetailVersionProps {
  data: VersionItemProps;
  handleDataLayer: ({}) => void;
}

const DetailVersion = ({ data, handleDataLayer }: DetailVersionProps) => {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.wrapper} wrapper-general padding`}>
          <div className={styles.content}>
            <div className={styles.containerTitle}>
              <h2 className={styles.title}>
                {data.title} <span>{data.subtitle}</span>
              </h2>
              <h2 className={styles.shadow}>
                {data.title} <span>{data.subtitle}</span>
              </h2>
            </div>
            <div className={`mobile ${styles.image}`}>
              <Image src={data.image} alt={`${data.title} ${data.subtitle}`} />
            </div>
            <div className={styles.listThumb}>
              {data.options &&
                data.options.map((option: OptionsProps) => (
                  <div
                    className={styles.item}
                    key={`option-${option.name}-${data.slug}`}
                  >
                    <div className={styles.thumb}>
                      <Image src={option.image} alt={option.name} />
                    </div>
                    <div className={styles.description}>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: option.name,
                        }}
                      />
                    </div>
                  </div>
                ))}
            </div>
            <div
              className={styles.wrapperButton}
              onClick={() =>
                handleDataLayer({
                  pageSubsection: data.slug,
                  elementCategory: "cta",
                  pageSection: "versoes",
                })
              }
            >
              <Button to={data.link} target="_blank">
                Monte o seu
              </Button>
            </div>
          </div>
          <div className={`desktop desktop-mobile ${styles.image}`}>
            <Image src={data.image} alt={`${data.title} ${data.subtitle}`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailVersion;
