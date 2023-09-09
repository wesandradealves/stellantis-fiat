//import whatsappIcon from '../assets/images/Icons/whatsapp.svg';

const MenuList = [
  {
    idDesktop: 1,
    name: 'Novo Fiat 500e',
    ref: 'novo-fiat-500',
    link: '#novo-fiat-500e',
  },
  {
    idDesktop: 2,
    name: 'Compre o seu',
    ref: 'compre-o-seu',
    link: '#compre-o-seu',
  },
  {
    idDesktop: 3,
    name: 'Recursos elétricos',
    ref: 'recursos-eletricos',
    link: '#recursos-eletricos',
  },
  {
    idDesktop: 4,
    name: 'Autonomia e carregamento',
    ref: 'autonomia-e-carregamento',
    // link: '#autonomia-e-carregamento',
    link: '#calculadora-header',
  },
  {
    idDesktop: 5,
    name: 'Fotos',
    ref: 'fotos',
    link: '#fotos',
  },
  {
    idDesktop: 6,
    name: 'Tudo sobre o Fiat 500e',
    ref: 'tudo-sobre-o-fiat-500',
    link: '#tudo-sobre-o-fiat-500e',
    submenu: [
      {
        idSubmenuDesktop: 1,
        SubMenuName: 'Design externo',
        ref: 'design-externo',
        linkSubmenuDesktop: '#design-externo',
      },
      {
        idSubmenuDesktop: 2,
        SubMenuName: 'Interior',
        ref: 'interior',
        linkSubmenuDesktop: '#interior',
      },
      // {
      //   idSubmenuDesktop: 3,
      //   SubMenuName: 'Sofisticação',
      //   ref: 'sofisticação',
      //   linkSubmenuDesktop: '#design-externo',
      // },
      {
        idSubmenuDesktop: 3,
        SubMenuName: 'Conectividade',
        ref: 'onectividade',
        linkSubmenuDesktop: '#conectividade',
      },
      {
        idSubmenuDesktop: 4,
        SubMenuName: 'Tecnologias autônomas',
        ref: 'tecnologias-autonomas',
        linkSubmenuDesktop: '#design-externo',
      },

      {
        idSubmenuDesktop: 5,
        SubMenuName: 'Segurança',
        ref: 'segurança',
        linkSubmenuDesktop: '#segurança',
      },

      {
        idSubmenuDesktop: 6,
        SubMenuName: 'Acessórios',
        ref: 'acessorios',
        linkSubmenuDesktop: '#acessorios',
      },
      // {
      //   idSubmenuDesktop: 6,
      //   SubMenuName: 'Acessórios',
      //   ref: 'acessorios',
      //   linkSubmenuDesktop: '#acessorios',
      // },
      // {
      //   idSubmenuDesktop: 7,
      //   SubMenuName: 'Pacote de serviços',
      //   ref: 'pacote-de-servicos',
      //   linkSubmenuDesktop: '#pacote-de-servicos',
      // },
    ],
  },
  // {
  //   idAction: 1,
  //   actionNameDesktop: 'Converse com a Fiat',
  //   ref: 'converse-com-a-fiat',
  //   linkActionDesktop: 'https://wa.me/message/UEPNFWGBDF2KI1',
  //   icon: whatsappIcon,
  // },
  {
    idAction: 2,
    actionNameDesktop: 'Monte o seu',
    ref: 'monte-o-seu',
    linkActionDesktop: 'https://500e.fiat.com.br/monte.html',
  },
  {
    idAction: 3,
    actionNameDesktop: 'Simule o financiamento',
    ref: 'simule-o-financiamento',
    linkActionDesktop: 'https://500e.fiat.com.br/monte.html',
  },
  {
    idAction: 4,
    actionNameDesktop: 'Compre o seu',
    ref: 'compre-o-seu',
    linkActionDesktop:
      'https://www.fiat.com.br/compre/fiat-500e.html?utm_source=receptiva_500e&utm_medium=botao_lateral_section&utm_campaign=compre_o_seu',
  },
  {
    idAction: 5,
    actionNameDesktop: 'Ver concessionárias',
    ref: 'ver-concessionarias',
    linkActionDesktop:
      'https://www.fiat.com.br/concessionarias.html?service=eletromobilidade',
  },
  // {
  //   idAction: 6,
  //   actionNameDesktop: '500e por assinatura',
  //   ref: 'compre-o-seu',
  //   linkActionDesktop:
  //     'https://www.meuflua.com.br/500e.html?utm_source=sitefiat&utm_medium=organico&utm_campaign=500e&utm_term=agosto&utm_content=2021',
  // },
  // {
  //   idAction: 4,
  //   actionNameDesktop: 'Ofertas Fiat 500e',
  //   ref: 'ofertas-fiat-500',
  //   linkActionDesktop: 'https://500e.fiat.com.br/monte.html',
  // },

  // Mobile ----------->
  {
    idMobile: 1,
    name: 'Novo Fiat 500e',
    ref: 'novo-fiat-500',
    linkMobile: '#novo-fiat-500e',
  },
  {
    idMobile: 2,
    name: 'Compre o seu',
    ref: 'servicos-fiat-500',
    linkMobile: '#compre-o-seu',
  },
  {
    idMobile: 3,
    name: 'Recursos elétricos',
    ref: 'recursos-eletricos',
    linkMobile: '#recursos-eletricos',
  },
  {
    idMobile: 4,
    name: 'Autonomia e carregamento',
    ref: 'autonomia-e-carregamento',
    linkMobile: '#autonomia-e-carregamento',
  },
  {
    idMobile: 5,
    name: 'Fotos',
    ref: 'fotos',
    linkMobile: '#fotos',
  },
  {
    idMobile: 6,
    name: 'Tudo sobre o Fiat 500e',
    ref: 'tudo-sobre-o-fiat-500',
    linkMobile: '#tudo-sobre-o-fiat-500e',
    submenu: [
      {
        idSubmenuMobile: 1,
        SubMenuName: 'Design externo',
        ref: 'design-externo',
        linkSubmenuMobile: '#designexterno',
      },
      {
        idSubmenuMobile: 2,
        SubMenuName: 'Interior',
        ref: 'interior',
        linkSubmenuMobile: '#designexterno',
      },
      // {
      //   idSubmenuMobile: 3,
      //   SubMenuName: 'Sofisticação',
      //   ref: 'sofisticação',
      //   linkSubmenuMobile: '#designexterno',
      // },
      {
        idSubmenuMobile: 3,
        SubMenuName: 'Conectividade',
        ref: 'conectividade',
        linkSubmenuMobile: '#sotisficação',
      },
      {
        idSubmenuMobile: 4,
        SubMenuName: 'Tecnologias autônomas',
        ref: 'tecnologias-autonomas',
        linkSubmenuMobile: '#designexterno',
      },
      {
        idSubmenuMobile: 5,
        SubMenuName: 'Segurança',
        ref: 'segurança',
        linkSubmenuMobile: '#sotisficação',
      },
      // {
      //   idSubmenuMobile: 6,
      //   SubMenuName: 'Acessórios',
      //   ref: 'acessorios',
      //   linkSubmenuMobile: '#segurança',
      // },
      // {
      //   idSubmenuMobile: 7,
      //   SubMenuName: 'Pacote de serviços',
      //   ref: 'pacote-de-servicos',
      //   linkSubmenuMobile: '#segurança',
      // },
    ],
  },
  // {
  //   idActionMobile: 1,
  //   actionNameMobile: 'Converse com a Fiat',
  //   ref: 'converse-com-a-fiat',
  //   linkActionMobile: 'https://wa.me/message/UEPNFWGBDF2KI1',
  //   icon: whatsappIcon,
  // },
  {
    idActionMobile: 2,
    actionNameMobile: 'Monte o seu',
    ref: 'monte-o-seu',
    linkActionMobile: 'https://500e.fiat.com.br/monte.html',
  },
  {
    idActionMobile: 3,
    actionNameMobile: 'Simule o financiamento',
    ref: 'simule-o-financiamento',
    linkActionMobile: 'https://500e.fiat.com.br/monte.html',
  },
  {
    idActionMobile: 4,
    actionNameMobile: 'Compre o seu',
    ref: 'compre-o-seu',
    linkActionMobile:
      'https://www.fiat.com.br/compre/fiat-500e.html?utm_source=receptiva_500e&utm_medium=botao_lateral_section&utm_campaign=compre_o_seu',
  },
  {
    idActionMobile: 5,
    actionNameMobile: 'Ver concessionárias',
    ref: 'ver-concessionarias',
    linkActionMobile:
      'https://www.fiat.com.br/concessionarias.html?service=eletromobilidade',
  },
  // {
  //   idActionMobile: 6,
  //   actionNameMobile: '500e por assinatura',
  //   ref: 'compre-o-seu',
  //   linkActionMobile:
  //     'https://www.meuflua.com.br/500e.html?utm_source=sitefiat&utm_medium=organico&utm_campaign=500e&utm_term=agosto&utm_content=2021',
  // },
  // {
  //   idActionMobile: 4,
  //   actionNameMobile: 'Ofertas Fiat 500e',
  //   ref: 'ofertas-fiat-500',
  //   linkActionMobile: '#',
  // },
];

export default MenuList;
