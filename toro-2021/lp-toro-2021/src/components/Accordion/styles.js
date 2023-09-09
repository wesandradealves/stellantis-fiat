import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import { Colors } from '../../styles';
import * as images from '../../assets';

export const Container = styled.div`
  color: ${props => (props.color ? props.color : Colors.yellow)};
  padding-bottom: 20px;
  background-color: #413c3a;
`;

export const Swiper = styled(SwiperReact)`
  background: #413c3a;
  height: 450px;
  .swiper-button-next {
    background-image: url(${images.RightArrow});
  }
  .swiper-button-prev {
    background-image: url(${images.LeftArrow});
  }
  .swiper-button-next,
  .swiper-button-prev {
    background-color: ${Colors.yellow};
    border-radius: 5px;
    color: #575757;
    height: 36px;
    position: relative;
    top: 240px;
    width: 36px;
    background-size: 35px;
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 25px;
    margin-left: 25px;

    &::after {
      display: none;
    }
    @media (min-width: 375px) and (min-height: 812px) {
      position: absolute;
      margin-right: 20px;
      margin-left: 26px;
    }
    @media (min-width: 320px) and (min-height: 568px) {
      position: absolute;
      margin-right: 5px;
      margin-left: 5px;
    }
    @media (min-width: 360px) and (min-height: 640px) {
      position: absolute;
      margin-right: 18px;
      margin-left: 20px;
    }

    /* Iphone 6/7/8 Plus */
    @media (min-width: 414px) and (min-height: 800px) {
      position: absolute;
      margin-right: 25px !important;
      margin-left: 30px !important;
    }

    @media (min-width: 414px) and (min-height: 736px) {
      position: absolute;
      margin-right: 35px !important;
      margin-left: 40px !important;
    }
    @media (min-width: 411px) and (min-height: 731px) {
      position: absolute;
      margin-right: 37px !important;
      margin-left: 35px !important;
    }
  }

  .swiper-pagination {
    align-items: center;
    display: flex;
    justify-content: center;

    &-bullet {
      background-color: ${Colors.greyMedium};
      border-radius: 50%;
      bottom: 200px;
      height: 4px;
      opacity: 0.5;
      position: relative;
      width: 4px;

      &-active {
        background-color: ${Colors.yellow};
        height: 7px;
        opacity: 1;
        width: 7px;
      }
    }
  }
`;
export const Item = styled.div`
  background-color: #413c3a;

  header {
    align-items: center;
    background-color: transparent;
    display: flex;
    margin-left: 10px;

    span {
      color: #f2d788;
      font-size: 22px;
      line-height: 67px;
      margin-left: 20px;
      color: ${Colors.yellow};
      font-weight: 600;
    }

    svg {
      color: inherit;
      transform: rotate(${props => (props.isOpen ? 180 : 0)}deg);
      transition: 0.2s ease-in-out;
      margin-left: 25px;
    }
  }

  main {
    max-height: ${props => (props.isOpen ? 1000 : 0)}px;
    overflow: hidden;
    transition: 1s ease-in-out;
  }

  & + div {
    border-top: 1px solid;
    border-color: inherit;
  }
`;

export const BoxSection = styled.div`
  background: #413c3a;
  color: ${Colors.white};
  position: relative;
  margin-top: -70px;
`;

export const Infos = styled.section`
  width: 285px;
  height: 112px;
  position: relative;
  margin-top: -20px;
  margin-left: 48px;
  h2 {
    color: ${Colors.white};
    font-family: 'DIN bold', sans-serif;
    font-size: 24px;
    letter-spacing: 0.3px;
    line-height: 25px;
    margin-bottom: 10px;
    padding-top: 20px;
    margin-top: 70px;
    text-align: left;

    text-transform: uppercase;
  }

  p {
    color: ${Colors.white};
    font-size: 13px;
    line-height: 17px;
    width: 275px;
    text-align: left;
    letter-spacing: 0;
    font-family: 'Din Regular', sans-serif;
    font-weight: 400;
    margin-bottom: 10px;
  }
`;

export const Design = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
  overflow: hidden;

  img {
    margin: 0 25px;
    height: 210px;
    width: 317px;
    z-index: 1;
  }
`;

export const TitleBox = styled.div`
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  background-color: #413c3a;
  h1 {
    width: 240px;
    height: 39px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    color: ${Colors.white};
  }
`;

export const Background = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 160px;
  height: 250px;
  top: 45px;
  background-repeat: no-repeat;
  background-size: cover;
`;
