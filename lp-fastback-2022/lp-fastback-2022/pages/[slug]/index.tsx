import { dataMenuLabel } from '@/data/menu';
import { MenuLabel } from '@/models';
import { useMobxStores } from '@/store';
import FastbackStore from '@store/FastbackStore';
import { useRouter } from 'next/router';
import Home from 'pages';
import { FC, useState, useEffect } from 'react';

const Slug: FC = () => {
  const store: FastbackStore = useMobxStores();
  const router = useRouter();
  const [slug, setSlug] = useState<MenuLabel>(
    dataMenuLabel()[0],
  );

  useEffect(() => {
    const checkSlug = router?.query?.slug as string;
    if (checkSlug) {
      const foundLabel = dataMenuLabel().find(
        (v) => v.slug === checkSlug,
      );
      if (foundLabel) setSlug(foundLabel);
    }
  }, [router, store]);

  return <Home navRef={slug} />;
};

export default Slug;
