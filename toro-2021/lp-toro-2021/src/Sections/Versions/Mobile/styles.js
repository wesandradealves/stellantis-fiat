import styled, { css } from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import Colors from '../../../styles/colors';

export const Swiper = styled(SwiperReact)`
  background-color: ${Colors.greyMedium};
  margin-top: -1px;

  .swiper-button-next,
  .swiper-button-prev {
    background-color: ${Colors.success};
    border-radius: 5px;
    color: ${Colors.white};
    height: 44px;
    top: 404px;
    width: 44px;
    z-index: 99999;

    &::after {
      font-size: 18px;
    }

    ${({ afterblock }) =>
      afterblock === 'true'
        ? css`
            top: calc(100% - 300px);
          `
        : 'false'};
  }

  .swiper-button {
    &-next {
      right: 0;
    }

    &-prev {
      left: 0;
    }
  }

  .swiper-pagination {
    align-items: center;
    bottom: calc(100% - 410px);
    display: flex;
    justify-content: center;

    &-bullet {
      background-color: #83837c;
      height: 5px;
      opacity: 0.5;
      width: 30px;
      border-radius: 0;

      &-active {
        background-color: ${Colors.primary};
        height: 5px;
        opacity: 1;
        width: 30px;
      }
    }
  }
`;

export const Content = styled.div`
  height: 330px;
  background-image: url(${props => props.bg && props.bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
    background-color: ${Colors.greyMedium};
    bottom: -106px;
    display: block;
    height: 120px;
    position: absolute;
    width: 100%;
  }

  h5 {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.16px;
    line-height: 20px;
    padding-top: 30px;
    text-align: center;
    font-family: 'FuturaPT Light', sans-serif;

    span {
      font-size: inherit;
      font-family: 'FuturaPT Bold', sans-serif;
      letter-spacing: inherit;
    }
  }
`;

export const BoxSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 14px 40px;

  img {
    margin-bottom: 10px;
    width: 54px;
    height: 30px;
  }

  a:first-child {
    width: 20px;
  }

  h3 {
    font-size: 18px;
    font-weight: 400;
    font-family: 'FuturaPT Light', sans-serif;
  }

  h1 {
    font-size: 30px;
    letter-spacing: 0.3px;
    line-height: 30px;
    font-family: 'FuturaPT Bold', sans-serif;
  }

  h2 {
    font-size: 30px;
    letter-spacing: 0.3px;
    line-height: 30px;
    width: ${props => props.width && props.width}px;
    font-family: 'FuturaPT Bold', sans-serif;
  }
  div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 46px;

    a {
      background-color: transparent;
      margin-bottom: -10px;
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
`;

export const Model = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  h4 {
    font-size: 20px;
    letter-spacing: 0.2px;
    margin: 0 auto;
    margin-top: 20px;
    font-family: 'FuturaPT Bold', sans-serif;
  }

  span {
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
`;

export const Car = styled.img`
  margin: 0 auto;
  margin-bottom: 16px;
  max-width: 375px;
  position: relative;
  top: -20px;
  width: 100%;
  z-index: 1;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
  position: relative;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 94px;
  border-radius: 0px 0px 4px 4px;

  & + div {
    margin-left: 8px;
  }

  img {
    border-radius: 0px;
    height: 85px;
    object-fit: cover;
    width: 100%;
  }

  span {
    color: ${Colors.black};
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: ${props => (props.size ? props.size : 10)}px;
    letter-spacing: 0.15px;
    line-height: 1;
    padding: 6px;
    width: 100%;
    text-align: center;
  }
`;

export const actionsContainer = styled.div`
  img {
    margin-top: 200px;
  }
`;

export const BoxShare = styled.div`
  position: absolute;
  right: 27px;
  bottom: 190px;
  img {
    height: 20px;
  }
`;

export const ButtonSave = styled.div`
  button {
    background: transparent;
  }

  span {
    color: white;
    font-size: 12px;
    white-space: nowrap;
  }

  img {
    width: 25px;
    height: 25px;
    margin-bottom: -5px;
  }
`;
