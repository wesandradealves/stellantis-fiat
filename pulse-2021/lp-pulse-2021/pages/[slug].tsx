import { dataMenuLabels, PRODUCT_DETAILS_PREFIX, PRODUCT_DETAILS_REF } from "@/mocks/menu";
import productDetails from "@/mocks/productDetails";
import { MenuLabels } from "@/models";
import { useMobxStores } from "@/store";
import PulseStore from "@/store/PulseStore";
import { useRouter } from "next/router";
import Home from "pages";
import { FC, useEffect, useState } from "react";

const ReturnToSlug: FC = () => {
  const store: PulseStore = useMobxStores();
  const router = useRouter();
  const [slug, setSlug] = useState<MenuLabels>();

  useEffect(() => {
    const checkSlug = router?.query?.slug as string;
    if (checkSlug) {
      if (checkSlug.includes(PRODUCT_DETAILS_PREFIX)) {
        const tab = productDetails.find((d) => d.slug === checkSlug.replace(PRODUCT_DETAILS_PREFIX, ''));
        if (tab) {
          // TEMPORARY FIX
          const queryObject = window.location.search;
          store.setSelectedDetailTab(tab, !queryObject ? undefined : new URLSearchParams(queryObject));
          setTimeout(() => {
            store.swipeToTab(tab);
          }, 500);
        }
        setSlug(PRODUCT_DETAILS_REF);
      }
      setSlug(dataMenuLabels().find((v) => v.slug === checkSlug));
    }
  }, [router, store]);

  return (
    <Home navRef={slug} />
  );
};

export default ReturnToSlug;