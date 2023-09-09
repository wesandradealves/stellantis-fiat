import React, { useCallback, useEffect, useState } from 'react';
import {
  NavigationDesktop,
  Tabs,
  Calculadora,
  WhatsappBtn,
} from '../../components';
import MenuList from '../../mocks/DataMenuList';
import DataAventures from '../../mocks/DataAventures';
import { ContainerDesktop } from '../../Base/styles';
import {
  FirstFold,
  SecondFold,
  ThirdFold,
  FifthFold,
  FooterDesktop,
} from '../../Sections';
import DataGallery from '../../mocks/DataGallery';
import DataFirstFold from '../../mocks/DataFirstFold';
import DataServices from '../../mocks/DataServices';
import DataFooter from '../../mocks/DataSocialMedias';

const HomeDesktop = () => {
  const [isOpenTabs, setIsOpenTabs] = useState();

  const onTabs = useCallback(id => {
    setIsOpenTabs(id);
  }, []);

  useEffect(() => {
    setIsOpenTabs(DataAventures[0].id);
  }, []);

  return (
    <>
      <NavigationDesktop data={MenuList} handleTab={onTabs} />

      <ContainerDesktop>
        <FirstFold data={DataFirstFold} />
        <SecondFold />
        <ThirdFold data={DataServices} />
        <Calculadora />
        <FifthFold data={DataGallery} />
        <Tabs
          data={DataAventures}
          isOpen={isOpenTabs}
          handleTab={onTabs}
        />
        <FooterDesktop socialMedias={DataFooter} />
        <WhatsappBtn />
      </ContainerDesktop>
    </>
  );
};

export default HomeDesktop;
