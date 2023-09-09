import { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  Sidebar,
  Highlight,
  BuyYours,
  Gallery,
  Versions,
  About,
  Footer
} from "../modules";
import { Lgpd } from "../components";
import styles from "../styles/Home.module.scss";
import WhatsappBtn from "../components/WhatsappBtn";

const Home: NextPage = () => {
  const router = useRouter();

  const [swiperAbout, setSwiperAbout] = useState<any>();
  const [accordionAbout, setAccordionAbout] = useState<string>("");
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const [showModalForm, setShowModalForm] = useState<boolean>(false);
  const [aboutActive, setAboutActive] = useState<string[]>([]);

  // const mapSection: any = {
  //   destaques: "highlight",
  //   compre: "compre",
  //   versao: "versao",
  //   galeria: "galeria",
  //   design: "sobre",
  //   tecnologia: "sobre",
  //   performance: "sobre",
  //   seguranca: "sobre",
  //   acessorios: "sobre",
  //   servicos: "sobre",
  // };

  // useEffect(() => {
  //   console.log(router.asPath);

    // if(router.asPath != '/'){
    //   let section = "sobre";
      
    //   if (router.asPath.includes("/sobre/")) {
    //     let path = router.asPath.split("/sobre/");
    //     path = path[1].split("-");
    //     const category = path[0];
    //     path = path.slice(1);
    //     const stringPath = path.join("-");
    //     path = stringPath.split("/");
    //     setAboutActive([category, path[0]]);
    //   } else {
    //     const pathname = getPathName();
    //     section = mapSection[pathname[0]];
    //     if (section === "sobre") {
    //       setAboutActive(pathname);
    //     }
    //   }
    //   handleChangeSection(section);
    // }
  // }, []);

  return (
    <>
      <Head>
        <title>Fiat Argo</title>
      </Head>
      <div className={styles.wrapperMain}>
        <Sidebar
          swiperAbout={swiperAbout}
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
          setAccordionAbout={setAccordionAbout}
          setShowModalForm={setShowModalForm}
        />
        <div className={styles.containerSection}>
          <Highlight
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
          />
          <BuyYours
            showModalForm={showModalForm}
            setShowModalForm={setShowModalForm}
          />
          <Versions />
          <Gallery />
          <About
            setSwiperAbout={setSwiperAbout}
            accordionAbout={accordionAbout}
            setShowModalForm={setShowModalForm}
            aboutActive={aboutActive}
          />
          <Footer />
          <WhatsappBtn/>
          <Lgpd />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ params }: any) {
  return {
    props: {
      slug: params.slug || false,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: false } },
      { params: { slug: ["compre-seu"] } },
      // { params: { slug: ["agende"] } },
      { params: { slug: ["versao", "argo-10"] } },
      { params: { slug: ["versao", "drive-10-flex"] } },
      { params: { slug: ["versao", "trekking-13-mt"] } },
      { params: { slug: ["versao", "drive-13-at"] } },
      { params: { slug: ["versao", "trekking-13-at"] } },
      { params: { slug: ["galeria"] } },
      { params: { slug: ["galeria", "lanterna"] } },
      { params: { slug: ["galeria", "personalidade"] } },
      { params: { slug: ["galeria", "instrumentos"] } },
      { params: { slug: ["galeria", "banco"] } },
      { params: { slug: ["galeria", "traseira"] } },
      { params: { slug: ["galeria", "motor"] } },
      { params: { slug: ["galeria", "porta-malas"] } },
      { params: { slug: ["galeria", "painel"] } },
      { params: { slug: ["design", "personalidade-argo"] } },
      { params: { slug: ["design", "acabamento-design-interno"] } },
      { params: { slug: ["design", "conjunto-luzes"] } },
      { params: { slug: ["design", "pintura-bicolor"] } },
      { params: { slug: ["tecnologia", "central-multimidia"] } },
      { params: { slug: ["tecnologia", "volante-multifuncional"] } },
      { params: { slug: ["tecnologia", "ac-digital"] } },
      { params: { slug: ["tecnologia", "keyless-entry-n-go"] } },
      // { params: { slug: ["performance", "novo-cambio-automatico-cvt"] } },
      { params: { slug: ["performance", "motor-firefly-10"] } },
      { params: { slug: ["performance", "motor-firefly-13"] } },
      { params: { slug: ["performance", "direcao-eletrica-progressiva"] } },
      { params: { slug: ["seguranca", "controle-tracao-estabilidade"] } },
      { params: { slug: ["seguranca", "hill-holder"] } },
      // { params: { slug: ["seguranca", "sensor-pressao-pneus"] } },
      { params: { slug: ["acessorios", "friso-lateral-pintado"] } },
      { params: { slug: ["acessorios", "tapete-porta-malas"] } },
      { params: { slug: ["acessorios", "farol-neblina"] } },
      { params: { slug: ["acessorios", "engate-reboque"] } },
      { params: { slug: ["acessorios", "adesivo-plotado-no-teto"] } },
      // { params: { slug: ["acessorios", "iluminacao-interna"] } },
      { params: { slug: ["servicos", "cuidado-fiat-argo-merece"] } },
      { params: { slug: ["servicos", "garantia-adicional-fiat"] } },
      { params: { slug: ["servicos", "revisoes-sob-medida"] } },
      { params: { slug: ["sobre", "design-personalidade-argo"] } },
      { params: { slug: ["sobre", "design-acabamento-design-interno"] } },
      { params: { slug: ["sobre", "design-conjunto-luzes"] } },
      { params: { slug: ["sobre", "design-pintura-bicolor"] } },
      { params: { slug: ["sobre", "tecnologia-central-multimidia"] } },
      { params: { slug: ["sobre", "tecnologia-volante-multifuncional"] } },
      { params: { slug: ["sobre", "tecnologia-keyless-entry-n-go"] } },
      { params: { slug: ["sobre", "performance-motor-firefly-10"] } },
      { params: { slug: ["sobre", "performance-motor-firefly-13"] } },
      {
        params: { slug: ["sobre", "performance-direcao-eletrica-progressiva"] },
      },
      { params: { slug: ["sobre", "seguranca-controle-tracao-estabilidade"] } },
      { params: { slug: ["sobre", "seguranca-hill-holder"] } },
      { params: { slug: ["sobre", "seguranca-camera-re"] } },
      // { params: { slug: ["sobre", "seguranca-sensor-pressao-pneus"] } },
      { params: { slug: ["sobre", "acessorios-friso-lateral-pintado"] } },
      { params: { slug: ["sobre", "acessorios-tapete-porta-malas"] } },
      { params: { slug: ["sobre", "acessorios-farol-neblina"] } },
      { params: { slug: ["sobre", "acessorios-engate-reboque"] } },
      { params: { slug: ["sobre", "acessorios-adesivo-plotado-teto"] } },
      // { params: { slug: ["sobre", "acessorios-iluminacao-interna"] } },
      { params: { slug: ["sobre", "servicos-cuidado-fiat-argo-merece"] } },
      { params: { slug: ["sobre", "servicos-garantia-adicional-fiat"] } },
      { params: { slug: ["sobre", "servicos-revisoes-sob-medida"] } },
    ],
    fallback: true,
  };
}

export default Home;
