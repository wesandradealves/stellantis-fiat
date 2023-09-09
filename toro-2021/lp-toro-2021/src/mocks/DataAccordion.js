import * as images from '../assets';

const DataAccordion = [
  {
    id: 1,
    brand: 'Tecnologia',
    data: [
      {
        title: 'ADVENTURE INTELLIGENCE',
        description:
          'Nova plataforma Jeep com tecnologia inteligente. Você se conecta com seu Jeep onde estiver, e se conecta com o mundo sem precisar de um smartphone na mão.',
        image: images.DetailAdventure,
      },
      {
        title: 'CENTRAL MULTIMÍDIA',
        description:
          'Fácil de usar, a central multimídia Uconnect tem muita tecnologia e conectividade, como os comandos de voz e o pareamento com smartphone via Apple CarPlay e Android Auto.',
        image: images.DetailTecnologia1,
      },
      {
        title: 'KEYLESS ENTER ’N GO',
        description:
          'Nem precisa tirar a chave do bolso. Destrave as portas do seu Jeep Renegade ao se aproximar do veículo e dê a partida pelo botão Start/stop.',
        image: images.DetailTecnologia2,
      },
      {
        title: 'Câmera de Ré',
        description:
          'A imagem de ré conta com linhas guias dinâmicas, que facilitam até aquelas manobras mais difíceis.',
        image: images.DetailTecnologia3,
        width: 230,
        bg: images.Jungle,
      },
      {
        title: 'Ar-Condicionado',
        description:
          'A tecnologia Dual- Zone permite que motorista e passageiros escolham sua temperatura ideal, de forma separada e inteligente',
        image: images.DetailTecnologia4,
      },
      {
        title: 'SENSORES DE CHUVA E CREPÚSCULO',
        description:
          'O jeito Jeep de dirigir.Ao identificar chuvas ou penumbras, os sensores automaticamente ligam os limpadores de para- brisa e os faróis do carro.',
        image: images.DetailTecnologia5,
      },
      {
        title: 'PAINEL DE INSTRUMENTOS TFT 7”',
        description:
          'O painel de 7 polegadas informa sobre funções, como pressão dos pneus, temperatura de componentes e muito mais.',
        image: images.DetailTecnologia6,
      },
    ],
  },
  {
    id: 2,
    brand: 'Design',
    data: [
      {
        title: 'VISUAL INCONFUNDÍVEL',
        description:
          'Basta uma olhada no Renegade e você já sabe: é Jeep! Ele exibe a história e o DNA da marca em seu design robusto e único, com 7 fendas, faróis arredondados e formato inconfundível.',
        image: images.DetailDesign1,
        width: 230,
      },
      {
        title: 'TETO SOLAR',
        description:
          'Que tal ver as estrelas de dentro do seu Jeep? Com o teto solar, você dá um novo olhar para todas as suas aventuras off-road e também na cidade.',
        image: images.DetailDesign2,
      },
      {
        title: 'RODAS ATÉ 19”',
        description:
          '16, 17, 18 ou 19 polegadas: o Jeep Renegade conta com diversos tamanhos e modelos de rodas específicos para cada modelo. Qual é a sua?',
        image: images.DetailDesign3,
      },
      {
        title: 'LANTERNAS TRASEIRAS EM LED',
        description:
          'As lanternas em LED reforçam o estilo aventureiro do seu Jeep Renegade, além de trazer mais segurança no seu dia a dia.',
        image: images.DetailDesign4,
      },
      {
        title: 'FARÓIS FULL LED',
        description:
          'O jeito Jeep para ver e ser visto. O jogo de faróis e as lanternas traseiras em LED ajudam você a enxergar cada detalhe do caminho, seja nos dias de sol ou nas noites de neblina.',
        image: images.DetailDesign5,
      },
    ],
  },
  {
    id: 3,
    brand: 'Performance',
    data: [
      {
        title: 'CONTROLES DE TRAÇÃO E ESTABILIDADE',
        description:
          'O Renegade conta com sistemas ativos de segurança que ajustam o comportamento do carro em caso de perda de tração ou estabilidade.',
        image: images.DetailPerformace1,
        width: 230,
      },
      {
        title: 'SELETOR DE TERRENOS',
        description:
          'Seu Renegade sabe onde pisa. Nas versões 4x4, você garante a melhor performance com apenas um botão, selecionando o tipo do terreno: lama, areia, asfalto ou pedregoso.',
        image: images.DetailPerformace2,
      },
      {
        title: 'SUSPENSÃO INDEPENDENTE',
        description:
          'Um por todos e todos por um. As rodas do Renegade se movimentam de forma independente, de acordo com os obstáculos na pista, para garantir mais conforto.',
        image: images.DetailPerformace3,
      },
    ],
  },
  {
    id: 4,
    brand: 'Segurança',
    data: [
      {
        title: '7 AIRBAGS',
        description:
          '1 é pouco, 2 é bom e 7 é Jeep. Dentro do Renegade, você está protegido por todos os lados graças aos 2 airbags frontais, 2 laterais, 2 laterais tipo cortina e 1 nos joelhos de motorista.',
        description2:
          '*7 Airbags: disponíveis nas versões Moab e Trailhawk',
        image: images.DetailSeguranca1,
        width: 230,
      },
      {
        title: 'PROTEÇÕES OFF-ROAD',
        description:
          'Equipado com protetores de cárter, eixo cardan e tanque de combustível. Uma coisa é certa: o que vem de baixo não atinge o seu Jeep Renegade. ',
        description2:
          '*Proteções Off-Road: disponíveis nas versões Limited e Trailhawk.',
        image: images.DetailSeguranca2,
      },
      {
        title: 'CONTROLE NA DESCIDA',
        description:
          'A tecnologia HDC (Hill Descent Control) monitora o terreno e, automaticamente, aplica os freios necessários para descer ladeiras com mais segurança e suavidade.',
        image: images.DetailSeguranca3,
      },
      {
        title: 'ESTRUTURA DE SEGURANÇA',
        description:
          'Com estrutura extremamente estável e ótimos resultados nos testes de colisão frontal e lateral, o projeto garante mais segurança para os ocupantes do veículo.',
        image: images.DetailSeguranca4,
      },
    ],
  },
  {
    id: 5,
    brand: 'Acessórios',
    data: [
      {
        title: 'PACK ÁUDIO',
        description:
          'Nova Central Multimídia 6,2” com Navegação GPS, Câmera de Ré, Comandos de Áudio no Volante, DVD Player e TV Digital.',
        image: images.DetailAcessorios1,
        width: 230,
      },
      {
        title: 'PACK SAFETY',
        description:
          'O Pack Safety acrescenta Air Bags Laterais, de Cortina e de joelho para o motorista.',
        image: images.DetailAcessorios2,
      },
      {
        title: 'BARRAS TRANSVERSAIS DE TETO',
        description:
          'Feitas de alumínio e plástico industrial, suportam até 50kg. Elas permitem a otimização de cargas, com resistência e segurança.',
        image: images.DetailAcessorios3,
      },
      {
        title: 'SUPORTE DE BICICLETA PARA TETO',
        description:
          'Suporte para bicicleta: Quando a aventura 4x4 termina, a aventura Mountain Bike começa.',
        image: images.DetailAcessorios4,
      },
      {
        title: 'ENGATE REBOQUE INTEGRADO',
        description:
          'Desenhado exclusivamente para o Jeep Renegade, o engate tem encaixe tem perfeito e sem furos, além de toda a qualidade Mopar.',
        image: images.DetailAcessorios5,
      },
      {
        title: 'ESTRIBO LATERAL',
        description:
          'Desenhado exclusivamente para o Jeep Renegade, o engate tem encaixe perfeito e sem furos, além de toda a qualidade Mopar.',
        image: images.DetailAcessorios6,
      },
      {
        title: 'PARA-BARRO',
        description:
          'Item indispensável para cair na lama. O para-barro protege a carroceria do seu Jeep contra pedras que podem ser arremessadas pelos pneus durante as trilhas.',
        image: images.DetailAcessorios7,
      },
    ],
  },

  {
    id: 6,
    brand: 'Pacote de serviços',
    data: [
      {
        title: 'GARANTIA ADICIONAL',
        description:
          'Seu Jeep com até 5 anos de Garantia. São planos de 12 ou 24 meses adicionais a garantia de fábrica. Mais economia para você e seu Jeep protegido por mais tempo.',
        image: images.DetailService1,
      },
      {
        title: 'REVISÃO SOB MEDIDA',
        description:
          'Monte um plano de revisões com descontos e preços fixos. Planos personalizados de duas a dez revisões programadas que podem ser diluídas junto ao financiamento do seu Jeep.',
        image: images.DetailService2,
      },
      // {
      //   title: 'PROTEÇÃO DE PNEUS JEEP',
      //   description:
      //     'Novo e exclusivo serviço da Jeep para a proteção de pneus contra avarias e acidentes, com reposição garantida e cobertura de 12 meses.',
      //   image: images.DetailService3,
      // },
    ],
  },
];

export default DataAccordion;
