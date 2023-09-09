import { Fragment, useCallback } from 'react';
import * as images from '../../../assets';
import { Colors } from '../../../styles';
import Button from '../../Button';
import { DataLayer } from '../../Track/DataLayer/DataLayer';
import styles from './Navigation.module.scss';
import {
  Actions,
  Container,
  // Hamburger,
  Link,
  Logo,
  Nav,
  SocialMedias,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  LogoText
} from './styles';

const Navigation = ({
  socialMedias,
  isOpen,
  menuList,
  menuActions,
  visible,
  handleVisible,
  handleTab,
}) => {
  const handleSection = useCallback(section => {
    if (section === 'galeriafotos') {
      // eslint-disable-next-line
      $([document.documentElement, document.body]).animate(
        {
          // eslint-disable-next-line
          scrollTop: $(
              '#conteudo-galeria.swiper-slide.swiper-slide-active .is-selected img',
            ).offset().top - 50,
        },
        0,
      );
    } else {
      const sectionElement =
        document.getElementById(section).offsetTop;
      window.scrollTo(0, sectionElement);
    }
  }, []);

  const handleSubmenu = useCallback((tab, submenuName) => {
    // console.log('tab', tab, submenuName);
    DataLayer.push('Menu_ClicouSubmenu', submenuName);
    handleSection('tudo-sobre-a-toro');
    handleTab({item:tab, direction:'first'});

    // handleTab(tab);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {/* <Hamburger onClick={handleVisible} isOpen={visible}>
        <span></span>
      </Hamburger> */}

      <Nav isOpen={visible}>
        <Logo src={images.FlagColorida} alt="logo-menu" />​
        <LogoText>
          <span>Fiat</span>
          <h3>Toro</h3>
        </LogoText>
        {menuList?.map(item => {
          return (
            <Fragment key={`menu-${item.id}`}>
              
              <Link
                isActive={item.name === isOpen.item}
                key={item.id}
                onClick={() => {
                  handleSection(item.link);
                  DataLayer.push('Menu_ClicouSubmenu', item.ref);
                }}
              >
                {item.name}
              </Link>
              {item.submenu && (
                <ul>
                  {item.submenu.map(sub => (
                      <li key={sub.id}>
                        <Link
                          onClick={() =>
                            handleSubmenu(sub.link, sub.ref)
                          }
                        >
                          {sub.name}
                        </Link>
                      </li>
                  ))}
                </ul>
              )}
            </Fragment>
          );
        })}
        ​
        <Actions>
          {menuActions?.map((item,index) => (
            <Button
              datalayer={'MenuDesktop_ClicouCTA'}
              datalayername={item.ref}
              color={Colors.default}
              width={197}
              height={40}
              fs={16}
              fw={600}
              hover
              key={`navigation-button-link-${index}`}
              to={`${item.link}${window.location?.search ?? ''}`}
              target={item.link !== '/#/agende'? '_blank': '_self'}
            >
              <span className={styles.container}>
                {!!item.icon && item.icon}
                {item.name}
              </span>
            </Button>
          ))}
        </Actions>
        <SocialMedias>
          {socialMedias?.map(item => {
            let icon;
            switch (item.name) {
              case 'facebook':
                icon = <Facebook />;
                break;

              case 'instagram':
                icon = <Instagram />;
                break;

              case 'twitter':
                icon = <Twitter />;
                break;

              case 'youtube':
                icon = <Youtube />;
                break;

              default:
                break;
            }

            return (
              <a
                key={`social-media-${item.id}`}
                onClick={() =>
                  DataLayer.push(
                    'Footer_ClicouSocial',
                    item.name,
                  )
                }
                href={item.link}
                target="blank"
              >
                {icon}
              </a>
            );
          })}
        </SocialMedias>
      </Nav>
      {/* <Overlay isOpen={visible} onClick={handleVisible} /> */}
    </Container>
  );
};

export default Navigation;
