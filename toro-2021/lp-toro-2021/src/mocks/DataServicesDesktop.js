import * as images from '../assets';

const DataServicesDesktop = [
  {
    id: 2,
    background: images.bgServices1,
    imageAlt: 'Service Map Image',
    header: {
      text: 'OPERAÇÕES REMOTAS',
      small: true,
      highlighted: true,
    },
    description: {
      desktop:
        'Pelo smartphone, smartwatch ou Alexa, você pode travar e destravar as portas, acender os faróis e até ligar e desligar o carro, mesmo a quilômetros de distância.',
    },
    next: 'Localização remota',
  },
  {
    id: 3,
    background: images.bgServices2,
    imageAlt: 'Service Distance Image',
    header: {
      text: 'LOCALIZAÇÃO DO VEÍCULO',
    },
    description: {
      desktop:
        'Esqueceu onde parou? Em estacionamentos lotados, por exemplo, você descobre a localização exata da Nova Fiat Toro e pode traçar uma rota a pé até o carro.',
    },
    next: 'Alertas de direção',
  },
  {
    id: 4,
    background: images.bgServices3,
    imageAlt: 'Service Mechanical Image',
    header: {
      text: 'ALERTAS DE CONDUÇÃO',
    },
    description: {
      desktop:
        'Ao emprestar a Nova Fiat Toro, você pode estabelecer limites de velocidade e perímetro. Caso a pessoa ultrapasse esses limites, você recebe um alerta.',
    },
    next: 'Sos automático',
  },
  {
    id: 5,
    background: images.bgServices4,
    imageAlt: 'Service Airbook Image',
    header: {
      text: 'CHAMADA AUTOMÁTICA DE EMERGÊNCIA',
      highlighted: true,
    },
    description: {
      desktop:
        'Em caso de acidente com acionamento dos airbags, o sistema liga automaticamente para a central e passa a localização e informações básicas do veículo.',
    },
    next: 'Alerta de roubo',
  },
  {
    id: 6,
    background: images.bgServices5,
    imageAlt: 'Service Roubo Image',
    header: {
      text: 'ALERTA PREVENTIVO DE FURTO',
    },
    description: {
      desktop:
        'Caso exista uma possibilidade de furto,  o sistema envia notificações para o seu celular. Se você confirmar que não está com a Toro, a central é acionada e o carro é rastreado.',
    },
    next: 'Navegação inteligente',
  },
  {
    id: 7,
    background: images.bgServices6,
    imageAlt: 'Service Roubo Image',
    header: {
      text: 'MAPA INTELIGENTE',
      small: true,
    },
    description: {
      desktop:
        'Além das rotas customizadas, a navegação apresenta informações de acordo com os indicadores do carro. Se o tanque estiver vazio, por exemplo, ela indica o posto de gasolina mais próximo.',
    },
    next: 'FIM',
  },
];

export const imagesSlide = [
  {
    imageId: 2,
    imageSrc: images.ServiceAirbook,
  },
  {
    imageId: 3,
    imageSrc: images.ServiceDistance,
  },
  {
    imageId: 4,
    imageSrc: images.ServiceMap,
  },
  {
    imageId: 5,
    imageSrc: images.ServiceSos,
  },
  {
    imageId: 6,
    imageSrc: images.ServiceRoubo,
  },
  {
    imageId: 7,
    imageSrc: images.ServiceNavegaçao,
  },
  {
    imageId: 8,
    imageSrc: images.ServiceNavegaçao,
  },
];

export default DataServicesDesktop;
