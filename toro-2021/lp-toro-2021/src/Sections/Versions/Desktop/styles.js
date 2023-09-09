import styled, { css } from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import Colors from '../../../styles/colors';
import thumb1 from '../../../assets/thumbs/versions/thumb-01.png';
import thumb2 from '../../../assets/thumbs/versions/thumb-02.png';
import thumb3 from '../../../assets/thumbs/versions/thumb-03.png';
import thumb4 from '../../../assets/thumbs/versions/thumb-04.png';
import thumb5 from '../../../assets/thumbs/versions/thumb-05.png';

export const Swiper = styled(SwiperReact)`
  .swiper-slide {
    width: 100% !important;
  }
  .swiper-button-next,
  .swiper-button-prev {
    background-color: ${Colors.primary};
    border-radius: 4px;
    color: ${Colors.white};
    height: 44px;
    top: 380px;
    width: 44px;
    &::after {
      font-size: 18px;
    }

    &::hover {
      background-color: yellow;
    }

    ${({ afterblock }) =>
      afterblock === 'true'
        ? css`
            top: calc(100% - 480px);
          `
        : 'false'};
  }

  .swiper-button {
    &-next {
      right: 26px;
    }

    &-prev {
      left: auto;
    }
  }

  .swiper-pagination {
    position: absolute;
    top: 530px;
    display: flex;
    height: 0;
    /* align-items: start; */
    justify-content: center;
    /* padding-bottom: 20px;
    margin-top: 10px;
    margin-left: 7%; */

    &-bullet {
      position: relative;
      height: 189px;
      width: 180px;
      opacity: 1;
      border-radius: 9px !important;

      &-active {
        opacity: 1;
        box-shadow: 0px 3px 6px #00000067;
      }
    }
  }

  span {
    font-family: 'FuturaPT Bold', sans-serif;
  }

  span[aria-label='Go to slide 1'].swiper-pagination-bullet {
    background: url(${thumb1});
    background-size: contain !important;
    background-repeat: no-repeat !important;
    font-size: 16px;
    &::after {
      content: 'TORO ULTRA';
      position: absolute;
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      margin-top: 62%;
      font-size: 14px;
      font-style: bold;
      line-height: 12px;
      color: black;
    }
    p {
      display: none;
    }
    &-active {
      background: url(${thumb1}) #f0ebdb;

      p {
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 100%;
        bottom: 30px;
        font-size: 10px;
        font-family: 'FuturaPT Medium', sans-serif;
        line-height: 11.5px;
        strong {
          font-family: 'FuturaPT Bold', sans-serif;
        }
        &::after {
          position: absolute;
          font-family: 'FuturaPT Medium', sans-serif;
          width: 100%;
          content: '>';
          bottom: -17px;
          transform: rotate(90deg) scale(1, 1.7);
          font-size: 24px;
        }
      }
    }
  }
  span[aria-label='Go to slide 2'].swiper-pagination-bullet {
    background: url(${thumb2});
    background-size: contain !important;
    background-repeat: no-repeat !important;
    font-size: 16px;
    &::after {
      content: 'TORO RANCH';
      position: absolute;
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      margin-top: 62%;
      font-size: 14px;
      font-style: bold;
      line-height: 12px;
      color: black;
    }
    p {
      display: none;
    }
    &-active {
      background: url(${thumb2}) #f0ebdb;

      p {
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 100%;
        bottom: 30px;
        font-size: 10px;
        font-family: 'FuturaPT Medium', sans-serif;
        line-height: 11.5px;
        strong {
          font-family: 'FuturaPT Bold', sans-serif;
        }
        &::after {
          position: absolute;
          font-family: 'FuturaPT Medium', sans-serif;
          width: 100%;
          content: '>';
          bottom: -17px;
          transform: rotate(90deg) scale(1, 1.7);
          font-size: 24px;
        }
      }
    }
  }
  span[aria-label='Go to slide 3'].swiper-pagination-bullet {
    background: url(${thumb3});
    background-size: contain !important;
    background-repeat: no-repeat !important;
    font-size: 16px;
    &::after {
      content: 'TORO VOLCANO';
      position: absolute;
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      margin-top: 62%;
      font-size: 14px;
      font-style: bold;
      line-height: 12px;
      color: black;
    }
    p {
      display: none;
    }
    &-active {
      background: url(${thumb3}) #f0ebdb;

      p {
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 100%;
        bottom: 30px;
        font-size: 10px;
        font-family: 'FuturaPT Medium', sans-serif;
        line-height: 11.5px;
        strong {
          font-family: 'FuturaPT Bold', sans-serif;
        }
        &::after {
          position: absolute;
          font-family: 'FuturaPT Medium', sans-serif;
          width: 100%;
          content: '>';
          bottom: -17px;
          transform: rotate(90deg) scale(1, 1.7);
          font-size: 24px;
        }
      }
    }
  }
  span[aria-label='Go to slide 4'].swiper-pagination-bullet {
    background: url(${thumb4});
    background-size: contain !important;
    background-repeat: no-repeat !important;
    font-size: 16px;
    &::after {
      content: 'TORO FREEDOM';
      position: absolute;
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      margin-top: 62%;
      font-size: 14px;
      font-style: bold;
      line-height: 12px;
      color: black;
    }
    p {
      display: none;
    }
    &-active {
      background: url(${thumb4}) #f0ebdb;

      p {
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 100%;
        bottom: 30px;
        font-size: 10px;
        font-family: 'FuturaPT Medium', sans-serif;
        line-height: 11.5px;
        strong {
          font-family: 'FuturaPT Bold', sans-serif;
        }
        &::after {
          position: absolute;
          font-family: 'FuturaPT Medium', sans-serif;
          width: 100%;
          content: '>';
          bottom: -17px;
          transform: rotate(90deg) scale(1, 1.7);
          font-size: 24px;
        }
      }
    }
  }
  span[aria-label='Go to slide 5'].swiper-pagination-bullet {
    background: url(${thumb5});
    background-size: contain !important;
    background-repeat: no-repeat !important;
    font-size: 16px;
    padding: auto 5px;
    &::after {
      content: 'TORO ENDURANCE';
      position: absolute;
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      margin-top: 62%;
      font-size: 14px;
      font-style: bold;
      line-height: 12px;
      color: black;
    }
    p {
      display: none;
    }
    &-active {
      background: url(${thumb5}) #f0ebdb;

      p {
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 100%;
        bottom: 30px;
        font-size: 10px;
        font-family: 'FuturaPT Medium', sans-serif;
        line-height: 11.5px;
        strong {
          font-family: 'FuturaPT Bold', sans-serif;
        }
        &::after {
          position: absolute;
          font-family: 'FuturaPT Medium', sans-serif;
          width: 100%;
          content: '>';
          bottom: -17px;
          transform: rotate(90deg) scale(1, 1.7);
          font-size: 24px;
        }
      }
    }
  }
`;

export const Content = styled.div`
  color: ${Colors.white};
  position: relative;
  background-image: url(${props => props.bg && props.bg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  object-fit: cover;
  width: ${props => (props.open ? 85 : 100)}vw;
  ${props =>
    props.open &&
    css`
      margin: 0 auto;
    `};

  &::after {
    background-color: ${Colors.warning};
    bottom: -40px;
    content: '';
    height: 100px;
    position: absolute;
    width: 100%;
  }

  h5 {
    font-size: 24px;
    font-weight: 400;
    line-height: 35px;
    padding-top: 43px;
    width: 370px;
    margin: 0 auto;
    font-family: 'FuturaPT Medium', sans-serif;
    text-align: center;
  }

  h3 {
    color: ${Colors.primary};
    font-family: 'FuturaPT Regular', sans-serif;
    font-size: 27px;
    line-height: 63px;
    font-weight: 400;
  }

  h1 {
    font-family: 'FuturaPT Regular', sans-serif;
    font-size: 40px;
    line-height: 40px;
    padding-top: 12px;
    opacity: 1;
  }

  div {
    position: relative;
    top: 16px;
    z-index: 1;
  }
  span {
    font-family: 'FuturaPT Bold', sans-serif;
  }
`;

export const BoxSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 20px 0 0 30px;

  h3 {
    color: ${Colors.primary};
    font-family: 'FuturaPT Light', sans-serif;
    font-size: 27px;
    line-height: 63px;
    font-weight: 400;
  }

  h1 {
    font-family: 'FuturaPT Light', sans-serif;
    font-size: 40px;
    line-height: 40px;
    padding-top: 12px;
    opacity: 1;
  }

  div {
    position: relative;
    top: 8px;
    z-index: 1;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 30px;
  left: 50px;
  h1 {
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 40px;
    line-height: 40px;
    font-weight: 600;
    margin-top: -10px;
  }
  h3 {
    color: ${Colors.white};
    margin-bottom: -20px;
  }
  img {
    width: 48px;
    height: 32px;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: flex-center;
  position: relative;
  top: 46px;
  left: 50px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 94px;

  & + div {
    margin-left: 8px;
  }

  img {
    height: 74px;
    object-fit: cover;
    width: 100%;
    border-radius: 4px;
  }

  span {
    color: #18131f;
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 10px;
    line-height: 13px;
    padding: 3px;
    text-align: center;
    width: 100%;
  }
`;

export const Car = styled.img`
  position: relative;
  top: 55px;
  max-width: 681px;
  z-index: 20;
  right: 37px;
`;

export const Model = styled.div`
  background-color: ${Colors.warning};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 300px;

  h4 {
    font-family: 'DIN Bold', sans-serif;
    font-size: 22px;
    line-height: 13px;
    font-weight: bold;
    text-align: center;
  }

  img {
    height: 8px;
    margin: 0 auto;
    margin-top: 12px;
    width: 14px;
  }
`;

export const Cta = styled.div`
  align-items: center;
  background-color: ${Colors.warning};
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 99999;
  padding-bottom: 70px;
  margin-top: -100px;
  margin-right: 8px;

  a {
    align-items: center;
    display: flex;
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 18px;
    justify-content: center;
    line-height: 27px;
    color: ${Colors.white};

    & + a {
      margin-left: 16px;
    }
  }
`;
