import { heroImages } from '@/project/assets';
import {
  IncludePrefixResponsiveSizes,
} from '@/prox/utils/imagePrefixes';

interface IHero {
  id: string;
  title: string;
  title2: string;
  description: string | JSX.Element;
  cardSrc: IncludePrefixResponsiveSizes;
}

export const dataHero: IHero[] = [
  {
    id: '1-data-hero',
    title: 'Versatilidade',
    title2: '',
    description: (
      <>
        Um verdadeiro veículo de carga: compacto por fora e espaçoso por dentro, 
        com altura de 1,94m permite acesso total a qualquer tipo de garagem, 
        inclusive subterrâneas.
      </>
    ),
    cardSrc: heroImages.heroThumb01,
  },
  {
    id: '2-data-hero',
    title: 'Conforto',
    title2: 'e vida a bordo',
    description: (
      <>
      Projetado para rodar 8 horas por dia, 7 dias por semana. Excelente 
      ergonomia, piloto automático, apoio braço do motorista, volante com 
      ajuste de altura e profundidade.

      </>
    ),
    cardSrc: heroImages.heroThumb02,
  },
  {
    id: '3-data-hero',
    title: 'Vantagens para o seu negócio',
    title2: '',
    description: (
      <>
        Escolha um veículo nota A no Inmetro em economia e com um dos melhores 
        índices TCO (custo total de propriedade de um produto) da categoria.
      </>
    ),
    cardSrc: heroImages.heroThumb03,
  },
  {
    id: '4-data-hero',

    title: 'e-Scudo',
    title2: '',
    description: (
      <>
        Motor 100% elétrico, zero consumo de combustível, 6,1 m³ de capacidade volumétrica e 1T de carga. 
        Aproveite a autonomia de até 330km e recarga de 80% em até 45 minutos.
      </>
    ),
    cardSrc: heroImages.heroThumb04,
  },
];
