import { includeResponsive } from "@/utils/imagePrefixes";

const PREFIX = `${process.env.BASE_PREFIX}images/`;
const SECTION_PREFIX = 'ProductDetails/';

const DESIGN_PREFIX = `${SECTION_PREFIX}design/`;
export const design = {
  designItaliano: includeResponsive(`${DESIGN_PREFIX}design-italiano`, 'jpg', { prefix: PREFIX }),
  farolLed: includeResponsive(`${DESIGN_PREFIX}farol-led`, 'jpg', { prefix: PREFIX }),
  lanternaLed: includeResponsive(`${DESIGN_PREFIX}lanterna-led`, 'jpg', { prefix: PREFIX }),
  pinturaBicolor: includeResponsive(`${DESIGN_PREFIX}pintura-teto-bicolor`, 'jpg', { prefix: PREFIX }),
  roda17: includeResponsive(`${DESIGN_PREFIX}roda-diamantada-17`, 'jpg', { prefix: PREFIX }),
};

const INTERIOR_PREFIX = `${SECTION_PREFIX}interior/`;
export const interior = {
  acabamento: includeResponsive(`${INTERIOR_PREFIX}acabamento-interno`, 'jpg', { prefix: PREFIX }),
  bancos: includeResponsive(`${INTERIOR_PREFIX}bancos-revestimento-couro`, 'jpg', { prefix: PREFIX }),
  objetos: includeResponsive(`${INTERIOR_PREFIX}porta-objetos`, 'jpg', { prefix: PREFIX }),
  console: includeResponsive(`${INTERIOR_PREFIX}console-central`, 'jpg', { prefix: PREFIX }),
  comandosVolante: includeResponsive(`${INTERIOR_PREFIX}comandos-volante`, 'jpg', { prefix: PREFIX }),
  paddle: includeResponsive(`${INTERIOR_PREFIX}paddle-shifters`, 'jpg', { prefix: PREFIX }),
};

const TECNOLOGIA_PREFIX = `${SECTION_PREFIX}tecnologia/`;
export const tecnologia = {
  arAutomatico: includeResponsive(`${TECNOLOGIA_PREFIX}ar-condicionado-automatico-digital`, 'jpg', { prefix: PREFIX }),
  wirelessCharger: includeResponsive(`${TECNOLOGIA_PREFIX}carregamento-wireless-charger`, 'jpg', { prefix: PREFIX }),
  fullDigital: includeResponsive(`${TECNOLOGIA_PREFIX}central-full-digital-cluster-7`, 'jpg', { prefix: PREFIX }),
  centralMultimidia: includeResponsive(`${TECNOLOGIA_PREFIX}central-multimedia-10`, 'jpg', { prefix: PREFIX }),
  keyless: includeResponsive(`${TECNOLOGIA_PREFIX}keyless`, 'jpg', { prefix: PREFIX }),
};

const PERFORMANCE_PREFIX = `${SECTION_PREFIX}performance/`;
export const performance = {
  eLocker: includeResponsive(`${PERFORMANCE_PREFIX}elocker`, 'jpg', { prefix: PREFIX }),
  modoSport: includeResponsive(`${PERFORMANCE_PREFIX}modo-sport`, 'jpg', { prefix: PREFIX }),
  motorFirefly: includeResponsive(`${PERFORMANCE_PREFIX}motor-firefly-flex`, 'jpg', { prefix: PREFIX }),
  motorTurbo: includeResponsive(`${PERFORMANCE_PREFIX}motor-turbo-200-flex`, 'jpg', { prefix: PREFIX }),
};

const SEGURANCA_PREFIX = `${SECTION_PREFIX}seguranca/`;
export const seguranca = {
  airbags: includeResponsive(`${SEGURANCA_PREFIX}airbags`, 'jpg', { prefix: PREFIX }),
  alertaSaida: includeResponsive(`${SEGURANCA_PREFIX}alerta-saida-faixa`, 'jpg', { prefix: PREFIX }),
  comutacaoFarol: includeResponsive(`${SEGURANCA_PREFIX}comutacao-automatica-farol-alto`, 'jpg', { prefix: PREFIX }),
  frenagemEmergencia: includeResponsive(`${SEGURANCA_PREFIX}frenagem-emergencia`, 'jpg', { prefix: PREFIX }),
  monitoramentoPressao: includeResponsive(`${SEGURANCA_PREFIX}monitoramento-pressao-pneus`, 'jpg', { prefix: PREFIX }),
};

const SERVICOS_PREFIX = `${SECTION_PREFIX}servicos/`;
export const servicos = {
  d01: includeResponsive(`${SERVICOS_PREFIX}01`, 'jpg', { prefix: PREFIX }),
  d02: includeResponsive(`${SERVICOS_PREFIX}01`, 'jpg', { prefix: PREFIX }),
  d03: includeResponsive(`${SERVICOS_PREFIX}01`, 'jpg', { prefix: PREFIX }),
  d04: includeResponsive(`${SERVICOS_PREFIX}01`, 'jpg', { prefix: PREFIX }),
  d05: includeResponsive(`${SERVICOS_PREFIX}01`, 'jpg', { prefix: PREFIX }),
  d06: includeResponsive(`${SERVICOS_PREFIX}01`, 'jpg', { prefix: PREFIX }),
};

const ACESSORIOS_PREFIX = `${SECTION_PREFIX}acessorios/`;
export const acessorios = {
  tapetePortaMalas: includeResponsive(`${ACESSORIOS_PREFIX}tapete-porta-malas-borda-elevada`, 'jpg', { prefix: PREFIX }),
  barrasTransversais: includeResponsive(`${ACESSORIOS_PREFIX}barras-transversais`, 'jpg', { prefix: PREFIX }),
  suporteBike: includeResponsive(`${ACESSORIOS_PREFIX}suporte-bike`, 'jpg', { prefix: PREFIX }),
  tapeteBorracha: includeResponsive(`${ACESSORIOS_PREFIX}tapete-borracha-carpete`, 'jpg', { prefix: PREFIX }),
  paraBarro: includeResponsive(`${ACESSORIOS_PREFIX}para-barro`, 'jpg', { prefix: PREFIX }),
};