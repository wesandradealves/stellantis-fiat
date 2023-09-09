export const data = {
  title: "#FiquePorDentro",
  description: "Veja as versões em 360º e descubra qual é a sua cara.",
  help: "Arraste e conheça",
  helpLoad: "Clique para ativar 360",
  switchTitle: "Gostou desta versão?",
  versions: [
    {
      id: "LIKE",
      label: "MOBI LIKE",
      colorIndex: 0,
      icon: {
        type: "image/png",
        srcSet: "/assets/360/nav/like.png",
        fallback: {
          type: "image/png",
          srcSet: "/assets/360/nav/like.png",
        },
      },
      ext: ".jpg",
      info: {
        name: "MOBI LIKE",
        label: "MOBI DRIVE",
        details: [
          "Ar condicionado",
          "Direção hidráulica",
          "Mais altura do solo",
          "Vidros e travas elétricas",
        ],
      },
    },
    {
      id: "TREKKING",
      label: "MOBI TREKKING",
      colorIndex: 0,
      icon: {
        type: "image/png",
        srcSet: "/assets/360/nav/trekking.png",
        fallback: {
          type: "image/png",
          srcSet: "/assets/360/nav/trekking.png",
        },
      },
      ext: ".jpg",
      info: {
        name: "MOBI TREKKING",
        label: "MOBI TREKKING",
        details: [
          "Bancos com acabamento Premium",
          "Multimídia com conexão Wireless",
          "Rodas de liga leve",
          "Teto bicolor",
        ],
      },
    },
  ],
  colors: [
    {
      id: "padrao",
      label: "padrao",
      type: "padrao",
      hex: "padrao",
    },
  ],
};

export default data;
