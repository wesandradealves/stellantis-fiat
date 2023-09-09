import styled from 'styled-components';
import {Swiper as SwiperReact} from 'swiper/react';
import {Colors} from '../../styles';
import thumb1 from '../../assets/thumbs/toro-2022/thumb-01.png';
import thumb2 from '../../assets/thumbs/toro-2022/thumb-02.png';
import thumb3 from '../../assets/thumbs/toro-2022/thumb-03.png';
import thumb4 from '../../assets/thumbs/toro-2022/thumb-04.png';
import thumb5 from '../../assets/thumbs/toro-2022/thumb-05.png';
import {
  IoIosArrowBack,
  IoIosArrowForward,
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
      height: 48px;
      width: 48px;

      &::after {
        font-size: 20px;
      }
    }

    &-next {
      background-image: url(${IoIosArrowForward});
      right: 26px;
    }

    &-prev {
      background-image: url(${IoIosArrowBack});
      left: 26px;
    }

    &-disabled {
      display: none;
    }
  }

  .swiper-pagination {
    align-items: center;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    margin-top: 10px;
    margin-left: 7%;

    &-bullet {
      height: 112px;
      width: 112px;
      opacity: 0.8;
      border-radius: 9px !important;
      border: solid ${Colors.primary};
      border-width: 2px;

      &-active {
        height: 112px;
        width: 112px;
        opacity: 1;
        border: solid #209051;
        border-width: 4px;

        &::before {
          content: '';
          background-color: transparent !important;
          color: transparent !important;
        }
      }
    }
  }

  span {
    font-family: 'FuturaPT Bold', sans-serif;
  }

  span[aria-label='Go to slide 1'] {
    background: transparent;
    border: transparent;
    cursor: auto;
  }

  span[aria-label='Go to slide 2'] {
    background: url(${thumb1}) !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;

    &::before {
      content: '+';
      font-size: 20px;
      background-color: #209051;
      color: white;
      padding: 0px 6px;
      border-radius: 0 7px 0 9px;
      float: right;
      margin-top: 1px !important;
      margin-right: 1px !important;
    }

    &::after {
      content: 'Motor turbo 185cv flex';
      padding-right: 20px;
      padding-left: 10px;
      font-size: 12px;
      color: white;
      float: left;
      text-align: left;
      margin-top: 48%;
      line-height: 12px;
    }
  }
  span[aria-label='Go to slide 3'] {
    background: url(${thumb2}) !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    &::before {
      content: '+';
      font-size: 20px;
      background-color: #209051;
      color: white;
      padding: 0px 6px;
      border-radius: 0 7px 0 9px;
      float: right;
      margin-top: 1px !important;
      margin-right: 1px !important;
    }
    &::after {
      content: 'Design robusto e arrojado';
      padding-right: 20px;
      padding-left: 10px;
      font-size: 12px;
      color: white;
      float: left;
      text-align: left;
      margin-top: 38%;
      bottom: 0;
      line-height: 12px;
    }
  }
  span[aria-label='Go to slide 4'] {
    background: url(${thumb3}) !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    &::before {
      content: '+';
      font-size: 20px;
      background-color: #209051;
      color: white;
      padding: 0px 6px;
      border-radius: 0 7px 0 9px;
      float: right;
      margin-top: 1px !important;
      margin-right: 1px !important;
    }
    &::after {
      content: 'Nova central multimídia na vertical';
      padding-right: 20px;
      padding-left: 10px;
      font-size: 12px;
      color: white;
      float: left;
      text-align: left;
      margin-top: 38%;
      line-height: 12px;
    }
  }
  span[aria-label='Go to slide 5'] {
    background: url(${thumb4}) !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    &::before {
      content: '+';
      font-size: 20px;
      background-color: #209051;
      color: white;
      padding: 0px 6px;
      border-radius: 0 7px 0 9px;
      float: right;
      margin-top: 1px !important;
      margin-right: 1px !important;
    }
    &::after {
      content: 'Um interior totalmente renovado';
      padding-right: 20px;
      padding-left: 10px;
      font-size: 12px;
      color: white;
      float: left;
      text-align: left;
      margin-top: 38%;
      line-height: 12px;
    }
  }
  span[aria-label='Go to slide 6'] {
    background: url(${thumb5}) !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    &::before {
      content: '+';
      font-size: 20px;
      background-color: #209051;
      color: white;
      padding: 0px 6px;
      border-radius: 0 7px 0 9px;
      float: right;
      margin-top: 1px !important;
      margin-right: 1px !important;
    }
    &::after {
      content: 'Fiat \\A Connect Me';
      white-space: pre; 
      padding-right: 20px;
      padding-left: 5px;
      font-size: 12px;
      color: white;
      float: left;
      text-align: left;
      margin-top: 45%;
      line-height: 12px;
    }
  }
`;

export const Brand = styled.img`
  left: calc(50% - 45px);
  max-height: 36px;
  position: absolute;
  top: 23px;
  width: 90px;
  z-index: 2;
`;

export const Image = styled.img`
  background-size: cover;
  background-position: 50% 50%;
  height: 600px;
  object-fit: cover;
  width: 100%;
`;

export const Video = styled.video`
  background-size: cover;
  background-position: 50% 50%;
  height: 600px;
  object-fit: cover;
  width: 100%;
`;

export const Toro = styled.div`
  width: 200px;
  height: 230px;
  margin-left: 170px;
  margin-top: 70px;
  

  span {
    letter-spacing: 0.32px;
    font-size: ${props => (props.new ? 23 : 56)}px;
    font-size: ${props => (props.highlighted ? 32 : null)}px;
    font-family: 'FuturaPT Bold', sans-serif;
    text-transform: uppercase;
    margin-bottom: ${props => (props.highlighted ? 0 : -10)}px;
    margin-bottom: ${props => (props.new ? 0 : -10)}px;
    color: #fffaeb;
  }

  h1 {
    font-size: ${props => (props.highlighted ? 56 : 56)}px;
    line-height: ${props => (props.highlighted ? 3.2 : 3.2)}rem;
    font-family: 'FuturaPT Bold', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.58px;
    width: auto;
    color: #fffaeb;
  }
  
   h3 {
    font-size: ${props => (props.highlighted ? 80 : 56)}px;
    line-height: ${props => (props.highlighted ? 4 : 3.2)}rem;
    font-family: 'FuturaPT Bold', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.58px;
    width: auto;
    padding-bottom: ${props => (props.highlighted ? 0 : 120)}px;
  }

  h2 {
    font-size: 56px;
    line-height: 3.2rem;
    font-family: 'FuturaPT Bold', sans-serif;
    text-transform: uppercase;
    width: 300px;
    letter-spacing: 0.78px;
    color: ${Colors.primary};
  }
`;


export const New = styled.div`
  color: ${Colors.white};
  position: absolute;
  top: 30%;
  transform: translateY(-50%);
  width: 35%;
  display: flex;
  align-items: flex-start;

  div:first-child {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 250px;
    width: 100%;
    position: relative;
  }

  p { 
    font-size: 1.3rem;
    line-height: 25px;
    padding-left: 18px;
    margin-bottom: 50px;
    position: absolute;
    left: clamp(5rem, 5vw, 3rem);
    top: 25%;
    width: ${props => (props.highlighted ? 173 : 300)}px;
    height: 95px;
    font-family: ${props =>
    props.highlighted ? 'FuturaPT Bold' : 'FuturaPT Medium'};
    letter-spacing: 0.29px;
    color: #f6f6f1;
    opacity: 1;
  }
`;

export const Infos = styled.div`
  bottom: 122px;
  color: ${Colors.white};
  position: absolute;
  right: 200px;
  width: 280px;

  h1 {
    font-size: 34px;
    line-height: 36px;
    padding-bottom: 9px;
  }

  p {
    font-size: 14px;
    line-height: 18px;
    font-family: 'FuturaPT Light', sans-serif;
    opacity: 1;
  }
`;

export const Flag = styled.div`
  display: flex;
  justify-content: right;
  align-items: left;
  position: relative;
  bottom: -325px;
  left: clamp(-23rem,-35vw,-25rem);

  span:last-child {
    text-transform: uppercase;
    font-size: 20px;
    z-index: 10;
    position: relative;
    right: 25px;
    bottom: -30px;
    font-family: 'FuturaPT Bold', sans-serif;
  }
`;

export const FlagColors = styled.div`
    position: relative;
    left: 0%;
    height: 120px !important;
    margin-bottom: 0px;
  img {
    width: 80px;
    height: 74px;
  }
`;

export const HeroDescription = styled.p`
  font-size: 12px;
  left: -2% !important;
  top: 96% !important;
    color: #FFF !important;
    width: 226px !important;
`;

export const HeroConnect = styled.div`
    font-size: 12px;
    position: relative;
    left: 22% !important;
    top: -25% !important;
    color: #FFF !important;
    width: 226px !important;
`;

export const FlagGreen = styled.img`
    width: 140px;
`;
