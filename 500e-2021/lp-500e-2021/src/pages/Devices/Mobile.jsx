import React, { useState } from 'react';
import Base from '../../Base';
import {
  Accordion,
  NavigationMobile,
  Calculadora,
  WhatsappBtn,
} from '../../components';
import {
  ServicesMobile,
  AboutMobile,
  GalleryMobile,
  FirstFoldMobile,
  Cta,
} from '../../Sections';
import DataFirstFold from '../../mocks/DataFirstFold';
import DataServices from '../../mocks/DataServices';
import DataGallery from '../../mocks/DataGallery';
import DataAccordion from '../../mocks/DataAccordion';
import SocialMedias from '../../mocks/DataSocialMedias';
import MenuList from '../../mocks/DataMenuList';

const HomeMobile = () => {
  const [itemOpen, setItemOpen] = useState(0);
  const [activeIndex, setActiveIndex] = useState();
  const [recentActive, setRecentActive] = useState(0);

  const toggleItemOpen = async id => {
    await setRecentActive(id);
    setItemOpen(itemOpen === id ? null : id);
    setActiveIndex(DataAccordion[id - 1]?.data);
  };

  async function changeIsOpen(recentActive) {
    setItemOpen(itemOpen + 1);
    await setRecentActive(recentActive);
    setActiveIndex(DataAccordion[recentActive - 1]?.data);
  }

  return (
    <>
      <Base id="mobile">
        <NavigationMobile
          menuList={MenuList}
          socialMedias={SocialMedias}
          isOpen={itemOpen}
          toggle={toggleItemOpen}
        />
        <FirstFoldMobile data={DataFirstFold} />
        <AboutMobile />
        <ServicesMobile data={DataServices} />
        <Calculadora />
        <GalleryMobile data={DataGallery} />
        <Accordion
          recentActive={recentActive}
          activeIndex={activeIndex}
          changeIsOpen={changeIsOpen}
          isOpen={itemOpen}
          toggle={toggleItemOpen}
          data={DataAccordion}
        />
        <Cta />
        <WhatsappBtn />
      </Base>
    </>
  );
};

export default HomeMobile;
