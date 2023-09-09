import { MenuCTAs, MenuLabel } from '@/prox/models';
import productDetails, { ProductTab } from './productDetails';

const PRODUCT_DETAILS_PREFIX = 'LOREM IPSUM';

export const RESERVE_TITLE = 'Reserve o seu';
export const MONTE_TITLE = 'Monte o seu';
export const AVISE_ME = 'Avise-me';
export const ENCONTRE_TITLE = 'Encontrar concessionárias';
export const VANTAGENS_TITLE = 'Conhecer vantagens';
export const COMPRE_TITLE = 'Compre o seu';
export const SAIBA_TITLE = 'Saiba Mais';

export const PRODUCT_DETAILS_REF: MenuLabel = {
  id: 'data-menu-details-scudo',
  label: 'FIAT SCUDO',
  slug: PRODUCT_DETAILS_PREFIX,
  url: `/${PRODUCT_DETAILS_PREFIX}`,
  hasChildren: true,
};

export const getProductDetails = (
  pDetails: ProductTab[],
): MenuLabel[] => {
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
      },
    ];
  }, [] as MenuLabel[]);
};

export const links = {
  reserve: 'https://scudo.fiat.com.br/monte.html',
  professional: 'https://fiat.com.br/fiat-professional.html',
  reserveEletrico: 'https://www.fiat.com.br/formularios/avise-me-e-scudo.html',
  financiamento: 'https://scudo.fiat.com.br/monte.html',
  monte: 'https://scudo.fiat.com.br/monte.html',
  compre: 'https://www.fiat.com.br/formularios/quero-comprar-fiat-scudo.html',
  ofertas: 'https://ofertas.fiat.com.br/',
  concessionarias:
    'https://www.fiat.com.br/concessionarias.html',
  whatsapp: '',

};

export const dataMenuLabel: () => MenuLabel[] = () => [
  {
    id: 'datamenu-0',
    label: 'Novo Fiat Scudo',
    url: '/',
    slug: '',
  },
  {
    id: 'datamenu-1',
    label: 'Todas as versões',
    url: '/',
    slug: 'versoes',
  },
 
  {
    id: 'datamenu-2',
    label: 'Fotos',
    url: '/',
    slug: 'fotos',
  },
  {
    id: 'datamenu-3',
    label: ' Fiat e-Scudo',
    url: '/',
    slug: 'escudo',
  },
  ...getProductDetails(productDetails),
  {
    id: 'datamenu-4',
    label: 'Fiat Professional',
    url: '/',
    slug: 'profissional',
  },
];

export const dataMenuButtons: MenuCTAs[] = [
  {
    id: 'datamenubutton-1',
    label: 'Compre o seu',
    url: links.compre,
  },

  {
    id: 'datamenubutton-2',
    label: 'Monte o seu',
    url: links.monte,
  },
  {
    id: 'datamenubutton-3',
    label: 'Ofertas',
    url: links.ofertas,
  },
  {
    id: 'datamenubutton-4',
    label: 'Simule um financiamento',
    url: links.financiamento,
  },

  {
    id: 'datamenubutton-5',
    label: 'Concessionárias',
    url: links.concessionarias,
  },
];
