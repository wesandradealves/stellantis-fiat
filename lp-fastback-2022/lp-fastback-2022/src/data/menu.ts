import { MenuCTAs, MenuLabel } from "@/models";
import productDetails, { ProductTab } from "./productDetails";

export const PRODUCT_DETAILS_PREFIX = "tudo-do-fastback";

export const PRODUCT_DETAILS_REF: MenuLabel = {
  id: "data-menu-details-fastback",
  label: "Tudo sobre o fastback",
  slug: PRODUCT_DETAILS_PREFIX,
  url: `/${PRODUCT_DETAILS_PREFIX}`,
  hasChildren: true,
};

export const getProductDetails = (pDetails: ProductTab[]): MenuLabel[] => {
  if (!pDetails) {
    return [];
  }
  return pDetails.reduce((prev, item) => {
    return [
      ...prev,
      {
        id: `data-${item.id}`,
        label: item.title,
        slug: item.slug,
        url: `/${PRODUCT_DETAILS_PREFIX}/${item.slug}`,
        prefixRelation: PRODUCT_DETAILS_REF,
        isDetails: true,
      },
    ];
  }, [] as MenuLabel[]);
};

export const links = {
  monte: "https://fastback.fiat.com.br/monte.html",
  financiamento: "https://fastback.fiat.com.br/monte.html",
  compre: "https://www.fiat.com.br/compre/fiat-fastback.html",
  concessionarias: "https://www.fiat.com.br/concessionarias.html",
  ofertasFiat: "https://ofertas.fiat.com.br/?q=fastback",
};

export const COMPRE_TITLE = "Compre o seu";
export const MONTE_TITLE = "Monte o seu";
export const FINANCIAMENTO_TITLE = "Simule o financiamento";
export const CONCESSIONARIAS_TITLE = "Concessionárias";
export const OFERTAS_FIAT = "Ofertas Fiat";

export const dataMenuLabel: () => MenuLabel[] = () => [
  {
    id: "datamenu-0",
    label: "Novo FIAT FASTBACK",
    url: "/",
    slug: "",
  },
  {
    id: "datamenu-1",
    label: "Powered by Abarth",
    url: "/",
    slug: "powered-by-abarth",
  },
  {
    id: "datamenu-2",
    label: "Todas as versões",
    url: "/",
    slug: "versoes",
  },
  {
    id: "datamenu-3",
    label: "Galeria",
    url: "/",
    slug: "galeria",
  },
  ...getProductDetails(productDetails),
];

export const dataMenuButtons: MenuCTAs[] = [
  {
    id: "datamenubutton-1",
    label: MONTE_TITLE,
    url: links.monte,
  },
  // {
  //   id: "datamenubutton-2",
  //   label: FINANCIAMENTO_TITLE,
  //   url: links.financiamento,
  // },
  {
    id: "datamenubutton-3",
    label: COMPRE_TITLE,
    url: links.compre,
  },
  {
    id: "datamenubutton-4",
    label: CONCESSIONARIAS_TITLE,
    url: links.concessionarias,
  },
  {
    id: "datamenubutton-5",
    label: OFERTAS_FIAT,
    url: links.ofertasFiat,
  },
];
