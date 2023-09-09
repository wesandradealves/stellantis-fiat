/* eslint-disable no-undef */
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import AccordionItem from './AccordionItem';
import {
  BoxSection,
  Container,
  Swiper,
  Design,
  Infos,
  TitleBox,
  Background,
} from './styles';
import { DataLayer } from '../Track/DataLayer/DataLayer';

SwiperCore.use([Navigation, Pagination, A11y]);

const Accordion = ({ data, color, children }) => {
  // const [itemOpen, setItemOpen] = useState(null);

  // const toggleItemOpen = brand => {
  //   setItemOpen(itemOpen === brand ? null : brand);
  // };

  return (
    <Container color={color} id="tudo-sobre-a-toro">
      {children}
      <TitleBox>
        <h1>Tem Tudo que você precisa para uma nova aventura</h1>
      </TitleBox>

      {data.map(item => (
        <AccordionItem
          title={item.brand}
          key={`accordion-${item.brand}`}
          isActive={itemOpen === item.brand}
          handleOnClick={() => {
            DataLayer.push(
              'TudoDoRenegade_ClicouFeature',
              item.brand
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLocaleLowerCase(),
            );
          }}
        >
          <Swiper
            navigation
            pagination={{ clickable: true }}
            onSlideNextTransitionEnd={e =>
              DataLayer.push(
                'Conteudo_ClicouNextAllCompass',
                item.brand
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLocaleLowerCase(),
                item.data[e.activeIndex - 1].title
                  .replace(/\s/g, '-')
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLocaleLowerCase(),
              )
            }
            onSlidePrevTransitionEnd={e =>
              DataLayer.push(
                'Conteudo_ClicouPrevAllCompass',
                item.brand
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLocaleLowerCase(),
                item.data[e.activeIndex + 1].title
                  .replace(/\s/g, '-')
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLocaleLowerCase(),
              )
            }
            // prettier-ignore
            onSlideChange={(parameter) => {
      let iLast = 1;
      const isopen = $('img[alt="logo-menu"]').parent().first().css( "left" ) === "0px";
        // prettier-ignore
      // eslint-disable-next-line func-names
      $($(".swiper-container")[3]).find($('.swiper-wrapper')).find(".swiper-slide").each(function(index ) {
      if ($(this).hasClass("swiper-slide-active")){
        const elementSwipper = $($(".swiper-container")[3]).find($('.swiper-wrapper'))
        let dest = ''
        if (!isopen){
          dest =  - (window.screen.width * iLast) + (220*iLast)
        }
        // prettier-ignore
        /* eslint-disable */
        elementSwipper.css('transform', 'translateX(' + dest + 'px)'); // eslint-disable-line;
      }
      iLast++;
      });
    }}
          >
            {item.data.map((content,index) => (
              <SwiperSlide key={`accordion-swiper-title-${content.title}-${index}`}>
                <BoxSection>
                  <Background />
                  <Design alt="Desing">
                    <img src={content.image} alt="Design" />
                  </Design>
                  <Infos>
                    <h2>{content.title}</h2>
                    <p>{content.description}</p>
                    <p>{content.description2}</p>
                  </Infos>
                </BoxSection>
              </SwiperSlide>
            ))}
          </Swiper>
        </AccordionItem>
      ))}
    </Container>
  );
};

export default Accordion;
