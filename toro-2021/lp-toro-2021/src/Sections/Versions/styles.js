import styled, { css } from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import Colors from '../../styles/colors';
import * as images from '../../assets';

export const Swiper = styled(SwiperReact)`
  background: #EDEDE2;
  margin-top: -20px;

  .swiper-button-next,
  .swiper-button-prev {
    background-color: ${Colors.yellow};
    border-radius: 5px;
    color: #575757;
    height: 36px;
    position: absolute;
    top: 370px;
    width: 36px;
    margin-right: 5px;
    margin-left: 5px;
    background-size: 35px;
    background-position: center;
    background-repeat: no-repeat;

    &::after {
      display: none;
    }
    ${props =>
      props.onBlock &&
      css`
        position: fixed;
        top: 400px;
      `}

    ${props =>
      props.afterBlock &&
      css`
        top: calc(100% - 300px);
      `}
  }

  .swiper-button-next {
    background-image: url(${images.RightArrow});
  }

  .swiper-button-prev {
    background-image: url(${images.LeftArrow});
  }

  .swiper-pagination {
    align-items: center;
    display: flex;
    justify-content: center;

    &-bullet {
      background-color: #575757;
      border-radius: 50%;
      bottom: 805px;
      height: 4px;
      opacity: 0.5;
      position: relative;
      width: 4px;

      &-active {
        background-color: #575757;
        height: 7px;
        opacity: 1;
        width: 7px;
      }
    }
  }
`;

export const Content = styled.div`
  background-image: url(${props => props.bg && props.bg});
  background-repeat: no-repeat;
  background-position: 25% 25%;
  background-size: 100% 100%;
  border-radius: 16px 16px 0 0;
  color: ${Colors.white};
  margin-top: -1px;
  position: relative;

  &::before {
    background-color: ${Colors.black};
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  &::after {
    content: '';
    background-color: #fffaeb;
    bottom: -106px;
    display: block;
    height: 120px;
    position: absolute;
    width: 100%;
  }

  h5 {
    font-family: 'FuturaPT';
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.16px;
    line-height: 20px;
    padding-top: 12px;
    text-align: center;

    span {
      font-size: inherit;
      font-weight: 600;
      letter-spacing: inherit;
    }
  }
`;

export const BoxSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 40px;
  margin-top: 20px;

  img {
    padding: 18px 0 8px;
    width: 54px;
  }

  h3 {
    font-size: 22px;
    font-weight: 600;
    text-transform: uppercase;
  }

  h1 {
    margin-top: 40px;
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 0.3px;
    line-height: 30px;
    text-transform: uppercase;
    color: ${Colors.yellow};
  }

  h2 {
    font-size: 30px;
    letter-spacing: 0.3px;
    line-height: 30px;
    width: ${props => props.width && props.width}px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  button {
    background-color: transparent;
    font-size: 20px;
    margin-top: -54px;
  }

  a {
    background-color: ${Colors.white};
    border-radius: 3px;
    font-size: 12px;
    height: 18px;
    margin-top: 3px;
    padding-top: 3px;
    text-align: center;
    width: 20px;
  }
`;

export const Model = styled.div`
  background-color: #fffaeb;
  display: grid;
  justify-content: center;
  justify-items: center;
  border: 1px solid #70707033;
  box-shadow: 0px 3px 30px #00000033;
  opacity: 1;
  border: 1px solid #70707033;
  margin-top: 50px;
  border-radius: 16px 16px 0 0;
  margin-right: 5px;
  margin-left: 5px;

  overflow: hidden;
  transition: 1s ease-in-out;

  h4 {
    font-family: 'DIN Bold', sans-serif;
    font-size: 16px;
    letter-spacing: 0.2px;
    margin: 44px 0 28px;
    text-transform: uppercase;
    font-weight: 600;
  }

  span {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const Car = styled.img`
  display: flex;
  margin: 0 auto;
  margin-bottom: 16px;
  max-width: 285px;
  height: 196px;
  position: relative;
  top: 68px;
  width: 100%;
  z-index: 1;
  margin-top: -25px;
`;

export const Cards = styled.div`
  background: #DDD7C7;
  display: flex;
  justify-content: center;
  margin-top: 140px;
  position: relative;
  /* Iphone 5 Adjust */
  @media (min-width: 320px) and (min-height: 568px) {
    padding: 0 1rem;
  }
`;

export const Infos = styled.div`
  background-color: ${Colors.black};
  box-shadow: 0px 3px 6px ${Colors.black};
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100px;
  height: 114px;

  & + div {
    margin-left: 8px;
  }

  img {
    height: 94px;
    height: 74px;
    object-fit: cover;
    width: 100%;
  }

  span {
    color: ${Colors.white};
    font-family: 'Din Regular', sans-serif;
    font-size: ${props => (props.size ? props.size : 10)}px;
    letter-spacing: 0.15px;
    line-height: 1;
    padding-top: 10px;
    padding-left: 4px;
    padding-right: 4px;
    opacity: 1;
    width: 100%;
    text-align: center;
    font-weight: 400;
  }
`;

export const Gallery = styled.div`
  align-content: space-between;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 504px;
  margin: 0 auto;
  width: 300px;

  /* Iphone 5 Adjust */
  @media (min-width: 320px) and (min-height: 568px) {
    width: 260px;
  }
  /* MotoG4 Adjutes*/
  @media (min-width: 360px) and (min-height: 640px) {
    width: 280px;
  }
  /* Iphone x Adjust */
  @media (min-width: 375px) and (min-height: 810px) {
    width: 305px;
  }
  /*Pixel 2 Adjuts */
  @media (min-width: 411px) and (min-height: 731px) {
    width: 310px;
  }
  @media (min-width: 414px) and (min-height: 736px) {
    width: 295px;
  }
`;

export const Image = styled.img`
  height: ${props => (props.mini ? 118 : 150)}px;
  margin-bottom: 12px;
  width: calc(50% - 6px);
`;

export const TitleSection = styled.div`
  padding: 2rem 0rem;
  background-color: #413c3a;
  display: flex;
  justify-content: center;
  justify-items: center;
  color: white;
  z-index: 10;
  margin-bottom: -20px;
  position: relative;
  span {
    font-family: 'DIN Bold' !important;
    height: 19px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
`;

export const BoxLike = styled.div`
  position: absolute;
  right: 12px;
  bottom: 190px;
`;

export const BoxShare = styled.div`
  position: absolute;
  right: 12px;
  bottom: 150px;
`;

export const ArrowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 0px;
    height: 0px;
    border-left: 55px solid transparent;
    border-right: 55px solid transparent;
    border-bottom: ${props => (props.isOpen ? 0 : 55)}px solid
      #fffaeb;
    position: absolute;
  }
`;
