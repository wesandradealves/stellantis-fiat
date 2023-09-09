import { MenuCTAs, MenuLabels } from '@/models';
import productDetails, { ProductTab } from './productDetails';

export const PRODUCT_DETAILS_PREFIX = 'tudo-sobre-';
export const PRODUCT_DETAILS_REF: MenuLabels = {
  id: 'data-menu-details-',
  label: 'Tudo sobre o Pulse',
  slug: PRODUCT_DETAILS_PREFIX,
  url: `/${PRODUCT_DETAILS_PREFIX}`,
  nestedPrefix: PRODUCT_DETAILS_PREFIX,
};

const getProductDetails = (
  pDetails: ProductTab[],
): MenuLabels[] => {
  if (!pDetails) {
    return [];
  }
  return pDetails.reduce((prev, item, index) => {
    return [
      ...prev,
      {
        id: `data-menu-details-${index}`,
        label: item.title,
        slug: `${PRODUCT_DETAILS_PREFIX}${item.slug}`,
        url: `/${PRODUCT_DETAILS_PREFIX}${item.slug}`,
        nestedPrefix: PRODUCT_DETAILS_PREFIX,
        reference: PRODUCT_DETAILS_REF,
        tabId: item.id,
      } as MenuLabels,
    ];
  }, [] as MenuLabels[]);
};

export const links = {
  reserve: 'https://pulse.fiat.com.br/monte.html',
  financiamento: 'https://pulse.fiat.com.br/monte.html',
  monte: 'https://pulse.fiat.com.br/monte.html',
  concessionarias:
    'https://www.fiat.com.br/concessionarias.html',
  whatsapp: 'https://wa.me/message/NUVN2VWHQWIBG1',
  compre: 'https://www.fiat.com.br/compre/fiat-pulse.html',
  ofertas: 'https://ofertas.fiat.com.br/?q=pulse'
};

export const RESERVE_TITLE = 'Reserve o seu';
export const MONTE_TITLE = 'Monte o seu';
export const COMPRE_TITLE = 'Compre o seu';

export const dataMenuLabels: () => MenuLabels[] = () => [
  {
    id: 'datamenu-0',
    label: 'Fiat Pulse',
    url: '/',
    slug: '',
  },
  {
    id: 'datamenu-1',
    label: COMPRE_TITLE,
    url: '/',
    slug: 'compre-o-seu',
  },
  {
    id: 'datamenu-conn',
    label: 'Connect //// Me',
    url: '/connect-me',
    slug: 'connect-me',
  },
  {
    id: 'datamenu-2',
    label: 'Todas as versões',
    url: '/',
    slug: 'versoes',
  },
  {
    id: 'datamenu-3',
    label: 'Galeria',
    url: '/',
    slug: 'galeria',
  },
  ...getProductDetails(productDetails),
];

export const dataMenuButtons: MenuCTAs[] = [
  // {
  //   id: 'datamenubutton-5',
  //   label: 'Converse com a Fiat',
  //   url: links.whatsapp,
  //   iconCode: '',
  // },
  {
    id: 'datamenubutton-1',
    label: COMPRE_TITLE,
    url: links.compre,
  },
  {
    id: 'datamenubutton-2',
    label: 'Monte o seu',
    url: links.monte,
  },
  {
    id: 'datamenubutton-3',
    label: 'Simule um financiamento',
    url: links.financiamento,
  },
  {
    id: 'datamenubutton-4',
    label: 'Concessionárias',
    url: links.concessionarias,
  },
  {
    id: 'datamenubutton-5',
    label: 'Ofertas Fiat',
    url: links.ofertas,
  },
];
