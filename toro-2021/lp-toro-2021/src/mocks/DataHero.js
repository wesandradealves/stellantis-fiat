import * as images from '../assets';
import * as videos from '../assets/videos';

const DataHero = [
  {
    id: 1,
    image: images.hero.storiesIndex,
    highlighted: true,
    new: true,
    head: {
      // title: 'FIAT TORO',
      Subtitle: 'Fiat toro',
      headerDescription: 'A picape que você já conhece - agora, supreendentemente mais moderna.'
    },
  },
  {
    id: 2,
    new: true,
    image: images.hero.storiesMotor,
    video: videos.mobile.heroMotor,
    useLogo: true,
    // videoDesktop: videos.desktop.heroMotor,
    head: {
      title: 'Motor',

      brand: 'turbo',
      Subtitle: '270',
      division: 'flex',
      description:
          'Mais conforto e ergonomia. Com a nova versão do volante, você pode regular altura, profundidade e ainda comandar diversas funcionalidades por voz.',
    },
  },
  {
    id: 3,
    image: images.hero.storiesDesign,
    video: videos.mobile.heroDesign,
    useLogo: true,
    // videoDesktop: videos.desktop.heroDesign,
    head: {
      title: 'Design',
      brand: 'Arrojado',
      Subtitle: 'E Robusto  ',
      description:
          'São tantas novidades de design que você nem vai saber por que se apaixonou.',
    },
  },
  {
    id: 4,
    image: images.hero.storiesMultimidia,
    video: videos.mobile.heroMultimidia,
    useLogo: true,
    // videoDesktop: videos.desktop.heroMultimidia,
    head: {
      title: 'Nova',
      brand: 'Central',
      brand2: 'multimídia ',
      Subtitle: 'na vertical',
      description:
          'Você vai interagir na tela de 10.1” do seu carro do mesmo jeito que faz no celular: na vertical.',
    },
  },
  {
    id: 5,
    image: images.hero.storiesInterior,
    video: videos.mobile.heroPorta,
    useLogo: true,
    // videoDesktop: videos.desktop.heroPorta,
    head: {
      title: 'UM',
      brand: 'Interior',
      Subtitle: 'totalmente renovado',
      description:
          'Mais conforto e ergonomia. Com a nova versão do volante, você pode regular altura, profundidade e ainda comandar diversas funcionalidades por voz.',
    },
  },
  {
    id: 6,
    new: true,
    image: images.hero.storiesConnect,
    video: videos.mobile.heroConectados,
    useLogo: true,
    // videoDesktop: videos.desktop.heroConectados,
    connect: images.connectMeImage,
    logo: images.hero.logoConnectFiat,
    head: {
      // title: 'CONNECT ME',
      // Subtitle: 'CONNECT////ME',
      description:
          'Perto, mesmo de longe. Ligue o motor, ajuste o ar e veja notificações em tempo real mesmo se estiver à longas distâncias do seu carro.',
    },
  },
];

export default DataHero;
