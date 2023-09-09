import { useState } from "react";
import type { NextPage } from "next";
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
  const [swiperAbout, setSwiperAbout] = useState<any>();
  const [accordionAbout, setAccordionAbout] = useState<string>("");
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const [showModalForm, setShowModalForm] = useState<boolean>(false);
  const [aboutActive, setAboutActive] = useState<string[]>([]);

  // const mapSection: any = {
  //   destaques: "highlight",
  //   cambioAutomatico: "cambio-automatico",
  //   versao: "versao",
  //   galeria: "galeria",
  //   design: "tudo-sobre",
  //   tecnologia: "tudo-sobre",
  //   performance: "tudo-sobre",
  //   seguranca: "tudo-sobre",
  //   acessorios: "tudo-sobre",
  //   servicos: "tudo-sobre",
  // };

  // useEffect(() => {
  //   let pathname = getPathName();
  //   let section = mapSection[pathname[0]];
  //   // if (pathname[0].indexOf("agende") > -1) {
  //   //   setShowModalForm(true);
  //   // }
  //   if (section === "tudo-sobre") {
  //     setAboutActive(pathname);
  //   }
  //   handleChangeSection(section);
  // }, []);

  return (
    <>
      <Head>
        <title>Fiat Cronos</title>
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

export async function getStaticProps({params}: any) {
  return {
    props: {
      slug: params.slug || false
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: false} },
      { params: { slug: ['cambio-automatico']} },
      { params: { slug: ['versao', 'cronos-10']} },
      { params: { slug: ['versao', 'cronos-drive-10-mt']} },
      { params: { slug: ['versao', 'cronos-drive-13-mt']} },
      { params: { slug: ['versao', 'cronos-precision-13-at']} },
      { params: { slug: ['galeria']} },
      { params: { slug: ['galeria', 'elegante']} },
      { params: { slug: ['galeria', 'traseira']} },
      { params: { slug: ['galeria', 'frente']} },
      { params: { slug: ['galeria', 'interior']} },
      { params: { slug: ['galeria', 'lanterna']} },
      { params: { slug: ['galeria', 'painel']} },
      { params: { slug: ['galeria', 'multimidia']} },
      { params: { slug: ['galeria', 'conectividade']} },
      { params: { slug: ['design', 'design-esportivo']} },
      { params: { slug: ['design', 'rodas-liga-leve']} },
      { params: { slug: ['design', 'farois-led']} },
      { params: { slug: ['tecnologia', 'central-multimidia']} },
      { params: { slug: ['tecnologia', 'keyless-entry-n-go']} },
      { params: { slug: ['tecnologia', 'volante-multifuncional']} },
      { params: { slug: ['tecnologia', 'ar-condicionado-digital']} },
      { params: { slug: ['performance', 'novo-cambio-automatico-cvt']} },
      { params: { slug: ['performance', 'motor-firefly']} },
      { params: { slug: ['performance', 'direcao-eletrica-progressiva']} },
      { params: { slug: ['seguranca', 'hill-holder']} },
      { params: { slug: ['seguranca', 'camera-re']} },
      { params: { slug: ['seguranca', 'controle-tracao-estabilidade']} },
      { params: { slug: ['acessorios', 'engate-reboque']} },
      { params: { slug: ['acessorios', 'friso-lateral-pintado']} },
      { params: { slug: ['acessorios', 'tapete-porta-malas']} },
      { params: { slug: ['acessorios', 'tapete-borracha']} },
      { params: { slug: ['acessorios', 'farol-neblina']} },
      { params: { slug: ['servicos', 'cuidado-fiat-cronos-merece']} },
      { params: { slug: ['servicos', 'garantia-adicional-fiat']} },
      { params: { slug: ['servicos', 'revisoes-sob-medida']} },
    ],
    fallback: true
  };
}

export default Home;
