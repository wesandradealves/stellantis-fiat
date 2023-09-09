import {heroImages} from "@/assets/general";
import {
  IncludePrefixResponsiveSizes,
  VideoResponsive,
} from "@/utils/imagePrefixes";

interface IHero {
  id: string;
  title: string | JSX.Element;
  // title2: string;
  description: string | JSX.Element;
  src?: VideoResponsive;
  cardSrc: IncludePrefixResponsiveSizes;
  titleTag: string;
  altTag: string;
}

export const dataHero: IHero[] = [
  {
    id: "1-data-hero",
    title: (
        <>
          Design SUV
          <br/>
          Coupé
        </>
    ),
    // title2: "MOTOR HEMI V8",
    description: (
        <>
          Com o Motor Hemi V8, de 400 cv e 556 Nm de torque, você vai descobrir
          por que a Fiat fastback é a picape mais potente do Brasil!
        </>
    ),
    altTag: "Design SUV Coupé",
    titleTag: "Design SUV Coupé",
    cardSrc: heroImages.thumbHero01,
  },
  {
    id: "2-data-hero",
    title: <> Performance </>,
    // title2: "U-CONNECT 8",CLÁSSICO
    description: (
        <>
          Tenha o controle total da sua Central Multimídia com o U-Connect. Ela
          tem uma tela sensível ao toque de 8”, para você conectar seu smartphone
          pelo Apple CarPlay ou Android Auto e acessar seus apps de mensagem,
          música e navegação.
        </>
    ),
    altTag: "Performance",
    titleTag: "Performance",
    cardSrc: heroImages.thumbHero02,
  },
  {
    id: "3-data-hero",
    title: <>Espaço</>,
    // title2: "BANCO AQUECIDO",
    description: (
        <>
          A Fiat fastback tem luxo e conforto sem precedentes. Revestido em couro
          contendo logo LARAMIE cuidadosamente gravado em baixo relevo, os bancos
          elétricos têm 10 posições, 2 configurações salvas para motorista e o
          melhor: eles são aquecidos e ventilados.
        </>
    ),
    altTag: "Espaço",
    titleTag: "Espaço",
    cardSrc: heroImages.thumbHero03,
  },
  {
    id: "4-data-hero",

    title: (
        <>
          Powered
          <br/>
          by Abarth
        </>
    ),
    // title2: "KEYLESS ENTER ‘N GO",
    description: (
        <>
          Mais tecnologia com a opção de iniciar o carro sem precisar inserir a
          chave na ignição. Desfrute o rugido do Motor Hemi V8 da sua nova picape
          Ram apertando apenas um botão.
        </>
    ),
    altTag: "Powered by Abarth",
    titleTag: "Powered by Abarth",
    cardSrc: heroImages.thumbHero04,
  },
];
