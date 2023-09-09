import {
  IncludePrefixResponsiveSizes,
  includeResponsive,
} from '@/prox/utils/imagePrefixes';

const GALLERY_PREFIX = 'Gallery/';

interface VideoProps {
  desktop: string;
  mobile: string;
}

export interface GalleryAsset {
  id: string;
  title: string;
  slug: string;
  asset: IncludePrefixResponsiveSizes;
  video?: VideoProps;
}

interface IGalleryFragment {
  [x: string]: Omit<GalleryAsset, 'id'>[];
}
interface IGallery {
  [x: string]: GalleryAsset[];
}

export const gallery = (): IGallery => {
  const items: IGalleryFragment = {
    cargo: [
      {
        title: 'Fiat Scudo Cargo - Praticidade',
        slug: 'fiat-scudo-cargo-praticidade',
        asset: includeResponsive(
          `${GALLERY_PREFIX}cargo/fiat-scudo-cargo-portas-abertas`,
          'jpg',
        ),
      },

      {
        title: 'Fiat Scudo Cargo - Espaço de Carga Inteligente',
        slug: 'fiat-scudo-cargo-espaco-carga-inteligente',
        asset: includeResponsive(
          `${GALLERY_PREFIX}cargo/fiat-scudo-cargo-bagagem`,
          'jpg',
        ),
      },
      {
        title: 'Fiat Scudo Cargo - Conforto a bordo',
        slug: 'fiat-scudo-cargo-cabine',
        asset: includeResponsive(
          `${GALLERY_PREFIX}cargo/fiat-scudo-cargo-apoio`,
          'jpg',
        ),
      },
      {
        title: 'Fiat Scudo Cargo - Praticidade e Ergonomia',
        slug: 'fiat-scudo-cargo-praticidade-ergonomia',
        asset: includeResponsive(
          `${GALLERY_PREFIX}cargo/fiat-scudo-cargo-interna`,
          'jpg',
        ),
      },
      {
        title: 'Fiat Scudo Cargo - Motor 1.5 Turbo Diesel com 120CV',
        slug: 'fiat-scudo-cargo-motor',
        asset: includeResponsive(
          `${GALLERY_PREFIX}cargo/fiat-scudo-cargo-motor`,
          'jpg',
        ),
      },
      {
        title: 'Fiat Scudo Cargo - Computador de Bordo',
        slug: 'fiat-scudo-cargo-computador-de-bordo',
        asset: includeResponsive(
          `${GALLERY_PREFIX}cargo/fiat-scudo-cargo-painel`,
          'jpg',
        ),
      },

      {
        title: 'Fiat Scudo Cargo - Design Funcional e Robustez',
        slug: 'fiat-scudo-cargo-design-funcional-robustez',
        asset: includeResponsive(
          `${GALLERY_PREFIX}cargo/fiat-scudo-cargo-design`,
          'jpg',
        ),
      },
      {
        title: 'Fiat Scudo Cargo - Praticidade, 41,5 Litros de Porta Objetos',
        slug: 'fiat-scudo-cargo-praticidade-porta-objetos',
        asset: includeResponsive(
          `${GALLERY_PREFIX}cargo/fiat-scudo-cargo-adblue`,
          'jpg',
        ),
      },
    ],
    multi: [
      {
        title: 'Fiat Scudo Multi - Modularidade',
        slug: 'fiat-scudo-multi-modularidade',
        asset: includeResponsive(
          `${GALLERY_PREFIX}multi/fiat-scudo-multi-interna-fechado`,
          'jpg',
        ),
      },
      {
        title: 'Fiat Scudo Multi - Vocação para transformação',
        slug: 'fiat-scudo-multi-vocacao-para-transformacao',
        asset: includeResponsive(
          `${GALLERY_PREFIX}multi/fiat-scudo-multi-interna`,
          'jpg',
        ),
      },
      {
        title: 'Fiat Scudo Multi - Laterais e Portas Traseiras Envidraçadas',
        slug: 'fiat-scudo-multi-laterai-portas-traseiras-envidracadas',
        asset: includeResponsive(
          `${GALLERY_PREFIX}multi/fiat-scudo-multi-janela`,
          'jpg',
        ),
      },
      {
        title: 'Fiat Scudo Multi - Versatilidade',
        slug: 'fiat-scudo-multi-versatilidade',
        asset: includeResponsive(
          `${GALLERY_PREFIX}multi/fiat-scudo-multi-lateral-aberta`,
          'jpg',
        ),
      },
      {
        title: 'Fiat Scudo Multi - Infinitas Possibilidades de transformação',
        slug: 'fiat-scudo-multi-infinitas-possibilidades-transformacao',
        asset: includeResponsive(
          `${GALLERY_PREFIX}multi/fiat-scudo-multi-lateral`,
          'jpg',
        ),
      },
      {
        title: 'Fiat Scudo Multi - Tradição Fiat',
        slug: 'fiat-scudo-multi-tradicao-fiat',
        asset: includeResponsive(
          `${GALLERY_PREFIX}multi/fiat-scudo-multi-logo`,
          'jpg',
        ),
      },
      {
        title: 'Fiat Scudo Multi - Portas Traseiras com Abertura 180°',
        slug: 'fiat-scudo-multi-logo-portas-traseiras-abertura-180',
        asset: includeResponsive(
          `${GALLERY_PREFIX}multi/fiat-scudo-multi-portas-abertas-traseira`,
          'jpg',
        ),
      },
      {
        title: 'Fiat Scudo Multi - Formato em cubo retangular, máxima eficiência',
        slug: 'fiat-scudo-multi-traseira-maxima-eficiencia',
        asset: includeResponsive(
          `${GALLERY_PREFIX}multi/fiat-scudo-multi-traseira-aberta`,
          'jpg',
        ),
      },
    ],
    escudo: [
      {
        title: 'Fiat e-Scudo - Zero consumo de combustível',
        slug: 'fiat-scudo-escudo-zero-consumo-de-combustivel',
        asset: includeResponsive(
          `${GALLERY_PREFIX}escudo/fiat-scudo-escudo-carregamento-lateral`,
          'jpg',
        ),
      },
      {
        title: 'Fiat e-Scudo - Autonomia',
        slug: 'fiat-scudo-escudo-autonomia',
        asset: includeResponsive(
          `${GALLERY_PREFIX}escudo/fiat-scudo-escudo-painel`,
          'jpg',
        ),
      },
      {
        title: 'Fiat e-Scudo - Multimidia',
        slug: 'fiat-scudo-escudo-multimidia',
        asset: includeResponsive(
          `${GALLERY_PREFIX}escudo/fiat-scudo-escudo-multimidia`,
          'jpg',
        ),
      },
      {
        title: 'Fiat e-Scudo - Camera de Ré',
        slug: 'fiat-scudo-escudo-camera-de-re',
        asset: includeResponsive(
          `${GALLERY_PREFIX}escudo/fiat-scudo-escudo-camera-re`,
          'jpg',
        ),
      },
      {
        title: 'Fiat e-Scudo - Tecnologia',
        slug: 'fiat-scudo-escudo-tecnologia',
        asset: includeResponsive(
          `${GALLERY_PREFIX}escudo/fiat-scudo-escudo-interna`,
          'jpg',
        ),
      },
      {
        title: 'Fiat e-Scudo - Versatilidade',
        slug: 'fiat-scudo-escudo-versatilidade',
        asset: includeResponsive(
          `${GALLERY_PREFIX}escudo/fiat-scudo-escudo-portas-abertas`,
          'jpg',
        ),
      },
      {
        title: 'Fiat e-Scudo - Motor 100% Elétrico',
        slug: 'fiat-scudo-escudo-motor-eletrico',
        asset: includeResponsive(
          `${GALLERY_PREFIX}escudo/fiat-scudo-escudo-motor`,
          'jpg',
        ),
      },
     
     
    
      {
        title: 'Fiat e-Scudo - Consumo',
        slug: 'fiat-scudo-escudo-consumo',
        asset: includeResponsive(
          `${GALLERY_PREFIX}escudo/fiat-scudo-escudo-consumo`,
          'jpg',
        ),
      },
    ],
  };

  Object.keys(items).forEach((key) => {
    items[key] = items[key].map((item, index) => ({
      ...item,
      id: `${key}-${item.slug}-${index}`,
    }));
  });

  return items as IGallery;
};
interface IGalleryThumbs {
  [x: string]: (Omit<GalleryAsset, 'asset'> & {
    asset: string;
  })[];
}

export const galleryThumbs = (): IGalleryThumbs => {
  const thumbs: IGalleryThumbs = {};

  Object.keys(gallery()).forEach((key) => {
    thumbs[key] = gallery()[key]?.map((g) => ({
      id: `${key}-${g.slug}-thumbnail`,
      title: `${g.title}`,
      slug: g.slug,
      asset: `${g.asset.path}-thumbnail.jpg`,
    }));
  });

  return thumbs;
};

export const galleryThumbsMobile = (): IGalleryThumbs => {
  const thumbs: IGalleryThumbs = {};

  Object.keys(gallery()).forEach((key) => {
    thumbs[key] = gallery()[key]?.map((g) => ({
      id: `${key}-${g.slug}-thumbnail`,
      title: `${g.title}-thumbnail`,
      slug: g.slug,
      asset: `${g.asset.path}-thumbnail-mobile.jpg`,
    }));
  });

  return thumbs;
};

export interface ISelectedGalleryImage {
  [x: string]: GalleryAsset;
}

export const defaultSelectedGalleryImages =
  (): ISelectedGalleryImage => {
    const selectedGalleryImages: ISelectedGalleryImage = {};

    Object.keys(gallery()).forEach((key) => {
      const defaultImage = {
        ...gallery()[key][0],
        id: `${key}-${gallery()[key][0].slug}-main`,
      };
      selectedGalleryImages[key] = defaultImage;
    });

    return selectedGalleryImages;
  };
