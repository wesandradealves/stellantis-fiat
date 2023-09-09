import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import { Colors } from '../../../styles';
import { FiChevronDown } from 'react-icons/fi';
import { Carousel as CarouselContainer } from 'react-responsive-carousel';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  @media (max-width: 1280px) {
    /* margin-left: ${props =>
      props.menuIsOpen ? '50px' : 0}; */
  }
`;

export const Swiper = styled(SwiperReact)`
  width: 500px;
  right: 0px;
  overflow: hidden;
  overflow-x: hidden;
  white-space: nowrap;
  /* left: calc(100vw - 30rem); */
  position: absolute;
  .swiper-button {
    &-next {
      opacity: 0;
      background-color: red;
      margin-right: 5%;
      margin-top: -28%;
      width: 350px;
      height: 525px;
    }

    &-prev {
      opacity: 0;
      background-color: red;
      margin-left: 0;
      margin-top: -28%;
      width: 310px;
      height: 525px;
    }
  }
  .swiper-slide {
    cursor: grab !important;

    img.img-slide {
      width: auto;
      height: 22em;
      border-radius: 5px;
      box-shadow: none !important;
    }
    &:last-child {
      opacity: 0;
    }
    &-active {
      img {
        opacity: 1;
        border: 2px solid ${Colors.light};
      }
    }
  }
`;

export const ImgContainer = styled.div`
`;

export const Carousel = styled(CarouselContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  .swiper-slider {
    height: 700px;
  }
  .control-dots {
    position: absolute;
    top: 90%;
  }

  .dot {
    pointer-events: none;
    cursor: default;
    background-color: #f5f5f5;
    opacity: 0.7 !important;
    box-shadow: none !important;
    width: 72px !important;
    border-radius: 0 !important;
    height: 4px !important;
  }
  .dot.selected {
    background-color: ${Colors.primary} !important;
    opacity: 1 !important;
  }
`;

export const Main = styled.div`
  height: 620px;
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.52),
      rgba(0, 0, 0, 0.73)
    ),
    url(${props => props.bg && props.bg});
  background-position: left;
`;

export const TextContainer = styled.div`
  width: 300px;
  height: 230px;
  color: ${Colors.white};
  margin-left: 10%;
  margin-top: 170px;
  .connectMe {
    display: flex;
    flex-direction: column;
    align-items: start;
    position: relative;
    top: -60px;

    h3 {
      font-family: 'FuturaPT Light', sans-serif;
      font-size: 12px;
      text-align: left;
    }
    img {
      width: 120px;
    }

    &:after {
      content: '';
      width: 50px;
      height: 2px;
      background-color: ${Colors.primary};
      position: relative;
      top: 10px;
    }
  }

  h1 {
    width: ${props => (props.titleWidth ? '200' : '390')}px;
    color: ${Colors.white};
    text-align: left;
    margin-bottom: 10px;
    font-size: 40px;
    line-height: 40px;
    font-family: 'FuturaPT Bold', sans-serif;
  }

  p {
    color: ${Colors.white};
    text-align: left;
    font-size: 18px;
    height: 100px;
  }

  h2 {
    text-align: left;
    position: relative;
    bottom: ${props => (props.highlighted ? '-78' : '-110')}px;
    font-family: 'FuturaPT Light', sans-serif;
    font-size: 16px;

    span {
      font-family: 'FuturaPT Bold', sans-serif;
      font-size: 16px;
    }
  }
`;

export const ChevronDown = styled(FiChevronDown)`
  color: ${Colors.white};
  width: 1.5em;
  height: 1.5em;
  margin: 0 auto;
  z-index: 9999;
`;
export const ArrowBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 620px;
  z-index: 9999;
  span {
    color: ${Colors.white};
    font-family: 'FuturaPT Light', sans-serif;
    font-size: 1rem;
  }
`;
