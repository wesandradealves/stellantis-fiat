import React from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
} from 'swiper';
import {SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import $ from 'jquery';
import {DataLayer} from '../../components/Track/DataLayer/DataLayer';

import * as images from '../../assets';
import {
  Swiper,
  Image,
  Brand,
  Toro,
  New,
  Flag,
  FlagColors,
  Video, HeroDescription, HeroConnect, FlagGreen,
} from './styles';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function Hero({data, open}) {
  let swipeIndex = 1;

  const cardClick = cardClicked => {
    $(
        `#toro-2022 span[aria-label="Go to slide ${cardClicked}"]`,
    ).click(e => {
      let elementoSel = window
          .getComputedStyle(
              document.querySelector(
                  `#toro-2022 span[aria-label="Go to slide ${cardClicked}"]`,
              ),
              '::after',
          )
          .content.replace(/[^\w\s!?]/g, '')
          .replace(/\s/g, '-')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase();
      DataLayer.push('MainPage_ClicouCard', `${elementoSel}`);
      swipeIndex = cardClicked;
    });
  };
  cardClick(2);
  cardClick(3);
  cardClick(4);
  cardClick(5);
  cardClick(6);

  $(`#toro-2022 div.swiper-button-next`).click(e => {
    if (swipeIndex === 6) {
      swipeIndex = 1;
    } else {
      swipeIndex = swipeIndex + 1;
    }
    DataLayer.push(
        'Conteudo_ClicouNextStories',
        'proximo',
        swipeIndex === 1
            ? 'nova-fiat-toro-2022'
            : window
                .getComputedStyle(
                    document.querySelector(
                        `#toro-2022 span[aria-label="Go to slide ${swipeIndex}"]`,
                    ),
                    '::after',
                )
                .content.replace(/[^\w\s!?]/g, '')
                .replace(/\s/g, '-')
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLocaleLowerCase(),
    );
  });
  $(`#toro-2022 div.swiper-button-prev`).click(e => {
    if (swipeIndex === 1) {
      swipeIndex = 6;
    } else {
      swipeIndex = swipeIndex - 1;
    }
    DataLayer.push(
        'Conteudo_ClicouNextStories',
        'anterior',
        swipeIndex === 1
            ? 'nova-fiat-toro-2022'
            : window
                .getComputedStyle(
                    document.querySelector(
                        `#toro-2022 span[aria-label="Go to slide ${swipeIndex}"]`,
                    ),
                    '::after',
                )
                .content.replace(/[^\w\s!?]/g, '')
                .replace(/\s/g, '-')
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLocaleLowerCase(),
    );
  });

  return (
      <>
        <Swiper
            id="toro-2022"
            allowTouchMove={false}
            navigation
            pagination={{clickable: true}}
        >
          <Brand src={images.LogoFiat2x} alt="logo"/>
          {data.map(item => (
              <SwiperSlide key={`slide-hero${item.id}`}>
                {({isActive}) => (
                    <>
                      {!item.videoDesktop ? (
                          <Image
                              src={item.image}
                              alt="image"
                              onClick={() => {
                                DataLayer.push('Menu_ClicouAbrir');
                              }}
                          />
                      ) : (
                          <Video
                              alt="video"
                              autoPlay
                              preload="true"
                              onClick={() => {
                                DataLayer.push('Menu_ClicouAbrir');
                              }}
                          >
                            <source src={item.video} type="video/mp4"/>
                          </Video>
                      )}
                      <New highlighted={item?.highlighted}>
                        <div>
                          <Toro
                              highlighted={item?.highlighted}
                              new={item?.new}
                              style={item.id === 1 ? {marginTop: 0, bottom: '85px'} : {}}
                          >
                            <FlagColors>
                              {item?.highlighted ? (
                                  <img
                                      src={images.FlagColorida}
                                      alt="Fiat"
                                  />
                              ) : null}
                            </FlagColors>
                            {item.id === 5 ? (
                                <span style={{color: '#209051'}}>{item.head.title}</span>
                            ) : (
                                <span>{item.head.title}</span>
                            )}

                            {/* <img src={item.connect} alt="img" /> */}
                            <h2>{item.head.brand}</h2>
                            <h2>{item.head.brand2}</h2>
                            <h1>{item.head.Subtitle}</h1>
                            <span>{item.head.attachment}</span>
                            {item.id === 6 && (
                                <HeroConnect>
                                  <img style={{width: '23vw'}} src={item.logo} alt={"Logo"}/>
                                </HeroConnect>
                            )}

                            <HeroDescription>{item.head.headerDescription}</HeroDescription>
                            <h3>{item.head.division}</h3>
                          </Toro>
                        </div>
                        <Flag>
                          {item.useLogo && (
                              <FlagGreen src={images.FlagGreen} alt={"Destaques"} />
                            )}
                          <p>{item.head.description}</p>
                        </Flag>
                      </New>
                    </>
                )}
              </SwiperSlide>
          ))}
        </Swiper>
      </>
  );
}
