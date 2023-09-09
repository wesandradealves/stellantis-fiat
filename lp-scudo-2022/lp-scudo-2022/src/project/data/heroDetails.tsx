import { acessorios } from '@/project/assets/heroProductDetails';
import { MenuLabel } from '@/prox/models';
import { IncludePrefixResponsiveSizes } from '@/prox/utils/imagePrefixes';

export interface HeroProductTabSlide {
  id: string;
  index?: number;
  title: string;
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

// VERSATILIDADE
const versatilidade: HeroProductTab = {
  id: '1',
  title: 'Versatilidade',
  slug: 'versatilidade',
  children: [
    {
      id: '1',
      title: 'Versatilidade',
      descriptionDesktop: (
        <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit nisl eu ornare dapibus.
        </p>
      ),
      descriptionMobile: (
        <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit nisl eu ornare dapibus.
        </p>
      ),
      image: acessorios.cambioAutomatico,
    },
  ],
};

// CONFORTO E VIDA A BORDO
const conforto: HeroProductTab = {
  id: '2',
  title: 'Conforto',
  slug: 'conforto',
  children: [
    {
      id: '2',
      title: 'LOREM IPSUM',
      descriptionDesktop: (
        <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit nisl eu ornare dapibus.
        </p>
      ),
      descriptionMobile: (
        <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit nisl eu ornare dapibus.
        </p>
      ),
      image: acessorios.capacidadeCarga,
    },
  ],
};

// VANTAGENS PARA O SEU NEGÓCIO
const vantagens: HeroProductTab = {
  id: '3',
  title: 'Vantagens',
  slug: 'vantagens',
  children: [
    {
      id: '3',
      title: 'LOREM IPSUM',
      descriptionMobile: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit nisl eu ornare dapibus.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit nisl eu ornare dapibus.
        </p>
      ),
      image: acessorios.robustez,
    },
  ],
};

// MOBILIDADE VERDE
const mobilidade: HeroProductTab = {
  id: '4',
  title: 'Mobilidade Verde',
  slug: 'mobilidade-verde',
  children: [
    {
      id: '4',
      title: 'LOREM IPSUM',
      descriptionMobile: (
        <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit nisl eu ornare dapibus.
        </p>
      ),
      descriptionDesktop: (
        <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit nisl eu ornare dapibus.
        </p>
      ),
      image: acessorios.seguranca,
    },
  ],
};

const heroProductDetails = [
  versatilidade,
  conforto,
  vantagens,
  mobilidade,
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
