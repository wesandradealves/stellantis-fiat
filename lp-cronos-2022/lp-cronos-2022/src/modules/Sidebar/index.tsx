import { useRouter } from "next/router";
import Image from "next/image";
import { LinkMenu, Button } from "../../components";
import { dataLayer } from "../../libs/gtm";
import { getPath, slugify } from "../../utils";
import { SidebarProps, itemMenuProps } from "../../interfaces";
import { menuData } from "../../api";
import logo from "../../assets/logo.png";
import styles from "./styles.module.scss";

const Sidebar = ({
  swiperAbout,
  toggleSidebar,
  setToggleSidebar,
  setAccordionAbout,
  setShowModalForm,
}: SidebarProps) => {
  const router = useRouter();
  const path = router.query.slug;

  const handleChangeSection = (path: string) => {
    document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "fiat",
      segment: "landing-page",
      product: "cronos",
      elementCategory: "link",
      interactionType: "clique",
      pageSection: "header",
      pageSubsection: "menu",
      selectedValue: null,
      ...args,
    });
  };

  return (
    <div className={`${styles.sidebar} ${toggleSidebar && styles.open}`}>
      <div
        className={styles.overlay}
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        &nbsp;
      </div>
      <div className={styles.logo}>
        <Image src={logo} alt="Fiat Cronos" />
      </div>
      <ul className={styles.listMenu}>
        <li>
          <LinkMenu
            active={path === undefined}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Novo Fiat Cronos"),
              });
              handleChangeSection("destaques");
              setToggleSidebar(!toggleSidebar);
            }}
          >
            Novo Fiat Cronos
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={!!path?.includes("cambio-automatico")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("cambio-automatico"),
              });
              handleChangeSection("cambioAutomatico");
              setToggleSidebar(!toggleSidebar);
            }}
          >
            Câmbio automático
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={!!path?.includes("versao")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Versões"),
              });
              handleChangeSection("versao");
              setToggleSidebar(!toggleSidebar);
            }}
          >
            Versões
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={!!path?.includes("galeria")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("galeria"),
              });
              handleChangeSection("galeria");
              setToggleSidebar(!toggleSidebar);
            }}
          >
            Galeria
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={!!path?.includes("design")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Design"),
              });
              handleChangeSection("tudo-sobre");
              swiperAbout?.slideTo(0);
              setToggleSidebar(!toggleSidebar);
              // setAccordionAbout("design");
            }}
          >
            Design
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={!!path?.includes("tecnologia")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Tecnologia"),
              });
              handleChangeSection("tudo-sobre");
              swiperAbout?.slideTo(3);
              setToggleSidebar(!toggleSidebar);
              // setAccordionAbout("tecnologia");
            }}
          >
            Tecnologia
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={!!path?.includes("performance")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Performance"),
              });
              handleChangeSection("tudo-sobre");
              swiperAbout?.slideTo(6);
              setToggleSidebar(!toggleSidebar);
              // setAccordionAbout("performance");
            }}
          >
            Performance
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={!!path?.includes("seguranca")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Segurança"),
              });
              handleChangeSection("tudo-sobre");
              swiperAbout?.slideTo(9);
              setToggleSidebar(!toggleSidebar);
              // setAccordionAbout("seguranca");
            }}
          >
            Segurança
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={!!path?.includes("acessorios")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Acessórios"),
              });
              handleChangeSection("tudo-sobre");
              swiperAbout?.slideTo(12);
              setToggleSidebar(!toggleSidebar);
              // setAccordionAbout("acessorios");
            }}
          >
            Acessórios
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={!!path?.includes("servicos")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Pacote de Serviços"),
              });
              handleChangeSection("tudo-sobre");
              swiperAbout?.slideTo(17);
              setToggleSidebar(!toggleSidebar);
              // setAccordionAbout("servicos");
            }}
          >
            Pacote de Serviços
          </LinkMenu>
        </li>
      </ul>
      <ul className={styles.listMenu}>
        {menuData &&
          menuData.map((item: itemMenuProps, key: number) => (
            <li
              onClick={() => {
                handleDataLayer({
                  element: slugify(item.title),
                  elementCategory: "cta",
                });
                if (item.form) {
                  setShowModalForm(true);
                  setToggleSidebar(!toggleSidebar);
                }
              }}
              key={`sidebar-cta-${key}`}
            >
              <Button to={item.link} target="_blank">
                {item.title}
              </Button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
