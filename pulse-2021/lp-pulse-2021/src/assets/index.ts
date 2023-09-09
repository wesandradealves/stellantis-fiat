import { dataVersions } from '@/mocks/versions';
import {
  IncludePrefix,
  includePrefix,
  IncludePrefixResponsiveSizes,
  includeResponsive,
  includeVideoResponsive,
  PREFIX,
} from '@/utils/imagePrefixes';
import * as Stories from './components';

const brand = {
  logoHeader: `${PREFIX}brand/logoHeader.png`,
  logoProduct: `${PREFIX}brand/logoProduct.png`,
  logoProductDark: `${PREFIX}brand/logoProductDark.png`,
  logoHeaderDesktop: `${PREFIX}brand/logoHeaderDesktop.png`,
  whatsBtn: `${PREFIX}brand/whatsapp.svg`,
};

const ui = {
  menuClosed: `${PREFIX}ui/menuClosed.svg`,
  pointer: `${PREFIX}ui/pointer.png`,
  redArrowNext: `${PREFIX}ui/next-arrow-red.svg`,
  redArrowPrev: `${PREFIX}ui/prev-arrow-red.svg`,
  addCross: `${PREFIX}ui/addCross.svg`,
  accordionChevron: `${PREFIX}ui/accordionChevron.svg`,
  ibama: `${PREFIX}ui/ibama.svg`,
};

const stamps = {
  stampDestaqueAno: `${PREFIX}stamps/selo_destaque-do-ano_2021.svg`,
  stampSuvCompacto: `${PREFIX}stamps/selo_suv-compacto_2021.svg`,
  stampMaiorMontadora: `${PREFIX}stamps/selo_montadora-do-ano_2021.svg`,
};

const nav = {
  logoFiat: `${PREFIX}Nav/logoFiat.svg`,
};
const HERO_PREFIX = 'HeroDesktop/';

const heroContent = {
  firstContent: `${PREFIX}HeroDesktop/firstContent.svg`,
  subContent: `${PREFIX}HeroDesktop/subContent.svg`,
};

const THUMB_PREFIX = 'thumbs/';

const heroImages = {
  mainBg: includeResponsive(
    'HeroDesktop/backgrounds/fiat-pulse-suv',
    'jpg',
  ),
  heroThumb01: includeResponsive(
    `${HERO_PREFIX}${THUMB_PREFIX}thumb-design`,
    'jpg',
  ),
  heroThumb02: includeResponsive(
    `${HERO_PREFIX}${THUMB_PREFIX}thumb-performance`,
    'jpg',
  ),
  heroThumb03: includeResponsive(
    `${HERO_PREFIX}${THUMB_PREFIX}thumb-conectividade`,
    'jpg',
  ),
  heroThumb04: includeResponsive(
    `${HERO_PREFIX}${THUMB_PREFIX}thumb-seguranca`,
    'jpg',
  ),
  heroThumb05: includeResponsive(
    `${HERO_PREFIX}${THUMB_PREFIX}thumb-robustez`,
    'jpg',
  ),
};

const heroBgsPrefix = 'videos/Hero/';
const storiesBgsPrefix = 'videos/Stories/';

const bannerImages = {
  blackScorpion: '/images/Banner/black-scorpion.png',
  whiteScorpion: '/images/Banner/white-scorpion.png',
  goldScorpion: '/images/Banner/gold-scorpion.png',

  pulse: '/images/Banner/pulsev2.png',
  pulse2x: '/images/Banner/pulsev2@2x.png',
  pulse3x: '/images/Banner/pulsev2@3x.png',

  brand: '/images/Banner/brand.png',
  brand2x: '/images/Banner/brand@2x.png',
  brand3x: '/images/Banner/brand@3x.png',

  asphalt: '/images/Banner/asphalt.png',
  background: includeResponsive(
    '/images/Banner/scorpion',
    'svg',
  ),
};

const soundSitemImages = {
  background: '/images/DesignSound/background.jpg',
  backgroundMobile: '/images/DesignSound/backgroundMobile.jpg',
};

export const heroBackgrounds = {
  design: includeVideoResponsive(
    `${heroBgsPrefix}fiat-pulse-suv-design`,
    `${storiesBgsPrefix}fiat-pulse-suv-design`,
    'mp4',
  ),
  conectividade: includeVideoResponsive(
    `${heroBgsPrefix}fiat-pulse-suv-conectividade`,
    `${storiesBgsPrefix}fiat-pulse-suv-conectividade`,
    'mp4',
  ),
  performance: includeVideoResponsive(
    `${heroBgsPrefix}fiat-pulse-suv-performance`,
    `${storiesBgsPrefix}fiat-pulse-suv-performance`,
    'mp4',
  ),
  robustez: includeVideoResponsive(
    `${heroBgsPrefix}fiat-pulse-suv-robustez`,
    `${storiesBgsPrefix}fiat-pulse-suv-robustez`,
    'mp4',
  ),
  seguranca: includeVideoResponsive(
    `${heroBgsPrefix}fiat-pulse-suv-seguranca`,
    `${storiesBgsPrefix}fiat-pulse-suv-seguranca`,
    'mp4',
  ),
};

const ReserveCTA = {
  backgroundImage: includeResponsive(
    'ReserveCTA/fiat-pulse-suv-reserve',
    'jpg',
  ),
};

interface ReducedVersions {
  [x: string]: IncludePrefixResponsiveSizes;
}
interface ReducedVersionsThumbs {
  [x: string]: IncludePrefix;
}

const versions: ReducedVersions = dataVersions.reduce(
  (p, c) => ({
    ...p,
    [c.id]: includeResponsive(`Versions/${c.id}`, 'png'),
  }),
  {},
);

const versionsThumbs: ReducedVersionsThumbs =
  dataVersions.reduce(
    (p, c) => ({
      ...p,
      [c.id]: includePrefix(`Versions/${c.id}-thumb`, 'png'),
    }),
    {},
  );

const components = {
  Stories,
};

export * as productDetails from './productDetails';

export {
  bannerImages,
  brand,
  ui,
  components,
  heroContent,
  heroImages,
  nav,
  ReserveCTA,
  versions,
  stamps,
  versionsThumbs,
  soundSitemImages,
};
