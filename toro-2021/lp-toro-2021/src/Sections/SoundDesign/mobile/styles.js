import styled from 'styled-components';
import { Colors } from '../../../styles';
import { Carousel as CarouselContent } from 'react-responsive-carousel';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  margin-top: 5px;
`;

export const Carousel = styled(CarouselContent)`
  height: 100%;
  width: 100%;
  button {
    border: 1px solid ${Colors.primary};
    background-color: ${Colors.black + 24} !important;
  }
  button:hover {
    background-color: ${Colors.primary + 60} !important;
  }

  ul.control-dots {
    bottom: 5%;
    display: flex;
    justify-content: center;
  }

  .carousel-slider {
    height: 100%;
  }

  .slider-wrapper {
    height: 100%;
  }
  .slider-wrapper.axis-horizontal .slider {
    height: 100%;
  }
  .dot {
    box-shadow: none !important;
    opacity: 1 !important;
    position: relative;
  }

  .dot.selected,
  .dot:hover {
    background-color: ${Colors.primary} !important;
  }

  .Box {
    height: 100%;
    display: flex;
    background-color: ${Colors.black200};
    .imgBackGround {
      position: absolute;
      z-index: -1;
      height: 100%;
    }

    .lineWrap {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      justify-content: space-around;
    }
  }

  .MainImageContainer {
    margin-top: 20%;
    width: 80%;
  }

  .BoxDescription {
    margin-left: 90px;
    background-color: ${Colors.black200};
    width: 100%;

    p {
      font-size: 1.25rem;
      text-align: left;
      margin-top: 20%;
      width: 80%;
      line-height: 1.13rem;
      color: ${Colors.white};
      position: absolute;
    }
  }
`;

export const HeaderText = styled.h1`
  max-width: 319px;
  font-family: 'FuturaPT Bold', sans-serif;
  color: ${Colors.primary};
  font-size: 1.5rem;
  text-align: left;
`;

export const HeaderSubText = styled.h2`
  font-family: 'FuturaPT Bold',sans-serif;
  color: ${Colors.primary};
  font-size: 2.25rem;
  line-height: 1;
  text-align:left;

  span{
    color:${Colors.white};
    font-family: 'FuturaPT Bold',sans-serif;
  }
}
`;
