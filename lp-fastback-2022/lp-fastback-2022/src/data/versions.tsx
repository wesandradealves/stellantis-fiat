import { IVersion, IVersionFragment } from "@/models";

const versions: IVersionFragment[] = [
  {
    id: "fastback-audace",
    name: "audace",
    slug: "fastback-audace",
    versionText: "",
    cardHeader: {
      alt: "Fastback Audace",
      title: "Fastback Audace",
    },
    nameParts: {
      first: "Fastback Audace",
      second: "",
    },
    short: <>AUDACE</>,
    hex: "#3a369e",
    details: [
      {
        title: <>{"Frenagem autônoma de emergência"}</>,
        titleDescription: "Farol com luz de posição em LED",
        photo: "frenagem-autonoma-emergencia",
      },
      {
        title: (
          <>
            {"Alerta de saída"} <br /> {" de faixa"}
          </>
        ),
        titleDescription: "Alerta de saída de faixa",
        photo: "alerta-saida-faixa",
      },
      {
        title: <>{"Freio de estacionamento eletrônico"}</>,
        titleDescription: "Tecnologias autônomas",
        photo: "freio-estacionamento",
      },
    ],
    text: "light",
  },

  {
    id: "fastback-impetus",
    slug: "fastback-impetus",
    name: "impetus",
    versionText: "",
    cardHeader: {
      alt: "Fastback Impetus",
      title: "Fastback Impetus",
    },
    nameParts: {
      first: "Fastback Impetus",
      second: "",
    },
    short: <>Impetus</>,
    hex: "#92D0DB",
    details: [
      {
        title: (
          <>
            {"Multimídia"}
            <br />
            {"10,1”"}
          </>
        ),
        titleDescription: "Multimídia 10,1",
        photo: "multimidia-10,1",
      },
      {
        title: (
          <>
            {"Painel de  "}
            <br />
            {'instrumentos digital 7"'}
          </>
        ),
        titleDescription: 'Central Multimídia 8.4"',
        photo: "painel-instrumentos",
      },
      {
        title: <>{'Rodas de 18"'}</>,
        titleDescription: 'Painel full digital 7”',
        photo: "rodas-18",
      },
    ],
    text: "dark",
  },

  {
    id: "fastback-limited-edition",
    name: "Limited edition",
    slug: "fastback-limited-edition",
    versionText: "",
    isAbarth: true,
    cardHeader: {
      alt: "Fastback Lmited Edition",
      title: "Fastback Limited Edition",
    },
    nameParts: {
      first: "Fastback Limited Edition",
      second: "",
    },
    short: (
      <>
        {" "}
        LIMITED <br /> EDITION{" "}
      </>
    ),
    hex: "#3a369e",
    details: [
      {
        title: <>{"Motor Turbo 270 Powered by Abarth"}</>,
        titleDescription: "Motor Turbo 270 Powered by Abarth",
        photo: "motor-1.3turbo-powered-by-abarth",
      },
      {
        title: <>{"Modo de direção sport"}</>,
        titleDescription: "Bancos elétricos personalizáveis",
        photo: "modo-direcao-poison",
      },
      {
        title: <>{"Rodas e acabamentos escurecidos"}</>,
        titleDescription: "Tecnologias autônomas",
        photo: "rodas-acabamentos-escurecidos",
      },
    ],
    text: "light",
  },
];

export const dataVersions = (): IVersion[] => [
  ...versions.map((v) => ({
    ...v,
    fullName: `${v.nameParts.first} ${v.nameParts.second}`,
  })),
];
