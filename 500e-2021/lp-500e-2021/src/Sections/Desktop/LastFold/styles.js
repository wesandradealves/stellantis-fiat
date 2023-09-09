import styled from 'styled-components';
import { Colors } from '../../../styles';
import { Carousel as CarouselContent } from 'react-responsive-carousel';

export const Carousel = styled(CarouselContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0px;
  width: 1020px;

  .dot {
    background-color: ${Colors.gray100} !important;
    box-shadow: none !important;
    opacity: 1 !important;
  }
  .dot.selected {
    background-color: ${Colors.blue100} !important;
  }

  .Box {
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: center;
    background-color: ${Colors.beige100};
    padding: 1rem 0 4rem 0;
  }

  .MainImageContainer {
    margin-top: 60px;
    img {
      width: 450px;
      height: 300px;
    }
  }

  .Description {
    margin-top: 60px;
    margin-left: -230px;
    display: flex;
    flex-direction: column;
    height: 80%;
    h1 {
      font-size: 21px;
      font-family: 'FuturaPT Bold', sans-serif;
      width: 250px;
      text-align: left;
      margin-bottom: 20px;
      color: ${Colors.black100};
    }
    p {
      font-size: 16px;
      font-family: 'FuturaPT Book', sans-serif;
      width: 300px;
      text-align: left;
    }
  }

  img.NextImageSlide {
    width: 450px;
    height: 300px;
    position: absolute;
    left: 940px;
    opacity: 0.6;
  }

  .nextSlide {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: auto;
    margin-left: 40%;
    margin-bottom: -15px;
    text-align: left;
    width: 155px;
    h3 {
      font-family: 'FuturaPT Bold', sans-serif;
      font-size: 16px;
      line-height: 16px;
      color: ${Colors.blue100};
    }

    span {
      font-family: 'FuturaPT Book', sans-serif;
      font-size: 16px;
      line-height: 16px;
      color: ${Colors.black100};
      width: 160px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.blue100};
  margin-top: 5px;
  width: 1020px;
`;
