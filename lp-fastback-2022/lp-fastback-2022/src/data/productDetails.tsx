import {productDetails as productDetailsAssets} from "@/assets/general";
import {MenuLabel} from "@/models";
import {IncludePrefixResponsiveSizes} from "@/utils/imagePrefixes";

export interface ProductTabSlide {
  id: string;
  index?: number;
  title: string;
  slug: string;
  linkBtn?: string;
  labelBtn?: string;
  titleBtn?: string;
  altBtn?: string;
  titleFirst?: string;
  titleSecond?: string;
  highLightedFirst: boolean;
  breakTitle?: boolean;
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

export interface ProductTab {
  id: string;
  title: string;
  slug: string;
  parentSlug?: string;
  fileUrl?: string;
  children: Omit<ProductTabSlide, "tabId">[];
}

// Design
const design: ProductTab = {
  id: "tab-design-01",
  title: "Design",
  slug: "design",
  children: [
    {
      id: "tab-design-c-1",
      slug: "tab-design-c-1",
      parentSlug: "design",
      title: "SUV COUPÉ",
      titleFirst: "SUV COUPÉ",
      titleSecond: "",
      highLightedFirst: true,
      descriptionDesktop: (
          <p>O autêntico design italiano, mais premium e exclusivo.</p>
      ),
      descriptionMobile: (
          <p>O autêntico design italiano, mais premium e exclusivo.</p>
      ),
      image: productDetailsAssets.design.slide001,
    },

    {
      id: "tab-design-c-2",
      slug: "tab-design-c-2",
      parentSlug: "design",
      title: "Rodas aro 18” ",
      titleFirst: "Rodas aro 18” ",
      titleSecond: "",
      highLightedFirst: true,
      descriptionDesktop: (
          <p>As grandes rodas aro 18” trazem robustez e muito estilo.</p>
      ),
      descriptionMobile: (
          <p>As grandes rodas aro 18” trazem robustez e muito estilo.</p>
      ),
      image: productDetailsAssets.design.slide002,
    },

    {
      id: "tab-design-c-3",
      slug: "tab-design-c-3",
      parentSlug: "design",
      title: "FAROL FULL LED ",
      titleFirst: "FAROL FULL LED",
      titleSecond: "",
      highLightedFirst: true,
      descriptionDesktop: (
          <p>
            Tecnologia dos faróis totalmente em LED garante melhor luminosidade,
            maior durabilidade e mais economia para você.
          </p>
      ),
      descriptionMobile: (
          <p>
            Tecnologia dos faróis totalmente em LED garante melhor luminosidade,
            maior durabilidade e mais economia para você.
          </p>
      ),
      image: productDetailsAssets.design.slide003,
    },

    {
      id: "tab-design-c-4",
      slug: "tab-design-c-4",
      parentSlug: "design",
      title: "LANTERNA FULL LED ",
      titleFirst: "LANTERNA FULL LED",
      titleSecond: "",
      highLightedFirst: true,
      descriptionDesktop: (
          <p>
            A beleza e modernidade do LED enaltecem ainda mais a bela traseira
            Coupé do Fastback.
          </p>
      ),
      descriptionMobile: (
          <p>
            A beleza e modernidade do LED enaltecem ainda mais a bela traseira
            Coupé do Fastback.
          </p>
      ),
      image: productDetailsAssets.design.slide004,
    },
  ],
};

// PERFORMANCE
const performance: ProductTab = {
  id: "tab-performance-01",
  title: "Performance",
  slug: "performance",
  children: [
    {
      id: "tab-performance-c-1",
      slug: "tab-performance-c-1",
      parentSlug: "performance",
      title: "POWERED BY ABARTH",
      titleFirst: "POWERED BY ABARTH",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
        <p>
          A exclusividade de um motor com incrível potência de 185cv e  a super força de torque de 270Nm: o mesmo motor da marca Abarth.
        </p>
      ),
      descriptionMobile: (
        <p>
          A exclusividade de um motor com incrível potência de 185cv e  a super força de torque de 270Nm: o mesmo motor da marca Abarth.
        </p>
      ),
      image: productDetailsAssets.performance.slide001,
    },

    {
      id: "tab-performance-c-2",
      slug: "tab-performance-c-2",
      parentSlug: "performance",
      title: "  MODO SPORT",
      titleFirst: "  MODO SPORT",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            Selecione o modo de direção Sport na Limited Edition Powered by Abarth
            e veja o painel de instrumentos full digital e todo o carro entrarem
            em uma configuração de direção super esportiva com respostas ainda
            mais rápidas ao volante.
          </p>
      ),
      descriptionMobile: (
          <p>
            Selecione o modo de direção Sport na Limited Edition Powered by Abarth
            e veja o painel de instrumentos full digital e todo o carro entrarem
            em uma configuração de direção super esportiva com respostas ainda
            mais rápidas ao volante.
          </p>
      ),
      image: productDetailsAssets.performance.slide002,
    },

    {
      id: "tab-performance-c-3",
      slug: "tab-performance-c-3",
      parentSlug: "performance",
      title: "  MOTOR TURBO 200 FLEX",
      titleFirst: "  MOTOR TURBO 200 FLEX",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            Entrega a combinação perfeita entre performance e um consumo de
            combustível incrivelmente econômico.
          </p>
      ),
      descriptionMobile: (
          <p>
            Entrega a combinação perfeita entre performance e um consumo de
            combustível incrivelmente econômico.
          </p>
      ),
      image: productDetailsAssets.performance.slide003,
    },

    {
      id: "tab-performance-c-4",
      slug: "tab-performance-c-4",
      parentSlug: "performance",
      title: "  TC+",
      titleFirst: "  TC+",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            O Traction Control Plus é um sistema de controle de tração avançado
            que transfere o torque do seu SUV para a roda com maior aderência para
            ajudá-lo a vencer qualquer obstáculo! Para acioná-lo, basta apertar a
            tecla TC+.
          </p>
      ),
      descriptionMobile: (
          <p>
            O Traction Control Plus é um sistema de controle de tração avançado
            que transfere o torque do seu SUV para a roda com maior aderência para
            ajudá-lo a vencer qualquer obstáculo! Para acioná-lo, basta apertar a
            tecla TC+.
          </p>
      ),
      image: productDetailsAssets.performance.slide004,
    },
  ],
};

// ESPAÇO E INTERIOR
const interior: ProductTab = {
  id: "tab-interior-01",
  title: "Espaço e Interior",
  slug: "interior",
  children: [
    {
      id: "tab-interior-c-1",
      slug: "tab-interior-c-1",
      parentSlug: "interior",
      title: "PORTA-MALAS DE 600L",
      titleFirst: "PORTA-MALAS DE 600L",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            Aproveite muito espaço para acomodar tudo que você quiser! Acomode
            todo tipo de bagagem: desde malas de todos os tamanhos, equipamentos
            esportivos e até mesmo sua prancha. Simplesmente o maior porta-malas
            da categoria.
          </p>
      ),
      descriptionMobile: (
          <p>
            Aproveite muito espaço para acomodar tudo que você quiser! Acomode
            todo tipo de bagagem: desde malas de todos os tamanhos, equipamentos
            esportivos e até mesmo sua prancha. Simplesmente o maior porta-malas
            da categoria.
          </p>
      ),
      image: productDetailsAssets.interior.slide001,
    },

    {
      id: "tab-interior-c-2",
      slug: "tab-interior-c-2",
      parentSlug: "interior",
      title: "CONSOLE CENTRAL ELEVADO",
      titleFirst: "CONSOLE CENTRAL ELEVADO",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            O conforto do apoio de braço, unido ao espaço de armazenamento de
            porta objetos e um belo design que enriquece o interior do Fastback.
          </p>
      ),
      descriptionMobile: (
          <p>
            O conforto do apoio de braço, unido ao espaço de armazenamento de
            porta objetos e um belo design que enriquece o interior do Fastback.
          </p>
      ),
      image: productDetailsAssets.interior.slide002,
    },

    {
      id: "tab-interior-c-3",
      slug: "tab-interior-c-3",
      parentSlug: "interior",
      title: "BANCOS EM COURO",
      titleFirst: "BANCOS EM COURO",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            Com abas laterais e costuras aparentes que trazem ainda mais conforto
            e esportividade ao interior do Fastback.
          </p>
      ),
      descriptionMobile: (
          <p>
            Com abas laterais e costuras aparentes que trazem ainda mais conforto
            e esportividade ao interior do Fastback.
          </p>
      ),
      image: productDetailsAssets.interior.slide003,
    },

    {
      id: "tab-interior-c-4",
      slug: "tab-interior-c-4",
      parentSlug: "interior",
      title: "VOLANTE MULTIFUNCIONAL",
      titleFirst: "VOLANTE MULTIFUNCIONAL",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            Todos os comandos ao alcance dos dedos e base achatada esportiva que
            garante mais espaço para as pernas.
          </p>
      ),
      descriptionMobile: (
          <p>
            Todos os comandos ao alcance dos dedos e base achatada esportiva que
            garante mais espaço para as pernas.
          </p>
      ),
      image: productDetailsAssets.interior.slide004,
    },

    {
      id: "tab-interior-c-5",
      slug: "tab-interior-c-5",
      parentSlug: "interior",
      title: "PADDLE SHIFTERS",
      titleFirst: "PADDLE SHIFTERS",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            Para quem gosta de uma direção mais esportiva: com esse câmbio
            localizado ao alcance dos dedos atrás do volante, você faz uma troca
            de marchas mais precisa, prática e rápida.{" "}
          </p>
      ),
      descriptionMobile: (
          <p>
            Para quem gosta de uma direção mais esportiva: com esse câmbio
            localizado ao alcance dos dedos atrás do volante, você faz uma troca
            de marchas mais precisa, prática e rápida.{" "}
          </p>
      ),
      image: productDetailsAssets.interior.slide005,
    },
  ],
};

// segurança
const seguranca: ProductTab = {
  id: "tab-seguranca-01",
  title: "Segurança",
  slug: "seguranca",
  children: [
    {
      id: "tab-seguranca-c-1",
      slug: "tab-seguranca-c-1",
      title: "FRENAGEM AUTÔNOMA DE EMERGÊNCIA",
      titleFirst: "FRENAGEM AUTÔNOMA DE EMERGÊNCIA",
      titleSecond: "",
      highLightedFirst: false,
      parentSlug: "Segurança",

      descriptionDesktop: (
          <p>
            O sistema AEB é capaz de reconhecer veículos à sua frente, através de
            uma câmera frontal, e acionar automaticamente os freios, para assim
            evitar acidentes.
          </p>
      ),
      descriptionMobile: (
          <p>
            O sistema AEB é capaz de reconhecer veículos à sua frente, através de
            uma câmera frontal, e acionar automaticamente os freios, para assim
            evitar acidentes.
          </p>
      ),
      image: productDetailsAssets.seguranca.slide001,
      vimeoId: {
        desktop: "749400213",
        mobile: "749400582",
      },
    },

    {
      id: "tab-seguranca-c-2",
      slug: "tab-seguranca-c-2",
      title: "ALERTA DE SAÍDA DE FAIXA",
      titleFirst: "ALERTA DE SAÍDA DE FAIXA",
      titleSecond: "",
      highLightedFirst: false,
      parentSlug: "Segurança",

      descriptionDesktop: (
          <p>
            Caso o carro saia da faixa, o motorista será prontamente alertado por
            uma notificação no painel, alerta sonoro e vibrações no volante.
          </p>
      ),
      descriptionMobile: (
          <p>
            Caso o carro saia da faixa, o motorista será prontamente alertado por
            uma notificação no painel, alerta sonoro e vibrações no volante.
          </p>
      ),
      image: productDetailsAssets.seguranca.slide002,
      vimeoId: {
        desktop: "749400234",
        mobile: "749400609",
      },
    },

    {
      id: "tab-seguranca-c-3",
      slug: "tab-seguranca-c-3",
      title: "COMUTAÇÃO AUTOMÁTICA DE FAROL ALTO",
      titleFirst: "COMUTAÇÃO AUTOMÁTICA DE FAROL ALTO",
      titleSecond: "",
      highLightedFirst: false,
      parentSlug: "Segurança",

      descriptionDesktop: (
          <p>
            Uma câmera frontal que identifica carros vindo no sentido contrário e
            regula automaticamente a intensidade do seu farol. Assim, você estará
            sempre respeitando a visão dos outros motoristas e terá mais segurança
            e conforto.
          </p>
      ),
      descriptionMobile: (
          <p>
            Uma câmera frontal que identifica carros vindo no sentido contrário e
            regula automaticamente a intensidade do seu farol. Assim, você estará
            sempre respeitando a visão dos outros motoristas e terá mais segurança
            e conforto.
          </p>
      ),
      image: productDetailsAssets.seguranca.slide003,
      vimeoId: {
        desktop: "749400181",
        mobile: "749400552",
      },
    },

    {
      id: "tab-seguranca-c-4",
      slug: "tab-seguranca-c-4",
      title: "MONITORAMENTO DE PRESSÃO DOS PNEUS",
      titleFirst: "MONITORAMENTO DE PRESSÃO DOS PNEUS",
      titleSecond: "",
      highLightedFirst: false,
      parentSlug: "Segurança",

      descriptionDesktop: (
          <p>
            Sempre que os pneus precisarem ser calibrados o painel de instrumentos
            emitirá um alerta. Praticidade e segurança.
          </p>
      ),
      descriptionMobile: (
          <p>
            Sempre que os pneus precisarem ser calibrados o painel de instrumentos
            emitirá um alerta. Praticidade e segurança.
          </p>
      ),
      image: productDetailsAssets.seguranca.slide004,
    },

    {
      id: "tab-seguranca-c-5",
      slug: "tab-seguranca-c-5",
      title: "AIRBAGS FRONTAIS E LATERAIS COM DUPLA FUNÇÃO",
      titleFirst: "AIRBAGS FRONTAIS E LATERAIS COM DUPLA FUNÇÃO",
      titleSecond: "",
      highLightedFirst: false,
      parentSlug: "Segurança",

      descriptionDesktop: (
          <p>
            O Fastback vem equipado com 2 airbags frontais e 2 airbags laterais
            com dupla função: protegem o tórax e a cabeça.
          </p>
      ),
      descriptionMobile: (
          <p>
            O Fastback vem equipado com 2 airbags frontais e 2 airbags laterais
            com dupla função: protegem o tórax e a cabeça.
          </p>
      ),
      image: productDetailsAssets.seguranca.slide005,
    },

    {
      id: "tab-seguranca-c-6",
      slug: "tab-seguranca-c-6",
      title: "ISOFIX",
      titleFirst: "ISOFIX",
      titleSecond: "",
      highLightedFirst: false,
      parentSlug: "Segurança",

      descriptionDesktop: (
          <p>
            Tecnologia para o encaixe perfeito e seguro para cadeirinhas de bebês e crianças.
          </p>
      ),
      descriptionMobile: (
          <p>
            Tecnologia para o encaixe perfeito e seguro para cadeirinhas de bebês e crianças.
          </p>
      ),
      image: productDetailsAssets.seguranca.slide006,
    },
  ],
};

// Tecnologia
const tecnologia: ProductTab = {
  id: "tab-tecnologia-01",
  title: "Tecnologia e Conectividade",
  slug: "tecnologia",
  children: [
    {
      id: "tab-tecnologia-c-1",
      slug: "tab-tecnologia-c-1",
      parentSlug: "tecnologia",
      title: "CENTRAL MULTIMÍDIA DE 10,1” ",
      titleFirst: "CENTRAL MULTIMÍDIA DE 10,1” ",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            Uma tela enorme com uma ótima resolução e design flutuante que
            facilita a visualização. Aproveite um sistema de navegação embutido
            com espelhamento de smartphone sem fio extremamente responsivo.
          </p>
      ),
      descriptionMobile: (
          <p>
            Uma tela enorme com uma ótima resolução e design flutuante que
            facilita a visualização. Aproveite um sistema de navegação embutido
            com espelhamento de smartphone sem fio extremamente responsivo.
          </p>
      ),
      image: productDetailsAssets.tecnologia.slide001,
    },

    {
      id: "tab-tecnologia-c-2",
      slug: "tab-tecnologia-c-2",
      parentSlug: "tecnologia",
      title: "CLUSTER FULL DIGITAL DE 7” ",
      titleFirst: "CLUSTER FULL DIGITAL DE 7” ",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            Painel de instrumentos totalmente digital e com configurações
            personalizáveis que tornam sua condução ainda mais agradável.
          </p>
      ),
      descriptionMobile: (
          <p>
            Painel de instrumentos totalmente digital e com configurações
            personalizáveis que tornam sua condução ainda mais agradável.
          </p>
      ),
      image: productDetailsAssets.tecnologia.slide002,
    },

    {
      id: "tab-tecnologia-c-3",
      slug: "tab-tecnologia-c-3",
      parentSlug: "tecnologia",
      title: "CARREGAMENTO DO CELULAR SEM FIO",
      titleFirst: "CARREGAMENTO DO CELULAR SEM FIO",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            Diga adeus à irritação dos vários cabos embolados e olá para a
            praticidade do carregador sem fio. Basta ter um celular compatível
            para aproveitar essa inovação. E mais: não se preocupe com o
            aquecimento do aparelho, pois há uma saída de ar-condicionado para
            regular sua temperatura.
          </p>
      ),
      descriptionMobile: (
          <p>
            Diga adeus à irritação dos vários cabos embolados e olá para a
            praticidade do carregador sem fio. Basta ter um celular compatível
            para aproveitar essa inovação. E mais: não se preocupe com o
            aquecimento do aparelho, pois há uma saída de ar-condicionado para
            regular sua temperatura.
          </p>
      ),
      image: productDetailsAssets.tecnologia.slide003,
    },

    {
      id: "tab-tecnologia-c-4",
      slug: "tab-tecnologia-c-4",
      parentSlug: "tecnologia",
      title: "KEYLESS ENTRY’N GO",
      titleFirst: "KEYLESS ENTRY’N GO",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            Apenas carregue a chave no bolso e entre e saia do Fastback com muito
            mais praticidade dando a partida apertando o botão START/STOP.
          </p>
      ),
      descriptionMobile: (
          <p>
            Apenas carregue a chave no bolso e entre e saia do Fastback com muito
            mais praticidade dando a partida apertando o botão START/STOP.
          </p>
      ),
      image: productDetailsAssets.tecnologia.slide004,
    },

    // {
    //   id: "tab-tecnologia-c-5",
    //   slug: "tab-tecnologia-c-5",
    //   parentSlug: "tecnologia",
    //   title: "REMOTE START",
    //   titleFirst: "REMOTE START",
    //   titleSecond: "",
    //   highLightedFirst: false,

    //   descriptionDesktop: (
    //     <p>Ligue e desligue o seu Fastback de forma remota.</p>
    //   ),
    //   descriptionMobile: (
    //     <p>Ligue e desligue o seu Fastback de forma remota.</p>
    //   ),
    //   image: productDetailsAssets.tecnologia.slide005,
    // },

    {
      id: "tab-tecnologia-c-6",
      slug: "tab-tecnologia-c-6",
      parentSlug: "tecnologia",
      title: "AR-CONDICIONADO DIGITAL AUTOMÁTICO",
      titleFirst: "AR-CONDICIONADO DIGITAL AUTOMÁTICO",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            Mais facilidade para encontrar a temperatura ideal. Além disso, ele
            pode ser controlado facilmente pela central multimídia.
          </p>
      ),
      descriptionMobile: (
          <p>
            Mais facilidade para encontrar a temperatura ideal. Além disso, ele
            pode ser controlado facilmente pela central multimídia.
          </p>
      ),
      image: productDetailsAssets.tecnologia.slide006,
    },

    {
      id: "tab-tecnologia-c-7",
      slug: "tab-tecnologia-c-7",
      parentSlug: "tecnologia",
      title: "FARÓIS E PARA-BRISAS AUTOMÁTICOS",
      titleFirst: "FARÓIS E PARA-BRISAS AUTOMÁTICOS",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            Mais conforto no seu dia a dia! Se chover ou escurecer o Fastback ligará o limpador de vidros e os faróis
            automaticamente.
          </p>
      ),
      descriptionMobile: (
          <p>
            Mais conforto no seu dia a dia! Se chover ou escurecer o Fastback ligará o limpador de vidros e os faróis
            automaticamente.
          </p>
      ),
      image: productDetailsAssets.tecnologia.slide007,
    },
  ],
};

// Acessórios
const acessorios: ProductTab = {
  id: "tab-acessorios-01",
  title: "Acessórios ",
  slug: "acessorios",
  children: [
    {
      id: "tab-acessorios-c-1",
      slug: "tab-acessorios-c-1",
      parentSlug: "acessórios",
      title: "RODAS EM LIGA 17 COR EXCLUSIVA MOPAR",
      titleFirst: "RODAS EM LIGA 17 COR EXCLUSIVA MOPAR",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            Mais esportividade e elegância para o seu Fiat Fastback. Além da Cor
            Escura exclusiva Mopar, as rodas de liga leve são mais leves e
            resistentes que os modelos tradicionais.
          </p>
      ),
      descriptionMobile: (
          <p>
            Mais esportividade e elegância para o seu Fiat Fastback. Além da Cor
            Escura exclusiva Mopar, as rodas de liga leve são mais leves e
            resistentes que os modelos tradicionais.
          </p>
      ),
      image: productDetailsAssets.acessorios.slide001,
    },

    {
      id: "tab-acessorios-c-2",
      slug: "tab-acessorios-c-2",
      parentSlug: "acessórios",
      title: "TAPETE DE PORTA-MALAS COM BORDA ELEVADA",
      titleFirst: "TAPETE DE PORTA-MALAS COM BORDA ELEVADA",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            Tapete de alta resistência com bordas elevadas, protege o interior do
            veículo contra líquidos derramados, terra ou outros detritos que
            venham danificar o revestimento original do porta-malas mantendo-o
            sempre novo.
          </p>
      ),
      descriptionMobile: (
          <p>
            Tapete de alta resistência com bordas elevadas, protege o interior do
            veículo contra líquidos derramados, terra ou outros detritos que
            venham danificar o revestimento original do porta-malas mantendo-o
            sempre novo.
          </p>
      ),
      image: productDetailsAssets.acessorios.slide002,
    },

    {
      id: "tab-acessorios-c-3",
      slug: "tab-acessorios-c-3",
      parentSlug: "acessórios",
      title: "TAPETE DE BORRACHA COM CARPETE",
      titleFirst: "TAPETE DE BORRACHA COM CARPETE",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            Proteção para o carpete do seu Fiat Fastback. Mais espessos e
            resistentes, também ajudam a compor o interior do carro, além de
            possuírem os mesmos elementos gráficos do veículo.
          </p>
      ),
      descriptionMobile: (
          <p>
            Proteção para o carpete do seu Fiat Fastback. Mais espessos e
            resistentes, também ajudam a compor o interior do carro, além de
            possuírem os mesmos elementos gráficos do veículo.
          </p>
      ),
      image: productDetailsAssets.acessorios.slide003,
    },

    {
      id: "tab-acessorios-c-4",
      slug: "tab-acessorios-c-4",
      parentSlug: "acessórios",
      title: "PROTETOR DE SOLEIRA EM VINIL FASTBACK",
      titleFirst: "PROTETOR DE SOLEIRA EM VINIL FASTBACK",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            O protetor de soleira alia proteção e estilo. É um acessório que
            personaliza e protege a pintura do seu carro no momento de entrada e
            saída dele.
          </p>
      ),
      descriptionMobile: (
          <p>
            O protetor de soleira alia proteção e estilo. É um acessório que
            personaliza e protege a pintura do seu carro no momento de entrada e
            saída dele.
          </p>
      ),
      image: productDetailsAssets.acessorios.slide004,
    },
    {
      id: "tab-acessorios-c-5",
      slug: "tab-acessorios-c-5",
      parentSlug: "acessórios",
      title: "ALARME VOLUMÉTRICO",
      titleFirst: "ALARME VOLUMÉTRICO",
      titleSecond: "",
      highLightedFirst: false,

      descriptionDesktop: (
          <p>
            Por ter sensores ultrassônicos, o alarme volumétrico Mopar libera
            ondas sonoras que avaliam a movimentação dentro do carro. Ele dispara
            sempre que detecta uma mudança nesse ambiente, como uma janela
            quebrada por exemplo.
          </p>
      ),
      descriptionMobile: (
          <p>
            Por ter sensores ultrassônicos, o alarme volumétrico Mopar libera
            ondas sonoras que avaliam a movimentação dentro do carro. Ele dispara
            sempre que detecta uma mudança nesse ambiente, como uma janela
            quebrada por exemplo.
          </p>
      ),
      image: productDetailsAssets.acessorios.slide005,
    },
  ],
};

// Serviços
const servicos: ProductTab = {
  id: "tab-servicos-01",
  title: "Serviços ",
  slug: "serviços",
  children: [
    {
      id: "tab-servicos-c-1",
      slug: "tab-servicos-c-1",
      title: "GARANTIA ADICIONAL FIAT",
      titleFirst: "GARANTIA ADICIONAL FIAT",
      titleSecond: "",
      highLightedFirst: false,
      parentSlug: "serviços",

      linkBtn: "https://servicos.fiat.com.br/servicos.html",
      labelBtn: "Compre agora",
      titleBtn: "Compre agora",
      altBtn: "Compre agora",
      descriptionDesktop: (
          <p>
            Seu Fiat Fastback pode ter até 5 anos de garantia, além dos 3 anos de
            fábrica. Conheça os planos disponíveis, são pacotes de 12 ou 24 meses
            a partir de R$ 2 por dia. Tranquilidade e segurança para você e seu
            Fiat.
          </p>
      ),
      descriptionMobile: (
          <p>
            Seu Fiat Fastback pode ter até 5 anos de garantia, além dos 3 anos de
            fábrica. Conheça os planos disponíveis, são pacotes de 12 ou 24 meses
            a partir de R$ 2 por dia. Tranquilidade e segurança para você e seu
            Fiat.
          </p>
      ),
      image: productDetailsAssets.servicos.slide001,
    },
    {
      id: "tab-servicos-c-2",
      slug: "tab-servicos-c-2",
      title: "PACOTES DE MANUTENÇÃO",
      titleFirst: "PACOTES DE MANUTENÇÃO",
      titleSecond: "",
      highLightedFirst: false,
      parentSlug: "serviços",
      // linkBtn: "https://servicos.fiat.com.br/servicos/revisao_sob_medida.html",
      labelBtn: "Saiba mais",
      titleBtn: "Saiba mais",
      altBtn: "Saiba mais",
      descriptionDesktop: (
          <p>
            Inclua o pacote de manutenção Mopar na compra do seu Fiat e tenha valores fixos tabelados nas revisões,
            mantenha sua garantia de fábrica, use sempre peças originais e tenha revisões com selo de qualidade Mopar.
          </p>
      ),
      descriptionMobile: (
          <p>
            Inclua o pacote de manutenção Mopar na compra do seu Fiat e tenha valores fixos tabelados nas revisões,
            mantenha sua garantia de fábrica, use sempre peças originais e tenha revisões com selo de qualidade Mopar.
          </p>
      ),
      image: productDetailsAssets.servicos.slide002,
    },

    // {
    //   id: "tab-servicos-c-3",
    //   slug: "tab-servicos-c-3",
    //   title: "Proteção de pneus",
    //   titleFirst: "Proteção de pneus",
    //   titleSecond: "",
    //   highLightedFirst: false,
    //   parentSlug: "servicos",

    //   descriptionDesktop: (
    //     <p>
    //       Uma dose extra de tranquilidade para aproveitar seu Fastback ao longo
    //       do primeiro ano de uso. Use-o até duas vezes em caso de danos
    //       acidentais e troque até dois pneus por ocasião.
    //     </p>
    //   ),
    //   descriptionMobile: (
    //     <p>
    //       Uma dose extra de tranquilidade para aproveitar seu Fastback ao longo
    //       do primeiro ano de uso. Use-o até duas vezes em caso de danos
    //       acidentais e troque até dois pneus por ocasião.
    //     </p>
    //   ),
    //   image: productDetailsAssets.performance.slide001,
    // },
  ],
};

const productDetails: ProductTab[] = [
  design,
  performance,
  interior,
  seguranca,
  tecnologia,
  acessorios,
  servicos,
].map((d) => ({
  ...d,
  parentSlug: "tudo-do-fastback",
}));

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
export const allSlides: ProductTabSlide[] = productDetails.reduce(
    (prev, curr) => {
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
    },
    [] as ProductTabSlide[]
);

export default productDetails;
