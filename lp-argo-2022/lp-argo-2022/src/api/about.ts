const aboutData = [
  {
    idx: 1,
    category: "Design",
    categorySlug: "design",
    title: "Personalidade <br />Argo",
    slug: "personalidade-argo",
    description:
      "Design esportivo e exclusivo até nos pequenos detalhes. O Fiat Argo tem a essência italiana, a robustez brasileira e um estilo único no segmento.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-design-personalidade.jpg",
  },
  {
    idx: 2,
    category: "Design",
    categorySlug: "design",
    slug: "acabamento-design-interno",
    title: "Acabamento <br />e Design Interno",
    description:
      "A flag italiana e o novo logo Fiat também aparecem no interior do carro, que possui acabamento impecável e detalhes escurecidos.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-design-acabamento.jpg",
  },
  {
    idx: 3,
    category: "Design",
    categorySlug: "design",
    slug: "conjunto-luzes",
    title: "Conjunto <br />de Luzes",
    description:
      "Desenvolvido com parábolas duplas e assinatura de LED, os faróis emitem um facho de luz amplo, o que torna sua viagem muito mais segura.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-design-conj-luzes.jpg",
  },
  {
    idx: 4,
    category: "Design",
    categorySlug: "design",
    slug: "pintura-bicolor",
    title: "Pintura <br />Bicolor",
    description:
      "O único da categoria com personalização do teto, retrovisores e aerofólio. É exclusividade que não acaba.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-design-bi-color.jpg",
  },
  {
    idx: 1,
    category: "Tecnologia",
    categorySlug: "tecnologia",
    slug: "central-multimidia",
    title: 'Central <br />Multimídia 7"',
    description:
      "Conexão via Android Auto e Apple CarPlay para você dirigir sempre conectado com o que mais importa.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-tecnologia-central-multi.jpg",
  },
  {
    idx: 2,
    category: "Tecnologia",
    categorySlug: "tecnologia",
    slug: "volante-multifuncional",
    title: "Volante <br />Multifuncional",
    description:
      "No Fiat Argo, você controla as funções de rádio e atende chamadas de telefone sem tirar as mãos do volante. É o controle total na palma das suas mãos.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-tecnologia-volante.jpg",
  },
  // {
  //   idx: 3,
  //   category: "Tecnologia",
  //   categorySlug: "tecnologia",
  //   slug: "ac-digital",
  //   title: "Ar-Condicionado <br />Digital",
  //   description:
  //     "Dentro do Fiat Argo, a previsão é sempre de tempo bom. Com o ar-condicionado digital, você tem mais praticidade para ajustar a temperatura ideal.",
  //   link: "",
  //   labelLink: "",
  //   image: "/assets/images/about/img-tecnologia-ac-digital.jpg",
  // },
  {
    idx: 3,
    category: "Tecnologia",
    categorySlug: "tecnologia",
    slug: "keyless-entry-n-go",
    title: "Keyless <br />Entry N'Go",
    description:
      "A tecnologia Keyless permite que você abra as portas e ligue o motor do Argo sem precisar tocar na chave. Viu como sua ligação com o carro é forte?",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-tecnologia-keyless.jpg",
  },
  // {
  //   category: "Performance",
  //   categorySlug: "performance",
  //   slug: "novo-cambio-automatico-cvt",
  //   title: "Novo Câmbio <br />Automático CVT",
  //   description:
  //     "Mais conforto e economia! Aliado ao motor Firefly 1.3, descubra que é possível ter performance e autonomia ao mesmo tempo. Nada mal, não?",
  //   link: "",
  //   labelLink: "",
  //   image: "/assets/images/about/img-performance-cvt.png",
  // },
  {
    idx: 1,
    category: "Performance",
    categorySlug: "performance",
    slug: "motor-firefly-10",
    title: "Motor <br />Firefly 1.0",
    description:
      "O motor Firefly é extremamente econômico e ainda possui respostas rápidas, com o melhor torque da categoria, para uma direção ágil na cidade.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-performance-motor-10.jpg",
  },
  {
    idx: 2,
    category: "Performance",
    categorySlug: "performance",
    slug: "motor-firefly-13",
    title: "Motor <br />Firefly 1.3",
    description:
      "O Fiat Argo tem a essência italiana, a robustez brasileira e um estilo único no segmento. Equipado com o motor Firefly 1.3 você irá experimentar o que há de melhor na relação entre performance e economia.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-performance-motor-13.jpg",
  },
  {
    idx: 3,
    category: "Performance",
    categorySlug: "performance",
    slug: "direcao-eletrica-progressiva",
    title: "Direção Elétrica <br />Progressiva",
    description:
      "O conforto e a economia das direções elétricas com mais segurança ao ajustar o nível de esforço do volante em altas velocidades.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-performance-direcao.jpg",
  },
  {
    idx: 1,
    category: "Segurança",
    categorySlug: "seguranca",
    slug: "controle-tracao-estabilidade",
    title: "Controle de Tração <br />e Estabilidade",
    description:
      "Para ajudar a manter o controle da direção em condições extremas, a tração e a estabilidade do Fiat Argo são controladas automaticamente.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-seguranca-controle-tracao.jpg",
  },
  {
    idx: 2,
    category: "Segurança",
    categorySlug: "seguranca",
    slug: "hill-holder",
    title: "Hill Holder",
    description:
      "Chega de passar nervoso! Com o auxiliar de partida em ladeiras, você garante saídas suaves mesmo nos terrenos mais acentuados.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-seguranca-hill-holder.jpg",
  },
  {
    idx: 3,
    category: "Segurança",
    categorySlug: "seguranca",
    slug: "camera-re",
    title: "Câmera de Ré",
    description:
      "Ao engatar a marcha ré, a câmera na parte traseira é acionada, mostrando os obstáculos pelo caminho, direto na Central Multimídia.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-seguranca-camera-re.jpg",
  },
  // {
  //   idx: 4,
  //   category: "Segurança",
  //   categorySlug: "seguranca",
  //   slug: "sensor-pressao-pneus",
  //   title: "Sensor de Pressão <br />de Pneus",
  //   description:
  //     "Para a sua segurança, o painel do Fiat Argo alerta quando está na hora de calibrar os pneus. É pressão para os pneus, sem pressão para o motorista.",
  //   link: "",
  //   labelLink: "",
  //   image: "/assets/images/about/img-seguranca-sensor-pneus.jpg",
  // },
  // {
  //   idx: 5,
  //   category: "Segurança",
  //   categorySlug: "seguranca",
  //   slug: "air-bag-lateral",
  //   title: "Air Bag Lateral",
  //   description:
  //     "Garanta uma camada extra de segurança com o auxílio do Air Bag lateral do seu Argo. Ele possui bolsas de maior tamanho que protegem cabeça e tórax do motorista e passageiro dianteiro.",
  //   link: "",
  //   labelLink: "",
  //   image: "/assets/images/about/img-seguranca-sensor-pneus.jpg",
  // },
  {
    idx: 1,
    category: "Acessórios",
    categorySlug: "acessorios",
    slug: "friso-lateral-pintado",
    title: "Friso Lateral <br />Pintado",
    description:
      "Cuidado redobrado com a lateral do seu Fiat Argo. Os frisos laterais protegem as portas de pequenos danos e ainda dão um visual invocado ao carro.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-acessorios-friso.jpg",
  },
  {
    idx: 2,
    category: "Acessórios",
    categorySlug: "acessorios",
    slug: "tapete-porta-malas",
    title: "Tapete do <br />Porta-Malas",
    description:
      "Protege o forro do porta-malas e ainda garante mais estabilidade e aderência aos itens colocados no bagageiro.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-acessorios-tapete.jpg",
  },
  {
    idx: 3,
    category: "Acessórios",
    categorySlug: "acessorios",
    slug: "farol-neblina",
    title: "Farol <br />de Neblina",
    description:
      "Melhore sua visibilidade em casos de neblina e dê mais destaque para o seu Fiat Argo por onde você passar.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-acessorios-farol-neblina.jpg",
  },
  {
    idx: 4,
    category: "Acessórios",
    categorySlug: "acessorios",
    slug: "engate-reboque",
    title: "Engate <br />Reboque",
    description:
      "Desenvolvido exclusivamente para o Fiat Argo, o engate reboque tem acoplamento prático e forte, além do acabamento resistente contra a corrosão e ferrugem.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-acessorios-engate.jpg",
  },
  {
    idx: 5,
    category: "Acessórios",
    categorySlug: "acessorios",
    slug: "adesivo-plotado-teto",
    title: "Adesivo <br />Plotado no Teto",
    description:
      "Que tal um design ainda mais esportivo? O envelopamento do teto é o acessório ideal para se destacar dos demais.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-acessorios-adesivo-teto.jpg",
  },
  // {
  //   idx: 6,
  //   category: "Acessórios",
  //   categorySlug: "acessorios",
  //   slug: "iluminacao-interna",
  //   title: "Iluminação <br />Interna",
  //   description:
  //     "Utilidade e brilho em um só acessório. A iluminação interna serve para clarear o ambiente e proporcionar estilo ao veículo.",
  //   link: "",
  //   labelLink: "",
  //   image: "/assets/images/about/img-acessorios-ilum-interna.jpg",
  // },
  {
    idx: 1,
    category: "Serviços",
    categorySlug: "servicos",
    slug: "cuidado-fiat-argo-merece",
    title: "O Cuidado que o seu <br />Fiat Argo Merece",
    description:
      "Conheça os pacotes de Serviços FIAT Mopar. O seu Fiat Argo pode ter até 5 anos de garantia além das Revisões sob medida com descontos e preços fixos.",
    link: "",
    labelLink: "",
    image: "/assets/images/about/img-servicos-cuidade-fiat.jpg",
  },
  {
    idx: 2,
    category: "Serviços",
    categorySlug: "servicos",
    slug: "garantia-adicional-fiat",
    title: "Garantia <br />Adicional Fiat",
    description:
      "O NOVO FIAT ARGO pode ter até 6 anos de garantia. São planos de 12, 24 e 36 meses adicionais aos 3 anos de garantia de fábrica. Mais economia para você e seu NOVO FIAT ARGO ainda mais protegido.",
    link: "https://servicos.fiat.com.br/servicos.html",
    labelLink: "Compre agora",
    image: "/assets/images/about/img-servicos-garantia-fiat.jpg",
  },
  {
    idx: 3,
    category: "Serviços",
    categorySlug: "servicos",
    slug: "revisoes-sob-medida",
    title: "Revisões <br />Sob Medida",
    description:
      "Mais economia para você e a FIAT Argo sempre bem cuidada. Monte um plano de revisões com descontos e preços fixos.",
    link: "https://servicos.fiat.com.br/servicos/revisao_sob_medida.html",
    labelLink: "Saiba mais",
    image: "/assets/images/about/img-servicos-revisoes.jpg",
  },
];

export default aboutData;