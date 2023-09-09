import { MenuCTAs, MenuLabel } from '@/models';
import productDetails, { ProductTab } from './productDetails';

const PRODUCT_DETAILS_PREFIX = 'tudo-do-strada';

export const RESERVE_TITLE = 'Reserve a sua';
export const MONTE_TITLE = 'Monte a sua';
export const COMPRE_TITLE = 'Compre a sua';
export const SAIBA_TITLE = 'Saiba Mais';

export const PRODUCT_DETAILS_REF: MenuLabel = {
  id: 'data-menu-details-strada',
  label: 'Tudo do Strada',
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
  reserve: 'https://strada.fiat.com.br/monte.html',
  simular: 'https://strada.fiat.com.br/monte.html#versao',
  financiamento: 'https://strada.fiat.com.br/monte.html#versao',
  monte: 'https://strada.fiat.com.br/monte.html',
  compre: 'https://www.fiat.com.br/compre/fiat-strada.html',
  whatsapp: 'https://wa.me/message/E7NFBR2OBZBWN1',
  vendaProdRural:
    'https://www.fiat.com.br/vendas-diretas/produtores-rurais.html/',
  vendaMicroEmpresario:
    'https://www.fiat.com.br/vendas-diretas/cnpj-e-microempresarios.html',
  concessionaria: 'https://www.fiat.com.br/concessionarias.html',
};

export const dataMenuLabel: () => MenuLabel[] = () => [
  {
    id: 'datamenu-0',
    label: 'Fiat Strada',
    url: '/',
    slug: '',
  },
  {
    id: 'datamenu-1',
    label: 'Reserve a sua',
    url: '/compre-a-sua',
    slug: 'compre-a-sua',
  },
  {
    id: 'datamenu-3',
    label: 'Famiglia Strada',
    url: '/famiglia-strada',
    slug: 'famiglia-strada',
  },
  {
    id: 'datamenu-4',
    label: 'Venda direta',
    url: '/venda-direta',
    slug: 'venda-direta',
  },
  {
    id: 'datamenu-5',
    label: 'Galeria',
    url: '/galeria',
    slug: 'galeria',
  },
  ...getProductDetails(productDetails),
];

export const dataMenuButtons: MenuCTAs[] = [
  {
    id: 'datamenubutton-3',
    label: MONTE_TITLE,
    url: links.monte,
  },
  {
    id: 'datamenubutton-2',
    label: 'Simule um financiamento',
    url: links.simular,
  },
  {
    id: 'datamenubutton-1',
    label: COMPRE_TITLE,
    url: links.compre,
  },
  {
    id: 'datamenubutton-5',
    label: 'Encontre uma concessionária',
    url: 'https://www.fiat.com.br/concessionarias.html',
  },
  {
    id: 'datamenubutton-4',
    label: 'Ofertas Strada',
    url: 'https://ofertas.fiat.com.br/?q=strada',
  },
];
