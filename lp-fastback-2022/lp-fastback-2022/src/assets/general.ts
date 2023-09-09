import { dataVersions } from "@/data/versions";
import {
  FILE_PREFIX,
  IncludePrefix,
  includePrefix,
  IncludePrefixResponsiveSizes,
  includeResponsive, includeVideoResponsive,
  PREFIX,
} from "@/utils/imagePrefixes";
import * as Stories from "./components";

const BRAND_PREFIX = `${PREFIX}brand/`;
const UI_PREFIX = `${PREFIX}ui/`;

const VERSION_PREFIX = "/images/Versions/";
const THUMB_DETAILS_PREFIX = `${VERSION_PREFIX}ThumbDetails/`;

const HERO_DESKTOP_PREFIX = "HeroDesktop/";
const THUMB_PREFIX = `${HERO_DESKTOP_PREFIX}thumbs/`;
const BACKGROUNDS_PREFIX = `${HERO_DESKTOP_PREFIX}backgrounds/`;

const brand = {
  logoHeaderMobile: `${BRAND_PREFIX}logoFastbackFiat.svg`,
  logoNav: `${BRAND_PREFIX}logoFastbackFiat.svg`,
  svgMainstories: `${BRAND_PREFIX}fiat-fastback-logo.svg`,
  logoFooter: `${BRAND_PREFIX}logoFooter.svg`,
  whatsBtn: `${BRAND_PREFIX}whatsapp.svg`,
};

const imgCard = {
  imgCard: `${PREFIX}/HeroDesktop/imgCard/imgHero.jpg`,
};

const ui = {
  menuClosed: `${UI_PREFIX}menuClosed.svg`,
  pointer: `${UI_PREFIX}pointer.png`,
  redArrowNext: `${UI_PREFIX}next-arrow-red.svg`,
  redArrowPrev: `${UI_PREFIX}prev-arrow-red.svg`,
  addCross: `${UI_PREFIX}addCross.svg`,
  accordionChevron: `${UI_PREFIX}accordionChevron.svg`,
  fiatFooter: `${UI_PREFIX}fiatFooter.svg`,
  selectMenu: `${UI_PREFIX}select-menu.svg`,
  logoHero: `${UI_PREFIX}logoFastbackFiat.svg`,
  carroHero: `${UI_PREFIX}carroHero.png`,
  logoAbarth: `${UI_PREFIX}logoabarth.png`,
  info001: `${UI_PREFIX}info001.svg`,
  info002: `${UI_PREFIX}info002.svg`,
  info003: `${UI_PREFIX}info003.svg`,
};

//ITENS EXCLUIDOS
const heroContent = {
  // firstContent: `${HERO_DESKTOP_PREFIX}/firstContent.svg`,
  // subContent: `${HERO_DESKTOP_PREFIX}/subContent.svg`,
};

const backgroundVersions = `${VERSION_PREFIX}background/bg.svg`;
const heroBgsPrefix = 'videos/Hero/';
const storiesBgsPrefix = 'videos/Stories/';

const heroImages = {
  //BACKGROUND HERO
  mainBg: includeResponsive(`${BACKGROUNDS_PREFIX}fiat-fastback`, "jpg"),
  firstBackground: includeVideoResponsive(
    `${heroBgsPrefix}DESIGN_COUPE-03_16x9_1`,
    `${storiesBgsPrefix}DESIGN_COUPE-03_9x16_1`,
    'mp4',
    ),
    secondBackground: includeVideoResponsive(
    `${heroBgsPrefix}PERFORMANCE-04_16x9_1`,
    `${storiesBgsPrefix}PERFORMANCE-04_9x16_1`,
      'mp4',
  ),
  thirdBackground: includeResponsive(`${BACKGROUNDS_PREFIX}espaco`, "jpg"),

  fourthBackground: includeVideoResponsive(
    `${heroBgsPrefix}POWERED_BY_ABARTH-04_16x9_1`,
    `${storiesBgsPrefix}POWERED_BY_ABARTH-04_9x16_1`,
      'mp4',
  ),
  //THUMBS HERO
  thumbHero01: includeResponsive(`${THUMB_PREFIX}design-coupe`, "jpg"),
  thumbHero02: includeResponsive(`${THUMB_PREFIX}performance`, "jpg"),
  thumbHero03: includeResponsive(`${THUMB_PREFIX}espaco`, "jpg"),
  thumbHero04: includeResponsive(`${THUMB_PREFIX}powered-by-abarth`, "jpg"),
  thumbHero05: includeResponsive(`${THUMB_PREFIX}rodas-20`, "jpg"),
};

// ASSETS from cards details on versionsThumbs
export const thumbsDetails = [
  {
    sport: [`${THUMB_DETAILS_PREFIX}thumb-details-01.png`],
  },
  {
    image: `${THUMB_DETAILS_PREFIX}thumb-details-02.png`,
  },
];

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

const versionsDetails = (versionName: string): ReducedDetails =>
  dataVersions().reduce(
    (p, c) => ({
      ...p,
      [c.id]: includePrefix(
        `Versions/ThumbDetails/${c.id}/${versionName}`,
        "jpg"
      ),
    }),
    {}
  );

const versions = (): ReducedVersions =>
  dataVersions().reduce(
    (p, c) => ({
      ...p,
      [c.id]: includeResponsive(`Versions/${c.id}`, "png"),
    }),
    {}
  );

const versionsThumbs = (): ReducedVersionsThumbs =>
  dataVersions().reduce(
    (p, c) => ({
      ...p,
      [c.id]: includePrefix(`Versions/${c.id}-thumb`, "png"),
    }),
    {}
  );

const versionsLogos = (): ReducedVersionsLogos =>
  dataVersions().reduce(
    (p, c) => ({
      ...p,
      [c.id]: includePrefix(`Versions/${c.id}-logo`, "svg"),
    }),
    {}
  );

const components = {
  Stories,
};

export * as productDetails from "./productDetails";

const files = {
  accessoriesCatalogue: `${FILE_PREFIX}Catalogo-de-Acessorios-fastback.pdf`,
};

export {
  brand,
  ui,
  components,
  heroContent,
  heroImages,
  backgroundVersions,
  versionsDetails,
  files,
  versions,
  versionsLogos,
  versionsThumbs,
  imgCard,
};
