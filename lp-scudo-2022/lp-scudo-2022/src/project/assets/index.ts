import { dataVersions } from '@/project/data/versions';
import {
  IncludePrefix,
  includePrefix,
  IncludePrefixResponsiveSizes,
  includeResponsive,
  PREFIX,
} from '@/prox/utils/imagePrefixes';

const HERO_DESKTOP_PREFIX = 'HeroDesktop/';
const BACKGROUNDS_PREFIX = `${HERO_DESKTOP_PREFIX}backgrounds/`;

const VERSION_PREFIX = '/images/Versions';
const backgroundVersions = `${VERSION_PREFIX}background/bg.jpg`;

const FORM_PREFIX = '/Form/';
const PROF_PREFIX = '/Professional/';


const brand = {
  logoHeader: `${PREFIX}brand/Logo.svg`,
  logoEScudo: `${PREFIX}brand/eScudoSection.svg`,
  grafismoVermelho: `${PREFIX}brand/grafismoVermelho.svg`,
  grafismoVermelhoMobile: `${PREFIX}brand/grafismoVermelhoMobile.svg`,
  logoProductMulti: `${PREFIX}brand/multi-logo.svg`,
  logoProductCargo: `${PREFIX}brand/cargo-logo.svg`,
  logoProductEscudo: `${PREFIX}brand/escudo-logo.svg`,
  logoProductMultiMobile: `${PREFIX}brand/multi-logo-mobile.svg`,
  logoProductCargoMobile: `${PREFIX}brand/cargo-logo-mobile.svg`,
  logoProductEscudoMobile: `${PREFIX}brand/escudo-logo-mobile.svg`,
  logoProductDark: `${PREFIX}brand/logoHeader.svg`,
  logoHeaderDesktop: `${PREFIX}brand/logoHeader.svg`,
  logoFooter: `${PREFIX}ui/logoFiat.svg`,
  grafismoVermelhoSecundario: `${PREFIX}brand/footer_hero.svg`,
  grafismoVermelhoVersoes: `${PREFIX}brand/grafismGallery.svg`,
  professional: `${PREFIX}brand/scudo-modelo.png`,
  professionalMobile: `${PREFIX}brand/scudo-modelo-mobile.png`,
  scudoCar: `${PREFIX}brand/fiatScudo.png`,
  topGraphismMobileVersions: `${PREFIX}brand/versionsMobile.svg`,
  graphismBlue: `${PREFIX}brand/grafismoBlue.svg`,
  professionalGraphicsBlue: `${PREFIX}brand/grafismo-azul-v2.svg`,
  professionalGraphicsBlueMobile: `${PREFIX}brand/grafismo-azul-v3.svg`,
  brandFooterMobile: `${PREFIX}brand/flag-color.svg`,
  whatsappIcon: `${PREFIX}brand/whatsappIcon.svg`,
  descriptionHero: `${PREFIX}brand/descriptionHero.svg`,
  firstFooter: `${PREFIX}brand/firstHeroFooter.svg`,
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
  pointer: `${PREFIX}ui/pointer.svg`,
  redArrowNext: `${PREFIX}ui/next-arrow-red.svg`,
  redArrowPrev: `${PREFIX}ui/prev-arrow-red.svg`,
  loading: includePrefix('ui/loading', 'svg'),
  iconSmile: `${PREFIX}ui/icon-smile.svg`,
  iconError: `${PREFIX}ui/icon-error.svg`,
};

const nav = {
  logoFiat: `${PREFIX}Nav/logoFiat.svg`,
};
const HERO_PREFIX = 'HeroProductDetails/';

const heroContent = {
  firstContent: `${PREFIX}HeroProductDetails/firstContent.svg`,
  mainContent: includeResponsive(
    `${HERO_DESKTOP_PREFIX}/fiat-scudo-carro`,
    'png',
  ),
  subContent: `${PREFIX}HeroProductDetails/subContent.svg`,
};

const reserveCTA = {
  backgroundImage: includeResponsive(
    'ReserveCTA/dummy-reserve-bg',
    'jpg',
  ),
  backgroundImageMobile: includeResponsive(
    'ReserveCTA/reserv-bg',
    'jpg',
  ),
  cardImage: includeResponsive(
    'ReserveCTA/modelo-feature',
    'jpg',
  ),
};

const THUMB_PREFIX = 'thumbs/';

const heroImages = {
  //BACKGROUND HERO
  mainBg: includeResponsive(
    `${BACKGROUNDS_PREFIX}hero-background`,
    'jpg',
  ),
  secondContent: includeResponsive(
    `${BACKGROUNDS_PREFIX}scudo-versatilidade-feature`,
    'jpg',
  ),
  thirdContent: includeResponsive(
    `${BACKGROUNDS_PREFIX}scudo-conforto-abordo-feature`,
    'jpg',
  ),
  fourthContent: includeResponsive(
    `${BACKGROUNDS_PREFIX}scudo-vantagens-negocios-feature`,
    'jpg',
  ),
  fifthContent: includeResponsive(
    `${BACKGROUNDS_PREFIX}scudo-escudo-feature`,
    'jpg',
  ),
  heroThumb01: includeResponsive(
    `${HERO_PREFIX}${THUMB_PREFIX}scudo-versatilidade-feature-thumb`,
    'jpg',
  ),

  heroThumb02: includeResponsive(
    `${HERO_PREFIX}${THUMB_PREFIX}scudo-conforto-abordo-feature-thumb`,
    'jpg',
  ),
  heroThumb03: includeResponsive(
    `${HERO_PREFIX}${THUMB_PREFIX}scudo-vantagens-negocios-feature-thumb`,
    'jpg',
  ),
  heroThumb04: includeResponsive(
    `${HERO_PREFIX}${THUMB_PREFIX}scudo-escudo-feature-thumb`,
    'jpg',
  ),
};

const formImages = {
  mainBg: includeResponsive(`${FORM_PREFIX}form-bg`, 'jpg'),
};
const professionalImage = {
  professional: includeResponsive(`${PROF_PREFIX}scudo-modelo`, 'png'),
};

const versionsBackground = {
  mainBg: includeResponsive(`${VERSION_PREFIX}version-bg`, 'jpg'),
};

interface ReducedVersions {
  [x: string]: IncludePrefixResponsiveSizes;
}

interface ReducedDetails {
  [x: string]: IncludePrefix;
}

interface ReducedVersionsThumbs {
  [x: string]: IncludePrefix;
}
interface ReducedVersionsLogos {
  [x: string]: IncludePrefix;
}


const versions = (): ReducedVersions =>
  dataVersions().reduce(
    (p, c) => ({
      ...p,
      [c.id]: includeResponsive(`Versions/${c.id}`, 'png'),
    }),
    {},
  );

const versionsThumbs = (): ReducedVersionsThumbs =>
  dataVersions().reduce(
    (p, c) => ({
      ...p,
      [c.id]: includePrefix(`Versions/${c.id}-thumb`, 'png'),
    }),
    {},
  );
const versionsLogos = (): ReducedVersionsLogos =>
  dataVersions().reduce(
    (p, c) => ({
      ...p,
      [c.id]: includePrefix(`Versions/${c.id}-logo`, 'svg'),
    }),
    {},
  );


const versionsDetails = (versionName: string): ReducedDetails =>
  dataVersions().reduce(
    (p, c) => ({
      ...p,
      [c.id]: includePrefix(
        `Versions/ThumbDetails/${c.id}/${versionName}`,
        'jpg',
      ),
    }),
    {},
  );

const kv = {
  title: includeResponsive(
    'Kv/novo-fiat-strada-cambio-automatico',
    'jpg',
  ),
  fullKv: includeResponsive(
    'Kv/novo-fiat-strada-cambio-automatico-kv',
    'png',
  ),
  decoration: includePrefix('Kv/decoration', 'svg'),
};

export * as productDetails from './productDetails';

export {
  brand,
  ui,
  kv,
  backgroundVersions,
  heroContent,
  heroImages,
  nav,
  reserveCTA,
  versions,
  versionsThumbs,
  versionsDetails,
  versionsLogos,
  formImages,
  professionalImage,
  versionsBackground
};
