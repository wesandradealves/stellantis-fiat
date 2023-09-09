import * as images from '../assets';

const DataServices = [
  {
    id: 1,
    image: images.ServiceInfo,
    header: [
      {
        index: 'A PICAPE',
        text: 'A PICAPE',
      },
      {
        text: 'MAIS INTELIGENTE',
        bold: true,
      },
      {
        text: 'DO BRASIL',
      },
    ],
    description: 'Conheça os serviços',
  },
  {
    id: 2,
    image: images.ServiceAirbook,
    header: [
      {
        text: 'OPERAÇÕES REMOTAS',
      },
    ],
    description:
      'Pelo smartphone, smartwatch ou Alexa, você pode travar e destravar as portas, acender os faróis e até ligar e desligar o carro, mesmo a quilômetros de distância.',
  },
  {
    id: 3,
    image: images.ServiceDistance,
    header: [
      {
        text: 'LOCALIZAÇÃO DO VEÍCULO',
      },
    ],
    description:
      'Esqueceu onde parou? Em estacionamentos lotados, por exemplo, você descobre a localização exata da Nova Fiat Toro e pode traçar uma rota a pé até o carro.',
  },
  {
    id: 4,
    image: images.ServiceMap,
    header: [
      {
        text: 'ALERTAS DE CONDUÇÃO',
      },
    ],
    description:
      'Ao emprestar a Nova Fiat Toro, você pode estabelecer limites de velocidade e perímetro. Caso a pessoa ultrapasse esses limites, você recebe um alerta.',
  },
  {
    id: 5,
    image: images.ServiceSos,
    header: [
      {
        text: 'CHAMADA AUTOMÁTICA DE EMERGÊNCIA',
      },
    ],
    description:
      'Em caso de acidente com acionamento dos airbags, o sistema liga automaticamente para a central e passa a localização e informações básicas do veículo.',
  },
  {
    id: 6,
    image: images.ServiceRoubo,
    header: [
      {
        text: 'ALERTA PREVENTIVO DE FURTO',
      },
    ],
    description:
      'Caso exista uma possibilidade de furto, o sistema envia notificações para o seu celular. Se você confirmar que não está com a Toro, a central é acionada e o carro é rastreado.',
  },
  {
    id: 7,
    image: images.ServiceNavegaçao,
    header: [
      {
        text: 'MAPA INTELIGENTE',
      },
    ],
    description:
      'Além das rotas customizadas, a navegação apresenta informações de acordo com os indicadores do carro. Se o tanque estiver vazio, por exemplo, ela indica o posto de gasolina mais próximo.',
  },
];

export default DataServices;
