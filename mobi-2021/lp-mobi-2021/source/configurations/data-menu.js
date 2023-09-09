import whatsappIcon from "../../public/assets/icons/whatsapp_white_36dp.svg";

export const data = {
  pin: {
    visible: false,
    href: "https://www.fiat.com.br/concessionarias.html/?",
    target: "_blank",
  },
  list: [
    {
      label: "MOBI 2023",
      anchor: "mobi",
    },
    {
      label: "TODAS AS VERSÕES",
      anchor: "todas-versoes",
    },
    // {
    // 	label: 'MOBI TREKKING',
    // 	anchor: 's-design',
    // },
    {
      label: "FOTOS",
      anchor: "gallery",
    },
    {
      label: "TUDO DO MOBI:",
      anchor: "about",
    },
    {
      openTab: true,
      label: "• Design",
      anchor: "design",
    },
    {
      openTab: true,
      label: "• Interior",
      anchor: "interior",
    },
    {
      openTab: true,
      label: "• Tecnologia",
      anchor: "tecnologia",
    },
    {
      openTab: true,
      label: "• Performance",
      anchor: "performance",
    },
    {
      openTab: true,
      label: "• Acessórios",
      anchor: "acessorios",
    },
    {
      openTab: true,
      label: "• Pacote de Serviços",
      anchor: "servicos",
    },
    // {
    //   hideOnMobile: false,
    //   label: "CONVERSE COM A FIAT",
    //   href: "https://wa.me/message/ZRXRWMGUOK3ZI1",
    //   icon: whatsappIcon,
    //   target: "_blank",
    //   dataLayerId: "Menu_ClicouSimularFinanciamento",
    // },
    {
      hideOnMobile: true,
      label: "MONTE O SEU",
      href: "https://mobi.fiat.com.br/monte.html",
      target: "_blank",
      dataLayerId: "Menu_ClicouSimularFinanciamento",
    },
    {
      hideOnMobile: false,
      label: "SIMULE UM FINANCIAMENTO",
      href: "https://mobi.fiat.com.br/monte.html",
      target: "_blank",
      dataLayerId: "Menu_ClicouSimularFinanciamento",
    },
    {
      hideOnMobile: false,
      labelMobile: "COMPRE O SEU",
      label: "COMPRE O SEU",
      href: "https://www.fiat.com.br/compre/fiat-mobi.html",
      target: "_blank",
      dataLayerId: "Menu_ClicouAgendeSeuTesteDrive",
    },
    {
      hideOnMobile: false,
      labelMobile: "CONCESSIONÁRIAS",
      label: "CONCESSIONÁRIAS",
      href: "https://www.fiat.com.br/concessionarias.html",
      target: "_blank",
      dataLayerId: "Menu_ClicouConcessionarias",
    },
    {
      hideOnMobile: true,
      label: "OFERTAS FIAT",
      href: "https://ofertas.fiat.com.br/?q=mobi",
      target: "_blank",
      dataLayerId: "Menu_ClicouOfertasFiat",
    },
  ],
};

export default data;
