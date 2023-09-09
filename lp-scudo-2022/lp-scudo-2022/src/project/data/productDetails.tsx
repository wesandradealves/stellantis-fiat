import { productDetails as productDetailsAssets } from '@/project/assets';
import { CTAButton } from '@/prox/components';
import { MenuLabel } from '@/prox/models';
import { IncludePrefixResponsiveSizes } from '@/prox/utils/imagePrefixes';
import DataLayer from './DataLayer';

export interface ProductTabSlide {
  id: string;
  index?: number;
  title: string;
  slug: string;
  info?: string;
  descriptionDesktop: JSX.Element;
  descriptionMobile: JSX.Element;
  parentSlug?: string;
  image: IncludePrefixResponsiveSizes;
  vimeoId?: {
    mobile: string;
    desktop: string;
  };
  tabId: string;
  ctaButton?: JSX.Element;
}

export interface ProductTab {
  id: string;
  title: string;
  slug: string;
  parentSlug?: string;
  children: Omit<ProductTabSlide, 'tabId'>[];
}
const pageSubsection = 'tudo-sobre-scudo';
const ctaServices = ( 
<CTAButton
  text="Saiba Mais"
  title="Saiba Mais"
  className="cta"
  style={{ "marginTop":"2.5rem", "width":"2rem" }}
  href='https://fiat.com.br/fiat-professional.html'
  handleClick={() => {
    DataLayer.clickEvent({
      element: 'Saiba Mais',
      elementCategory: 'cta',
      pageSection: 'conteudo',
      pageSubsection,
    });
  }}
  handleAuxClick={() => {
    DataLayer.clickEvent({
      element: 'Saiba mais',
      elementCategory: 'cta',
      pageSection: 'conteudo',
      pageSubsection,
    });
  }}
/>)


//  DESIGN
const design: ProductTab = {
  id: 'tab-design-01',
  title: 'Design',
  slug: 'design',
  children: [
    {
      id: 'tab-design-c-1',
      title: 'EXTERIOR',
      slug: 'exterior',
      descriptionDesktop: (
        <p>
          O novo Fiat Scudo, além de robusto possui excelente design funcional. Com desenho moderno, 
          tanto os faróis dianteiros quanto os traseiros estão posicionados acima da faixa de colisão, 
          preservando o custo de reparação.
        </p>
      ),
      descriptionMobile: (
        <p>
         O novo Fiat Scudo, além de robusto possui excelente design funcional. Com desenho moderno, tanto os faróis dianteiros quanto os traseiros estão posicionados acima da faixa de colisão, preservando o custo de reparação.
        </p>
      ),
      image: productDetailsAssets.design.exterior,
    },
    {
      id: 'tab-design-c-2',
      title: 'Máxima Produtividade',
      slug: 'maxima-produtividade',
      descriptionDesktop: (
        <p>
          O novo Fiat Scudo foi projetado para proporcionar o máximo de conforto e produtividade
          para quem trabalha 8 horas por dia, 7 dias por semana. Aproveite o volante ajustável em altura e
          profundidade e os bancos com diferentes combinações de ângulo, altura e apoio de braço.
        </p>
      ),
      descriptionMobile: (
        <p>
          O novo Fiat Scudo foi projetado para proporcionar o máximo de conforto e produtividade
          para quem trabalha 8 horas por dia, 7 dias por semana. Aproveite o volante ajustável em altura e
          profundidade e os bancos com diferentes combinações de ângulo, altura e apoio de braço.
        </p>
      ),
      image: productDetailsAssets.design.posicao,
    },
    {
      id: 'tab-design-c-3',
      title: 'Dimensões',
      slug: 'dimensoes',

      descriptionDesktop: (
        <p>
          Suas medidas são ideais para transitar em grandes centros urbanos. Além de estar dentro
          do padrão de veículo urbano de carga (VUC) e podendo levar consigo 3 pallets de 80cm
          cada, o Novo Fiat Scudo consegue acessar com facilidade shoppings e garagens
          subterrâneas, por conta de suas dimensões compactas de 5,3 m de comprimento e 1,9 m
          de altura.
        </p>
      ),
      descriptionMobile: (
        <p>
          Suas medidas são ideais para transitar em grandes centros urbanos. Além de estar dentro
          do padrão de veículo urbano de carga (VUC) e podendo levar consigo 3 pallets de 80cm
          cada, o Novo Fiat Scudo consegue acessar com facilidade shoppings e garagens
          subterrâneas, por conta de suas dimensões compactas de 5,3 m de comprimento e 1,9 m
          de altura.
        </p>
      ),
      image: productDetailsAssets.design.dimensoes,
    },
    {
      id: 'tab-design-c-4',
      title: 'Altura',
      slug: 'altura',

      descriptionDesktop: (
        <p>
          O novo Fiat Scudo é um carro compacto por fora e espaçoso por dentro. Um de 
          seus maiores destaques é a sua altura de 1,94m, que proporciona acesso total a qualquer 
          tipo de garagem.
        </p>
      ),
      descriptionMobile: (
        <p>
           O novo Fiat Scudo é um carro compacto por fora e espaçoso por dentro. Um de 
          seus maiores destaques é a sua altura de 1,94m, que proporciona acesso total a qualquer 
          tipo de garagem.
        </p>
      ),
      image: productDetailsAssets.design.altura,
    },
  ],
};

// PERFORMANCE
const perfomance: ProductTab = {
  id: 'tab-interior-01',
  title: 'Perfomance',
  slug: 'performance',
  children: [
    {
      id: 'tab-interior-c-1',
      title: 'Rápido Carregamento',
      slug: 'rapido-carregamento',
      descriptionDesktop: (
        <p>
          Na versão elétrica, além de zero emissões e excelente autonomia de até 330 km no ciclo
          WLTP, o carregamento é rápido e fácil. Com uma bateria de 75 kWh, você consegue uma
          carga de até 80% em apenas 45 minutos.
        </p>
      ),
      descriptionMobile: (
        <p>
          Na versão elétrica, além de zero emissões e excelente autonomia de até 330 km no ciclo
          WLTP, o carregamento é rápido e fácil. Com uma bateria de 75 kWh, você consegue uma
          carga de até 80% em apenas 45 minutos.
        </p>
      ),
      image: productDetailsAssets.performance.carregamento,
    },
    {
      id: 'tab-interior-c-2',
      title: 'Motorização',
      slug: 'motorizacao',
      descriptionDesktop: (
        <p>
          Tenha um dia a dia sem stress com o Novo Fiat Scudo. Seu motor 1.5 Turbo Diesel com 120
          cv e torque de 300 NM também possui transmissão manual de 6 marchas. Assim, você fica
          preparado até para longas jornadas de trabalho com mais eficiência, proporcionando
          agilidade e economia de combustível.
        </p>
      ),
      descriptionMobile: (
        <p>
          Tenha um dia a dia sem stress com o Novo Fiat Scudo. Seu motor 1.5 Turbo Diesel com 120
          cv e torque de 300 NM também possui transmissão manual de 6 marchas. Assim, você fica
          preparado até para longas jornadas de trabalho com mais eficiência, proporcionando
          agilidade e economia de combustível.
        </p>
      ),
      image: productDetailsAssets.performance.motorizacao,
    },
  ],
};

// TECNOLOGIA
const tecnologia: ProductTab = {
  id: 'tab-tecnologia-01',
  title: 'Tecnologia',
  slug: 'tecnologia',
  children: [
    {
      id: 'tab-tecnologia-c-1',
      title: 'Computador de Bordo',
      slug: 'computador-de-bordo',
      descriptionMobile: (
        <p>
          Tenha as principais informações de condução através do computador de bordo. Com o
          inovador painel LCD branco, você confere os sistemas de segurança em funcionamento,
          dados sobre o consumo, velocidade e mais.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Tenha as principais informações de condução através do computador de bordo. Com o
          inovador painel LCD branco, você confere os sistemas de segurança em funcionamento,
          dados sobre o consumo, velocidade e mais.
        </p>
      ),
      image: productDetailsAssets.technology.computador,
    },
    {
      id: 'tab-tecnologia-c-2',
      title: 'Rádio',
      slug: 'radio',
      info: '',
      descriptionMobile: (
        <p>
          Aprecie suas músicas favoritas por meio do rádio com AM/FM, USB e Bluetooth + 2 alto-falantes. Você também pode carregar o seu celular com a tomada de 12 V.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Aprecie suas músicas favoritas por meio do rádio com AM/FM, USB e Bluetooth + 2 alto-falantes. Você também pode carregar o seu celular com a tomada de 12 V.
        </p>
      ),
      image: productDetailsAssets.technology.radio,
    },
    {
      id: 'tab-tecnologia-c-3',
      title: 'START & STOP',
      slug: 'start',
      info: '',
      descriptionMobile: (
        <p>
          Com o sistema Start&Stop, o motor é ligado e desligado automaticamente quando
          detectar que o veículo está parado, como em um engarrafamento. Deste modo, você reduz
          a emissão de CO2 e ainda economiza combustível.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Com o sistema Start&Stop, o motor é ligado e desligado automaticamente quando
          detectar que o veículo está parado, como em um engarrafamento. Deste modo, você reduz
          a emissão de CO2 e ainda economiza combustível.
        </p>
      ),
      image: productDetailsAssets.technology.startAndStop,
    },


  ],
};

// SEGURANÇA
const seguranca: ProductTab = {
  id: 'tab-seguranca-01',
  title: 'Segurança',
  slug: 'seguranca',
  children: [
    {
      id: 'tab-seguranca-c-1',
      title: 'ESC + Hill Holder',
      slug: 'hill-holder',
      descriptionMobile: (
        <p>
          Mantenha foco total na estrada e conte com o auxílio do ESC (controle
          de estabilidade), Hill Holder (assistente de subida em rampa) e do piloto automático com limitador de velocidade que te auxiliam durante o trajeto
          de trabalho.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Mantenha foco total na estrada e conte com o auxílio do ESC (controle
          de estabilidade), Hill Holder (assistente de subida em rampa) e do piloto automático com limitador de velocidade que te auxiliam durante o trajeto
          de trabalho.
        </p>
      ),
      image: productDetailsAssets.security.holder,
    },
    {
      id: 'tab-seguranca-c-2',
      title: 'Itens de Proteção',
      slug: 'itens-de-protecao',
      descriptionMobile: (
        <p>
          Conte com as funcionalidades de segurança como freio ABS, airbag duplo frontal com 3 pontos
          de proteção, faróis de neblina, terceira luz de freio e a luz diurna de segurança (DRL) para
          reforçar a sua proteção nas pistas ou fora delas
        </p>
      ),
      descriptionDesktop: (
        <p>
          Conte com as funcionalidades de segurança como freio ABS, airbag duplo frontal com 3 pontos
          de proteção, faróis de neblina, terceira luz de freio e a luz diurna de segurança (DRL) para
          reforçar a sua proteção nas pistas ou fora delas
        </p>
      ),
      image: productDetailsAssets.security.protecao,
    },
    {
      id: 'tab-seguranca-c-3',
      title: 'Indicadores de Segurança',
      slug: 'indicadores-de-seguranca',
      descriptionMobile: (
        <p>
          Conduza com tranquilidade e seja avisado de imprevistos através dos indicadores de segurança.
          Com o Scudo, você tem avisos sobre troca de marcha, enfivelamento dos cintos
          de segurança, manutenção do veículo e abastecimento, além do indicador de fadiga.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Conduza com tranquilidade e seja avisado de imprevistos através dos indicadores de segurança.
          Com o Scudo, você tem avisos sobre troca de marcha, enfivelamento dos cintos
          de segurança, manutenção do veículo e abastecimento, além do indicador de fadiga.
        </p>
      ),
      image: productDetailsAssets.security.indicadores,
    },
  ],
};


// TRANSFORMACAO
const transformacao: ProductTab = {
  id: 'tab-transformacao-01',
  title: 'Transformação',
  slug: 'transformacao',
  children: [
    {
      id: 'tab-transformacao-c-1',
      title: 'Um veículo com a cara do seu negócio',
      slug: 'plano-de-revisoes-mais-barato',
      descriptionMobile: (
        <p>
          Para cada negócio, um diferencial. Que tal deixar seu instrumento de trabalho alinhado com
          as maiores necessidades do seu dia a dia? Acesse e veja as possibilidades de
          transformação que oferecemos.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Para cada negócio, um diferencial. Que tal deixar seu instrumento de trabalho alinhado com
          as maiores necessidades do seu dia a dia? Acesse e veja as possibilidades de
          transformação que oferecemos.
        </p>
      ),
      image: productDetailsAssets.transformation.negocio,
      ctaButton: ctaServices,
    },
    {
      id: 'tab-transformacao-c-2',
      title: 'Family Car',
      slug: 'family-car',
      descriptionMobile: (
        <>
        <p>
        Aproveite todas as comodidades que o Fiat Scudo oferece: 7+1 lugares, revestimento em alto 
        padrão, central multimídia 7’’, bancos reclináveis em couro ecológico e 850 lts de capacidade no 
        porta-malas. Carteira de habilitação categoria ‘’B’’.
        </p>
        
        </>
      ),
      descriptionDesktop: (
        <>
        <p>
        Aproveite todas as comodidades que o Fiat Scudo oferece: 7+1 lugares, revestimento em alto 
        padrão, central multimídia 7’’, bancos reclináveis em couro ecológico e 850 lts de capacidade no 
        porta-malas. Carteira de habilitação categoria ‘’B’’.
        </p>
        </>
      ),
      image: productDetailsAssets.services.familyCar,
      ctaButton: ctaServices,
    },
  ],
};
// SERVIÇOS
const servicos: ProductTab = {
  id: 'tab-servicos-01',
  title: 'Serviços',
  slug: 'servicos',
  children: [
    {
      id: 'tab-servicos-c-1',
      title: 'Um Utilitário feito para você',
      slug: 'fiat-professional-details',
      descriptionMobile: (
        <p>
          Dúvidas no momento de escolher a van ideal para o seu negócio? Com nosso time de
          especialistas da rede Fiat Professional, você tem consultoria, possibilidade de transformação
          no veículo e mais.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Dúvidas no momento de escolher a van ideal para o seu negócio? Com nosso time de
          especialistas da rede Fiat Professional, você tem consultoria, possibilidade de transformação
          no veículo e mais.
        </p>
      ),
      image: productDetailsAssets.services.protegido,
    },
    {
      id: 'tab-servicos-c-2',
      title: 'Seu Fiat sempre protegido',
      slug: 'fiat-protegido-details-2',
      descriptionMobile: (
        <>
        <p>
          Seu Fiat sempre protegido. Conheça nossos serviços: revisão programada, assistência 24
          horas, acessórios originais, recall e mais. Acesse e fique por dentro de mais detalhes.
        </p>
        
        </>
      ),
      descriptionDesktop: (
        <>
        <p>
          Seu Fiat sempre protegido. Conheça nossos serviços: revisão programada, assistência 24
          horas, acessórios originais, recall e mais. Acesse e fique por dentro de mais detalhes.
        </p>
        </>
      ),
      image: productDetailsAssets.services.trabalho,
      ctaButton: ctaServices,
    },
  ],
};
const productDetails: ProductTab[] = [
  design,
  tecnologia,
  perfomance,
  seguranca,
  transformacao,
  servicos
].map((d) => ({ ...d, parentSlug: 'tudo-do-scudo' }));

export const getProductDetails = (): MenuLabel[] => {
  if (!productDetails) {
    return [];
  }
  return productDetails.reduce((prev, item) => {
    return [
      ...prev,
      {
        id: `data-menu-details-${item.id}`,
        label: item.title,
        slug: item.slug,
        url: `/${item.slug}`,
      },
    ];
  }, [] as MenuLabel[]);
};

let index = -1;
export const allSlides: ProductTabSlide[] =
  productDetails.reduce((prev, curr) => {
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
  }, [] as ProductTabSlide[]);

export default productDetails;
