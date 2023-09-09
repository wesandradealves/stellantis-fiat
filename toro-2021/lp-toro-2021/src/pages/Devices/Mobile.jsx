import React, { useEffect } from 'react';
import $ from 'jquery';
import Base from '../../Base';
import {
  TabsMobile,
  Stories,
  Cta,
  WhatsappBtn,
} from '../../components';

import DataStories from '../../mocks/DataStories';
import DataVersions from '../../mocks/DataVersions';
import DataDetails from '../../mocks/DataDetails';
import {
  VersionsMobile,
  SoundDesignMobile,
} from '../../Sections';
import DataSoundDesign from '../../mocks/DataSoundDesign';
import DataNewFeatures from "../../mocks/DataNewFeatures";
import NewFeaturesMobile from "../../Sections/NewFeatures/mobile/NewFeaturesMobile";

const HomeMobile = () => {
  useEffect(() => {
    let __url = window.location.href;
    let link = __url.indexOf('#/#versions') > -1;
    if (link) {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $('#versions').offset().top,
        },
        500,
      );
      $('body').scrollTo(500);
    } else {
      console.log('');
    }
  }, []);

  return (
    <>
      <Base>
        <Stories stories={DataStories} />
        {/* <DesignSound/> */}
        <SoundDesignMobile data={DataSoundDesign} />
        {/*<Awards/>*/}
        {/*<ServicesMobile data={DataServices}/>*/}
        <VersionsMobile data={DataVersions} />
        <NewFeaturesMobile data={DataNewFeatures} />
        <TabsMobile data={DataDetails} />
        <WhatsappBtn />
        <Cta />
      </Base>
    </>
  );
};

export default HomeMobile;
