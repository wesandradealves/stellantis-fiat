import React from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
} from 'swiper';
import { SwiperSlide } from 'swiper/react';
import {
  BoxSection,
  Design,
  Swiper,
  Infos,
  ButtonAventure,
} from './styles';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination, A11y]);

const Details = ({ data }) => {
  return (
    <Swiper
      id="design"
      navigation
      pagination={{ clickable: true }}
    >
      {data.map((item,index) => (<SwiperSlide key={`details-swiper-${item.title}-${index}`}>
          <BoxSection>
            <Infos small={item.small}>
              <h2>{item.title}</h2>

              <p>{item.description}</p>
            </Infos>
            <Design>
              <img src={item.image} alt="Design" />
            </Design>
            {item.index === 'Acessórios' ? (
              <ButtonAventure>
                <a href={item.link}>
                  {item.btn}
                </a>
              </ButtonAventure>
            ) : (
              <>
                {item.index === 'Pacotes de Serviços' && (
                  <ButtonAventure>
                    <a href={item.link}>
                      {item.btn}
                    </a>
                  </ButtonAventure>
                )}
              </>
            )}
          </BoxSection>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Details;
