import { consumerType as consumerTypeAssets } from "@/assets/consumerType";
import { HighlightSlide } from "@/models";

const consumerType: HighlightSlide[] = [
  {
    id: "uma-potencia-inigualavel",
    slug: "uma-potencia-inigualavel",
    title: "UMA POTÊNCIA INIGUALÁVELUMA POTÊNCIA INIGUALÁVEL",
    alt: "UMA POTÊNCIA INIGUALÁVEL",
    titleElement: <>{"UMA POTÊNCIA INIGUALÁVEL"}</>,
    descriptionDesktop: (
      <p>
        Experimente a incrível potência de até 185CV com a força do torque de
        até 270NM.
      </p>
    ),
    descriptionMobile: (
      <p>
        Experimente a incrível potência de até 185CV com a força do torque de
        até 270NM.
      </p>
    ),
    image: consumerTypeAssets.potenciaSlide001,
  },
  {
    id: "aventurese-com-o-modo-sport",
    slug: "aventurese-com-o-modo-sport",
    title: "AVENTURE-SE COM O MODO SPORT",
    alt: "AVENTURE-SE COM O MODO SPORT",
    titleElement: <>{"AVENTURE-SE COM O MODO SPORT"}</>,
    descriptionDesktop: (
      <p>
        Selecione o modo Sport no volante e sinta o carro ficar envenenado:
        respostas mais ágeis e você acelera menos para receber mais potência.
      </p>
    ),
    descriptionMobile: (
      <p>
        Selecione o modo Sport no volante e sinta o carro ficar envenenado:
        respostas mais ágeis e você acelera menos para receber mais potência.
      </p>
    ),
    image: consumerTypeAssets.potenciaSlide002,
  },
  {
    id: "design-exclusivo-do-escorpiao",
    slug: "design-exclusivo-do-escorpiao",
    title: "DESIGN EXCLUSIVO DO ESCORPIÃO",
    alt: "DESIGN EXCLUSIVO DO ESCORPIÃO",
    titleElement: <>{"DESIGN EXCLUSIVO DO ESCORPIÃO"}</>,
    linkBtn: "https://abarth.fiat.com.br/",
    labelBtn: "Mais sobre abarth",
    titleBtn: "Mais sobre abarth",
    descriptionDesktop: (
      <p>
        Acabamentos escurecidos e badges que destacam essa série especial:
        Limited Edition Powered by Abarth.
      </p>
    ),
    descriptionMobile: (
      <p>
        Acabamentos escurecidos e badges que destacam essa série especial:
        Limited Edition Powered by Abarth.
      </p>
    ),
    image: consumerTypeAssets.potenciaSlide003,
  },
];

export default consumerType;
