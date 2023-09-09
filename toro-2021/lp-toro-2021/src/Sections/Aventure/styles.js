import styled from 'styled-components';
import { Carousel as CarouselContent } from 'react-responsive-carousel';
import { Colors } from '../../styles';

export const Carousel = styled(CarouselContent)`
  display: flex;
  width: 100%;
  justify-content: center;

  ul.control-dots {
    margin-left: auto;
  }

  .dot {
    background-color: #f5f5f5;
    opacity: 0.7 !important;
    box-shadow: none !important;
    width: 40px !important;
    border-radius: 0 !important;
    height: 4px !important;
  }
  .dot.selected {
    background-color: ${Colors.primary} !important;
  }

  .Box {
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: center;
    background-color: ${Colors.beige100};
    padding: 0 0 4rem 0;
    width: 100%;
  }

  .MainImageContainer {
    width: 100%;
    img {
      padding-right: 2em;
      border-radius: 8px;
      width: 616px;
      height: 390px;
      object-fit: cover;

      @media(max-width: 1280px) {
        width: 580px;
      }
    }
  }

  .Description {
    display: flex;
    flex-direction: column;

    span {
      color: ${Colors.white};
      font-family: 'FuturaPT Bold', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 25px;
      margin-right: auto;
    }

    h2 {
      font-size: 32px;
      line-height: 32px;
      font-family: 'FuturaPT Bold', sans-serif;
      text-align: left;
      color: ${Colors.primary};
      margin-bottom: 20px;
    }

    p {
      font-size: 1rem;
      font-family: 'FuturaPT Light', sans-serif;
      color: ${Colors.white};
      text-align: left;
      margin-bottom: 1rem;
    }
  }

  .nextSlide {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: auto;
    margin-left: 40%;
    text-align: left;
    h3 {
      font-family: 'FuturaPT Light', sans-serif;
      font-size: 16px;
      line-height: 16px;
      color: ${Colors.white};
    }

    span {
      font-family: 'FuturaPT Bold', sans-serif;
      font-size: 16px;
      line-height: 16px;
      color: ${Colors.white};
    }
  }
`;

export const Container = styled.div`
  background-color: ${Colors.blue};
  color: ${Colors.white};
  width: 100vw;
`;

export const ButtonAventure = styled.button`
  width: 180px;
  height: 40px;
  background-color: ${Colors.primary};
  border-radius: 4px;
  transition: 0.3s;

  a {
    color: ${Colors.white};
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 14px;
    text-align: center;

    &:hover {
      color: ${Colors.primary};
    }
  }

  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.primary};
  }
`;
