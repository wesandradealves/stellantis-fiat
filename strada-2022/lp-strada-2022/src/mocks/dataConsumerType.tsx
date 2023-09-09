import { consumerType as consumerTypeAssets } from '@/assets/consumerType';
import { links } from '@/mocks/menu';
import { HighlightSlide } from '@/models';

const consumerType: HighlightSlide[] = [
  {
    id: 'cme-c-1',
    slug: 'produtor-rural',
    title: 'Fiat Strada preto',
    alt: 'Traseira do Fiat Strada na cor preta, com diversos itens na caçamba',
    titleElement: <>{'Produtor Rural'}</>,
    linkBtn: links.vendaProdRural,
    descriptionDesktop: (
      <p>
        A Fiat Strada tem a força e a capacidade de carga que
        todo produtor rural precisa. Confira as condições
        exclusivas para você que pega pesado no campo.
      </p>
    ),
    descriptionMobile: (
      <p>
        A Fiat Strada tem a força e a capacidade de carga que
        todo produtor rural precisa. Confira as condições
        exclusivas para você que pega pesado no campo.
      </p>
    ),
    image: consumerTypeAssets.stradaProdutorRural,
  },
  {
    id: 'cme-c-2',
    slug: 'empresas',
    title: 'Fiat Strada branco ',
    alt: 'Traseira do Fiat Strada na cor branca, com uma caixa na caçamba',
    titleElement: <>{'Empresas'}</>,
    linkBtn: links.vendaMicroEmpresario,
    descriptionDesktop: (
      <p>
        {' '}
        O maior volume de carga da categoria foi feito para quem
        carrega o negócio sobre rodas. Confira as condições
        exclusivas para a sua empresa.
      </p>
    ),
    descriptionMobile: (
      <p>
        {' '}
        O maior volume de carga da categoria foi feito para quem
        carrega o negócio sobre rodas. Confira as condições
        exclusivas para a sua empresa.
      </p>
    ),
    image: consumerTypeAssets.stradaEmpresas,
  },
];

export default consumerType;
