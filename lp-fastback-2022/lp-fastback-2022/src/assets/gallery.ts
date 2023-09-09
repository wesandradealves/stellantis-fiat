import {
  IncludePrefixResponsiveSizes,
  includeResponsive,
} from "@/utils/imagePrefixes";

const GALLERY_PREFIX = "Gallery/";

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

export const gallery: GalleryAsset[] = [
  {
    id: "ga00",
    title: "Fastback Vermelho",
    slug: "fastback-vermelho",
    asset: includeResponsive(`${GALLERY_PREFIX}fastback-vermelho`, "jpg"),
  },
  {
    id: "ga01",
    title: "Volante Multifuncional",
    slug: "volante-multifuncional",
    asset: includeResponsive(`${GALLERY_PREFIX}volante-multifuncional`, "jpg"),
  },
  {
    id: "ga02",
    title: "Grade Frontal",
    slug: "grade-frontal",
    asset: includeResponsive(`${GALLERY_PREFIX}grade-frontal`, "jpg"),
  },
  {
    id: "ga03",
    title: "Porta Malas",
    slug: "porta-malas",
    asset: includeResponsive(`${GALLERY_PREFIX}porta-malas`, "jpg"),
  },
  {
    id: "ga04",
    title: "Roda Liga Leve",
    slug: "roda-liga-leve",
    asset: includeResponsive(`${GALLERY_PREFIX}roda-liga-leve`, "jpg"),
  },
  {
    id: "ga05",
    title: "Bancos Couro",
    slug: "bancos-couro",
    asset: includeResponsive(`${GALLERY_PREFIX}bancos-couro`, "jpg"),
  },
];

export const galleryThumbs = gallery.map((g) => ({
  ...g,
  thumb: `${g.asset.path}-thumb.${g.asset.extension}`,
}));

export const galleryThumbsMobile = gallery.map((g) => ({
  ...g,
  thumb: `${g.asset.path}.${g.asset.extension}`,
}));
