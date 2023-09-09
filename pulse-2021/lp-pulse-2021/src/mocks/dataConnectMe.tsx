import { connectMe as connectMeAssets, connectMeBackgrounds } from "@/assets/connectMe";
import { IncludePrefixResponsiveSizes } from "@/utils/imagePrefixes";


export interface ConnectMeSlide {
  id: string;
  title: string;
  titleElement?: JSX.Element;
  descriptionDesktop: JSX.Element;
  descriptionMobile: JSX.Element;
  image: IncludePrefixResponsiveSizes;
  background: IncludePrefixResponsiveSizes;
}

const connectMe: ConnectMeSlide[] = [
  {
    id: 'cme-c-1',
    title: 'Assistentes Virtuais (Alexa e Google)',
    titleElement: (
      <>
        {'Assistentes Virtuais'}<br />{'(Alexa e Google)'}
      </>
    ),
    descriptionDesktop: (
      <p>Os assistentes virtuais Google e Alexa, presentes no Fiat Pulse, elevam o seu nível de comodidade. É possível realizar comandos de voz, como acionamento de luzes e buzina, e solicitar informações do veículo, como nível de combustível e quilometragem do veículo.</p>
    ),
    descriptionMobile: (
      <p>Os assistentes virtuais Google e Alexa, presentes no Fiat Pulse, elevam o seu nível de comodidade. É possível realizar comandos de voz, como acionamento de luzes e buzina, e solicitar informações do veículo, como nível de combustível e quilometragem do veículo.</p>
    ),
    image: connectMeAssets.d01,
    background: connectMeBackgrounds.d01,
  },
  {
    id: 'cme-c-2',
    title: 'Operações remotas',
    titleElement: (
      <>
        {'Operações remotas'}
      </>
    ),
    descriptionDesktop: (
      <p>Já pensou em controlar o seu carro mesmo a quilômetros de distância? Conectando-se ao seu Fiat Pulse através do seu smartwatch, por exemplo, você pode travar e destravar as portas, acender os faróis e até ligar e desligar o veículo. </p>
    ),
    descriptionMobile: (
      <p>Já pensou em controlar o seu carro mesmo a quilômetros de distância? Conectando-se ao seu Fiat Pulse através do seu smartwatch, por exemplo, você pode travar e destravar as portas, acender os faróis e até ligar e desligar o veículo. </p>
    ),
    image: connectMeAssets.d02,
    background: connectMeBackgrounds.d02,
  },
  {
    id: 'cme-c-3',
    title: 'Alertas de condução',
    titleElement: (
      <>
        {'Alertas de condução'}
      </>
    ),
    descriptionDesktop: (
      <p>Emprestou o seu carro? Pode ficar tranquilo que com o Fiat Pulse, é possível acionar alertas de velocidade, horário e perímetro que não devem ser excedidos. Garantir que sua família está em segurança durante todas as suas jornadas nunca foi tão fácil.</p>
    ),
    descriptionMobile: (
      <p>Emprestou o seu carro? Pode ficar tranquilo que com o Fiat Pulse, é possível acionar alertas de velocidade, horário e perímetro que não devem ser excedidos. Garantir que sua família está em segurança durante todas as suas jornadas nunca foi tão fácil.</p>
    ),
    image: connectMeAssets.d03,
    background: connectMeBackgrounds.d03,
  },
  {
    id: 'cme-c-4',
    title: 'Chamada automática de emergência',
    titleElement: (
      <>
        {'Chamada automática de emergência'}
      </>
    ),
    descriptionDesktop: (
      <p>Ter agilidade durante emergências é fundamental. Por isso, em caso de colisões com impacto significativo, o Fiat Pulse realiza automaticamente uma chamada para a nossa central de atendimento. E, se não houver resposta dos ocupantes, o socorro é acionado e enviado para o local.</p>
    ),
    descriptionMobile: (
      <p>Em caso de colisões com impacto significativo, uma chamada é realizada automaticamente para a nossa central de atendimento. E, se não houver resposta dos ocupantes, o socorro é prontamente enviado para o local.</p>
    ),
    image: connectMeAssets.d04,
    background: connectMeBackgrounds.d04,
  },
  {
    id: 'cme-c-5',
    title: 'Alerta preventivo de furto',
    titleElement: (
      <>
        {'Alerta preventivo de furto'}
      </>
    ),
    descriptionDesktop: (
      <p>Prevenção contra roubo ou furto é com o Fiat Pulse! O próprio veículo é capaz de detectar ações suspeitas, como um reboque não autorizado, e enviar automaticamente uma notificação para você. </p>
    ),
    descriptionMobile: (
      <p>Prevenção contra roubo ou furto é com o Fiat Pulse! O próprio veículo é capaz de detectar ações suspeitas, como um reboque não autorizado, e enviar automaticamente uma notificação para você. </p>
    ),
    image: connectMeAssets.d05,
    background: connectMeBackgrounds.d05,
  },
  {
    id: 'cme-c-6',
    title: 'Wi-fi Hotspot',
    titleElement: (
      <>
        {'Wi-fi Hotspot'}
      </>
    ),
    descriptionDesktop: (
      <p>Dentro do Fiat Pulse, você, sua família, amigos e até papagaio estão sempre conectados. Com hotspot para até 8 dispositivos externos, todo mundo aproveita o serviço de Wi-Fi.</p>
    ),
    descriptionMobile: (
      <p>Dentro do Fiat Pulse, você, sua família, amigos e até papagaio estão sempre conectados. Com hotspot para até 8 dispositivos externos, todo mundo aproveita o serviço de Wi-Fi.</p>
    ),
    image: connectMeAssets.d06,
    background: connectMeBackgrounds.d06,
  },
];

export default connectMe;
