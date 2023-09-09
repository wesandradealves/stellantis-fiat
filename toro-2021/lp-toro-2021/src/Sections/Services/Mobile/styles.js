import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import Colors from '../../../styles/colors';

export const Swiper = styled(SwiperReact)`
  background-color: #292929;
  .swiper-button-next,
  .swiper-button-prev {
    background-color: ${Colors.success};
    border-radius: 5px;
    color: ${Colors.white};
    height: 44px;
    position: absolute;
    top: 378px;
    width: 44px;

    &::after {
      font-size: 12px;
    }
  }

  .swiper-pagination {
    align-items: center;
    display: flex;
    justify-content: center;

    &-bullet {
      background-color: ${Colors.white};
      border-radius: 30%;
      bottom: 64px;
      height: 4px;
      opacity: 1;
      position: relative;
      width: 28px;
      border-radius: 0px;

      &-active {
        background-color: ${Colors.primary};
        height: 4px;
        opacity: 1;
        width: 28px;
        border-radius: 0px;
      }
    }
  }
`;

export const Brand = styled.div`
  left: 16%;
  position: absolute;
  top: 100%;
  z-index: 999;
`;

export const BoxSection = styled.div`
  background-color: #292929;
  padding-bottom: 44px;
  padding-top: 63px;
  position: relative;

  &::before {
    background-color: #292929;
    content: '';
    height: 63px;
    position: absolute;
    top: -1px;
    width: 100%;
  }

  & > div {
    margin: 0 auto;
    position: relative;
    width: max-content;

    &::before {
      background-size: cover;
      background-repeat: no-repeat;
      content: '';
      height: 36px;
      left: 34px;
      top: -28px;
      position: absolute;
      width: 54px;
    }

    img {
      margin-top: -12px;
      max-width: 100%;
      border-radius: 10px;
    }

    div {
      bottom: ${props => (props.highlighted ? 55 : 78)}px;
      color: ${Colors.white};
      left: 48px;
      position: absolute;

      h1 {
        font-size: 30px;
        font-weight: ${props => (props.highlighted ? 400 : 700)};
        line-height: 30px;
        width: 186px;
        font-family: "FuturaPT Bold";

        strong {
          display: block;
          font-family: "FuturaPT Bold";
        }
      }
      img {
        height: 45px;
        width: 180px;
        margin-top: 10px;
        z-index: 99999;
      }
      p {
        font-family: "FuturaPT Light";
        font-size: 16px;
        letter-spacing: 0.14px;
        line-height: 18px;
        margin-top: 6px;
        width: 100%;
        padding-right: 30px;

    }
  }
`;
