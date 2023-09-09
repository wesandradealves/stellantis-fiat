import React from "react";
import { useRouter } from "next/router";

import { Button } from "../../components";
import { dataLayer } from "../../libs/gtm";
import { getPath, slugify } from "../../utils";

import styles from "./styles.module.scss";

interface AboutItemProps {
  category: string;
  categorySlug: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  link: string;
  labelLink: string;
}

const AboutItem = (props: { data: AboutItemProps }) => {
  const router = useRouter();
  const item = props.data;

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "fiat",
      segment: "landing-page",
      product: "cronos",
      elementCategory: "botao",
      interactionType: "clique",
      pageSection: "conteudo",
      pageSubsection: "tudo-sobre",
      selectedValue: null,
      element: "compre-o-seu",
      ...args,
    });
  };

  return (
    <div className={`${styles.container} wrapper-general padding`}>
      <div className={styles.thumb}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles.content}>
        <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
        <p className={styles.description}>{item.description}</p>
        {item.link && <Button to={item.link} 
            onClick={() =>
              handleDataLayer({
                element: slugify(item.labelLink),
              })
            }>{item.labelLink}</Button>}
      </div>
    </div>
  );
};

export default AboutItem;
