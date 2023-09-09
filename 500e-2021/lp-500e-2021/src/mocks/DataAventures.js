import * as images from '../assets';

const Aventures = [
  {
    id: 1,
    brand: 'Design externo',
    anchor: 'design-externo',
    data: [
      {
        index: 'Design',
        title: 'Mesmo conceito. Mais espaço.',
        description:
          'Um autêntico 500, mas totalmente novo. O Fiat 500e está 61 cm mais longo e 56 cm mais largo, ou seja, mais robusto por fora e com mais espaço para os passageiros. Sem contar a sofisticação presente em todos os detalhes, como elementos cromados e novos badges.',
        image: images.aventures.design.design1,
        next: 'Teto solar panorâmico',
        nextImage: images.aventures.design.design2,
        idPrev: 5,
      },
      {
        index: 'Design',
        title: 'Teto solar panorâmico',
        description:
          'O Fiat 500e ficou mais espaçoso e essa sensação aumenta ainda mais quando você abre o teto solar panorâmico. O vidro se abre por quase um metro para você ver o céu e sentir o gostinho da liberdade.',
        image: images.aventures.design.design2,
        next: 'Faróis Full LED',
        nextImage: images.aventures.design.design3,
      },
      {
        index: 'Design',
        title: 'Faróis Full LED',
        description:
          'O conjunto ótico do Fiat 500e é todo em LED: faróis, lanternas frontais e traseiras, luz de freio e seta. Além da economia, essa tecnologia, junto com o efeito Infinity Mirror, dá uma assinatura única para o carro.',
        image: images.aventures.design.design3,
        next: 'Rodas de liga leve 16',
        nextImage: images.aventures.design.design4,
      },
      {
        index: 'Design',
        title: 'Rodas de liga leve 16”',
        description:
          'A caixa de rodas do Fiat 500e ficou maior para receber a nova roda de liga leve de 16 polegadas. Além do tamanho, seu acabamento escuro deixa o carro ainda mais bonito.',
        image: images.aventures.design.design4,
        nextImage: images.aventures.design.design5,
        next: 'Sistema E-latch',
      },
      {
        index: 'Design',
        title: 'Sistema E-latch',
        description:
          'Esqueça a tradicional maçaneta. O e-latch é um sistema totalmente elétrico que permite você abrir e fechar a porta através de um botão. Basta você estar com a sua wearable key, uma chave que mais parece uma joia: mais leve, fina e menor.',
        image: images.aventures.design.design5,
        nextImage: images.aventures.design.design6,
        next: 'Chave bellíssima',
      },
      {
        index: 'Design',
        title: 'Chave bellíssima',
        description:
          'A chave do Fiat 500e não podia ser nada menos do que uma joia. Inspirada em verdadeiras pedras preciosas, os detalhes do seu design inovador e primoroso a tornam uma peça inesquecível.',
        image: images.aventures.design.design6,
        next: 'Central multimídia 10.25”',
        idNext: 2,
        haveNext: true,
      },
    ],
  },
  {
    id: 2,
    brand: 'Interior',
    anchor: 'interior',
    data: [
      {
        index: 'Interior',
        title: 'Central multimídia 10.25”',
        description:
          'Essa exclusiva tela no formato widescreen de alta resolução é a protagonista do painel. Além de poder personalizar as funções e controlar por voz, você faz o pareamento do smartphone sem precisar de fios, por Android Auto® ou Apple Carplay®.',
        image: images.aventures.interior.interior1,
        next: 'Volante multifuncional com acabamento bicolor',
        nextImage: images.aventures.interior.interior2,
        idPrev: 1,
      },
      {
        index: 'Interior',
        title: 'Volante multifuncional com acabamento bicolor',
        description:
          'Além de um objeto lindo de design, com detalhes em couro e perfeita ergonomia, o volante controla várias tecnologias autônomas do carro e funções da central multimídia. E você pode comandar tudo isso por voz.',
        image: images.aventures.interior.interior2,
        next: 'Banco de couro ecológico',
        nextImage: images.aventures.interior.interior3,
      },
      {
        index: 'Interior',
        title: 'Banco de couro ecológico.',
        description:
          'Todo na cor gelo-bege, os bancos de couro são ecológicos e cheios de detalhes refinados, como um verdadeiro design italiano pede. E ainda vem com apoio de braço que traz mais conforto na sua experiência de dirigir.',
        image: images.aventures.interior.interior3, //colocar imagem correta
        next: 'Cluster full digital 7"',
        nextImage: images.aventures.interior.interior4,
      },
      {
        index: 'Interior',
        title: 'Cluster full digital 7".',
        description:
          'O quadro de instrumentos redondo segue o estilo do Fiat 500 original. No centro dele, o cluster digital e personalizável preenche o espaço com cor e tecnologia. Nele, você acessa as principais informações do seu veículo.',
        image: images.aventures.interior.interior4, //colocar imagem correta
        next: 'Mais porta-objetos',
        nextImage: images.aventures.interior.interior5,
      },
      {
        index: 'Interior',
        title: 'Mais porta-objetos',
        description:
          'Em todos os cantos do carro você encontra um porta-objeto para guardar suas coisas. Tem espaço nas portas, no console e entre os bancos. Com destaque para o compartimento de smartphone, logo abaixo da central multimídia.',
        image: images.aventures.interior.interior5,
        nextImage: images.aventures.interior.interior6,
        next: 'Wireless charger',
      },
      {
        index: 'Interior',
        title: 'Wireless charger',
        description:
          'Em cima do seletor de câmbio está o compartimento para você carregar seu smartphone e parear com Android Auto® ou Apple CarPlay® sem precisar de cabo. Pequenas luzes de LED avisam quando ele começa a carregar e quando a bateria está completa.',
        image: images.aventures.interior.interior6,
        nextImage: images.aventures.interior.interior7,
        next: 'Painel e acabamento',
      },
      {
        index: 'Interior',
        title: 'Painel e acabamento',
        description:
          'O já consagrado formato oval do painel do Fiat 500 ganhou um lindo contorno cromado nessa versão elétrica. Com acabamento impecável e várias opções de cores, a sofisticação se completa com o seletor de câmbio por botões.',
        image: images.aventures.interior.interior8,
        next: 'Fim',
        idNext: 3,
        haveNext: true,
      },
    ],
  },
  {
    id: 3,
    brand: 'Conectividade',
    anchor: 'conectividade',
    data: [
      {
        index: 'Conectividade',
        title: 'Mapa inteligente',
        description:
          'Além de rotas customizadas, o Connect Me mostra informações do seu interesse no mapa, como a autonomia do carro e postos de carregamento, caso detecte que a bateria vai acabar antes.',
        image: images.aventures.conectividade.conectividade5,
        nextImage: images.aventures.conectividade.conectividade4,
        next: 'Operações remotas',
        idPrev: 2,
      },
      {
        index: 'Conectividade',
        title: 'Operações remotas',
        description:
          'Esse serviço Connect Me permite você travar e destravar as portas do carro, acender os faróis, ligar o ar-condicionado e o motor, mesmo à distância. Basta usar o smartphone, smartwatch ou Alexa ®.',
        image: images.aventures.conectividade.conectividade4,
        next: 'Chamada automática de emergência',
        nextImage: images.aventures.conectividade.conectividade3,
      },
      {
        index: 'Conectividade',
        title: 'Chamada automática de emergência',
        description:
          'Em caso de acidente com acionamento dos airbags, o Connect Me aciona o sistema que liga automaticamente para a central e passa a localização e informações básicas do carro.',
        image: images.aventures.conectividade.conectividade3,
        next: 'Monitoramento em tempo real',
        nextImage: images.aventures.conectividade.conectividade1,
      },
      {
        index: 'Conectividade',
        title: 'Monitoramento em tempo real',
        description:
          'Pelo seu smartphone, smartwatch ou Alexa ®, você consegue pegar informações do Fiat 500e em tempo real, como nível de bateria, pressão dos pneus, quilometragem e dados de manutenção.',
        image: images.aventures.conectividade.conectividade1,
        next: 'Fim',
        idNext: 4,
      },

      // {
      //   index: 'Conectividade',
      //   title: 'Controle de carregamento remoto',
      //   description:
      //     'Precisamos de insumos para esse conteúdo.',
      //   image: images.aventures.conectividade.conectividade3,
      //   next: 'Chamada automática de emergência',
      //   nextImage: images.aventures.conectividade.conectividade3,
      // },
    ],
  },
  {
    id: 4,
    brand: 'Tecnologias autônomas',
    anchor: 'tecnologias-autonomas',
    data: [
      {
        index: 'autonomas',
        title: 'Piloto automático adaptativo',
        description:
          'Com esse sistema, você programa a velocidade de cruzeiro e, se os sensores detectarem algum carro mais lento à frente, automaticamente a velocidade é reduzida para manter uma distância segura.',
        image: images.aventures.autonomas.autonomas1,
        next: 'Detector de ponto cego',
        nextImage: images.aventures.autonomas.autonomas2,
        idPrev: 3,
      },
      {
        index: 'autonomas',
        title: 'Detector de ponto cego ',
        description:
          'Sabe quando um carro está ao seu lado, mas você não o enxerga pelo espelho lateral? Quando isso acontecer, o Fiat 500e emite alertas sonoros no painel e visuais no espelho para você não mudar de faixa.',
        image: images.aventures.autonomas.autonomas2,
        next: 'Alerta de mudança de faixa indesejável',
        nextImage: images.aventures.autonomas.autonomas3,
      },
      {
        index: 'autonomas',
        title: 'Alerta de mudança de faixa indesejável',
        description:
          'Se você estiver dirigindo e por acaso sair um pouco da faixa, esse sistema envia um alerta a tempo de você corrigir a rota. Além disso, o volante começa a vibrar para você voltar ao traçado da pista.',
        image: images.aventures.autonomas.autonomas3,
        next: 'Frenagem automática de emergência',
        nextImage: images.aventures.autonomas.autonomas3,
      },
      {
        index: 'autonomas',
        title: 'Frenagem automática de emergência',
        description:
          'Através dos sensores, esse sistema reconhece um obstáculo na frente do seu Fiat 500e, como pedestres e ciclistas, e aciona os freios automaticamente, para evitar um acidente.',
        image: images.aventures.autonomas.autonomas3,
        next: 'Alerta de fadiga',
        nextImage: images.aventures.autonomas.autonomas5,
      },
      {
        index: 'autonomas',
        title: 'Alerta de fadiga',
        description:
          'O Fiat 500e é um carro tão inteligente que analisa como você está dirigindo. Se o seu nível de atenção baixar, ele ativa alertas e envia uma mensagem no painel, sugerindo que você faça uma pausa antes de voltar a dirigir.',
        image: images.aventures.autonomas.autonomas5,
        next: 'Comutação automática do farol alto',
        nextImage: images.aventures.autonomas.autonomas6,
      },
      {
        index: 'autonomas',
        title: 'Comutação automática do farol alto',
        description:
          'Esse sistema ajuda muito ao pegar a estrada à noite. Uma câmera frontal identifica carros vindo na direção contrária e impede que o farol alto atrapalhe a visão do outro motorista.',
        image: images.aventures.autonomas.autonomas6,
        next: 'Reconhecimento de sinalização na via para limite de velocidade',
        nextImage: images.aventures.autonomas.autonomas7,
      },
      {
        index: 'autonomas',
        title:
          'Reconhecimento de sinalização na via para limite de velocidade',
        description:
          'Uma câmera no para-brisa ajuda a monitorar marcações na pista. Se perceber um desvio, o sistema emite alertas no painel e começa a corrigir a direção gradualmente, para manter o veículo na faixa. Além disso, é possível configurar o limite máximo de velocidade permitido na estrada.',
        image: images.aventures.autonomas.autonomas7,
        next: 'Fim',
        idNext: 5,
      },
    ],
  },
  {
    id: 5,
    brand: 'Segurança',
    anchor: 'segurança',
    data: [
      {
        index: 'Segurança',
        title: 'Sensores de estacionamento 360º',
        description:
          'O Fiat 500e tem 11 sensores que detectam todos os obstáculos à sua volta. Pelo cluster digital, você consegue visualizar uma representação do carro visto de cima, para ajudar na sua manobra.',
        image: images.aventures.segurança.segurança1,
        next: 'Câmera de ré',
        nextImage: images.aventures.segurança.segurança2,
        idPrev: 4,
      },
      {
        index: 'Segurança',
        title: 'Câmera de ré',
        description:
          'Uma câmera HD na traseira do carro transmite imagens em alta resolução e com linhas dinâmicas para a central multimídia. Assim, você vai manobrar seu Fiat 500e com muito mais segurança.',
        image: images.aventures.segurança.segurança2,
        next: '6 Airbags',
        nextImage: images.aventures.segurança.segurança3,
      },
      {
        index: 'Segurança',
        title: '6 Airbags',
        description:
          'No Fiat 500e, você se sente protegido por todos os lados. São 2 airbags frontais, 2 laterais e 2 no banco. Além de ser 100% elétrico, ele também é 100% seguro.',
        image: images.aventures.segurança.segurança3,
        next: 'Fim',
        idNext: 6,
      },
    ],
  },
  {
    id: 6,
    brand: 'Acessórios',
    anchor: 'acessorios',
    data: [
      {
        index: 'Acessórios',
        title: 'Carregador residencial, Wallbox, 7kW/h',
        description: 'Solução para carregamento doméstico rápido com 7,4 kW/h permite a recarga do veículo em 80% em menos de 4h.',
        image: images.aventures.acessorios.acessorios06,
        next: 'Badge Italia',
        nextImage: images.aventures.acessorios.acessorios01,
        idPrev: 5,
      },
      {
        index: 'Acessórios',
        title: 'Badge Italia',
        description:
          'Estilo e um toque Italiano: as três cores da bandeira Italiana num emblema cromado.',
        image: images.aventures.acessorios.acessorios01,
        next: 'Organizador de console complementar',
        nextImage: images.aventures.acessorios.acessorios02,
      },
      {
        index: 'Acessórios',
        title: 'Organizador de console complementar',
        description:
          'Porta objetos central, esse acessório se complementa ao organizador de console para maior praticidade e conforto.',
        image: images.aventures.acessorios.acessorios02,
        next: 'Protetor de soleira, iluminada',
        nextImage: images.aventures.acessorios.acessorios03,
      },
      {
        index: 'Acessórios',
        title: 'Protetor de soleira, iluminada',
        description:
          'Protetor de soleira garante a proteção e uma imagem mais esportiva graças à iluminação em LED sempre que as portas são abertas.',
        image: images.aventures.acessorios.acessorios03,
        next: 'Bolsa para cabos',
        nextImage: images.aventures.acessorios.acessorios04,
      },
      {
        index: 'Acessórios',
        title: 'Bolsa para cabos',
        description:
          'Bolsa dedicada com assinatura do logo 500 é feita de antiderrapante para acondicionamento perfeito no porta malas.',
        image: images.aventures.acessorios.acessorios04,
        next: 'Recolhedor de cabo',
        nextImage: images.aventures.acessorios.acessorios05,
      },
      {
        index: 'Acessórios',
        title: 'Recolhedor de cabo',
        description:
          'O mais prático possível, o recolhedor de cabos possibilita enrolar o cabo de carregamento sem danificar o produto. Chega de sujeira nas mãos e nas roupas e esforços desnecessários.',
        image: images.aventures.acessorios.acessorios05,
        next: 'Fim',
        idNext: 1,
      },
    ],
  },
  // {
  //   id: 6,
  //   brand: 'Acessórios',
  //   anchor: 'acessorios',
  //   data: [
  //     {
  //       index: 'Acessorios',
  //       title: 'Título do acessório',
  //       description: 'Precisamos de insumos para esse conteúdo.',
  //       image: images.aventures.design.design1,
  //       next: 'Título De serviços',
  //     },
  //   ],
  // },
  // {
  //   id:7,
  //    brand: 'Pacote de serviços',
  //   anchor: 'pacote-de-servicos',
  //   data: [
  //     {
  //       index: 'Serviços',
  //       title: 'Título De serviços',
  //       description: 'Precisamos de insumos para esse conteúdo.',
  //       image: images.aventures.design.design1,
  //       next: 'Mesmo conceito. Mais espaço.',
  //     },
  //   ],
  // },
];
export default Aventures;
