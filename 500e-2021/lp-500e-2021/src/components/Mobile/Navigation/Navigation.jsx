import React, { useCallback, useState } from 'react';
import { Colors } from '../../../styles';
import Button from '../../Button';
import * as images from '../../../assets';
import {
  Actions,
  Container,
  Hamburger,
  Link,
  LinkSubmenu,
  Nav,
  Brand,
  Arrow,
  ReactAnchor,
} from './styles';
import {
  cliqueHandleMenu_DataLayer,
  cliqueAnchorLinks_DataLayer,
  cliqueCTA_DataLayer,
} from '../../../tracks';

const Navigation = ({ menuList, toggle }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleSubmenu = tab => {
    toggle(tab);
  };

  const handleMenu = useCallback(() => {
    setOpenMenu(!openMenu);
    if (!openMenu) {
      cliqueHandleMenu_DataLayer('abre');
    } else {
      cliqueHandleMenu_DataLayer('fecha');
    }
  }, [openMenu]);

  return (
    <Container isOpen={openMenu} id="inicio">
      <Hamburger onClick={handleMenu} isOpen={openMenu}>
        <span></span>
      </Hamburger>
      <Brand isOpen={openMenu}>
        <img src={images.Flag} alt="Brand" />
        <span>FIAT 500e</span>
      </Brand>
      <Nav isOpen={openMenu}>
        {menuList.map(menu => {
          if (menu.idMobile) {
            return (
              <>
                <ReactAnchor
                  href={menu.linkMobile}
                  onClick={() => {
                    setOpenMenu(false);
                    cliqueAnchorLinks_DataLayer(menu.name);
                  }}
                >
                  <Link>
                    <Arrow href="#" />
                    {menu.name}
                  </Link>
                </ReactAnchor>
                {menu.submenu && (
                  <ul>
                    {menu.submenu.map(sub => (
                      <>
                        <li key={sub.idSubmenuDesktop}>
                          <ReactAnchor
                            href={sub.linkSubmenuMobile}
                            onClick={() => setOpenMenu(false)}
                          >
                            <LinkSubmenu
                              className="submenu"
                              onClick={() => {
                                handleSubmenu(
                                  sub.idSubmenuMobile,
                                );
                                cliqueAnchorLinks_DataLayer(
                                  sub.SubMenuName,
                                );
                              }}
                            >
                              {sub.SubMenuName}
                            </LinkSubmenu>
                          </ReactAnchor>
                        </li>
                      </>
                    ))}
                  </ul>
                )}
              </>
            );
          } else {
            return null;
          }
        })}
        <Actions>
          {menuList?.map(item =>
            item.idActionMobile ? (
              <>
                <Button
                  onClick={() =>
                    cliqueCTA_DataLayer(
                      item.actionNameMobile,
                      'menu',
                    )
                  }
                  key={item.idActionMobile}
                  to={item.linkActionMobile}
                  bg={Colors.blue100}
                  br={4}
                  pd={15}
                  color={Colors.beige100}
                  target={
                    item.linkActionMobile !== '/#/agende' &&
                    '_blank'
                  }
                >
                  {item.icon ? (
                    <img alt="whatsapp" src={item.icon} />
                  ) : (
                    ''
                  )}
                  {item.actionNameMobile}
                </Button>
              </>
            ) : null,
          )}
        </Actions>
      </Nav>
    </Container>
  );
};

export default Navigation;
