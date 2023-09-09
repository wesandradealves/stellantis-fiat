import * as images from '../assets';

let WindowSize = window.innerWidth;

const DataServices = [
  {
    id: 1,
    image: WindowSize < 768 ? images.ServicesMobile.Services01 : images.ServicesDesktop.Services01,
    title: 'CARREGAMENTO RÁPIDO E SEMI',
    description: 'Carregar o seu Fiat 500e é muito fácil, seja com a versatilidade do carregador portátil, nas estações de recarga ou com carregadores super rápidos (até 85 kW), que carregam até 80% da bateria em apenas 35 minutos.' ,
    next: "3 modos de direção"
  },
  {
    id: 2,
    image: WindowSize < 768 ? images.ServicesMobile.Services02 : images.ServicesDesktop.Services02,
    title: '3 modos de direção: Normal, Range e Sherpa.',
    description: 'De um lado o modo Normal, que privilegia o máximo de conforto e performance. Do outro, o modo Sherpa, que garante o máximo de eficiência na economia de energia, atuando nas acelerações e regeneração de sistemas auxiliares.',
    next: "Economia que só a eletricidade proporciona"
  },
  {
    id: 3,
    image: WindowSize < 768 ? images.ServicesMobile.Services06 : images.ServicesDesktop.Services04,
    title: 'ECONOMIA QUE SÓ A ELETRICIDADE PROPORCIONA',
    description: 'Enquanto os veículos movidos a combustível fazem, em média, 10km por litro, o novo Fiat 500e tem um consumo equivalente a 62km/l. Ou seja, ele é 6 vezes mais econômico do que os carros tradicionais brasileiros. Bravo!',
    
  },
  
 
];

export default DataServices;
