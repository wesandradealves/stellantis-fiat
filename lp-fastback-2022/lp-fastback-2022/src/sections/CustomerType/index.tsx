import { FC } from "react";
import { Conditional, ScrollToAnchor, SectionElement } from "@/components";
import { Chevron } from "@/components/SvgComponents";
import { observer } from "mobx-react-lite";
import styles from "./index.module.scss";
import SwipersDesktop from "./SwipersDesktop";
import SwipersMobile from "./SwipersMobile";
import { useMobxStores } from "@/store";
import FastbackStore from "@store/FastbackStore";
//import { consumerType } from "@/data/dataConsumerType";
import consumerType from "@/data/dataConsumerType";

import { dataMenuLabel } from "@/data/menu";

const reference = dataMenuLabel().find((c) => c.slug === "powered-by-abarth");

const CustomerType: FC = observer(() => {
  const store: FastbackStore = useMobxStores();

  const setReference = (index?: number) => {
    const defaultActiveIndex = store.isDesktop
      ? store.newProductsSwiperController?.activeIndex ?? 0
      : store.newProductsMobileSwiperController?.activeIndex ?? 0;
    const activeIndex = index ?? defaultActiveIndex;
    const suffix = consumerType[activeIndex].slug;
    reference &&
      store.currentTab?.parentSlug &&
      store.setCurrentlyVisibleNav(reference, suffix);
  };
  return (
    <SectionElement
      id="cutomerType"
      navReference={reference}
      heightBehaviour="soft"
      noPadding
      className={styles.container}
      overrideReference
      onSlugSuffix={(slug) => {
        const referenceIndex = consumerType.findIndex((c) => c.slug === slug);
        const index = referenceIndex >= 0 ? referenceIndex : 0;
        if (store.newProductsSwiperController?.params)
          store.newProductsSwiperController?.slideTo(index);
        if (store.newProductsMobileSwiperController?.params)
          store.newProductsMobileSwiperController?.slideTo(index);
      }}
      onVisibilityChange={(visible) => {
        if (visible) setReference();
      }}
    >
      {/* <ScrollToAnchor
        reference={reference}
        className={styles.scrollCta}
        pageSubsection="fiat-connect-me"
        title={`Está procurando o parceiro perfeito para o trabalho?`}
      >
        <h2>Está procurando o parceiro perfeito para o trabalho?</h2>
        <Chevron title="Seta nova Strada automática" color="#991241" />
      </ScrollToAnchor> */}
      <Conditional
        desktop={<SwipersDesktop setReference={setReference} />}
        mobile={<SwipersMobile setReference={setReference} />}
      />
    </SectionElement>
  );
});

export default CustomerType;
