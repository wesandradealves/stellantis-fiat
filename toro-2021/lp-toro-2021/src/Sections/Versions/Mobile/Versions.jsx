import React, { useEffect, useState } from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
} from 'swiper';
import { SwiperSlide } from 'swiper/react';
import {
  BoxSection,
  Cards,
  Swiper,
  Infos,
  Model,
  Content,
  Car,
  ButtonSave,
} from './styles';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { GalleryMobile as GalleryComponent } from '../../../components';
import { Share as ShareBox } from '../../../components';
import * as images from '../../../assets';

SwiperCore.use([Navigation, Pagination, A11y]);

const Versions = ({ data, gallery }) => {
  const [scrollTop, setScrollTop] = useState();
  // const [onBlock, setOnBlock] = useState(false);
  const [afterBlock, setAfterBlock] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function toggleShareActive() {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };

    window.addEventListener('scroll', onScroll);

    const boxVersions =
      document.querySelector('#versions').offsetTop;
    const heightVersions =
      document.querySelector('#versions').offsetHeight;

    const checkAfterBlock =
      scrollTop > boxVersions + heightVersions - 650;

    // const checkOnBlock =
    //   scrollTop >= boxVersions + 10 && !checkAfterBlock;

    // setOnBlock(checkOnBlock);
    setAfterBlock(checkAfterBlock);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <>
      <Swiper
        id="versions"
        navigation
        loop
        pagination={{ clickable: true }}
        afterblock={afterBlock? 'true' : 'false'}
      >
        {data.map((item, index) => (
          <SwiperSlide id="printSlide" key={`versions-mobile-swiper-${index}`}>
            <Content
              id="testeVersions"
              key={item.id}
              width={item.presentation.width}
              bg={item.presentation.bg}
            >
              <span style={{ display: 'none' }} id="carName">
                {item.version}
              </span>
              <h5>
                TODAS AS VERSÕES <br />
                <span>DA FIAT TORO</span>
              </h5>

              <BoxSection>
                <div id="versionName">
                  <img src={images.Flag} alt="logo" />

                  <h3>FIAT TORO</h3>

                  <h1>{item.presentation.title}</h1>

                  <h2>{item.presentation.subtitle}</h2>
                </div>
                <ButtonSave>
                  <button
                    onClick={() => {
                      toggleShareActive();
                    }}
                  >
                    <img src={images.camera} alt="Download" />
                    <span>Salvar Foto</span>
                  </button>
                </ButtonSave>
              </BoxSection>
              <Car src={item.presentation.image} alt="image" />
            </Content>
            <Cards>
              {item.details.map((detail,index) => (
                <Infos key={`version-mobile-infos-${index}`}>
                  <img
                    src={detail.bg}
                    alt={`info-${detail.text}`}
                  />

                  <span id="teste">{detail.text}</span>
                </Infos>
              ))}
            </Cards>
            <ShareBox
              isVisible={isVisible}
              closeBox={toggleShareActive}
              href={item.presentation.download}
              download={item.version}
            />
            <Model>
              <h4>{item.version}</h4>
              <span>Em todos os ângulos</span>
            </Model>
            <GalleryComponent data={item.gallery} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Versions;
