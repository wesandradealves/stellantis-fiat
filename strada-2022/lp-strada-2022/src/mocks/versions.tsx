import { HighlightSlide, IVersion } from '@/models';
import { includeResponsive } from '@/utils/imagePrefixes';

export const dataVersions: IVersion[] = [
  {
    id: 'strada-versoes-ranch-at',
    slug: 'ranch-cvt',
    name: 'Ranch AT',
    short: 'Ranch AT',
    alt: 'Fiat Strada Ranch AT na cor cinza',
    title: 'Fiat Strada Ranch AT',
    haNewItens: true,
    details: [
      'Ar-condicionado automático digital',
      'Wireless charger',
      'Nova cor Cinza Strato ',
    ],
  },
  {
    id: 'strada-versoes-volcano-at',
    slug: 'volcano-cvt',
    name: 'Volcano AT',
    short: 'Volcano AT',
    alt: 'Fiat Strada Volcano AT na cor vermelha',
    title: 'Fiat Strada Volcano AT',
    details: [
      'Ar-condicionado automático digital ',
      'Wireless charger ',
      'Nova cor Cinza Strato',
      'Faróis em LED',
    ],
  },

  {
    id: 'strada-versoes-volcano',
    slug: 'volcano',
    name: 'Volcano',
    short: 'Volcano',
    alt: 'Fiat Strada Volcano na cor preta',
    title: 'Fiat Strada Volcano ',
    details: [
      'Ar-condicionado automático digital',
      'Wireless charger ',
      'Câmera de ré e sensores de estacionamento traseiro',
    ],
  },

  {
    id: 'strada-versoes-freedom',
    slug: 'freedom',
    name: 'Freedom',
    short: 'Freedom',
    alt: 'Fiat Strada Freedom na cor prata',
    title: 'Fiat Strada Freedom',
    hasDoubleCabin: true,
    details: [
      'Trava e vidros elétricos',
      'Direção elétrica',
      'Rodas de liga leve 15"',
    ],
  },

  {
    id: 'strada-versoes-endurance',
    slug: 'endurance',
    name: 'Endurance',
    short: 'Endurance',
    alt: 'Fiat Strada na cor branca',
    title: 'Fiat Strada Endurance',
    details: [
      'Controle de estabilidade e Hill Holder',
      'TC+ Controle de tração',
      'Ar-condicionado e Direção hidráulica',
    ],
  },
];

const PREFIX = `${process.env.BASE_PREFIX}images/`;

export const highlightedVersions: (Omit<
  HighlightSlide,
  'linkBtn'
> & {
  subTitle: string;
})[] = [
  {
    id: 'highlight-slide-ranch-at',
    descriptionDesktop: (
      <p>
        A grande novidade da Nova Fiat Strada, une requinte e
        sofisticação com itens exclusivos Ranch. Tecnologia do
        Wireless Charger com o conforto nas trocas de marchas do
        câmbio automático CVT. Realmente um produto que
        surpreende.
      </p>
    ),
    descriptionMobile: (
      <p>
        A grande novidade da Nova Fiat Strada, une requinte e
        sofisticação com itens exclusivos Ranch. Tecnologia do
        Wireless Charger com o conforto nas trocas de marchas do
        câmbio automático CVT. Realmente um produto que
        surpreende.
      </p>
    ),
    image: includeResponsive(
      'VersionDisplay/strada_ranch_automatica',
      'png',
      { prefix: PREFIX },
    ),
    slug: 'ranch-at',
    title: 'Ranch Automática',
    alt: 'Ranch Automática',
    subTitle: 'Fiat Strada',
  },
  {
    id: 'highlight-volcano-at',
    descriptionDesktop: (
      <p>
        Tudo que você ama na Volcano, agora com toda a tecnologia
        e conforto do câmbio automático CVT e Paddle shifters.
      </p>
    ),
    descriptionMobile: (
      <p>
        Tudo que você ama na Volcano, agora com toda a tecnologia
        e conforto do câmbio automático CVT e Paddle shifters.
      </p>
    ),
    image: includeResponsive(
      'VersionDisplay/strada_volcano_automatica',
      'png',
      { prefix: PREFIX },
    ),
    slug: 'volcano-at',
    title: 'Volcano Automática',
    alt: 'Volcano Automática',
    subTitle: 'Fiat Strada',
  },
];
