import { includeResponsive } from "@/utils/imagePrefixes";

// PREFIXES
const PREFIX = `${process.env.BASE_PREFIX}images/`;
const SECTION_PREFIX = "ProductDetails/";
const PERFORMANCE_PREFIX = `${SECTION_PREFIX}performance/`;
const DESIGN_PREFIX = `${SECTION_PREFIX}design/`;
const INTERIOR_PREFIX = `${SECTION_PREFIX}espaco-interior/`;
const SEGURANCA_PREFIX = `${SECTION_PREFIX}seguranca/`;
const TECNOLOOGIA_PREFIX = `${SECTION_PREFIX}tecnologia-conectividade/`;
const ACESSORIOS_PREFIX = `${SECTION_PREFIX}acessorios/`;
const SERFICOS_PREFIX = `${SECTION_PREFIX}servicos/`;

export const design = {
  slide001: includeResponsive(`${DESIGN_PREFIX}design-suv-coupe`, "jpg", {
    prefix: PREFIX,
  }),
  slide002: includeResponsive(`${DESIGN_PREFIX}rodas-aro-18`, "jpg", {
    prefix: PREFIX,
  }),
  slide003: includeResponsive(
    `${DESIGN_PREFIX}farois-lanternas-full-led`,
    "jpg",
    {
      prefix: PREFIX,
    }
  ),
  slide004: includeResponsive(`${DESIGN_PREFIX}lanterna-full-led`, "jpg", {
    prefix: PREFIX,
  }),
};

//PERFORMANCE
export const performance = {
  slide001: includeResponsive(`${PERFORMANCE_PREFIX}powered-by-abarth`, "jpg", {
    prefix: PREFIX,
  }),
  slide002: includeResponsive(`${PERFORMANCE_PREFIX}botao-sport`, "jpg", {
    prefix: PREFIX,
  }),
  slide003: includeResponsive(`${PERFORMANCE_PREFIX}motor-turbo-flex`, "jpg", {
    prefix: PREFIX,
  }),
  slide004: includeResponsive(`${PERFORMANCE_PREFIX}traction-control`, "jpg", {
    prefix: PREFIX,
  }),
};

export const interior = {
  slide001: includeResponsive(`${INTERIOR_PREFIX}porta-malas-600l`, "gif", {
    prefix: PREFIX,
  }),
  slide002: includeResponsive(
    `${INTERIOR_PREFIX}console-central-elevado`,
    "jpg",
    {
      prefix: PREFIX,
    }
  ),
  slide003: includeResponsive(`${INTERIOR_PREFIX}bancos-em-couro`, "jpg", {
    prefix: PREFIX,
  }),
  slide004: includeResponsive(
    `${INTERIOR_PREFIX}volante-multifuncional`,
    "jpg",
    {
      prefix: PREFIX,
    }
  ),
  slide005: includeResponsive(`${INTERIOR_PREFIX}paddle-shifters`, "jpg", {
    prefix: PREFIX,
  }),
};

export const seguranca = {
  slide001: includeResponsive(
    `${SEGURANCA_PREFIX}sensores-frenagem-estacionamento`,
    "jpg",
    {
      prefix: PREFIX,
    }
  ),
  slide002: includeResponsive(
    `${SEGURANCA_PREFIX}sistema-permanencia-faixa`,
    "jpg",
    {
      prefix: PREFIX,
    }
  ),
  slide003: includeResponsive(
    `${SEGURANCA_PREFIX}ajuste-automatico-farol-alto`,
    "jpg",
    {
      prefix: PREFIX,
    }
  ),
  slide004: includeResponsive(
    `${SEGURANCA_PREFIX}monitoramento-pressao-pneus`,
    "jpg",
    {
      prefix: PREFIX,
    }
  ),
  slide005: includeResponsive(`${SEGURANCA_PREFIX}airbags`, "jpg", {
    prefix: PREFIX,
  }),
  slide006: includeResponsive(`${SEGURANCA_PREFIX}fixacao-isofix`, "jpg", {
    prefix: PREFIX,
  }),
};

export const tecnologia = {
  slide001: includeResponsive(
    `${TECNOLOOGIA_PREFIX}central-multimidia`,
    "jpg",
    {
      prefix: PREFIX,
    }
  ),
  slide002: includeResponsive(
    `${TECNOLOOGIA_PREFIX}cluster-full-digital`,
    "jpg",
    {
      prefix: PREFIX,
    }
  ),
  slide003: includeResponsive(
    `${TECNOLOOGIA_PREFIX}carregamento-celular-sem-fio`,
    "jpg",
    {
      prefix: PREFIX,
    }
  ),
  slide004: includeResponsive(
    `${TECNOLOOGIA_PREFIX}partida-chave-remota`,
    "jpg",
    {
      prefix: PREFIX,
    }
  ),
  slide005: includeResponsive(`${TECNOLOOGIA_PREFIX}remote-start`, "jpg", {
    prefix: PREFIX,
  }),

  slide006: includeResponsive(
    `${TECNOLOOGIA_PREFIX}ar-condicionado-automatico-digital`,
    "jpg",
    {
      prefix: PREFIX,
    }
  ),

  slide007: includeResponsive(
    `${TECNOLOOGIA_PREFIX}farois-limpadores-automaticos`,
    "jpg",
    {
      prefix: PREFIX,
    }
  ),
};

//ACESSORIOS
export const acessorios = {
  slide001: includeResponsive(`${ACESSORIOS_PREFIX}rodas-liga-leve-17`, "jpg", {
    prefix: PREFIX,
  }),
  slide002: includeResponsive(`${ACESSORIOS_PREFIX}tapete-porta-malas`, "jpg", {
    prefix: PREFIX,
  }),
  slide003: includeResponsive(
    `${ACESSORIOS_PREFIX}tapete-boracha-carpete`,
    "jpg",
    {
      prefix: PREFIX,
    }
  ),
  slide004: includeResponsive(
    `${ACESSORIOS_PREFIX}protetor-soleira-vinil`,
    "jpg",
    {
      prefix: PREFIX,
    }
  ),
  slide005: includeResponsive(`${ACESSORIOS_PREFIX}alarme-volumetrico`, "jpg", {
    prefix: PREFIX,
  }),
};

//PERFORMANCE
export const servicos = {
  slide001: includeResponsive(`${SERFICOS_PREFIX}garantia-adicional`, "jpg", {
    prefix: PREFIX,
  }),
  slide002: includeResponsive(`${SERFICOS_PREFIX}revisao-sob-medida`, "jpg", {
    prefix: PREFIX,
  }),
};
