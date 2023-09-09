import * as images from '../assets';
// import * as videos from '../assets/videos';

const DataStories = [
  {
    id: 1,
    image: images.Stories01,
    imageAlt: 'Stories 1 - Image',
    highlighted: true,
    head: {
      width: 50,
      next: 'Design Externo',
    },
    headerDescription: 'A picape que você já conhece - agora, supreendentemente mais moderna.',
    action: {
      text: 'Toque e veja as novidades',
      align: 'right',
    },
  },
  {
    id: 2,
    image: images.Stories02,
    // video: videos.mobile.heroMotor,
    imageAlt: 'Stories 2 - Image',
    head: {
      titlenew: 'MOTOR',
      title: '270 FLEX',
      width: 300,
      brand: 'TURBO',
      subtitle: '270 FLEX'
    },
    description: {
      text:
        'Muito mais força com um torque de 27,5 Kgfm @1750 rpm e ainda consome menos combustível. ',
    },
      action: {
      text: 'Design externo',
      align: 'right',
    },
  },
  {
    id: 3,
    image: images.Stories03,
    imageAlt: 'Stories 3 - Image',
    // video: videos.mobile.heroDesign,
    head: {
      titlenew: 'DESIGN',
      title: 'E ROBUSTO',
      width: 370,
      brand: 'ARROJADO',
      subtitle: 'E ROBUSTO'
    },
    description: {
      text:
        'São tantas novidades de design que você nem vai saber por que se apaixonou.',
    },
        action: {
      text: 'Design interno',
      align: 'right',
    },
  },
  {
    id: 4,
    image: images.Stories05,
    // video: videos.mobile.heroPorta,
    imageAlt: 'Stories 4 - Image',
    head: {
      titlenew: 'UM',
      title: 'TOTALMENTE RENOVADO',
      width: 350,
      brand: 'INTERIOR',
      subtitle: 'TOTALMENTE RENOVADO'
    },

    description: {
      text:
        'Revestimento impecável, cluster full digital de 7” e 26 litros de porta-objetos para você guardar tudo.',
    },
        action: {
      text: 'Central Multimídia',
      align: 'right',
    },
  },
  {
    id: 5,
    image: images.Stories04,
    imageAlt: 'Stories 5 - Image',
    // video: videos.mobile.heroMultimidia,
    head: {
      titlenew: 'NOVA',
      title: 'MULTIMÍDIA NA VERTICAL',
      width: 350,
      brand: 'CENTRAL',
      subtitle: 'MULTIMÍDIA NA VERTICAL'
    },
    description: {
      text:
        'Você vai interagir na tela de 10.1” do seu carro do mesmo jeito que faz no celular: na vertical.',
    },
       action: {
      text: 'Conectividade',
      align: 'right',
    },
  },
  {
    id: 6,
    image: images.Stories06,
    imageAlt: 'Stories 6 - Image',
    // video: videos.mobile.heroConectados,
    head: {
      titlenew: 'NOVO',
      title: '',
      width: 350,
    },
    description: {
      text:
        'Ligue o motor, ajuste o ar e veja notificações em tempo real mesmo longe do carro.',
    },
    action: {
    align: 'center',
    },
  },
];

export default DataStories;
