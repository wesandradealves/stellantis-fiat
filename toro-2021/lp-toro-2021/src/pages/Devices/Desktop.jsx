/* eslint-disable no-undef */
import { useCallback, useEffect, useState } from 'react';
import {
  FooterDesktop,
  NavigationDesktop,
  Tabs,
  WhatsappBtn,
} from '../../components';
import MenuActionsDesktop from '../../components/Navigation/Desktop/MenuActions';
import MenuListDesktop from '../../components/Navigation/Desktop/MenuList';
import DataAventures from '../../mocks/DataAventures';
import DataFooterDesktop from '../../mocks/DataFooterDesktop';
import DataHero from '../../mocks/DataHero';
import DataSoundDesign from '../../mocks/DataSoundDesign';
import DataNewFeatures from '../../mocks/DataNewFeatures';
import DataVersions from '../../Sections/Versions/Desktop/DataVersions';
import {
  Hero,
  VersionsDesktop,
  SoundDesignDesktop,
} from '../../Sections';
import { ContainerDesktop } from '../../Base/styles';
import NewFeaturesDesktop from "../../Sections/NewFeatures/destkop";

const HomeDesktop = () => {
  const [isOpenTabs, setIsOpenTabs] = useState({
    item: '',
    direction: 'first',
  });
  const [openMenu, setOpenMenu] = useState(true);

  const handleMenu = useCallback(() => {
    setOpenMenu(!openMenu);
    const MenuSize = 220;

    let iFirst = 0;
    // prettier-ignore
    // eslint-disable-next-line func-names
    $($(".swiper-container")[0]).find($('.swiper-wrapper')).find(".swiper-slide").each(function (index) {
      if ($(this).hasClass("swiper-slide-active")) {
        const elementSwipper = $($(".swiper-container")[0]).find($('.swiper-wrapper'))
        let dest = '';
        if (!openMenu) {
          dest = -(-parseInt($($($(".swiper-slide-active")[0]).find("img")[0]).css("width"))) * iFirst - MenuSize * iFirst;
        } else {
          dest = -(-parseInt($($($(".swiper-slide-active")[0]).find("img")[0]).css("width"))) * iFirst + MenuSize * iFirst;
        }

        // prettier-ignore
        /* eslint-disable */
        elementSwipper.css('transform', 'translateX(' + -dest + 'px)'); // eslint-disable-line;
      }
      iFirst++;
    });
    let iSecond = 0;
    // prettier-ignore
    // eslint-disable-next-line func-names
    $($(".swiper-container")[2]).find($('.swiper-wrapper')).find(".swiper-slide").each(function (index) {
      if ($(this).hasClass("swiper-slide-active")) {
        const elementSwipper = $($(".swiper-container")[2]).find($('.swiper-wrapper'))
        let dest = '';
        if (!openMenu) {
          dest = -(-parseInt($($(".swiper-slide-active")[2]).css("width"))) * iSecond - MenuSize * iSecond;
        } else {
          dest = -(-parseInt($($(".swiper-slide-active")[2]).css("width"))) * iSecond + MenuSize * iSecond;
        }


        // prettier-ignore
        /* eslint-disable */
        elementSwipper.css('transform', 'translateX(' + -dest + 'px)'); // eslint-disable-line;
      }
      iSecond++;
    });
    let iLast = 0;
    // prettier-ignore
    // eslint-disable-next-line func-names
    $($(".swiper-container")[3]).find($('.swiper-wrapper')).find(".swiper-slide").each(function (index) {
      if ($(this).hasClass("swiper-slide-active")) {
        const elementSwipper = $($(".swiper-container")[3]).find($('.swiper-wrapper'))
        let dest = '';
        if (!openMenu) {
          dest = -(-parseInt($($(".swiper-slide-active")[3]).css("width"))) * iLast - MenuSize * iLast;
        } else {
          dest = -(-parseInt($($(".swiper-slide-active")[3]).css("width"))) * iLast + MenuSize * iLast;
        }


        // prettier-ignore
        /* eslint-disable */
        elementSwipper.css('transform', 'translateX(' + -dest + 'px)'); // eslint-disable-line;
      }
      iLast++;
    });
    if (!openMenu) {
      DataLayer.push('MenuDesktop_ClicouAbrir');
    } else {
      DataLayer.push('MenuDesktop_ClicouFechar');
    }
  }, [openMenu]);

  const onTabs = useCallback(values => {
    setIsOpenTabs({ ...values, direction: values.direction });
    console.log(isOpenTabs);
  }, []);

  useEffect(() => {
    let __url = window.location.href;
    let link = __url.indexOf('#/#versions') > -1;

    if (link) {
      $('html, body').animate(
        {
          scrollTop: $('#versions').offset().top,
        },
        500,
      );
    } else {
      // console.log('');
    }
    // console.log(isOpenTabs.direction, '<<<');

    if (isOpenTabs.direction === 'first') {
      setIsOpenTabs({
        item: DataAventures[0].brand,
        direction: 'first',
      });
    } else if (isOpenTabs.direction === 'last') {
      setIsOpenTabs({
        item: DataAventures[DataAventures.length - 1].brand,
        direction: 'last',
      });
    }
    // setIsOpenTabs(DataAventures[0].brand);
  }, []);

  return (
    <>
      <NavigationDesktop
        menuActions={MenuActionsDesktop}
        menuList={MenuListDesktop}
        visible={openMenu}
        handleVisible={handleMenu}
        handleTab={onTabs}
        isOpen={isOpenTabs}
        socialMedias={DataFooterDesktop}
      />

      <ContainerDesktop open={openMenu}>
        <Hero
          data={DataHero}
          visible={openMenu}
          open={openMenu}
        />
        {/* <SecondFold /> */}
        {/* <DesignSound /> */}
        <SoundDesignDesktop data={DataSoundDesign} />
        {/*<Awards/>*/}
        {/*<ServicesDesktop*/}
        {/*    data={DataServicesDesktop}*/}
        {/*    imagesSlide={imagesSlide}*/}
        {/*    open={openMenu}*/}
        {/*/>*/}

        <VersionsDesktop data={DataVersions} open={openMenu} />
        <NewFeaturesDesktop data={DataNewFeatures} />
        <Tabs
          id="tudo-sobre-a-toro"
          data={DataAventures}
          isOpen={isOpenTabs}
          handleTab={onTabs}
          open={openMenu}
        />
        <WhatsappBtn />
      </ContainerDesktop>
      <FooterDesktop socialMedias={DataFooterDesktop} />
    </>
  );
};

export default HomeDesktop;
