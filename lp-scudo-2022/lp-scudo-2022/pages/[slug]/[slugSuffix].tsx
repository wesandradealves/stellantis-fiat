import { dataMenuLabel } from "@/project/data/menu";
import { MenuLabel } from "@/prox/models";
import { useMobxStores } from "@/project/store";
import Store from "@/project/store/Store";
import { useRouter } from "next/router";
import Home from "pages";
import { FC, useState, useEffect } from "react";

const SlugSuffix: FC = () => {
  const store: Store = useMobxStores();
  const router = useRouter();
  const [slug, setSlug] = useState<MenuLabel>();
  const [slugSuffix, setSlugSuffix] = useState<string>();

  useEffect(() => {
    const checkSlug = router?.query?.slug as string;
    const checkSlugSuffix = router?.query?.slugSuffix as string;
    if (checkSlug) {
      const foundLabel = dataMenuLabel().find((v) => v.slug === checkSlug);
      if (foundLabel) {
        setSlug(foundLabel);
      }
    }
    if (checkSlugSuffix && checkSlug) {
      setSlugSuffix(checkSlugSuffix);
    }
  }, [router, store]);

  if (!slug) {
    return <Home navRef={undefined}  />;
  }

  return (
    <Home
      navRef={slug}
      slugSuffix={slugSuffix}
    />
  );
};

export default SlugSuffix;