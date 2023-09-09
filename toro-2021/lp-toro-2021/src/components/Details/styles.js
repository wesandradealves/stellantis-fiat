import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import FiatGreen from '../../assets/images/FiatGreen.svg';
import { Colors } from '../../styles';

export const Swiper = styled(SwiperReact)`
  margin-top: 20px;
  background-color: ${Colors.blue};
  .swiper-button {
    &-next,
    &-prev {
      background-color: ${Colors.success};
      border-radius: 3px;
      color: ${Colors.white};
      height: 36px;
      position: absolute;
      top: 190px;
      width: 36px;
      z-index: 200;

      &::after {
        font-size: 18px;
      }
    }

    &-next {
      right: 0;
    }

    &-prev {
      left: 0;
    }
  }

  .swiper-pagination {
    align-items: center;
    bottom: calc(100% - 190px);
    display: flex;
    justify-content: center;
    &-bullet {
      background-color: ${Colors.white};
      height: 4px;
      opacity: 1;
      width: 30px;
      border-radius: 0px;
      &-active {
        background-color: ${Colors.primary};
        height: 4px;
        opacity: 1;
        width: 30px;

      }
    }
  }
`;

export const BoxSection = styled.div`
  color: ${Colors.white};
  position: relative;
`;

export const Infos = styled.section`
  height: 160px;
  padding-left: 40px;
  width: 400px;
  h2 {
    color: ${Colors.primary};
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 30px;
    letter-spacing: 0.3px;
    line-height: 32px;
    width: 300px;
    margin-bottom: 10px;
  }

  p {
    color: ${Colors.white};
    font-size: ${props => (props.small ? 12 : 16)}px;
    line-height: 15px;
    width: 320px;
    margin-bottom: 10px;
  }
`;

export const Design = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 60px;
  overflow: hidden;
  padding-bottom: 32px;

  &::after {
    background-image: url(${FiatGreen});
    background-repeat: no-repeat;
    background-size: 100vw 20vh;
    bottom: -50px;
    content: '';
    left: -60px;
    position: absolute;
    width: 130%;
    height: 180px;
  }

  img {
    height: 402px;
    top: 100px;
    z-index: 1;
  }
`;


export const ButtonAventure = styled.button`
  width: 228px;
  height: 38px;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  border-radius: 4px;
  transition: 0.3s;
  position:absolute;
  z-index: 99999;
  bottom: 50px;
  left: 30%;
  a {
    color: ${Colors.white};
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 14px;
    text-align: center;

    &:hover{
      color: ${Colors.primary};
    }
  }

  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.primary};
  }
`;