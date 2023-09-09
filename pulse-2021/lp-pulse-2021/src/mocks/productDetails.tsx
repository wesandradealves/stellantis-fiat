import { productDetails as productDetailsAssets } from "@/assets";
import { MenuLabels } from "@/models";
import { IncludePrefixResponsiveSizes } from "@/utils/imagePrefixes";

export interface ProductTabSlide {
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

export interface ProductTab {
  id: string;
  title: string;
  slug: string;
  parentSlug?: string;
  children: Omit<ProductTabSlide, 'tabId'>[];
}

// DESIGN
const design: ProductTab = {
  id: 'tab-design-01',
  title: 'Design',
  slug: 'design',
  children: [
    {
      id: 'tab-design-c-1',
      title: 'Autêntico design italiano',
      descriptionDesktop: (
        <p>Sinta o seu coração pulsar mais forte quando os seus olhos encontrarem cada detalhe do autêntico design italiano do Fiat Pulse. Em um equilíbrio perfeito entre robustez e linhas marcantes, é impossível não se apaixonar por essa novidade bellissima.</p>
      ),
      descriptionMobile: (
        <p>Em um equilíbrio perfeito entre robustez e linhas marcantes, o design autêntico italiano do Fiat Pulse faz o coração de todo brasileiro pulsar mais forte. Bellissimo!</p>
      ),
      image: productDetailsAssets.design.designItaliano,
    },
    {
      id: 'tab-design-c-2',
      title: 'Faróis em LED',
      descriptionDesktop: (
        <p>O seu dia a dia mais pulsante e iluminado com a tecnologia LED no conjunto ótico do seu Fiat Pulse. É isso mesmo: melhor luminosidade, maior durabilidade e mais economia para você.</p>
      ),
      descriptionMobile: (
        <p>O seu dia a dia mais pulsante e iluminado com a tecnologia LED no conjunto ótico do seu Fiat Pulse. É isso mesmo: melhor luminosidade, maior durabilidade e mais economia para você.</p>
      ),
      image: productDetailsAssets.design.farolLed,
    },
    {
      id: 'tab-design-c-3',
      title: 'Lanterna em LED',
      descriptionDesktop: (
        <p>As lanternas em LED do seu Fiat Pulse não são apenas um detalhe: além de garantir maior durabilidade e melhor luminosidade, elas também dão aquele toque a mais de modernidade que todo mundo adora.</p>
      ),
      descriptionMobile: (
        <p>Além de garantir maior durabilidade e melhor luminosidade, as lanternas em LED do seu Fiat Pulse também dão aquele toque a mais de modernidade que todo mundo adora.</p>
      ),
      image: productDetailsAssets.design.lanternaLed,
    },
    {
      id: 'tab-design-c-4',
      title: 'Pintura Bicolor',
      descriptionDesktop: (
        <p>O seu Pulse do seu jeito. A pintura bicolor, disponível em várias versões, é capaz de garantir um design ainda mais arrojado e moderno para o seu Fiat Pulse e valorizar as suas formas.</p>
      ),
      descriptionMobile: (
        <p>O seu Pulse do seu jeito. A pintura bicolor disponível em várias versões é capaz de garantir um design ainda mais arrojado e moderno para o seu Fiat Pulse. </p>
      ),
      image: productDetailsAssets.design.pinturaBicolor,
    },
    {
      id: 'tab-design-c-5',
      title: 'Rodas diamantadas R17',
      descriptionDesktop: (
        <p>Pensado para você, dos pés à cabeça, ou melhor: das rodas ao teto. Com acabamento premium diamantado, e aro 17, as rodas do Fiat Pulse trazem ainda mais robustez e estilo para as suas jornadas.</p>
      ),
      descriptionMobile: (
        <p>Com acabamento premium diamantado, e aro 17, as rodas do Fiat Pulse trazem ainda mais robustez e estilo para cada uma das suas jornadas.</p>
      ),
      image: productDetailsAssets.design.roda17,
    },
  ]
};

// INTERIOR
const interior: ProductTab = {
  id: 'tab-interior-01',
  title: 'Interior',
  slug: 'interior',
  children: [
    {
      id: 'tab-interior-c-1',
      title: 'Acabamento Interno',
      descriptionDesktop: (
        <p>O Fiat Pulse possui design interior linear e apaixonante, olha só: console central em cromo acetinado e painel texturizado com acabamento de brilhar os olhos, presente também nas portas.</p>
      ),
      descriptionMobile: (
        <p>O design linear e fluido do interior do Fiat Pulse garante a sensação de conforto e amplitude a todos que entram nele. O painel é texturizado e tem acabamento de brilhar os olhos. As portas, que compartilham parte do acabamento do painel, e o console central em cromo acetinado são detalhes que compõem esse SUV apaixonante.</p>
      ),
      image: productDetailsAssets.interior.acabamento,
    },
    {
      id: 'tab-interior-c-2',
      title: 'Bancos revestidos em couro',
      descriptionMobile: (
        <p>Os bancos revestidos em couro, com perfurações no encosto e costura aparente nas laterais trazem todo o conforto, sofisticação e tecnologia que você merece.</p>
      ),
      descriptionDesktop: (
        <p>Os bancos revestidos em couro, com perfurações no encosto e costura aparente nas laterais trazem todo o conforto, sofisticação e tecnologia que você merece.</p>
      ),
      image: productDetailsAssets.interior.bancos,
    },
    {
      id: 'tab-interior-c-3',
      title: 'Porta Objetos',
      descriptionMobile: (
        <p>Para seu máximo conforto, o Fiat Pulse conta com um apoio de braço deslizante, porta-copos e porta celular no console e 18 porta-objetos estrategicamente distribuídos. </p>
      ),
      descriptionDesktop: (
        <p>Para seu máximo conforto, o Fiat Pulse conta com um apoio de braço deslizante, porta-copos e porta celular no console e 18 porta-objetos estrategicamente distribuídos. São mais de 25 litros de armazenamento dentro do seu Fiat Pulse. Isso que é praticidade, né?</p>
      ),
      image: productDetailsAssets.interior.objetos,
    },
    {
      id: 'tab-interior-c-5',
      title: 'Comandos do console central',
      descriptionMobile: (
        <p>Voltado para o motorista, o console central do Fiat Pulse foi pensado para facilitar a sua vida. Nele, você encontra todos os comandos do carro em um único lugar com fácil acesso e operações simples.</p>
      ),
      descriptionDesktop: (
        <p>Voltado para o motorista, o console central do Fiat Pulse foi pensado para facilitar a sua vida. Nele, você encontra todos os comandos do carro em um único lugar com fácil acesso e operações simples.</p>
      ),
      image: productDetailsAssets.interior.console,
    },
    {
      id: 'tab-interior-c-6',
      title: 'Volante multifuncional',
      descriptionMobile: (
        <p>O volante multifuncional em couro do Fiat Pulse é o 1º a ter o novo logo da Fiat no centro. Além disso, ele também conta com todos os comandos no alcance dos dedos e base achatada esportiva que garante mais espaço para as pernas.</p>
      ),
      descriptionDesktop: (
        <p>O volante multifuncional revestido em couro do Fiat Pulse está cheio de novidades. Além de ser o primeiro a ter novo logo da Fiat no centro, ele também conta com todos os comandos no alcance dos dedos e base achatada tipicamente esportiva que garante maior espaço para as pernas.</p>
      ),
      image: productDetailsAssets.interior.comandosVolante,
    },
    {
      id: 'tab-interior-c-7',
      title: 'Paddle shifters',
      descriptionMobile: (
        <p>Quem curte uma pegada mais esportiva vai adorar os paddle shifters do Fiat Pulse. Com esse câmbio localizado ao alcance dos dedos atrás do volante, você faz uma troca de marchas mais precisa, prática e rápida.  </p>
      ),
      descriptionDesktop: (
        <p>Quem curte uma pegada mais esportiva vai adorar os paddle shifters do Fiat Pulse. Com esse câmbio localizado ao alcance dos dedos atrás do volante, você faz uma troca de marchas mais precisa, prática e rápida.  </p>
      ),
      image: productDetailsAssets.interior.paddle,
    },
  ]
};

// TECNOLOGIA
const tecnologia: ProductTab = {
  id: 'tab-tecnologia-01',
  title: 'Tecnologia',
  slug: 'tecnologia',
  children: [
    {
      id: 'tab-tecnologia-c-1',
      title: 'Central Multimídia de 10.1’’',
      descriptionMobile: (
        <p>Com uma tela enorme e design flutuante, a central multimídia possui ótima resolução, sistema de navegação embarcado, espelhamento de smartphone sem fio e é extremamente responsiva. E por falar em responsiva, ela foi projetada para evoluir ao longo dos anos com atualizações automáticas. </p>
      ),
      descriptionDesktop: (
        <p>Com uma tela enorme e design flutuante, a central multimídia do Fiat Pulse possui ótima resolução, sistema de navegação embarcado, espelhamento de smartphone sem fio e é extremamente responsiva. E por falar em responsiva, ela foi projetada para evoluir ao longo dos anos com atualizações automáticas. Assim, você fica livre para se preocupar com o que realmente importa, como o destino da sua próxima viagem.</p>
      ),
      image: productDetailsAssets.tecnologia.centralMultimidia,
    },
    {
      id: 'tab-tecnologia-c-2',
      title: 'Ar-condicionado automático e digital',
      descriptionMobile: (
        <p>Faça sol ou faça chuva, o tempo dentro do Fiat Pulse é sempre o ideal para você. Presente em todas as versões, o ar-condicionado automático e digital possui botões de fácil acesso e pode ser controlado com precisão também pela central.</p>
      ),
      descriptionDesktop: (
        <p>Faça sol ou faça chuva, o tempo dentro do Fiat Pulse é sempre o ideal para você. Presente em todas as versões, o ar-condicionado automático e digital possui botões de fácil acesso e pode ser controlado com precisão também pela central.</p>
      ),
      image: productDetailsAssets.tecnologia.arAutomatico,
    },
    {
      id: 'tab-tecnologia-c-3',
      title: 'Cluster Full Digital de 7’’',
      descriptionMobile: (
        <p>É impossível não se apaixonar pela funcionalidade do Cluster 100% digital personalizável do Fiat Pulse e sua tela de 7 polegadas com cores marcantes.</p>
      ),
      descriptionDesktop: (
        <p>Já imaginou ter um cluster 100% digital e personalizável no seu carro? No Fiat Pulse, isso é realidade: você pode configurar os elementos coloridos da tela de 7 polegadas para atenderem aos seus gostos e preferências. Incrível, não é mesmo?</p>
      ),
      image: productDetailsAssets.tecnologia.fullDigital,
    },
    {
      id: 'tab-tecnologia-c-4',
      title: 'Wireless charger',
      descriptionMobile: (
        <p>Diga adeus à irritação dos vários cabos embolados e olá para a praticidade do carregador sem fio disponível no Fiat Pulse. Basta ter um celular compatível para aproveitar essa inovação.</p>
      ),
      descriptionDesktop: (
        <p>Diga adeus à irritação dos vários cabos embolados e olá para a praticidade do carregador sem fio disponível no Fiat Pulse. Basta ter um celular compatível para aproveitar essa inovação.</p>
      ),
      image: productDetailsAssets.tecnologia.wirelessCharger,
    },
    {
      id: 'tab-tecnologia-c-5',
      title: 'Keyless Entry n’ Go',
      descriptionMobile: (
        <p>Entre e saia do seu Fiat Pulse com apenas 1 clique graças à tecnologia Keyless Entry n’ Go, que te permite também ligar e desligar o SUV de forma remota. Bravo!</p>
      ),
      descriptionDesktop: (
        <p>Entre e saia do seu Fiat Pulse com apenas 1 clique graças à tecnologia Keyless Entry n’ Go, que te permite também ligar e desligar o SUV de forma remota. Bravo!</p>
      ),
      image: productDetailsAssets.tecnologia.keyless,
    },
  ]
};

// PERFORMANCE
const performance: ProductTab = {
  id: 'tab-performance-01',
  title: 'Performance Eficiente',
  slug: 'performance-eficiente',
  children: [
    {
      id: 'tab-performance-c-1',
      title: 'Novo motor Turbo 200 Flex',
      descriptionMobile: (
        <p>Suas definições de motor turbo acabam de ser atualizadas: moderno da cabeça aos pés e desenvolvido com tecnologia global, o Novo Motor Turbo 200 Flex entrega a combinação perfeita entre a melhor performance do segmento e um consumo de combustível incrível!</p>
      ),
      descriptionDesktop: (
        <p>Suas definições de motor turbo acabam de ser atualizadas: moderno da cabeça aos pés e desenvolvido com tecnologia global, o Novo Motor Turbo 200 Flex entrega a combinação perfeita entre a melhor performance do segmento, com 130 cavalos de potência e 200 N.m de torque, e ainda um consumo de combustível incrível!</p>
      ),
      image: productDetailsAssets.performance.motorTurbo,
    },
    {
      id: 'tab-performance-c-2',
      title: 'Traction Control Plus (TC+)',
      descriptionMobile: (
        <p>O Traction Control Plus é um sistema de controle de tração avançado que transfere o torque do seu SUV para a roda com maior aderência para ajudá-lo a vencer qualquer obstáculo! Para acioná-lo, basta apertar a tecla TC+.</p>
      ),
      descriptionDesktop: (
        <p>O Traction Control Plus é um sistema de controle de tração avançado que transfere o torque do seu SUV para a roda com maior aderência para ajudá-lo a vencer qualquer obstáculo! Para acioná-lo, basta apertar a tecla TC+.</p>
      ),
      image: productDetailsAssets.performance.eLocker,
    },
    {
      id: 'tab-performance-c-3',
      title: 'Botão Sport',
      descriptionMobile: (
        <p>Aventure-se com a face esportiva do Fiat Pulse através do botão Sport. Ao acioná-lo, o carro fica mais sensível, com respostas mais ágeis, e você acelera menos para receber mais potência. Incrível, não é mesmo?</p>
      ),
      descriptionDesktop: (
        <p>Aventure-se com a face esportiva do Fiat Pulse através do botão Sport. Ao acioná-lo, o carro fica mais sensível, com respostas mais ágeis, e você acelera menos para receber mais potência. Incrível, não é mesmo?</p>
      ),
      image: productDetailsAssets.performance.modoSport,
    },
    {
      id: 'tab-performance-c-4',
      title: 'Motor 1.3 Firefly Flex',
      descriptionMobile: (
        <p>Produzido no Brasil, esse motor foi feito para atender aos requisitos globais de mercado, com maior economia de combustível, menor emissão de poluentes e muito mais desempenho e potência.</p>
      ),
      descriptionDesktop: (
        <p>Potente, econômico e simples. Esse motor Flex produzido no Brasil foi feito para atender aos requisitos globais de mercado, com maior economia de combustível, menor emissão de poluentes e muito mais desempenho.</p>
      ),
      image: productDetailsAssets.performance.motorFirefly,
    },
  ]
};

// SEGURANÇA
const seguranca: ProductTab = {
  id: 'tab-seguranca-01',
  title: 'Segurança',
  slug: 'seguranca',
  children: [
    {
      id: 'tab-seguranca-c-1',
      title: '4 Airbags de série',
      descriptionMobile: (
        <p>A sua proteção é assunto sério. Por isso, todas as cinco versões do Fiat Pulse contam com 4 airbags, 2 frontais e 2 laterais, que protegem tórax e cabeça. </p>
      ),
      descriptionDesktop: (
        <p>A sua proteção é assunto sério. Por isso, todas as cinco versões do Fiat Pulse contam com 4 airbags, 2 frontais e 2 laterais, que protegem tórax e cabeça. </p>
      ),
      image: productDetailsAssets.seguranca.airbags,
    },
    {
      id: 'tab-seguranca-c-2',
      title: 'Frenagem autônoma de emergência (AEB)',
      descriptionMobile: (
        <p>O sistema AEB é capaz de reconhecer veículos à sua frente, através de uma câmera frontal, e acionar automaticamente os freios, para assim evitar acidentes. Mais segurança dentro e fora do Fiat Pulse.</p>
      ),
      descriptionDesktop: (
        <p>O sistema AEB é capaz de reconhecer veículos à sua frente, através de uma câmera frontal, e acionar automaticamente os freios, para assim evitar acidentes. Mais segurança dentro e fora do Fiat Pulse.</p>
      ),
      image: productDetailsAssets.seguranca.frenagemEmergencia,
      vimeoId: {
        desktop: '629466226',
        mobile: '629471961',
      }
    },
    {
      id: 'tab-seguranca-c-3',
      title: 'Alerta de saída de faixa (LDW+)',
      descriptionMobile: (
        <p>O Fiat Pulse está sempre atento à estrada, assim como você. Caso o carro saia um pouco da faixa, o motorista será prontamente alertado por uma notificação no painel, alerta sonoro e vibrações no volante.</p>
      ),
      descriptionDesktop: (
        <p>O Fiat Pulse está sempre atento à estrada, assim como você. Através de uma câmera frontal, ele identifica as faixas que delimitam a pista e, caso o carro saia um pouco dela, o motorista será prontamente alertado por uma notificação no painel, alerta sonoro e vibrações no volante. Com segurança, não se brinca.</p>
      ),
      image: productDetailsAssets.seguranca.alertaSaida,
      vimeoId: {
        desktop: '629465909',
        mobile: '629471863',
      }
    },
    {
      id: 'tab-seguranca-c-4',
      title: 'Comutação automática de farol alto (AHB)',
      descriptionMobile: (
        <p>O seu Fiat Pulse conta com uma câmera frontal que identifica carros vindo no sentido contrário e regula automaticamente a intensidade dos faróis. Assim, você estará sempre respeitando a visão dos outros motoristas.</p>
      ),
      descriptionDesktop: (
        <p>O seu Fiat Pulse conta com uma câmera frontal que identifica carros vindo no sentido contrário e regula automaticamente a intensidade dos faróis. Assim, você estará sempre respeitando a visão dos outros motoristas.</p>
      ),
      image: productDetailsAssets.seguranca.comutacaoFarol,
      vimeoId: {
        desktop: '629466154',
        mobile: '629471964',
      }
    },
    {
      id: 'tab-seguranca-c-5',
      title: 'Monitoramento de pressão dos pneus',
      descriptionMobile: (
        <p>É importantíssimo que os pneus do seu carro estejam com a pressão ideal. Com isso em mente, o Fiat Pulse conta com uma tecnologia que emite um alerta no painel quando for a hora de calibrar os pneus. Prático, né?</p>
      ),
      descriptionDesktop: (
        <p>É importantíssimo que os pneus do seu carro estejam com a pressão ideal. Com isso em mente, o Fiat Pulse conta com uma tecnologia que emite um alerta no painel quando for a hora de calibrar os pneus. Prático, né?</p>
      ),
      image: productDetailsAssets.seguranca.monitoramentoPressao,
    },
  ]
};

// ACESSÓRIOS
const acessorios: ProductTab = {
  id: 'tab-acessorios-01',
  title: 'Acessórios',
  slug: 'acessorios',
  children: [
    {
      id: 'tab-acessorios-c-1',
      title: 'Tapete de porta-malas com bordas elevadas',
      descriptionMobile: (
        <p>Mais proteção e conforto. Tapete de alta resistência com bordas elevadas, protege o interior do veículo contra líquidos, terra e outros detritos que venham danificar o revestimento original do porta-malas mantendo-o sempre novo.</p>
      ),
      descriptionDesktop: (
        <p>Mais proteção e conforto. Tapete de alta resistência com bordas elevadas, protege o interior do veículo contra líquidos, terra e outros detritos que venham danificar o revestimento original do porta-malas mantendo-o sempre novo.</p>
      ),
      image: productDetailsAssets.acessorios.tapetePortaMalas,
    },
    {
      id: 'tab-acessorios-c-2',
      title: 'Barras transversais',
      descriptionMobile: (
        <p>Deixe seu veículo ainda mais esportivo e transporte cargas, bagagens e sua bike no teto com segurança e praticidade. Tenha até 50 Kg de capacidade de carga distribuídos em um alumínio de alta resistência e durabilidade com acabamento em tinta preta.</p>
      ),
      descriptionDesktop: (
        <p>Deixe seu veículo ainda mais esportivo e transporte cargas, bagagens e sua bike no teto com segurança e praticidade. Tenha até 50 Kg de capacidade de carga distribuídos em um alumínio de alta resistência e durabilidade com acabamento em tinta preta.</p>
      ),
      image: productDetailsAssets.acessorios.barrasTransversais,
    },
    {
      id: 'tab-acessorios-c-3',
      title: 'Suporte de bike',
      descriptionMobile: (
        <p>Aquele passeio tranquilo, ou até mesmo a trilha mais radical ficam totalmente acessíveis com o suporte de bicicleta para teto original Mopar. Com ele, você alcança qualquer objetivo.</p>
      ),
      descriptionDesktop: (
        <p>Aquele passeio tranquilo, ou até mesmo a trilha mais radical ficam totalmente acessíveis com o suporte de bicicleta para teto original Mopar. Com ele, você alcança qualquer objetivo.</p>
      ),
      image: productDetailsAssets.acessorios.suporteBike,
    },
    {
      id: 'tab-acessorios-c-4',
      title: 'Tapete de borracha com carpete',
      descriptionMobile: (
        <p>Maximize a proteção para o carpete do seu Fiat Pulse: mais espessos e resistentes, também ajudam a compor o interior do carro, mantendo os mesmos elementos gráficos do veículo.</p>
      ),
      descriptionDesktop: (
        <p>Maximize a proteção para o carpete do seu Fiat Pulse: mais espessos e resistentes, também ajudam a compor o interior do carro, mantendo os mesmos elementos gráficos do veículo.</p>
      ),
      image: productDetailsAssets.acessorios.tapeteBorracha,
    },
    {
      id: 'tab-acessorios-c-5',
      title: 'Para-barro',
      descriptionMobile: (
        <p>Mantenha seu Pulse novo por mais tempo. Tenha maior proteção para seus para-lamas e soleira, evitando que danos causados por pedriscos, água, sujeira e lama se espalhem e depreciem o interior e exterior do seu veículo.</p>
      ),
      descriptionDesktop: (
        <p>Mantenha seu Pulse novo por mais tempo. Tenha maior proteção para seus para-lamas e soleira, evitando que danos causados por pedriscos, água, sujeira e lama se espalhem e depreciem o interior e exterior do seu veículo.</p>
      ),
      image: productDetailsAssets.acessorios.paraBarro,
    },
  ]
};

const productDetails = [
  design,
  interior,
  tecnologia,
  performance,
  seguranca,
  acessorios,
];

export const getProductDetails = (): MenuLabels[] => {
  if (!productDetails) {
    return [];
  }
  return productDetails.reduce((prev, item, index) => {
    return [
      ...prev,
      {
        id: `data-menu-details-${index}`,
        label: item.title,
        slug: `tudo-sobre-${item.slug}`,
        url: `/tudo-sobre-${item.slug}`,
      }
    ];
  }, [] as MenuLabels[]);
}
let index = -1;
export const allSlides: ProductTabSlide[] = productDetails.reduce((prev, curr) => {
  return [
    ...prev,
    ...curr.children.map((c) => {
      index++;
      return ({
        ...c,
        index,
        parentSlug: curr.slug,
        tabId: curr.id,
      });
    }),
  ];
}, [] as ProductTabSlide[]);

export default productDetails;
