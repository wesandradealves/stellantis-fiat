import { acessorios } from '@/assets/heroProductDetails';
import { MenuLabel } from '@/models';
import { IncludePrefixResponsiveSizes } from '@/utils/imagePrefixes';

export interface HeroProductTabSlide {
  id: string;
  index?: number;
  title: string;
  alt: string;
  descriptionDesktop: JSX.Element;
  descriptionMobile: JSX.Element;
  parentSlug?: string;
  image: IncludePrefixResponsiveSizes;
  vimeoId?: {
    mobile: string;
    desktop: string;
  };
  tabId: string;
}

export interface HeroProductTab {
  id: string;
  title: string;
  slug: string;
  parentSlug?: string;
  children: Omit<HeroProductTabSlide, 'tabId'>[];
}

// A/C DIGITAL
const cambio: HeroProductTab = {
  id: '1',
  title: 'AR-CONDICIONADO AUTOMÁTICO DIGITAL',
  slug: 'acDigital',
  children: [
    {
      id: '1',
      title: 'Ar-condicionado Ranch',
      alt: 'Painel do Fiat Strada destacando o ar-condicionado digital com o logo “Ranch” na parte superior',
      descriptionDesktop: (
        <p>
          Controle o clima com botões de fácil e rápido acesso de
          acordo com sua preferência: nas versões Ranch e
          Volcano, o ar-condicionado automático digital é de
          série mais conforto e tecnologia.
        </p>
      ),
      descriptionMobile: (
        <p>
          Controle o clima com botões de fácil e rápido acesso de
          acordo com sua preferência: nas versões Ranch e
          Volcano, o ar-condicionado automático digital é de
          série mais conforto e tecnologia.
        </p>
      ),
      /** TROCAR NOME DA IMG */
      /** TROCAR  IMG */
      image: acessorios.cambioAutomatico,
    },
  ],
};

// WIRELESS
const capacidade: HeroProductTab = {
  id: '2',
  title: 'WIRELESS CHARGER',
  slug: 'wireless',
  children: [
    {
      id: '2',
      title: 'Wireless Charger',
      alt: 'Celular carregando por indução dentro do Fiat Strada, através da tecnologia Wireless charger',
      descriptionDesktop: (
        <p>
          O Wireless Charger agora também está disponível na
          versão manual. Com essa tecnologia, você carrega seu
          celular sem o uso de fios.
        </p>
      ),
      descriptionMobile: (
        <p>
          O Wireless Charger agora também está disponível na
          versão manual. Com essa tecnologia, você carrega seu
          celular sem o uso de fios.
        </p>
      ),
      /** TROCAR NOME DA IMG */
      /** TROCAR  IMG */
      image: acessorios.capacidadeCarga,
    },
  ],
};

// NOVA COR
const robustez: HeroProductTab = {
  id: '3',
  title: 'NOVA COR CINZA STRATO',

  slug: 'novaCor',
  children: [
    {
      id: '3',
      title: 'Fiat Strada Cinza Strato',
      alt: 'Fiat Strada na cor cinza strato em um fundo claro',
      descriptionMobile: (
        <p>
          NOVA COR CINZA STRATO Inovando sempre! agora a Strada,
          tem uma nova cor. Já conferiu a nova cor Cinza Strato?
        </p>
      ),
      descriptionDesktop: (
        <p>
          NOVA COR CINZA STRATO Inovando sempre! agora a Strada,
          tem uma nova cor. Já conferiu a nova cor Cinza Strato?
        </p>
      ),
      image: acessorios.robustez,
    },
  ],
};

// ETIQUETA
const seguranca: HeroProductTab = {
  id: '4',
  title: 'ELEGÂNCIA ATÉ NOS DETALHES',

  slug: 'elegancia',
  children: [
    {
      id: '4',
      title: 'ELEGÂNCIA ATÉ NOS DETALHES',
      alt: 'Detalhe da etiqueta Fiat Flag no banco do Fiat Strada',
      descriptionMobile: (
        <p>
          Além de confortável, os bancos da fiat strada também
          recebeu os charmosos fiat flag agora presente em todas
          as versões
        </p>
      ),
      descriptionDesktop: (
        <p>
          Além de confortável, os bancos da fiat strada também
          recebeu os charmosos fiat flag agora presente em todas
          as versões
        </p>
      ),
      image: acessorios.seguranca,
    },
  ],
};

const heroProductDetails = [
  cambio,
  capacidade,
  robustez,
  seguranca,
];

export const getProductDetails = (): MenuLabel[] => {
  if (!heroProductDetails) {
    return [];
  }
  return heroProductDetails.reduce((prev, item, index) => {
    return [
      ...prev,
      {
        id: `data-menu-details-${index}`,
        label: item.title,
        slug: `tudo-sobre-${item.slug}`,
        url: `/tudo-sobre-${item.slug}`,
      },
    ];
  }, [] as MenuLabel[]);
};
let index = -1;
export const heroAllSlides: HeroProductTabSlide[] =
  heroProductDetails.reduce((prev, curr) => {
    return [
      ...prev,
      ...curr.children.map((c) => {
        index++;
        return {
          ...c,
          index,
          parentSlug: curr.slug,
          tabId: curr.id,
        };
      }),
    ];
  }, [] as HeroProductTabSlide[]);

export default heroProductDetails;
