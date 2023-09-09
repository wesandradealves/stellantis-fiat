import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import { LinkMenu, Button } from "../../components";
import { dataLayer } from "../../libs/gtm";
import { getPath, slugify, handleChangeSection } from "../../utils";
import { SidebarProps, itemMenuProps } from "../../interfaces";
import { menuData } from "../../api";
import logoArgo from "../../assets/logo.png";
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

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "fiat",
      segment: "landing-page",
      product: "argo",
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
        <img src={logoArgo.src} alt="Fiat Argo" />
      </div>
      <ul className={styles.listMenu}>
        <li>
          <LinkMenu
            active={path === undefined}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Novo Fiat Argo"),
              });
              handleChangeSection("destaques");
              setToggleSidebar(!toggleSidebar);
            }}
          >
            Novo Fiat Argo
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={!!path?.includes("compre-seu")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Compre o seu"),
              });
              handleChangeSection("compre");
              setToggleSidebar(!toggleSidebar);
            }}
          >
            Compre o seu
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={!!path?.includes("versao")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Todas as versões"),
              });
              handleChangeSection("versao");
              setToggleSidebar(!toggleSidebar);
            }}
          >
            Todas as versões
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
              handleChangeSection("sobre");
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
              handleChangeSection("sobre");
              swiperAbout?.slideTo(4);
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
              handleChangeSection("sobre");
              swiperAbout?.slideTo(7);
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
              handleChangeSection("sobre");
              swiperAbout?.slideTo(10);
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
              handleChangeSection("sobre");
              swiperAbout?.slideTo(14);
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
                element: slugify("Serviços"),
              });
              handleChangeSection("sobre");
              swiperAbout?.slideTo(20);
              setToggleSidebar(!toggleSidebar);
              // setAccordionAbout("servicos");
            }}
          >
            Serviços
          </LinkMenu>
        </li>
      </ul>
      <ul className={styles.listMenu} style={{ width: "100%" }}>
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
