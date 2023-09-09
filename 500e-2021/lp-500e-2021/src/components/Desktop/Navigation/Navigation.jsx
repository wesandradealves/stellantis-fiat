import React from 'react';
import * as images from '../../../assets';

import {
  Container,
  Logo,
  Nav,
  LogoText,
  Actions,
  Arrow,
  Link,
  ReactAnchor,
} from './styles';
import Button from '../../Button';
import { Colors } from '../../../styles';
import {
  cliqueCTA_DataLayer,
  cliqueAnchorLinks_DataLayer,
} from '../../../tracks';

const Navigation = ({ data, handleTab }) => {
  const handleSubmenu = tab => {
    handleTab(tab);
  };

  return (
    <Container>
      <Nav>
        <LogoText>
          <Logo src={images.FlagColorida} alt="logo-menu" />​
          <span>Fiat 500e</span>
        </LogoText>
        {data.map(menu => {
          if (menu.idDesktop) {
            return (
              <>
                <ReactAnchor
                  onClick={() => {
                    cliqueAnchorLinks_DataLayer(menu.name);
                  }}
                  href={menu.link}
                >
                  <Link key={menu.idDesktop}>
                    <Arrow />
                    {menu.name}
                  </Link>
                </ReactAnchor>
                {menu.submenu && (
                  <ul>
                    {menu.submenu.map(sub => (
                      <>
                        <li key={sub.idSubmenuDesktop}>
                          <ReactAnchor
                            href={sub.linkSubmenuDesktop}
                          >
                            <Link
                              className="submenu"
                              onClick={() => {
                                handleSubmenu(
                                  sub.idSubmenuDesktop,
                                );
                                cliqueAnchorLinks_DataLayer(
                                  sub.SubMenuName,
                                );
                              }}
                            >
                              {sub.SubMenuName}
                            </Link>
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
          {data.map(action => {
            if (action.idAction) {
              return (
                <Button
                  onClick={() =>
                    cliqueCTA_DataLayer(
                      action.actionNameDesktop,
                      'menu',
                    )
                  }
                  key={action.idAction}
                  to={action.linkActionDesktop}
                  bg={Colors.blue100}
                  br={4}
                  pd={15}
                  color={Colors.white}
                  jc={'center'}
                  mt={'4'}
                  fs={'16'}
                  width={'235'}
                  height={'46'}
                  target="_blank"
                >
                  {action.icon ? (
                    <img
                      alt="whatsapp"
                      src={action.icon}
                    />
                  ) : (
                    ''
                  )}
                  {action.actionNameDesktop}
                </Button>
              );
            } else {
              return null;
            }
          })}
        </Actions>
      </Nav>
    </Container>
  );
};

export default Navigation;
