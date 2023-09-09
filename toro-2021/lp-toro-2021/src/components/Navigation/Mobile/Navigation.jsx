import React, { useCallback, useEffect, useState } from 'react';
import { DataLayer } from '../../Track/DataLayer/DataLayer';
import * as images from '../../../assets';
import { Colors } from '../../../styles';
import Button from '../../Button';
import Flickity from 'flickity';
import styles from './Navigation.mbl.module.scss';

import {
  Actions,
  Container,
  Hamburger,
  Link,
  SubMenuLink,
  Nav,
  BrandContainer,
  Placeholder,
} from './styles';
import $ from 'jquery';

const Navigation = ({ menuList, menuActions }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = useCallback(() => {
    setOpenMenu(!openMenu);
    if (!openMenu) {
      DataLayer.push('Menu_ClicouAbrir');
    } else {
      DataLayer.push('Menu_ClicouFechar');
    }
  }, [openMenu]);
  const handleSection = useCallback(section => {
    setOpenMenu(false);

    let firstChar = section.slice(0, 1);
    if (firstChar === '#') {
      section = section.substring(1);
    }

    if (
      section === 'design' ||
      section === 'interior' ||
      section === 'tecnologia' ||
      section === 'seguranca' ||
      section === 'Acessórios' ||
      section === 'Pacotes de serviços' ||
      section === 'performance'
    ) {
      section = 'tudo-sobre-a-toro';
    }

    if (section === 'tudo-sobre-a-toro') {
      // eslint-disable-next-line
      $([document.documentElement, document.body]).animate(
        {
          // eslint-disable-next-line
          scrollTop: $('#tudo-sobre-a-toro').offset().top - 50,
        },
        0,
      );
    } else if (section === 'galeria') {
      // eslint-disable-next-line
      $([document.documentElement, document.body]).animate(
        {
          // eslint-disable-next-line
          scrollTop:
            $('.swiper-slide.swiper-slide-active h4').offset()
              .top - 50,
        },
        0,
      );
    } else {
      const sectionElement =
        document.getElementById(section).offsetTop;
      window.scrollTo(0, sectionElement);
    }
  }, []);

  const handleSubmenu = useCallback(submenuName => {
    DataLayer.push('Menu_ClicouSubmenu', submenuName);

    let itemMenu = 0;

    if (submenuName === '#design') {
      itemMenu = 0;
    }

    if (submenuName === '#interior') {
      itemMenu = 1;
    }

    if (submenuName === '#performance') {
      itemMenu = 2;
    }

    if (submenuName === '#tecnologia') {
      itemMenu = 3;
    }

    if (submenuName === '#seguranca') {
      itemMenu = 4;
    }

    if (submenuName === '#Acessórios') {
      itemMenu = 5;
    }

    if (submenuName === '#Pacotes de serviços') {
      itemMenu = 6;
    }

    var flkty = new Flickity('.carousel');
    flkty.next();
    flkty.select(itemMenu);

    var flktyMain = new Flickity('.carousel-main');
    flktyMain.next();
    flktyMain.select(itemMenu);

    //handleSection('tudo-sobre-a-toro');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [openMenu]);

  return (
    <Container id="inicio">
      <Hamburger onClick={handleMenu} isOpen={openMenu}>
        <span></span>
      </Hamburger>
      <BrandContainer>
        <img src={images.Flag} alt="Brand" />
        <span onClick={() => handleSection('inicio')}>
          FIAT TORO
        </span>
      </BrandContainer>
      <Placeholder />
      <Nav isOpen={openMenu}>
        {menuList?.map(item =>
          item.menu ? (
            <Link
              key={`link-${item.id}`}
              onClick={() => {
                handleSection(item.link, item.ref);
                DataLayer.push('Menu_ClicouSubmenu', item.ref);
                handleSubmenu(item.link, item.ref);
              }}
              to={item.link}
            >
              {item.name}
            </Link>
          ) : (
            <SubMenuLink
              key={item.id}
              onClick={() => {
                handleSection(item.link, item.ref);
                DataLayer.push('Menu_ClicouSubmenu', item.ref);
                handleSubmenu(item.link, item.ref);
              }}
              to={item.link}
            >
              {item.name}
            </SubMenuLink>
          ),
        )}
        <Actions>
          {menuActions?.map(item => (
              <Button
                datalayer={'Menu_ClicouCTA'}
                datalayername={item.ref}
                key={`menu-action-${item.id}`}
                to={`${item.link}${window.location?.search ?? ''}`}
                bg={Colors.primary}
                br={4}
                pd={15}
                color={Colors.white}
                jc={'space-between'}
                target={item.link !== '/#/agende' ? '_blank': '_self'}
              >
                {item.icon ? (
                  <img
                    className={styles.WhatsIcon}
                    src={item.icon}
                    alt="whatsapp-icon"
                  />
                ) : (
                  ''
                )}
                {item.name}
              </Button>
          ))}
        </Actions>
      </Nav>
    </Container>
  );
};

export default Navigation;
