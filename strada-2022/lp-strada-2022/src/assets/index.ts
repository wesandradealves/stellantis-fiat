import { dataVersions } from '@/mocks/versions';
import {
  IncludePrefix,
  includePrefix,
  IncludePrefixResponsiveSizes,
  includeResponsive,
  PREFIX,
} from '@/utils/imagePrefixes';

const brand = {
  logoHeader: `${PREFIX}brand/brandLogo.svg`,
  logoProduct: `${PREFIX}brand/logoProduct.png`,
  logoProductDark: `${PREFIX}brand/logoProductDark.png`,
  logoHeaderDesktop: `${PREFIX}brand/logoHeaderDesktop.png`,
  logoFooter: `${PREFIX}ui/logoFiat.svg`,
  whatsBtn: `${PREFIX}/brand/whatsapp.svg`,
};

const ui = {
  accordionChevron: `${PREFIX}ui/accordionChevron.svg`,
  addCross: `${PREFIX}ui/addCross.svg`,
  arrowDown: `${PREFIX}ui/arrowDown.svg`,
  arrowDownMobile: `${PREFIX}ui/arrowDownMobile.svg`,
  chevronLeft: `${PREFIX}ui/chevronLeft.svg`,
  crossClose: `${PREFIX}ui/crossClose.svg`,
  menuClosed: `${PREFIX}ui/menuClosed.svg`,
  ibama: `${PREFIX}ui/ibama.svg`,
  pointer: `${PREFIX}ui/pointer.png`,
  redArrowNext: `${PREFIX}ui/next-arrow-red.svg`,
  redArrowPrev: `${PREFIX}ui/prev-arrow-red.svg`,

  seloVersions: `${PREFIX}ui/selo-itens-serie.png`,
};

const nav = {
  logoFiat: `${PREFIX}Nav/logoFiat.svg`,
};
const HERO_PREFIX = 'HeroProductDetails/';

const heroContent = {
  firstContent: `${PREFIX}HeroProductDetails/firstContent.svg`,
  subContent: `${PREFIX}HeroProductDetails/subContent.svg`,
};

const THUMB_PREFIX = 'thumbs/';

const heroImages = {
  heroThumb01: includeResponsive(
    `${HERO_PREFIX}${THUMB_PREFIX}ar-condicionado-ranch-home-thumb`,
    'jpg',
  ),
  heroThumb02: includeResponsive(
    `${HERO_PREFIX}${THUMB_PREFIX}thumb-wireless-charger-home`,
    'jpg',
  ),
  heroThumb03: includeResponsive(
    `${HERO_PREFIX}${THUMB_PREFIX}thumb-fiat-strada-home-cinza-strato`,
    'jpg',
  ),
  heroThumb04: includeResponsive(
    `${HERO_PREFIX}${THUMB_PREFIX}thumb-fiat-flag-home`,
    'jpg',
  ),
};

const secondVersion = {
  image: includeResponsive(
    'SecondVersion/traseira-fiat-strada-rural',
    'jpg',
  ),
  tagline: includePrefix('SecondVersion/titulo', 'svg'),
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

const kv = {
  title: includeResponsive('Kv/fiat-strada-cinza-home', 'jpg'),
  fullKv: includeResponsive('Kv/fiat-strada-cinza-home', 'png'),
  decoration: includePrefix('Kv/decoration', 'svg'),
};

export * as productDetails from './productDetails';

export {
  brand,
  ui,
  kv,
  heroContent,
  heroImages,
  nav,
  secondVersion,
  versions,
  versionsThumbs,
};
