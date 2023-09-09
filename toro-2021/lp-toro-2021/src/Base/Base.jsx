import React, { useEffect, useState } from 'react';
import { FooterMobile, NavigationMobile } from '../components';
import MenuActions from '../mocks/DataMenuActions';
import MenuList from '../mocks/DataMenuList';
import SocialMedias from '../mocks/DataSocialMedias';

import { Container } from './styles';

const Base = ({ children }) => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener('resize', onResize);
  }, []);

  return (
    <>
      {size < 768 && (
        <>
          <NavigationMobile
            menuActions={MenuActions}
            menuList={MenuList}
            socialMedias={SocialMedias}
          />

          <Container>{children}</Container>

          <FooterMobile />
        </>
      )}
    </>
  );
};

export default Base;
