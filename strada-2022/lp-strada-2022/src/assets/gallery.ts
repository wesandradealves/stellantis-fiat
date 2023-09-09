import {
  IncludePrefixResponsiveSizes,
  includeResponsive,
} from '@/utils/imagePrefixes';

const GALLERY_PREFIX = 'Gallery/';

export interface GalleryAsset {
  id: string;
  slug: string;
  title: string;
  alt: string;
  asset: IncludePrefixResponsiveSizes;
}

export const gallery: GalleryAsset[] = [
  {
    id: 'ga01',
    slug: 'design',
    title: 'Fiat Strada na pista',
    alt: 'Fiat Strada andando na via de uma pista',
    asset: includeResponsive(
      `${GALLERY_PREFIX}strada-galeria-pista`,
      'jpg',
    ),
  },
  {
    id: 'ga02',
    slug: 'multimidia',
    title: 'Fiat Flag',
    alt: 'Detalhe da etiqueta Fiat Flag no banco do Fiat Strada',

    asset: includeResponsive(
      `${GALLERY_PREFIX}fiat-flag-galeria`,
      'jpg',
    ),
  },
  {
    id: 'ga03',
    slug: 'roda',
    title: 'Roda Fiat Strada',
    alt: 'Foto com zoom na roda do Fiat Strada',
    asset: includeResponsive(
      `${GALLERY_PREFIX}roda-galeria`,
      'jpg',
    ),
  },

  {
    id: 'ga04',
    slug: 'farol',
    title: 'Farol Fiat Strada',
    alt: 'Foto com zoom em um dos faróis do Fiat Strada',

    asset: includeResponsive(
      `${GALLERY_PREFIX}farol-strada-galeria`,
      'jpg',
    ),
  },

  {
    id: 'ga05',
    slug: 'carga',
    title: 'Traseira Fiat Strada na cor vermelha',
    alt: 'Traseira do Fiat Strada na cor vermelha, com diversos itens na caçamba',

    asset: includeResponsive(
      `${GALLERY_PREFIX}strada-vermelho-traseira-com-itens-galeria`,
      'jpg',
    ),
  },

  {
    id: 'ga06',
    slug: 'interior',
    title: 'Painel Fiat Strada',
    alt: 'Zoom do Painel do Fiat Strada com o logo Ranch acima',

    asset: includeResponsive(
      `${GALLERY_PREFIX}painel-galeria`,
      'jpg',
    ),
  },

  {
    id: 'ga07',
    slug: 'badge',
    title: 'Detalhe Ranch',
    alt: 'Zoom no detalhe com os dizeres Ranch da Fiat Strada',

    asset: includeResponsive(
      `${GALLERY_PREFIX}ranch-detalhe-galeria`,
      'jpg',
    ),
  },

  {
    id: 'ga08',
    slug: 'traseira',
    title: 'Traseira Fiat Strada Vermelho',
    alt: 'Traseira do Fiat Strada vermelho, em um fundo preto',

    asset: includeResponsive(
      `${GALLERY_PREFIX}traseira-strada-vermelho-galeria`,
      'jpg',
    ),
  },
];

export const galleryThumbs = gallery.map((g) => ({
  ...g,
  thumb: `${g.asset.path}-thumb.${g.asset.extension}`,
}));
