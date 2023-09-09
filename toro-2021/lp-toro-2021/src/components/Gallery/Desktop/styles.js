import styled from 'styled-components';
import { Colors } from '../../../styles';
import * as images from '../../../assets';
import { Swiper as SwiperReact } from 'swiper/react';
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosClose,
} from 'react-icons/io';

export const Swiper = styled(SwiperReact)`
  margin-bottom: -8px;
  .swiper-slide {
    width: 100% !important;
  }
  .swiper-button {
    &-next,
    &-prev {
      background-color: ${Colors.primary};
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 4px;
      color: ${Colors.white};
      content: '';
      height: 40px;
      width: 40px;
      position: absolute;
      z-index: 11;

      &::after {
        font-size: 16px;
      }
    }

    &-next {
      background-image: url(${IoIosArrowForward});
      
    }

    &-prev {
      background-image: url(${IoIosArrowBack});
    }

    &-disabled {
      opacity: 0;
    }
  }
`;

export const Container = styled.div`
  background-color: ${Colors.warning};
  display: flex;
  z-index: 1;
  flex-direction: row-reverse;
  height: 100%;
  width: 100%;
  max-height: 1100px;
  padding: 0px 88px 30px 94px;
  margin-bottom: 100px;

  img {
    width: 100%;
  }

  .thumbButton {
    transform: none !important;
  }

  & > div {
    .flickity-viewport,
    .flickity-slider {
      /* width: 100%; */
      .carouselImg {
        width: 100%;
        max-height: auto;
        border-radius: 8px;
        object-fit: contain;
        z-index: 999999;
      }

      .flickity-slider button {
        padding-right: 20px;
        /* width: 100%; */
        /* zoom: 0; */
      }
    }
  }
`;
export const Nav = styled.div`
  padding: 0;
  width: 334px;
  margin-left: 3%;
  & > div {
    .flickity-viewport {
      cursor: default !important;
      height: 460px !important;
      margin-top: -0.7px;

      & > div {
        max-height: 460px;
        height: auto;
        transform: none !important;
        width: 90%;
        column-count: 2;
        column-fill: balance;
        -moz-column-fill: balance;
        -webkit-column-fill: balance;

        button {
          height: ${props => props.height}px;
          top: -5px;
          left: auto !important;
          margin-top: 8px;
          margin-left: 8px;
          position: relative !important;
          width: 158px;
          background-color: transparent;

          img {
            object-fit: cover;
          }

          &.is-selected,
          &.is-nav-selected {
            opacity: 1;
          }
        }
      }
    }
  }
`;

export const Image = styled.img`
  height: ${props => props.height}px !important;
  border-radius: 5px;
`;

export const ContainerImages = styled.div`
  button > div {
    width: 100%;
    text-align: center;
    position: relative;
    margin: 0 auto;
    &::before {
      display: block;
      position: absolute;
      content: url(${images.Zoom});
      z-index: 9999;
      right: 8px;
      top: 8px;
    }

    img{
      zoom: 0.9;
    }
  }
`;

export const ButtonCloseModal = styled.button`
  background-image: url(${IoIosClose});
  width: 30px;
  height: 30px;
  background-color: ${Colors.primary};
  position: absolute;
  top: 0;
  left: 25%;
  z-index: 999999999;
  color: white;
  font-size: 1.5rem;
`;

export const ModalImage = styled.img`
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
  position: relative;
  left: 25vw;
`;
