import { IncludePrefixResponsiveSizes, includeResponsive } from "@/utils/imagePrefixes";

const GALLERY_PREFIX = 'Gallery/';

interface VideoProps {
  desktop: string;
  mobile: string;
}
export interface GalleryAsset {
  id: string;
  title: string;
  asset: IncludePrefixResponsiveSizes;
  video?: VideoProps;
}

export const gallery: GalleryAsset[] = [
  {
    id: 'ga10',
    title: 'Performance',
    asset: includeResponsive(`${GALLERY_PREFIX}performance`, 'jpg'),
    video: {
      desktop: '644804838',
      mobile: '644804838',
    },
  },
  {
    id: 'ga01',
    title: 'Painel Voltante',
    asset: includeResponsive(`${GALLERY_PREFIX}painel-volante`, 'jpg'),
  },
  {
    id: 'ga02',
    title: 'Farol LED',
    asset: includeResponsive(`${GALLERY_PREFIX}farol-led`, 'jpg'),
  },
  {
    id: 'ga03',
    title: 'Porta-malas',
    asset: includeResponsive(`${GALLERY_PREFIX}porta-malas`, 'jpg'),
  },
  {
    id: 'ga04',
    title: 'Bancos Interior',
    asset: includeResponsive(`${GALLERY_PREFIX}bancos-interior`, 'jpg'),
  },
  {
    id: 'ga05',
    title: 'Central Multimídia',
    asset: includeResponsive(`${GALLERY_PREFIX}central-multimidia`, 'jpg'),
  },
  {
    id: 'ga06',
    title: 'Frente',
    asset: includeResponsive(`${GALLERY_PREFIX}frente-pulse`, 'jpg'),
  },
  {
    id: 'ga07',
    title: 'Roda 17"',
    asset: includeResponsive(`${GALLERY_PREFIX}roda-17`, 'jpg'),
  },
  {
    id: 'ga08',
    title: 'Teto bicolor',
    asset: includeResponsive(`${GALLERY_PREFIX}teto-bicolor`, 'jpg'),
  },
  {
    id: 'ga09',
    title: 'Volante',
    asset: includeResponsive(`${GALLERY_PREFIX}volante`, 'jpg'),
  },
];

export const galleryThumbs = gallery.map((g) => ({
  ...g,
  thumb: `${g.asset.path}-thumb.${g.asset.extension}`,
}));
